import { z } from "zod";
import { convertZodToJsonSchema } from "../utils/schema";
import {
  BackgroundSchema,
  ChartOutputSchema,
  ColorFieldSchema,
  ColorsSchema,
  HeightSchema,
  StackSchema,
  ThemeSchema,
  TitleOrientSchema,
  TitleSubTextSchema,
  TitleTextSchema,
  WidthSchema,
  XAxisHasGridSchema,
  XAxisHasLabelSchema,
  XAxisHasTickSchema,
  XAxisOrientSchema,
  XAxisTitleSchema,
  XAxisTypeSchema,
  XFieldSchema,
  YAxisHasGridSchema,
  YAxisHasLabelSchema,
  YAxisHasTickSchema,
  YAxisOrientSchema,
  YAxisTitleSchema,
  YAxisTypeSchema,
  YFieldSchema,
} from "./common";

const schema = z.object({
  output: ChartOutputSchema,
  chartType: z.enum(["area", "line", "bar", "waterfall"]),
  width: WidthSchema,
  height: HeightSchema,
  dataTable: z
    .array(z.record(z.string(), z.any()))
    .min(1, { message: "Data is required." })
    .describe("Data array, e.g., [{ x: '2018', y: 99.9 }]. Cannot be empty."),
  transpose: z
    .boolean()
    .optional()
    .describe("Set to true only when displaying a horizontal bar chart."),
  xField: XFieldSchema,
  yField: YFieldSchema,
  colorField: ColorFieldSchema.optional(),
  chartTheme: ThemeSchema.optional(),
  title: TitleTextSchema.optional(),
  subTitle: TitleSubTextSchema.optional(),
  titleOrient: TitleOrientSchema.optional(),
  xAxisType: XAxisTypeSchema.optional(),
  xAxisOrient: XAxisOrientSchema.optional(),
  xAxisTitle: XAxisTitleSchema.optional(),
  xAxisHasGrid: XAxisHasGridSchema.optional(),
  xAxisHasLabel: XAxisHasLabelSchema.optional(),
  xAxisHasTick: XAxisHasTickSchema.optional(),
  yAxisType: YAxisTypeSchema.optional(),
  yAxisOrient: YAxisOrientSchema.optional(),
  yAxisTitle: YAxisTitleSchema.optional(),
  yAxisHasGrid: YAxisHasGridSchema.optional(),
  yAxisHasLabel: YAxisHasLabelSchema.optional(),
  yAxisHasTick: YAxisHasTickSchema.optional(),
  background: BackgroundSchema.optional(),
  colors: ColorsSchema.optional(),
  stackOrPercent: StackSchema.optional(),
});

const tool = {
  name: "generate_cartesian_chart",
  description:
    "Generates Cartesian coordinate system charts (line, area, bar, waterfall). Area charts are suitable for showing cumulative trends of data over time or categories, while bar charts are ideal for comparing value distributions across different categories.",
  inputSchema: convertZodToJsonSchema(schema),
};

export const cartesian = {
  schema,
  tool,
};
