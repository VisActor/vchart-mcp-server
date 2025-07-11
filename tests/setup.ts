import { jest } from "@jest/globals";

// 设置全局超时时间
jest.setTimeout(300000);

// Mock console 输出（可选）
global.console = {
  ...console,
  log: jest.fn(),
  error: jest.fn(),
  warn: jest.fn(),
};
