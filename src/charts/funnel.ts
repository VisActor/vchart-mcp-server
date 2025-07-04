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
    .describe(
      "Funnel chart data, e.g., [{ category: 'Category 01', value: 10 }]."
    )
    .nonempty({ message: "Funnel chart data must not be empty." }),

  xField: XFieldSchema,
  yField: YFieldSchema,
  chartTheme: ThemeSchema,
  title: TitleTextSchema,
  subTitle: TitleSubTextSchema,
  titleOrient: TitleOrientSchema,

  background: BackgroundSchema,
  colors: ColorsSchema,
});

const tool = {
  name: "generate_funnel_chart",
  description:
    "Generate a funnel chart to visually represent the sequential reduction or transformation of values across categorical stages. This visualization is ideal for illustrating processes such as sales pipelines, conversion rates, or any workflow where data diminishes through progressive phases.",
  inputSchema: convertZodToJsonSchema(schema),
};

export const funnel = {
  schema,
  tool,
};
