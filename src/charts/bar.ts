import { z } from "zod";
import { convertZodToJsonSchema } from "../utils/schema";
import {
  BackgroundSchema,
  ChartOutputSchema,
  ColorsSchema,
  HeightSchema,
  StackSchema,
  ThemeSchema,
  TitleSchema,
  WidthSchema,
  XAxisSchema,
  YAxisSchema,
} from "./common";

// Area chart input schema
const schema = z.object({
  chartOutput: ChartOutputSchema,
  width: WidthSchema,
  height: HeightSchema,
  dataTable: z
    .array(z.any())
    .describe(
      "Data for bar chart, such as, [{ category: 'category 01', value: 10 }]."
    )
    .nonempty({ message: "Bar chart data cannot be empty." }),
  cell: z
    .object({
      x: z
        .string()
        .nonempty({ message: "柱图维度字段不能为空" })
        .describe("柱图维度字段，必须是数据中包含的字段"),
      y: z
        .string()
        .nonempty({ message: "柱图度量字段不能为空" })
        .describe("柱图度量字段，需要是数值类型的字段，必须是数据中包含的字段"),
      color: z
        .string()
        .optional()
        .describe("颜色分组对应的字段，注意不能和x字段重复"),
    })
    .describe("设置图表的视觉通道映射"),
  transpose: z.boolean().optional(),
  chartTheme: ThemeSchema,
  title: TitleSchema,
  xAxis: XAxisSchema,
  yAxis: YAxisSchema,
  background: BackgroundSchema,
  colors: ColorsSchema,
  stackOrPercent: StackSchema,
});

// Area chart tool descriptor
const tool = {
  name: "generate_area_chart",
  description:
    "Generate a area chart to show data trends under continuous independent variables and observe the overall data trend, such as, displacement = velocity (average or instantaneous) × time: s = v × t. If the x-axis is time (t) and the y-axis is velocity (v) at each moment, an area chart allows you to observe the trend of velocity over time and infer the distance traveled by the area's size.",
  inputSchema: convertZodToJsonSchema(schema),
};

export const area = {
  schema,
  tool,
};
