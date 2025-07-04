import { z } from "zod";
import { convertZodToJsonSchema } from "../utils/schema";
import {
  BackgroundSchema,
  ChartOutputSchema,
  ColorFieldSchema,
  ColorsSchema,
  HeightSchema,
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
      "Data for the range column chart, e.g., [{ category: 'Category 01', min: 10, max: 50 }]."
    )
    .nonempty({ message: "Range column chart data must not be empty." }),

  xField: XFieldSchema,
  yField: z.array(YFieldSchema).length(2),
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
});

const tool = {
  name: "generate_range_column_chart",
  description:
    "Generate a range column chart to display the value range (such as minimum and maximum) for each category, suitable for comparing the range distribution across different categories.",
  inputSchema: convertZodToJsonSchema(schema),
};

export const range_column = {
  schema,
  tool,
};
