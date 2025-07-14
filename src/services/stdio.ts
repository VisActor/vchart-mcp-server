import type { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';

/**
 * Start server with stdio transport
 */
export async function startStdioServer(mcpServer: Server) {
  const transport = new StdioServerTransport();
  await mcpServer.connect(transport);
}
