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
  YFieldSchema,
} from "./common";

const schema = z.object({
  output: ChartOutputSchema,
  width: WidthSchema,
  height: HeightSchema,
  dataTable: z
    .array(z.any())
    .describe("Data for the Venn chart, e.g., [{ sets: 'A,B', value: 0.5 }].")
    .nonempty({ message: "Venn chart data cannot be empty." }),

  setsField: z
    .string()
    .nonempty({ message: "Dimension field cannot be empty." })
    .describe(
      "Dimension field present in the data, used to describe sets. Multiple sets can be separated by commas."
    ),
  valueField: YFieldSchema,
  chartTheme: ThemeSchema,
  title: TitleTextSchema,
  subTitle: TitleSubTextSchema,
  titleOrient: TitleOrientSchema,

  background: BackgroundSchema,
  colors: ColorsSchema,
});

const tool = {
  name: "generate_venn_chart",
  description:
    "Generate a Venn Diagram for visualizing relationships such as intersections and unions between sets.",
  inputSchema: convertZodToJsonSchema(schema),
};

export const venn = {
  schema,
  tool,
};
