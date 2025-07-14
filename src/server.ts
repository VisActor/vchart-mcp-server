import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
  McpError,
  ErrorCode,
} from '@modelcontextprotocol/sdk/types.js';

import * as Charts from './charts/index';
import { generateChartByType } from './utils/generateChart';
import { VERSION } from './utils/version';

/**
 * Create an MCP server with chart generation capabilities
 */
export function createMCPServer() {
  const server = new Server(
    {
      name: 'vchart-mcp-server',
      version: VERSION,
    },
    {
      capabilities: {
        resources: {},
        tools: {},
        prompts: {},
      },
    }
  );

  /**
   * Handler that lists available chart generation tools
   */
  server.setRequestHandler(ListToolsRequestSchema, async () => {
    return {
      tools: Object.values(Charts).map(chart => (chart as any).tool),
    };
  });

  /**
   * Handler for chart generation tools
   */
  server.setRequestHandler(CallToolRequestSchema, async request => {
    const toolName = request.params.name;
    const chartType = Object.keys(Charts).find(
      key => (Charts as any)[key].tool.name === toolName
    );

    if (!chartType) {
      throw new McpError(
        ErrorCode.MethodNotFound,
        `Unknown tool: ${request.params.name}.`
      );
    }

    try {
      // Validate input using Zod before generating chart
      const args = request.params.arguments || {};

      // Select the appropriate schema based on the chart type
      const schema = Charts[chartType as keyof typeof Charts].schema;

      if (schema) {
        const result = schema.safeParse(args);
        if (!result.success) {
          throw new McpError(
            ErrorCode.InvalidParams,
            `Invalid parameters: ${result.error.message}`
          );
        }
      }

      const res = await generateChartByType(chartType, args);

      if (res && (res as any).spec) {
        return {
          content: [
            {
              type: 'text',
              text: JSON.stringify((res as any).spec, null, 2),
            },
          ],
        };
      }

      if (res && (res as any).image) {
        return {
          content: [
            {
              type: 'text',
              text: (res as any).image,
            },
          ],
        };
      }

      if (res && (res as any).html) {
        return {
          content: [
            {
              type: 'text',
              text: (res as any).html,
            },
          ],
        };
      }

      return {
        content: [
          {
            type: 'text',
            text: 'Failed to generate chart',
          },
        ],
      };
    } catch (error: any) {
      if (error instanceof McpError) {
        throw error;
      }
      throw new McpError(
        ErrorCode.InternalError,
        `Failed to generate chart: ${error?.message || 'Unknown error.'}`
      );
    }
  });

  return server;
}
