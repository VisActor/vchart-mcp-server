<div align="center">
  <a href="https://github.com/VisActor#gh-light-mode-only" target="_blank">
    <img alt="VisActor Logo" width="200" src="https://github.com/VisActor/.github/blob/main/profile/logo_500_200_light.svg"/>
  </a>
  <a href="https://github.com/VisActor#gh-dark-mode-only" target="_blank">
    <img alt="VisActor Logo" width="200" src="https://github.com/VisActor/.github/blob/main/profile/logo_500_200_dark.svg"/>
  </a>
</div>

<div align="center">
  <h1>vchart-mcp-server</h1>
</div>

<div align="center">

A Model Context Protocol (MCP) server for the [@visactor/vchart](https://github.com/VisActor/VChart) that enables AI assistants to generate interactive charts and visualizations.

[![MCP Server](https://badge.mcpx.dev?type=server 'MCP Server')](https://modelcontextprotocol.io/)
[![npm Version](https://img.shields.io/npm/v/@visactor/vchart-mcp-server.svg)](https://www.npmjs.com/package/@visactor/vchart-mcp-server)
[![npm License](https://img.shields.io/npm/l/@visactor/vchart-mcp-server.svg)](https://www.npmjs.com/package/@visactor/vchart-mcp-server)
[![smithery badge](https://smithery.ai/badge/@visactor/vchart-mcp-server)](https://smithery.ai/server/@visactor/vchart-mcp-server)

</div>

<div align="center">

English | [简体中文](./README.zh-CN.md)

</div>

## Table of Contents

- [Features](#features)
  - [Chart Output Formats](#chart-output-formats)
  - [Common Parameters Supported by All Charts](#common-parameters-supported-by-all-charts)
  - [Supported Chart Types and Tools](#supported-chart-types-and-tools)
- [Usage](#usage)
- [Running with SSE or Streamable Transport](#running-with-sse-or-streamable-transport)
- [Example Usage in AI Conversations](#example-usage-in-ai-conversations)
- [Development](#development)
- [Environment Variables](#environment-variables)
- [Private Deployment](#private-deployment)
- [License](#license)
- [Contributing](#contributing)
- [Related Projects](#related-projects)

## Features

### Chart Output Formats

Each chart can be generated in multiple formats:

- **Image** - PNG/JPG image format for embedding (default)
- **Spec** - VChart spec object for programmatic use
- **HTML** - Interactive HTML chart for web display

### Common Parameters Supported by All Charts

| Parameter     | Description      | Type/Options                              | Default   |
| ------------- | ---------------- | ----------------------------------------- | --------- |
| `output`      | Output format    | `"spec"` &#124; `"image"` &#124; `"html"` | `"image"` |
| `width`       | Chart width      | Number                                    | `500`     |
| `height`      | Chart height     | Number                                    | `500`     |
| `title`       | Chart title      | String                                    | Optional  |
| `subTitle`    | Chart subtitle   | String                                    | Optional  |
| `titleOrient` | Title position   | String                                    | Optional  |
| `chartTheme`  | Chart theme      | String                                    | Optional  |
| `background`  | Background color | String                                    | Optional  |
| `colors`      | Color palette    | Array/String                              | Optional  |

### Supported Chart Types and Tools

#### `generate_cartesian_chart`

Generates Cartesian coordinate system charts, including area, bar, line, waterfall, funnel, and animated ranking bar charts.

| Parameter        | Description                                   | Type                                                                                                  | Required |
| ---------------- | --------------------------------------------- | ----------------------------------------------------------------------------------------------------- | -------- |
| `dataTable`      | Data object array                             | Array                                                                                                 | Yes      |
| `chartType`      | Chart type                                    | `"line"` &#124; `"area"` &#124; `"bar"` &#124; `"waterfall"` &#124; `"funnel"` &#124; `"ranking_bar"` | Yes      |
| `xField`         | X axis field name                             | `string`                                                                                              | Yes      |
| `yField`         | Y axis field name                             | `string`                                                                                              | Yes      |
| `colorField`     | Color mapping field                           | `string`                                                                                              | Optional |
| `timeField`      | Time field for animated ranking bar chart     | `string`                                                                                              | Optional |
| `stackOrPercent` | Stack or percent mode                         | `"stack"` &#124; `"percent"`                                                                          | Optional |
| `transpose`      | Display bar chart horizontally (as bar chart) | `boolean`                                                                                             | Optional |
| `xAxisType`      | X axis type                                   | `"band"` &#124; `"linear"`                                                                            | Optional |
| `xAxisOrient`    | X axis position                               | `"top"` &#124; `"bottom"`                                                                             | Optional |
| `xAxisTitle`     | X axis title                                  | `string`                                                                                              | Optional |
| `xAxisHasGrid`   | Show X axis grid lines                        | `boolean`                                                                                             | Optional |
| `xAxisHasLabel`  | Show X axis labels                            | `boolean`                                                                                             | Optional |
| `xAxisHasTick`   | Show X axis ticks                             | `boolean`                                                                                             | Optional |
| `yAxisType`      | Y axis type                                   | `"band"` &#124; `"linear"`                                                                            | Optional |
| `yAxisOrient`    | Y axis position                               | `"left"` &#124; `"right"`                                                                             | Optional |
| `yAxisTitle`     | Y axis title                                  | `string`                                                                                              | Optional |
| `yAxisHasGrid`   | Show Y axis grid lines                        | `boolean`                                                                                             | Optional |
| `yAxisHasLabel`  | Show Y axis labels                            | `boolean`                                                                                             | Optional |
| `yAxisHasTick`   | Show Y axis ticks                             | `boolean`                                                                                             | Optional |

#### `generate_polar_chart`

Generates polar coordinate system charts, including radar, rose, and pie charts.

| Parameter            | Description                 | Type/Options                             | Required |
| -------------------- | --------------------------- | ---------------------------------------- | -------- |
| `dataTable`          | Data object array           | Array                                    | Yes      |
| `chartType`          | Chart type                  | `"radar"` &#124; `"rose"` &#124; `"pie"` | Yes      |
| `categoryField`      | Category field name         | `string`                                 | Yes      |
| `valueField`         | Value field name            | `string`                                 | Yes      |
| `colorField`         | Color mapping field         | `string`                                 | Optional |
| `angleAxisTitle`     | Angle axis title            | `string`                                 | Optional |
| `angleAxisHasGrid`   | Show angle axis grid lines  | `boolean`                                | Optional |
| `angleAxisHasLabel`  | Show angle axis labels      | `boolean`                                | Optional |
| `angleAxisHasTick`   | Show angle axis ticks       | `boolean`                                | Optional |
| `angleAxisType`      | Angle axis type             | `"band"` &#124; `"linear"`               | Optional |
| `radiusAxisTitle`    | Radius axis title           | `string`                                 | Optional |
| `radiusAxisHasGrid`  | Show radius axis grid lines | `boolean`                                | Optional |
| `radiusAxisHasLabel` | Show radius axis labels     | `boolean`                                | Optional |
| `radiusAxisHasTick`  | Show radius axis ticks      | `boolean`                                | Optional |
| `radiusAxisType`     | Radius axis type            | `"band"` &#124; `"linear"`               | Optional |

#### `generate_hierarchical_chart`

Generates hierarchical charts, including treemap, circle packing, and sunburst charts.

| Parameter    | Description         | Type/Options                                              | Required |
| ------------ | ------------------- | --------------------------------------------------------- | -------- |
| `dataTable`  | Data object array   | Array                                                     | Yes      |
| `chartType`  | Chart type          | `"sunburst"` &#124; `"treemap"` &#124; `"circle_packing"` | Yes      |
| `colorField` | Color mapping field | `string`                                                  | Yes      |
| `valueField` | Value mapping field | `string`                                                  | Yes      |

#### `generate_progress_chart`

Generates progress charts, including circular, linear, gauge, and liquid charts.

| Parameter    | Description                                                   | Type/Options                                                                        | Required |
| ------------ | ------------------------------------------------------------- | ----------------------------------------------------------------------------------- | -------- |
| `dataTable`  | Data object array                                             | Array                                                                               | Yes      |
| `chartType`  | Chart type                                                    | `"linear_progress"` &#124; `"circular_progress"` &#124; `"gauge"` &#124; `"liquid"` | Yes      |
| `valueField` | Progress value field name                                     | `string`                                                                            | Yes      |
| `colorField` | Color mapping field (optional for liquid, required otherwise) | `string`                                                                            | Optional |

#### `generate_wordcloud_venn`

Generates word cloud or Venn diagrams, suitable for displaying keywords and frequencies in text data.

**Parameters:**

| Parameter    | Description                          | Type/Options                  | Required |
| ------------ | ------------------------------------ | ----------------------------- | -------- |
| `dataTable`  | Data object array                    | Array                         | Yes      |
| `chartType`  | Chart type                           | `"wordcloud"` &#124; `"venn"` | Yes      |
| `colorField` | Text field or Venn set field name    | `string`                      | Yes      |
| `valueField` | Value field name (required for Venn) | `string`                      | Optional |

#### `generate_range_column_chart`

Generates horizontal range bar charts, suitable for displaying data ranges and comparisons.

| Parameter       | Description            | Type/Options           | Required |
| --------------- | ---------------------- | ---------------------- | -------- |
| `dataTable`     | Data object array      | `any[]`                | Yes      |
| `xField`        | Category field name    | `string`               | Yes      |
| `yField`        | Value field names      | `[string, string]`     | Yes      |
| `colorField`    | Color mapping field    | `string`               | Optional |
| `xAxisType`     | X axis type            | `"band"` \| `"linear"` | Optional |
| `xAxisOrient`   | X axis position        | `"top"` \| `"bottom"`  | Optional |
| `xAxisTitle`    | X axis title           | `string`               | Optional |
| `xAxisHasGrid`  | Show X axis grid lines | `boolean`              | Optional |
| `xAxisHasLabel` | Show X axis labels     | `boolean`              | Optional |
| `xAxisHasTick`  | Show X axis ticks      | `boolean`              | Optional |
| `yAxisType`     | Y axis type            | `"band"` \| `"linear"` | Optional |
| `yAxisOrient`   | Y axis position        | `"left"` \| `"right"`  | Optional |
| `yAxisTitle`    | Y axis title           | `string`               | Optional |
| `yAxisHasGrid`  | Show Y axis grid lines | `boolean`              | Optional |
| `yAxisHasLabel` | Show Y axis labels     | `boolean`              | Optional |
| `yAxisHasTick`  | Show Y axis ticks      | `boolean`              | Optional |

#### `generate_dual_axis_chart`

Combination chart with two Y axes, for comparing two metrics with different units.

| Parameter            | Description             | Type/Options             | Required |
| -------------------- | ----------------------- | ------------------------ | -------- |
| `dataTable`          | Data object array       | `any[]`                  | Yes      |
| `xField`             | X axis field name       | `string`                 | Yes      |
| `yField`             | Two Y axis field names  | `[string, string]`       | Yes      |
| `colorField`         | Color mapping field     | `string`                 | Optional |
| `stackOrPercent`     | Stack or percent mode   | `"stack"` \| `"percent"` | Optional |
| `xAxisOrient`        | X axis position         | `"top"` \| `"bottom"`    | Optional |
| `xAxisTitle`         | X axis title            | `string`                 | Optional |
| `xAxisHasGrid`       | Show X axis grid lines  | `boolean`                | Optional |
| `xAxisHasLabel`      | Show X axis labels      | `boolean`                | Optional |
| `xAxisHasTick`       | Show X axis ticks       | `boolean`                | Optional |
| `leftYAxisTitle`     | Left Y axis title       | `string`                 | Optional |
| `leftYAxisHasGrid`   | Left Y axis grid lines  | `boolean`                | Optional |
| `leftYAxisHasLabel`  | Left Y axis labels      | `boolean`                | Optional |
| `leftYAxisHasTick`   | Left Y axis ticks       | `boolean`                | Optional |
| `rightYAxisTitle`    | Right Y axis title      | `string`                 | Optional |
| `rightYAxisHasGrid`  | Right Y axis grid lines | `boolean`                | Optional |
| `rightYAxisHasLabel` | Right Y axis labels     | `boolean`                | Optional |
| `rightYAxisHasTick`  | Right Y axis ticks      | `boolean`                | Optional |

#### `generate_scatter_chart`

Displays the relationship between two variables, suitable for discovering patterns and outliers.

| Parameter       | Description            | Type/Options           | Required |
| --------------- | ---------------------- | ---------------------- | -------- |
| `dataTable`     | Data object array      | `any[]`                | Yes      |
| `xField`        | X axis field name      | `string`               | Yes      |
| `yField`        | Y axis field name      | `string`               | Yes      |
| `colorField`    | Color mapping field    | `string`               | Optional |
| `sizeField`     | Size mapping field     | `string`               | Optional |
| `xAxisType`     | X axis type            | `"band"` \| `"linear"` | Optional |
| `xAxisOrient`   | X axis position        | `"top"` \| `"bottom"`  | Optional |
| `xAxisTitle`    | X axis title           | `string`               | Optional |
| `xAxisHasGrid`  | Show X axis grid lines | `boolean`              | Optional |
| `xAxisHasLabel` | Show X axis labels     | `boolean`              | Optional |
| `xAxisHasTick`  | Show X axis ticks      | `boolean`              | Optional |
| `yAxisType`     | Y axis type            | `"band"` \| `"linear"` | Optional |
| `yAxisOrient`   | Y axis position        | `"left"` \| `"right"`  | Optional |
| `yAxisTitle`    | Y axis title           | `string`               | Optional |
| `yAxisHasGrid`  | Show Y axis grid lines | `boolean`              | Optional |
| `yAxisHasLabel` | Show Y axis labels     | `boolean`              | Optional |
| `yAxisHasTick`  | Show Y axis ticks      | `boolean`              | Optional |

#### `generate_sankey_chart`

Generates Sankey diagrams.

| Parameter     | Description       | Type     | Required |
| ------------- | ----------------- | -------- | -------- |
| `dataTable`   | Data object array | `any[]`  | Yes      |
| `sourceField` | Source node field | `string` | Yes      |
| `targetField` | Target node field | `string` | Yes      |
| `valueField`  | Value field       | `string` | Yes      |

#### `generate_heatmap_chart`

Generates heatmaps, suitable for displaying data density and distribution.

| Parameter       | Description            | Type/Options           | Required |
| --------------- | ---------------------- | ---------------------- | -------- |
| `dataTable`     | Data object array      | `any[]`                | Yes      |
| `xField`        | X axis field name      | `string`               | Yes      |
| `yField`        | Y axis field name      | `string`               | Yes      |
| `sizeField`     | Value field name       | `string`               | Yes      |
| `xAxisType`     | X axis type            | `"band"` \| `"linear"` | Optional |
| `xAxisOrient`   | X axis position        | `"top"` \| `"bottom"`  | Optional |
| `xAxisTitle`    | X axis title           | `string`               | Optional |
| `xAxisHasGrid`  | Show X axis grid lines | `boolean`              | Optional |
| `xAxisHasLabel` | Show X axis labels     | `boolean`              | Optional |
| `xAxisHasTick`  | Show X axis ticks      | `boolean`              | Optional |
| `yAxisType`     | Y axis type            | `"band"` \| `"linear"` | Optional |
| `yAxisOrient`   | Y axis position        | `"left"` \| `"right"`  | Optional |
| `yAxisTitle`    | Y axis title           | `string`               | Optional |
| `yAxisHasGrid`  | Show Y axis grid lines | `boolean`              | Optional |
| `yAxisHasLabel` | Show Y axis labels     | `boolean`              | Optional |
| `yAxisHasTick`  | Show Y axis ticks      | `boolean`              | Optional |

## Usage

To use in desktop applications (such as Trae, Claude, VSCode, Cline, Cherry Studio, Cursor, etc.), add the following MCP server configuration:

### MacOS

```json
{
  "mcpServers": {
    "vchart-mcp-server": {
      "command": "npx",
      "args": ["-y", "@visactor/vchart-mcp-server"]
    }
  }
}
```

### Windows

```json
{
  "mcpServers": {
    "vchart-mcp-server": {
      "command": "cmd",
      "args": ["/c", "npx", "-y", "@visactor/vchart-mcp-server"]
    }
  }
}
```

### Installing via Smithery

To install vchart-mcp-server for Claude Desktop automatically via [Smithery](https://smithery.ai/server/@VisActor/vchart-mcp-server):

```bash
npx -y @smithery/cli install @VisActor/vchart-mcp-server --client claude
```

## Running with SSE or Streamable Transport

### Install and Start

Install `@visactor/vchart-mcp-server` globally:

```bash
npm install -g @visactor/vchart-mcp-server
```

Start the server:

```bash
# For SSE transport (default endpoint: /sse)
mcp-server-chart --transport sse

# For Streamable transport (default endpoint: /streamable)
mcp-server-chart --transport streamable
```

Then you can access the server at:

- SSE transport: `http://localhost:3001/sse`
- Streamable transport: `http://localhost:3001/streamable`

### Other CLI Options

```
Options:
  -t, --transport <type>   Transport type (stdio, sse, streamable) [default: stdio]
  -p, --port <port>        Port number for HTTP-based transports [default: 3000]
  -e, --endpoint <path>    Endpoint path for HTTP-based transports [default: /message]
  -h, --help               Show this help message

Examples:
  node index.js                                    # Start with stdio transport
  node index.js -t sse -p 3000                     # Start with SSE transport on port 3000
  node index.js -t sse -p 3000 -e /api/sse         # Start with SSE transport on custom endpoint
  node index.js -t streamable -p 3001 -e /stream   # Start with streamable transport on custom endpoint
```

## Example Usage in AI Conversations

Once configured, you can ask your AI assistant to create charts:

**"Create an area chart showing monthly sales data"**

```
The assistant will use the generate_cartesian_chart tool with parameters:
- chartType: "area"
- dataTable: your sales data
- xField: "month"
- yField: "sales"
```

**"Generate a dual-axis chart comparing revenue and user growth"**

```
The assistant will use the generate_dual_axis_chart tool with parameters:
- dataTable: your business data
- xField: "time"
- yField: ["revenue", "userGrowth"]
```

**"Show me an interactive HTML bar chart of quarterly performance"**

```
The assistant will use the generate_cartesian_chart tool with parameters:
- chartType: "bar"
- dataTable: your quarterly data
- xField: "quarter"
- yField: "performance"
- output: "html"
```

**"Create a pie chart of product sales share"**

```
The assistant will use the generate_polar_chart tool with parameters:
- chartType: "pie"
- dataTable: your sales data
- categoryField: "product"
- valueField: "sales"
```

**"Draw a scatter plot of height and weight"**

```
The assistant will use the generate_scatter_chart tool with parameters:
- dataTable: your body data
- xField: "height"
- yField: "weight"
- colorField: "gender" (optional)
```

**"Create a radar chart for team skill assessment"**

```
The assistant will use the generate_polar_chart tool with parameters:
- chartType: "radar"
- dataTable: your assessment data
- categoryField: "skill"
- valueField: "score"
```

**"Generate a Sankey diagram showing data flow"**

```
The assistant will use the generate_sankey_chart tool with parameters:
- dataTable: your flow data
- sourceField: "from"
- targetField: "to"
- valueField: "amount"
```

**"Create a heatmap showing data distribution"**

```
The assistant will use the generate_heatmap_chart tool with parameters:
- dataTable: your distribution data
- xField: "x_category"
- yField: "y_category"
- sizeField: "value"
```

## Development

### Prerequisites

- Node.js version >= 22.7.5

### Build

```bash
npm run build
```

### Development Mode (Auto Rebuild)

```bash
npm run watch
```

### Testing

```bash
# Test chart generation
npm run test-tool

# Run MCP Inspector for debugging
npm run inspector
```

### Debugging

Since the MCP server communicates via stdio, debugging can be challenging. Use MCP Inspector for development:

```bash
npm run inspector
```

### Testing in AI Editors

To test the MCP server in an AI editor, use the following configuration:

```json
{
  "mcpServers": {
    "vchart-mcp-server": {
      "command": "node",
      "args": ["/Users/path/to/your/project/vchart-mcp-server/build/index.js"]
    }
  }
}
```

## Environment Variables

- `VIMD_IMAGE_SERVER` - Custom image generation server URL (default: https://vmind.visactor.com/export)

## Private Deployment

Currently, images and HTML generated by vchart-mcp-server are produced via [https://vmind.visactor.com/export](https://vmind.visactor.com/export). For private deployment, set the `VIMD_IMAGE_SERVER` environment variable to specify your own image generation server.

```
{
  "mcpServers": {
    "mcp-server-chart": {
      "command": "npx",
      "args": [
        "-y",
        "@visactor/vchart-mcp-server"
      ],
      "env": {
        "VIMD_IMAGE_SERVER": "<YOUR_VIS_REQUEST_SERVER>"
      }
    }
  }
}
```

## License

MIT License

## Contributing

Contributions are welcome! Please feel free to submit issues and pull requests.

## Related Projects

- [VChart](https://github.com/VisActor/VChart) - Underlying visualization library
- [Model Context Protocol](https://modelcontextprotocol.io/) - Protocol specification
