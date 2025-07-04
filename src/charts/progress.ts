import { z } from "zod";
import { convertZodToJsonSchema } from "../utils/schema";
import {
  BackgroundSchema,
  ChartOutputSchema,
  ColorsSchema,
  HeightSchema,
  ProgressFieldSchema,
  ThemeSchema,
  TitleOrientSchema,
  TitleSubTextSchema,
  TitleTextSchema,
  WidthSchema,
  XFieldSchema,
} from "./common";

const schema = z.object({
  output: ChartOutputSchema,
  width: WidthSchema,
  height: HeightSchema,
  dataTable: z
    .array(z.any())
    .describe(
      "Data for the progress chart, e.g., [{ category: 'category 01', value: 0.5 }]."
    )
    .nonempty({
      message: "Data for the progress chart must not be empty.",
    }),
  chartType: z.enum(["linear_progress", "circular_progress", "gauge"]),

  colorField: XFieldSchema,
  valueField: ProgressFieldSchema,

  chartTheme: ThemeSchema,
  title: TitleTextSchema,
  subTitle: TitleSubTextSchema,
  titleOrient: TitleOrientSchema,

  background: BackgroundSchema,
  colors: ColorsSchema,
});

const tool = {
  name: "generate_progress_chart",
  description:
    "Generates a progress chart for visualizing quantitative values normalized between 0 and 1. Ideal for representing progress, completion rates, or proportional metrics. The gauge chart currently only supports displaying data for a single dimension.",
  inputSchema: convertZodToJsonSchema(schema),
};

export const progress = {
  schema,
  tool,
};
