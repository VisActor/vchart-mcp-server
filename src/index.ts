#!/usr/bin/env node

import { createMCPServer } from './server';
import { startSSEServer } from './services/sse';
import { startStdioServer } from './services/stdio';
import { startStreamableServer } from './services/streamable';
import { VERSION } from './utils/version';

type TransportType = 'stdio' | 'sse' | 'streamable';

/**
 * Simple CLI argument parser (no external dependencies)
 */
function parseArgs() {
  const args = process.argv.slice(2);
  const options: {
    transport?: TransportType;
    help?: boolean;
    port?: number;
    endpoint?: string;
  } = {
    transport: 'stdio' as TransportType,
    help: false,
  };

  for (let i = 0; i < args.length; i++) {
    const arg = args[i];

    if (arg === '--help' || arg === '-h') {
      options.help = true;
    } else if (arg === '--transport' || arg === '-t') {
      const nextArg = args[i + 1];
      if (nextArg && ['stdio', 'sse', 'streamable'].includes(nextArg)) {
        options.transport = nextArg as TransportType;
        i++; // skip next argument
      }
    } else if (arg === '--port' || arg === '-p') {
      const nextArg = args[i + 1];
      if (nextArg && !isNaN(parseInt(nextArg))) {
        options.port = parseInt(nextArg);
        i++; // skip next argument
      }
    } else if (arg === '--endpoint' || arg === '-e') {
      const nextArg = args[i + 1];
      if (nextArg) {
        // 确保 endpoint 以 '/' 开头
        options.endpoint = nextArg.startsWith('/') ? nextArg : `/${nextArg}`;
        i++; // skip next argument
      }
    }
  }

  return options;
}

/**
 * Show help information
 */
function showHelp() {
  console.log(`
VChart MCP Server v${VERSION}
Chart generation server with multiple transport modes

Usage: node index.js [options]

Options:
  -t, --transport <type>   Transport type (stdio, sse, streamable) [default: stdio]
  -p, --port <port>        Port number for HTTP-based transports [default: 3000]
  -e, --endpoint <path>    Endpoint path for HTTP-based transports [default: /message]
  -h, --help              Show this help message

Examples:
  node index.js                                    # Start with stdio transport
  node index.js -t sse -p 3000                    # Start with SSE transport on port 3000
  node index.js -t sse -p 3000 -e /api/sse       # Start with SSE transport on custom endpoint
  node index.js -t streamable -p 3001 -e /stream  # Start with streamable transport on custom endpoint
`);
}

/**
 * Main CLI application
 */
async function main() {
  const options = parseArgs();

  if (options.help) {
    showHelp();
    return;
  }

  try {
    switch (options.transport) {
      case 'stdio':
        await startStdioServer(createMCPServer());
        break;
      case 'sse':
        await startSSEServer(createMCPServer(), options.endpoint, options.port);
        break;
      case 'streamable':
        await startStreamableServer(
          createMCPServer,
          options.endpoint,
          options.port
        );
        break;
      default:
        console.error(`Unknown transport type: ${options.transport}`);
        process.exit(1);
    }
  } catch (error) {
    console.error('Server error:', error);
    process.exit(1);
  }
}

main().catch(error => {
  console.error('Failed to start server:', error);
  process.exit(1);
});

export {
  createMCPServer,
  startStdioServer,
  startSSEServer,
  startStreamableServer,
};
