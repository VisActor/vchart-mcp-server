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
  width: WidthSchema,
  height: HeightSchema,
  dataTable: z
    .array(z.any())
    .describe("Pie chart data, e.g., [{ category: 'Category 01', value: 10 }].")
    .nonempty({ message: "Pie chart data must not be empty." }),

  categoryField: XFieldSchema,
  valueField: YFieldSchema,
  chartTheme: ThemeSchema,
  title: TitleTextSchema,
  subTitle: TitleSubTextSchema,
  titleOrient: TitleOrientSchema,

  background: BackgroundSchema,
  colors: ColorsSchema,
});

const tool = {
  name: "generate_pie_chart",
  description:
    "Generate a pie chart to visually represent the proportional distribution of categories within a dataset. Ideal for illustrating the relative contribution of each category to the whole.",
  inputSchema: convertZodToJsonSchema(schema),
};

export const pie = {
  schema,
  tool,
};
