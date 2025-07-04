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

const schema = z.object({
  output: ChartOutputSchema,
  width: WidthSchema,
  height: HeightSchema,
  dataTable: z
    .array(z.any())
    .describe(
      "Data for the word cloud chart, e.g., [{ word: 'TEST', value: 10 }]."
    )
    .nonempty({ message: "Word cloud chart data cannot be empty." }),

  wordField: z
    .string()
    .nonempty({ message: "The field for words cannot be empty." })
    .describe("Field representing words; must exist in the dataset."),
  sizeField: z
    .string()
    .nullish()
    .describe(
      "Numeric field representing word frequency or value; must exist in the dataset."
    ),

  chartTheme: ThemeSchema,
  title: TitleTextSchema,
  subTitle: TitleSubTextSchema,
  titleOrient: TitleOrientSchema,

  background: BackgroundSchema,
  colors: ColorsSchema,
});

const tool = {
  name: "generate_wordcloud_chart",
  description:
    "Generate a word cloud chart to visually represent the frequency or importance of words. The size of each word reflects its value, making it easy to identify prominent terms in the dataset.",
  inputSchema: convertZodToJsonSchema(schema),
};

export const wordcloud = {
  schema,
  tool,
};
