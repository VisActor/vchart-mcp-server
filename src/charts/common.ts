import { z } from "zod";

export const ThemeSchema = z
  .enum(["light", "dark"])
  .optional()
  .describe("Chart theme. Optional, defaults to 'light'.");

export const WidthSchema = z
  .number()
  .optional()
  .describe("Chart width. Optional, defaults to 500.");

export const HeightSchema = z
  .number()
  .optional()
  .describe("Chart height. Optional, defaults to 500.");

export const TitleTextSchema = z
  .string()
  .optional()
  .describe("Chart title text.");

export const TitleSubTextSchema = z
  .string()
  .optional()
  .describe("Chart subtitle text.");

export const TitleOrientSchema = z
  .enum(["top", "left", "right", "bottom"])
  .optional()
  .describe("Title position in the chart.");

export const XAxisTypeSchema = z
  .enum(["band", "linear"])
  .optional()
  .describe("X-axis type: categorical ('band') or continuous ('linear').");

export const XAxisTitleSchema = z.string().optional().describe("X-axis title.");

export const XAxisOrientSchema = z
  .enum(["bottom", "top"])
  .optional()
  .describe("X-axis position in the chart.");

export const XAxisHasGridSchema = z
  .boolean()
  .optional()
  .describe("Show vertical grid lines for the X-axis.");

export const XAxisHasLabelSchema = z
  .boolean()
  .optional()
  .describe("Show X-axis labels.");

export const XAxisHasTickSchema = z
  .boolean()
  .optional()
  .describe("Show X-axis ticks.");

export const YAxisTypeSchema = z
  .enum(["band", "linear"])
  .optional()
  .describe("Y-axis type: categorical ('band') or continuous ('linear').");

export const YAxisTitleSchema = z.string().optional().describe("Y-axis title.");

export const YAxisOrientSchema = z
  .enum(["bottom", "top"])
  .optional()
  .describe("Y-axis position in the chart.");

export const YAxisHasGridSchema = z
  .boolean()
  .optional()
  .describe("Show horizontal grid lines for the Y-axis.");

export const YAxisHasLabelSchema = z
  .boolean()
  .optional()
  .describe("Show Y-axis labels.");

export const YAxisHasTickSchema = z
  .boolean()
  .optional()
  .describe("Show Y-axis ticks.");

export const BackgroundSchema = z
  .string()
  .optional()
  .describe("Chart background color (hex). Optional, defaults to white.");

export const ColorsSchema = z
  .array(z.string().describe("Color value"))
  .nullish()
  .describe("Color palette for chart elements.");

export const StackSchema = z
  .enum(["stack", "percent"])
  .optional()
  .describe(
    "Stacking mode: 'stack' for stacked data, 'percent' for percentage stacking. Requires 'color' field."
  );

export const ChartOutputSchema = z
  .enum(["spec", "image", "html"])
  .optional()
  .default("image")
  .describe("Chart output type. Defaults to 'image'.");

export const XFieldSchema = z
  .string()
  .nonempty({ message: "Dimension field cannot be empty." })
  .describe("Dimension field. Must exist in the data.");

export const YFieldSchema = z
  .string()
  .nonempty({ message: "Measure field cannot be empty." })
  .describe("Measure field. Must be numeric and exist in the data.");

export const ColorFieldSchema = z
  .string()
  .optional()
  .describe("Color grouping field. Should not duplicate the dimension field.");

export const ProgressFieldSchema = z
  .string()
  .nonempty({ message: "Measure field cannot be empty." })
  .describe("Measure field with values in [0, 1]. Must exist in the data.");

export const AngleAxisTypeSchema = z
  .enum(["band", "linear"])
  .optional()
  .describe("Angle axis type: categorical ('band') or continuous ('linear').");

export const AngleAxisTitleSchema = z
  .string()
  .optional()
  .describe("Angle axis title.");

export const AngleAxisHasGridSchema = z
  .boolean()
  .optional()
  .describe("Show grid lines for the angle axis.");

export const AngleAxisHasLabelSchema = z
  .boolean()
  .optional()
  .describe("Show angle axis labels.");

export const AngleAxisHasTickSchema = z
  .boolean()
  .optional()
  .describe("Show angle axis ticks.");

export const RadiusAxisTypeSchema = z
  .enum(["band", "linear"])
  .optional()
  .describe("Radius axis type: categorical ('band') or continuous ('linear').");

export const RadiusAxisTitleSchema = z
  .string()
  .optional()
  .describe("Radius axis title.");

export const RadiusAxisHasGridSchema = z
  .boolean()
  .optional()
  .describe("Show grid lines for the radius axis.");

export const RadiusAxisHasLabelSchema = z
  .boolean()
  .optional()
  .describe("Show radius axis labels.");

export const RadiusAxisHasTickSchema = z
  .boolean()
  .optional()
  .describe("Show radius axis ticks.");
