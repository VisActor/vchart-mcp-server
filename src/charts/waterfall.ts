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
  width: WidthSchema,
  height: HeightSchema,
  dataTable: z
    .array(z.any())
    .describe(
      "Data for the waterfall chart, e.g., [{ category: 'category 01', value: 10 }]."
    )
    .nonempty({ message: "Waterfall chart data must not be empty." }),

  xField: XFieldSchema,
  yField: YFieldSchema,
  colorField: ColorFieldSchema,

  chartTheme: ThemeSchema,
  title: TitleTextSchema,
  subTitle: TitleSubTextSchema,
  titleOrient: TitleOrientSchema,
  xAxisType: XAxisTypeSchema,
  xAxisOrient: XAxisOrientSchema,
  xAxisTitle: XAxisTitleSchema,
  xAxisHasGrid: XAxisHasGridSchema,
  xAxisHasLabel: XAxisHasLabelSchema,
  xAxisHasTick: XAxisHasTickSchema,

  yAxisType: YAxisTypeSchema,
  yAxisOrient: YAxisOrientSchema,
  yAxisTitle: YAxisTitleSchema,
  yAxisHasGrid: YAxisHasGridSchema,
  yAxisHasLabel: YAxisHasLabelSchema,
  yAxisHasTick: YAxisHasTickSchema,

  background: BackgroundSchema,
  colors: ColorsSchema,
  stackOrPercent: StackSchema,
});

const tool = {
  name: "generate_waterfall_chart",
  description:
    "Generates a waterfall chart to visualize increases and decreases across stages, clearly reflecting the composition and changes of cumulative values. Suitable for scenarios such as financial analysis and process breakdown.",
  inputSchema: convertZodToJsonSchema(schema),
};

export const waterfall = {
  schema,
  tool,
};
