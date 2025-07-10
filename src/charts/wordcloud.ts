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
} from "./common";

// Define the schema for the word cloud chart configuration using Zod
const schema = z.object({
  output: ChartOutputSchema, // Output format/schema for the chart
  width: WidthSchema, // Chart width
  height: HeightSchema, // Chart height
  chartType: z.enum(["wordcloud", "venn"]),

  dataTable: z
    .array(z.any())
    .describe("Data for the chart, e.g., [{ word: 'TEST', value: 10 }].")
    .nonempty({ message: "data cannot be empty." }), // Data array must not be empty

  colorField: z
    .string()
    .nonempty({ message: "The field for words or sets cannot be empty." })
    .describe(
      "Specifies the field in the dataset that represents each word (for word clouds) or the set (for Venn diagrams). For Venn diagrams, use a comma-separated string to describe the set. This field must exist in the dataset."
    ),

  valueField: z
    .string()
    .describe(
      "Specifies the field representing the metric value. Required for Venn diagrams."
    ),

  chartTheme: ThemeSchema, // Chart theme
  title: TitleTextSchema, // Chart title
  subTitle: TitleSubTextSchema, // Chart subtitle
  titleOrient: TitleOrientSchema, // Title orientation

  background: BackgroundSchema, // Chart background
  colors: ColorsSchema, // Chart colors
});

const tool = {
  name: "generate_wordcloud_venn",
  description:
    "Generate a word cloud to visualize word frequency or importance, or a Venn diagram to show relationships such as intersections and unions between sets.",
  inputSchema: convertZodToJsonSchema(schema),
};

export const wordcloud_venn = {
  schema,
  tool,
};
