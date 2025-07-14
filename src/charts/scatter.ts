import { z } from 'zod';
import { convertZodToJsonSchema } from '../utils/schema';
import {
  BackgroundSchema,
  ChartOutputSchema,
  ColorFieldSchema,
  ColorsSchema,
  HeightSchema,
  ThemeSchema,
  TitleOrientSchema,
  TitleSubTextSchema,
  TitleTextSchema,
  WidthSchema,
  XAxisHasGridSchema,
  XAxisHasLabelSchema,
  XAxisHasTickSchema,
  XAxisOrientSchema,
  XAxisTitleSchema,
  XAxisTypeSchema,
  YAxisHasGridSchema,
  YAxisHasLabelSchema,
  YAxisHasTickSchema,
  YAxisOrientSchema,
  YAxisTitleSchema,
  YAxisTypeSchema,
  YFieldSchema,
} from './common';

const schema = z.object({
  output: ChartOutputSchema,
  width: WidthSchema,
  height: HeightSchema,
  dataTable: z
    .array(z.any())
    .describe("Scatter chart data, e.g., [{ x: 34, y: 10, category: 'A' }].")
    .nonempty({ message: 'Scatter chart data cannot be empty.' }),

  xField: YFieldSchema,
  yField: YFieldSchema,
  sizeField: z.string().optional().describe('Numeric field for bubble size.'),
  colorField: ColorFieldSchema,

  chartTheme: ThemeSchema,
  title: TitleTextSchema,
  subTitle: TitleSubTextSchema,
  titleOrient: TitleOrientSchema,
  xAxisType: XAxisTypeSchema,
  xAxisOrient: XAxisOrientSchema,
  xAxisTitle: XAxisTitleSchema,
  xAxisHasGrid: XAxisHasGridSchema,
  xAxisHasLabel: XAxisHasLabelSchema,
  xAxisHasTick: XAxisHasTickSchema,

  yAxisType: YAxisTypeSchema,
  yAxisOrient: YAxisOrientSchema,
  yAxisTitle: YAxisTitleSchema,
  yAxisHasGrid: YAxisHasGridSchema,
  yAxisHasLabel: YAxisHasLabelSchema,
  yAxisHasTick: YAxisHasTickSchema,

  background: BackgroundSchema,
  colors: ColorsSchema,
});

const tool = {
  name: 'generate_scatter_chart',
  description:
    'Generate a scatter chart to visually display the distribution, clustering trends, and correlations of data points in two-dimensional or multi-dimensional space. Suitable for analyzing relationships between variables, outlier detection, and similar scenarios.',
  inputSchema: convertZodToJsonSchema(schema),
};

export const scatter = {
  schema,
  tool,
};
