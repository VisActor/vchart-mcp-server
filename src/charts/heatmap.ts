import { z } from "zod";
import { convertZodToJsonSchema } from "../utils/schema";
import {
  BackgroundSchema,
  ChartOutputSchema,
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
      "Heatmap data array, e.g., [{ gender: 'male', age: '20-30', size: 30 }]."
    )
    .nonempty({ message: "Heatmap data cannot be empty." }),
  transpose: z.boolean().optional(),

  xField: XFieldSchema,
  yField: XFieldSchema,
  sizeField: YFieldSchema,

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
  name: "generate_heatmap_chart",
  description:
    "Generates a heatmap chart based on a Cartesian coordinate system. It is used to visualize the intensity or density of values at the intersection of two discrete variables, suitable for revealing association patterns and distribution characteristics between variables.",
  inputSchema: convertZodToJsonSchema(schema),
};

export const heatmap = {
  schema,
  tool,
};
