import { z } from 'zod';
import { convertZodToJsonSchema } from '../utils/schema';
import {
  BackgroundSchema,
  ChartOutputSchema,
  ColorFieldSchema,
  ColorsSchema,
  HeightSchema,
  StackSchema,
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
  XFieldSchema,
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
  chartType: z.enum([
    'area',
    'line',
    'bar',
    'waterfall',
    'ranking_bar',
    'funnel',
  ]),
  width: WidthSchema,
  height: HeightSchema,
  dataTable: z
    .array(z.record(z.string(), z.any()))
    .min(1, { message: 'Data is required.' })
    .describe("Data array, e.g., [{ x: '2018', y: 99.9 }]. Cannot be empty."),
  transpose: z
    .boolean()
    .optional()
    .describe('Set to true only when displaying a horizontal bar chart.'),
  xField: XFieldSchema,
  yField: YFieldSchema,
  colorField: ColorFieldSchema,
  timeField: z
    .string()
    .optional()
    .describe(
      'Time field, such as year or month. The x field and time field must be different. this field is required in ranking_bar'
    ),
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
  stackOrPercent: StackSchema,
});

const tool = {
  name: 'generate_cartesian_chart',
  description:
    'Generates Cartesian charts: line (trends over time), area (cumulative totals), bar (category comparison), waterfall (incremental changes), ranking bar (ordered categories), and funnel (visualizes stages in a process or conversion rates).',
  inputSchema: convertZodToJsonSchema(schema),
};

export const cartesian = {
  schema,
  tool,
};
