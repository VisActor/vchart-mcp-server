import axios from "axios";
import { getVmindRequestServer } from "./env";
import { generateChart } from "@visactor/generate-vchart";

export async function gentrateChartImageOrHtml(
  type: "html" | "image",
  spec: any,
  options?: { width?: number; height?: number }
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

  return type === "html" ? response.data.htmlUrl : response.data.imageUrl;
}

export async function generateChartByType(chartType: string, options: any) {
  const {
    xAxis,
    yAxis,
    chartOutput,
    width = 500,
    height = 500,
    ...res
  } = options;

  const { spec } = generateChart(chartType, {
    ...res,
    ...(xAxis || yAxis
      ? { axes: [xAxis, yAxis].filter((entry) => !!entry) }
      : {}),
  });

  if (!spec) {
    return null;
  }

  if (chartOutput === chartOutput) {
    if (width) {
      spec.width = width;
    }
    if (height) {
      spec.height = height;
    }

    return spec;
  }

  const output = gentrateChartImageOrHtml(chartOutput, spec, { width, height });
}
