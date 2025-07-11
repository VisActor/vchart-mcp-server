import axios from "axios";
import { getVmindRequestServer } from "./env";
import { generateChart } from "@visactor/generate-vchart";
import { isEmpty, isValid } from "@visactor/vutils";

export function filterValidAttributes(obj: Record<string, any>) {
  return Object.keys(obj).reduce((res, k) => {
    if (isValid(obj[k])) {
      (res as any)[k] = obj[k];
    }

    return res;
  }, {});
}

export async function gentrateChartImageOrHtml(
  type: "html" | "image",
  spec: any,
  options?: { width?: string; height?: string }
) {
  const url = getVmindRequestServer();

  const response = await axios.post(
    url,
    {
      type,
      spec,
      option: { ...options },
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  return type === "html"
    ? { html: response.data.htmlUrl }
    : { image: response.data.imageUrl };
}

export async function generateChartByType(chartType: string, options: any) {
  const {
    title,
    subTitle,
    titleOrient,
    xAxisType,
    xAxisOrient,
    xAxisTitle,
    xAxisHasGrid,
    xAxisHasLabel,
    xAxisHasTick,

    yAxisType,
    yAxisOrient,
    yAxisTitle,
    yAxisHasGrid,
    yAxisHasLabel,
    yAxisHasTick,

    leftYAxisTitle,
    leftYAxisHasGrid,
    leftYAxisHasLabel,
    leftYAxisHasTick,

    rightYAxisTitle,
    rightYAxisHasGrid,
    rightYAxisHasLabel,
    rightYAxisHasTick,

    angleAxisTitle,
    angleAxisHasGrid,
    angleAxisHasLabel,
    angleAxisHasTick,
    angleAxisType,

    radiusAxisHasGrid,
    radiusAxisHasLabel,
    radiusAxisHasTick,
    radiusAxisType,
    radiusAxisTitle,

    output,
    width,
    height,
    ...res
  } = options;

  const opts = { ...res };
  const titleObj = filterValidAttributes({
    text: title,
    subText: subTitle,
    orient: titleOrient,
  });
  const xAxisObj = filterValidAttributes({
    type: xAxisType,
    orient: xAxisOrient,
    title: xAxisTitle,
    hasGrid: xAxisHasGrid,
    hasLabel: xAxisHasLabel,
    hasTick: xAxisHasTick,
  });
  const yAxisObj = filterValidAttributes({
    type: yAxisType,
    orient: yAxisOrient,
    title: yAxisTitle,
    hasGrid: yAxisHasGrid,
    hasLabel: yAxisHasLabel,
    hasTick: yAxisHasTick,
  });
  const leftYAxisObj = filterValidAttributes({
    title: leftYAxisTitle,
    hasGrid: leftYAxisHasGrid,
    hasLabel: leftYAxisHasLabel,
    hasTick: leftYAxisHasTick,
  });
  const rightYAxisObj = filterValidAttributes({
    title: rightYAxisTitle,
    hasGrid: rightYAxisHasGrid,
    hasLabel: rightYAxisHasLabel,
    hasTick: rightYAxisHasTick,
  });
  const angleAxisObj = filterValidAttributes({
    title: angleAxisTitle,
    hasGrid: angleAxisHasGrid,
    hasLabel: angleAxisHasLabel,
    hasTick: angleAxisHasTick,
    type: angleAxisType,
  });
  const radiusAxisObj = filterValidAttributes({
    hasGrid: radiusAxisHasGrid,
    hasLabel: radiusAxisHasLabel,
    hasTick: radiusAxisHasTick,
    type: radiusAxisType,
    title: radiusAxisTitle,
  });

  const cell: Record<string, string> = {};

  [
    "xField",
    "yField",
    "colorField",
    "categoryField",
    "valueField",
    "wordField",
    "sizeField",
    "timeField",
    "sourceField",
    "targetField",
    "setsField",
    "radiusField",
  ].forEach((fieldName) => {
    if (isValid(options[fieldName])) {
      cell[fieldName.replace("Field", "")] = options[fieldName];
      delete opts[fieldName];
    }
  });

  opts.cell = cell;

  if (!isEmpty(titleObj)) {
    opts.title = titleObj;
  }

  const axes = [
    xAxisObj,
    yAxisObj,
    leftYAxisObj,
    rightYAxisObj,
    angleAxisObj,
    radiusAxisObj,
  ];

  if (axes.some((axis) => !isEmpty(axis))) {
    opts.axes = axes.filter((axis) => !isEmpty(axis));
  }

  const { spec } = generateChart(options.chartType ?? chartType, opts);

  if (!spec) {
    return null;
  }

  if (output === "spec") {
    if (isValid(width)) {
      spec.width = width;
    }
    if (isValid(height)) {
      spec.height = height;
    }

    return {
      spec: spec,
    };
  }

  return gentrateChartImageOrHtml(output, spec, {
    width: `${width ?? 500}px`,
    height: `${height ?? 500}px`,
  });
}
