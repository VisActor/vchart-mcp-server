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
  YAxisTitleSchema,
  YFieldSchema,
} from "./common";

const schema = z.object({
  output: ChartOutputSchema,
  width: WidthSchema,
  height: HeightSchema,
  dataTable: z
    .array(z.any())
    .describe(
      "Input data for the dual axis chart, e.g., [{ x: '2018', gmv: 99.9, user: 1200 }]."
    )
    .nonempty({ message: "Data for the dual axis chart must not be empty." }),
  xField: XFieldSchema,
  yField: z.array(YFieldSchema).length(2),
  colorField: ColorFieldSchema,
  chartTheme: ThemeSchema,
  title: TitleTextSchema,
  subTitle: TitleSubTextSchema,
  titleOrient: TitleOrientSchema,

  xAxisOrient: XAxisOrientSchema,
  xAxisTitle: XAxisTitleSchema,
  xAxisHasGrid: XAxisHasGridSchema,
  xAxisHasLabel: XAxisHasLabelSchema,
  xAxisHasTick: XAxisHasTickSchema,

  leftYAxisTitle: YAxisTitleSchema,
  leftYAxisHasGrid: YAxisHasGridSchema,
  leftYAxisHasLabel: YAxisHasLabelSchema,
  leftYAxisHasTick: YAxisHasTickSchema,

  rightYAxisTitle: YAxisTitleSchema,
  rightYAxisHasGrid: YAxisHasGridSchema,
  rightYAxisHasLabel: YAxisHasLabelSchema,
  rightYAxisHasTick: YAxisHasTickSchema,

  background: BackgroundSchema,
  colors: ColorsSchema,
  stackOrPercent: StackSchema,
});

const tool = {
  name: "generate_dual_axis_chart",
  description:
    "Generate a dual-axis chart for visualizing two quantitative variables using a combination of bar and line series. Ideal for comparing trends and magnitudes across two metrics with distinct y-axes.",
  inputSchema: convertZodToJsonSchema(schema),
};

export const dual_axis = {
  schema,
  tool,
};
