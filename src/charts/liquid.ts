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
    .describe("Data for the liquid chart, e.g., [{ value: 0.5 }].")
    .nonempty({ message: "Liquid chart data must not be empty." }),

  valueField: YFieldSchema,
  chartTheme: ThemeSchema,
  title: TitleTextSchema,
  subTitle: TitleSubTextSchema,
  titleOrient: TitleOrientSchema,

  background: BackgroundSchema,
  colors: ColorsSchema,
});

const tool = {
  name: "generate_liquid_chart",
  description:
    "Generate a liquid chart, which visually displays percentage or progress metrics. Suitable for showing proportions, completion rates, and similar scenarios.",
  inputSchema: convertZodToJsonSchema(schema),
};

export const liquid = {
  schema,
  tool,
};
