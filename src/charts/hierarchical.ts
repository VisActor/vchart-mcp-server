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
  XFieldSchema,
  YFieldSchema,
} from "./common";

const schema = z.object({
  output: ChartOutputSchema,
  chartType: z
    .enum(["sunburst", "treemap", "circle_packing"])
    .describe("Chart type"),

  width: WidthSchema,
  height: HeightSchema,
  dataTable: z
    .array(z.any())
    .describe(
      "Hierarchical data for the chart, e.g., [{ category: 'Category 0', subCategory: 'Category 01', value: 10}]."
    )
    .nonempty({ message: "Data cannot be empty." }),

  colorField: z.array(XFieldSchema).nonempty(),
  valueField: YFieldSchema,

  chartTheme: ThemeSchema,
  title: TitleTextSchema,
  subTitle: TitleSubTextSchema,
  titleOrient: TitleOrientSchema,

  background: BackgroundSchema,
  colors: ColorsSchema,
});

const tool = {
  name: "generate_hierarchical_chart",
  description:
    "Generate a chart for hierarchical visualization of multi-level categorical data proportions, include sunburst, treemap, circle_packing.",
  inputSchema: convertZodToJsonSchema(schema),
};

export const sunburst = {
  schema,
  tool,
};
