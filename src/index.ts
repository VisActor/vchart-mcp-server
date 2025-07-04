#!/usr/bin/env node

/**
 * This is a template MCP server that implements a simple notes system.
 * It demonstrates core MCP concepts like resources and tools by allowing:
 * - Listing notes as resources
 * - Reading individual notes
 * - Creating new notes via a tool
 * - Summarizing all notes via a prompt
 */

import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
  McpError,
  ErrorCode,
} from "@modelcontextprotocol/sdk/types.js";

import * as Charts from "./charts/index";
import { generateChartByType } from "./utils/generateChart";

/**
 * Create an MCP server with capabilities for resources (to list/read notes),
 * tools (to create new notes), and prompts (to summarize notes).
 */
const server = new Server(
  {
    name: "vchart-mcp-server",
    version: "0.1.0",
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
 * Handler that lists available tools.
 * Exposes a single "create_note" tool that lets clients create new notes.
 */
server.setRequestHandler(ListToolsRequestSchema, async () => {
  return {
    tools: Object.values(Charts).map((chart) => (chart as any).tool),
  };
});

/**
 * Handler for the create_note tool.
 * Creates a new note with the provided title and content, and returns success message.
 */
server.setRequestHandler(CallToolRequestSchema, async (request) => {
  const toolName = request.params.name;
  const chartType = Object.keys(Charts).find(
    (key) => (Charts as any)[key].tool.name === toolName
  );

  if (!chartType) {
    throw new McpError(
      ErrorCode.MethodNotFound,
      `Unknown tool: ${request.params.name}.`
    );
  }

  try {
    // Validate input using Zod before sending to API.
    const args = request.params.arguments || {};

    // Select the appropriate schema based on the chart type.
    const schema = Charts[chartType as keyof typeof Charts].schema;

    if (schema) {
      // Use safeParse instead of parse and try-catch.
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
            type: "text",
            text: JSON.stringify((res as any).spec, null, 2),
          },
        ],
      };
    }

    if (res && (res as any).image) {
      return {
        content: [
          {
            type: "text",
            text: (res as any).image,
          },
        ],
      };
    }

    if (res && (res as any).html) {
      return {
        content: [
          {
            type: "text",
            text: (res as any).html,
          },
        ],
      };
    }

    return {
      content: [
        {
          type: "text",
          text: "Failed to generate chart",
        },
      ],
    };
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  } catch (error: any) {
    if (error instanceof McpError) throw error;
    throw new McpError(
      ErrorCode.InternalError,
      `Failed to generate chart: ${error?.message || "Unknown error."}`
    );
  }
});

/**
 * Start the server using stdio transport.
 * This allows the server to communicate via standard input/output streams.
 */
async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
}

main().catch((error) => {
  console.error("Server error:", error);
  process.exit(1);
});
