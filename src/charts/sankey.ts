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
    .describe(
      "Data for the Sankey diagram, e.g., [{ category: 'category 01', value: 10 }]."
    )
    .nonempty({ message: "Sankey diagram data cannot be empty." }),

  sourceField: z
    .string()
    .nonempty({ message: "Source field cannot be empty." })
    .describe(
      "The source field in the Sankey diagram; must exist in the data."
    ),
  targetField: z
    .string()
    .nonempty({ message: "Target field cannot be empty." })
    .describe(
      "The target field in the Sankey diagram; must exist in the data."
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
  name: "generate_sankey_chart",
  description:
    "Generate a Sankey diagram to visualize the flow relationships between nodes in complex networks, suitable for displaying the distribution and flow paths of source and target data.",
  inputSchema: convertZodToJsonSchema(schema),
};

export const sankey = {
  schema,
  tool,
};
