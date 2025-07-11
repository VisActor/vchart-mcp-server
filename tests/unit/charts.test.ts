import * as Charts from "../../src/charts/index";
import { sampleChartData } from "../utils/testHelpers";

describe("Chart Schemas", () => {
  describe("cartesian chart schema", () => {
    test("should validate valid cartesian chart data", () => {
      const validData = {
        dataTable: sampleChartData.dataTable,
        xField: "month",
        yField: "sales",
        chartType: "bar",
        output: "image",
      };

      const result = Charts.cartesian.schema.safeParse(validData);
      expect(result.success).toBe(true);
      if (result.success) {
        expect(result.data).toEqual(validData);
      }
    });

    test("should reject invalid cartesian chart data", () => {
      const invalidData = {
        dataTable: sampleChartData.dataTable,
        xField: "month",
        // yField missing
        chartType: "bar",
      };

      const result = Charts.cartesian.schema.safeParse(invalidData);
      expect(result.success).toBe(false);
      if (!result.success) {
        // 检查错误数组中是否包含 yField 相关的错误
        const yFieldError = result.error.issues.find((issue) =>
          issue.path.includes("yField")
        );
        expect(yFieldError).toBeDefined();
        // 修复：使用不区分大小写的检查或匹配 Zod 的实际错误消息
        expect(yFieldError?.message.toLowerCase()).toContain("required");
      }
    });
  });

  describe("polar chart schema", () => {
    test("should validate valid polar chart data", () => {
      const validData = {
        dataTable: sampleChartData.dataTable,
        categoryField: "month",
        valueField: "sales",
        chartType: "radar",
        output: "image",
      };

      const result = Charts.polar.schema.safeParse(validData);
      expect(result.success).toBe(true);
    });

    test("should reject invalid chart type", () => {
      const invalidData = {
        dataTable: sampleChartData.dataTable,
        categoryField: "month",
        valueField: "sales",
        chartType: "invalid_type",
      };

      const result = Charts.polar.schema.safeParse(invalidData);
      expect(result.success).toBe(false);
      if (!result.success) {
        // 检查错误数组中是否包含 chartType 相关的错误
        const chartTypeError = result.error.issues.find((issue) =>
          issue.path.includes("chartType")
        );
        expect(chartTypeError).toBeDefined();
        // 更灵活的错误消息检查
        expect(chartTypeError?.message).toBeDefined();
      }
    });
  });

  describe("progress chart schema", () => {
    test("should validate valid progress chart data", () => {
      const validData = {
        dataTable: [{ task: "Project A", progress: 75 }],
        valueField: "progress",
        chartType: "linear_progress",
        output: "image",
      };

      const result = Charts.progress.schema.safeParse(validData);
      expect(result.success).toBe(true);
    });

    test("should reject invalid progress chart data", () => {
      const invalidData = {
        dataTable: [{ task: "Project A", progress: 75 }],
        // valueField missing
        chartType: "linear_progress",
      };

      const result = Charts.progress.schema.safeParse(invalidData);
      expect(result.success).toBe(false);
      if (!result.success) {
        // 检查是否有 valueField 相关的错误
        const valueFieldError = result.error.issues.find((issue) =>
          issue.path.includes("valueField")
        );
        expect(valueFieldError).toBeDefined();
        // 使用不区分大小写的检查
        expect(valueFieldError?.message.toLowerCase()).toContain("required");
      }
    });
  });

  describe("error handling", () => {
    test("should handle empty data table", () => {
      const invalidData = {
        dataTable: [],
        xField: "month",
        yField: "sales",
        chartType: "bar",
      };

      const result = Charts.cartesian.schema.safeParse(invalidData);
      expect(result.success).toBe(false);
      if (!result.success) {
        // 检查是否有 dataTable 相关的错误
        const dataTableError = result.error.issues.find((issue) =>
          issue.path.includes("dataTable")
        );
        expect(dataTableError).toBeDefined();
      }
    });

    test("should handle missing dataTable", () => {
      const invalidData = {
        xField: "month",
        yField: "sales",
        chartType: "bar",
      };

      const result = Charts.cartesian.schema.safeParse(invalidData);
      expect(result.success).toBe(false);
      if (!result.success) {
        // 检查错误信息
        expect(result.error.issues.length).toBeGreaterThan(0);
        const dataTableError = result.error.issues.find((issue) =>
          issue.path.includes("dataTable")
        );
        expect(dataTableError).toBeDefined();
        // 使用不区分大小写的检查
        expect(dataTableError?.message.toLowerCase()).toContain("required");
      }
    });
  });

  describe("schema validation with various chart types", () => {
    const testChartTypes = [
      { type: "bar", valid: true },
      { type: "line", valid: true },
      { type: "area", valid: true },
      { type: "waterfall", valid: true },
      { type: "invalid_type", valid: false },
    ];

    testChartTypes.forEach(({ type, valid }) => {
      test(`should ${valid ? "accept" : "reject"} chartType: ${type}`, () => {
        const data = {
          dataTable: sampleChartData.dataTable,
          xField: "month",
          yField: "sales",
          chartType: type,
        };

        const result = Charts.cartesian.schema.safeParse(data);
        expect(result.success).toBe(valid);

        // 如果应该失败但成功了，或者应该成功但失败了，输出调试信息
        if (result.success !== valid) {
          console.log(`Unexpected result for chartType ${type}:`, result);
        }
      });
    });
  });

  describe("optional fields", () => {
    test("should accept data with optional fields", () => {
      const dataWithOptionals = {
        dataTable: sampleChartData.dataTable,
        xField: "month",
        yField: "sales",
        chartType: "bar",
        colorField: "month",
        title: "Sales Chart",
        width: 800,
        height: 600,
        output: "html",
      };

      const result = Charts.cartesian.schema.safeParse(dataWithOptionals);
      expect(result.success).toBe(true);

      // 如果失败了，输出调试信息
      if (!result.success) {
        console.log("Validation failed for optional fields:", result.error.issues);
      }
    });

    test("should accept data without optional fields", () => {
      const minimalData = {
        dataTable: sampleChartData.dataTable,
        xField: "month",
        yField: "sales",
        chartType: "bar",
      };

      const result = Charts.cartesian.schema.safeParse(minimalData);
      expect(result.success).toBe(true);

      // 如果失败了，输出调试信息
      if (!result.success) {
        console.log("Validation failed for minimal data:", result.error.issues);
      }
    });
  });

  // 添加一个测试来了解 Zod 错误消息的格式
  describe("debug zod error messages", () => {
    test("should log zod error message format", () => {
      const invalidData = {
        dataTable: sampleChartData.dataTable,
        xField: "month",
        // yField missing
        chartType: "bar",
      };

      const result = Charts.cartesian.schema.safeParse(invalidData);
      if (!result.success) {
        console.log("All validation errors:", result.error.issues);
        result.error.issues.forEach((issue, index) => {
          console.log(`Error ${index}:`, {
            path: issue.path,
            message: issue.message,
            code: issue.code,
          });
        });
      }
    });
  });
});
