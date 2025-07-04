import { z } from "zod";

export const ThemeSchema = z
  .enum(["light", "dark"])
  .optional()
  .describe("Set the theme for the chart, optional, default is 'light'.");

export const WidthSchema = z
  .number()
  .optional()
  .describe("Set the width of chart, default is 600.");

export const HeightSchema = z
  .number()
  .optional()
  .describe("Set the height of chart, default is 400.");

export const TitleSchema = z
  .object({
    text: z.string().describe("set the title text of chart"),
    subText: z.string().optional().describe("设置图表的副标题"),
    orient: z
      .enum(["top", "left", "right", "bottom"])
      .optional()
      .describe("设置标题的图表中的方位"),
  })
  .optional()
  .describe("设置图表的标题相关");

export const XAxisSchema = z.object({
  type: z
    .enum(["band", "linear"])
    .optional()
    .default("band")
    .describe("轴的类型为离散轴还是连续轴"),
  title: z
    .string()
    .optional()
    .default("")
    .describe("Set the x-axis title of chart."),
  orient: z.enum(["bottom", "top"]).optional().describe("轴在图表中的方位"),
  hasGrid: z.boolean().optional().describe("是否显示垂直于x轴的网格线"),
  hasLabel: z.boolean().optional().describe("是否显示轴标签"),
  hasTick: z.boolean().optional().describe("是否显示轴刻度"),
});

export const YAxisSchema = z.object({
  type: z
    .enum(["band", "linear"])
    .optional()
    .default("linear")
    .describe("轴的类型为离散轴还是连续轴"),
  title: z
    .string()
    .optional()
    .default("")
    .describe("Set the y-axis title of chart."),
  orient: z.enum(["left", "right"]).optional().describe("轴在图表中的方位"),
  hasGrid: z.boolean().optional().describe("是否显示垂直于y轴的网格线"),
  hasLabel: z.boolean().optional().describe("是否显示轴标签"),
  hasTick: z.boolean().optional().describe("是否显示轴刻度"),
});

export const BackgroundSchema = z
  .string()
  .optional()
  .describe(
    "Set the color of chart background, default is white. this is a hex color."
  );

export const ColorsSchema = z
  .array(z.string().describe("具体的颜色值"))
  .optional()
  .describe("设置图表的色版，用于给元素配色");

export const StackSchema = z
  .enum(["stack", "percent"])
  .optional()
  .describe(
    "Chart stacking property. 'stack' indicates displaying stacked data, 'percent' indicates displaying percentage - stacked data. This is an optional value. When stacking is configured, the 'group' field cannot be empty."
  );

export const ChartOutputSchema = z
  .enum(["spec", "image", "html"])
  .optional()
  .default("image")
  .describe("图表产物的类型");
