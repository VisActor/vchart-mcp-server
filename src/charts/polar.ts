import { z } from "zod";
import { convertZodToJsonSchema } from "../utils/schema";
import {
  AngleAxisHasGridSchema,
  AngleAxisHasLabelSchema,
  AngleAxisHasTickSchema,
  AngleAxisTitleSchema,
  AngleAxisTypeSchema,
  BackgroundSchema,
  ChartOutputSchema,
  ColorFieldSchema,
  ColorsSchema,
  HeightSchema,
  RadiusAxisHasGridSchema,
  RadiusAxisHasLabelSchema,
  RadiusAxisHasTickSchema,
  RadiusAxisTitleSchema,
  RadiusAxisTypeSchema,
  StackSchema,
  ThemeSchema,
  TitleOrientSchema,
  TitleSubTextSchema,
  TitleTextSchema,
  WidthSchema,
  XFieldSchema,
  YFieldSchema,
} from "./common";

const schema = z.object({
  output: ChartOutputSchema,
  width: WidthSchema,
  height: HeightSchema,
  dataTable: z
    .array(z.any())
    .describe(
      "Data for the chart, e.g., [{ category: 'Category 01', value: 10 }]."
    )
    .nonempty({ message: "Data must not be empty." }),

  chartType: z.enum(["rose", "radar", "pie"]),
  transpose: z.boolean().optional(),

  categoryField: XFieldSchema,
  valueField: YFieldSchema,
  colorField: ColorFieldSchema,

  chartTheme: ThemeSchema,
  title: TitleTextSchema,
  subTitle: TitleSubTextSchema,
  titleOrient: TitleOrientSchema,

  angleAxisTitle: AngleAxisTitleSchema,
  angleAxisHasGrid: AngleAxisHasGridSchema,
  angleAxisHasLabel: AngleAxisHasLabelSchema,
  angleAxisHasTick: AngleAxisHasTickSchema,
  angleAxisType: AngleAxisTypeSchema,

  radiusAxisHasGrid: RadiusAxisHasGridSchema,
  radiusAxisHasLabel: RadiusAxisHasLabelSchema,
  radiusAxisHasTick: RadiusAxisHasTickSchema,
  radiusAxisType: RadiusAxisTypeSchema,
  radiusAxisTitle: RadiusAxisTitleSchema,

  background: BackgroundSchema,
  colors: ColorsSchema,
  stackOrPercent: StackSchema,
});

const tool = {
  name: "generate_polar_chart",
  description:
    "Generate a polar chart (rose, radar, pie) to display numerical differences among different categories using radius and angle in polar coordinates.",
  inputSchema: convertZodToJsonSchema(schema),
};

export const polar = {
  schema,
  tool,
};
