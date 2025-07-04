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
    .describe("Bar chart data, e.g., [{ category: 'category 01', value: 10 }].")
    .nonempty({ message: "Bar chart data must not be empty." }),

  xField: XFieldSchema,
  yField: YFieldSchema,
  colorField: ColorFieldSchema,
  timeField: z
    .string()
    .nonempty()
    .describe(
      "Time field, such as year or month. The x field and time field must be different."
    ),

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
  name: "generate_dynamic_bar_chart",
  description:
    "Generates a dynamic bar chart  which is suitable for displaying changing data and can be used to show ranking, comparisons or data changes over time. The x field and the time field MUST be different. It updates the data dynamically according to the time field.",
  inputSchema: convertZodToJsonSchema(schema),
};

export const ranking_bar = {
  schema,
  tool,
};
