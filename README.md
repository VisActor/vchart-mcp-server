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

[![MCP Server](https://badge.mcpx.dev?type=server "MCP Server")](https://modelcontextprotocol.io/)
[![npm Version](https://img.shields.io/npm/v/@visactor/vchart-mcp-server.svg)](https://www.npmjs.com/package/@visactor/vchart-mcp-server)
[![npm License](https://img.shields.io/npm/l/@visactor/vchart-mcp-server.svg)](https://www.npmjs.com/package/@visactor/vchart-mcp-server)

</div>

<div align="center">

English | [简体中文](./README.zh-CN.md)

</div>

## Features

### Chart Output Formats

Each chart can be generated in multiple formats:

- **Image** - PNG/JPG image format for embedding (default)
- **Spec** - VChart specification object for programmatic use
- **HTML** - Interactive HTML chart for web display

### Common Parameters Supported by All Charts

| Parameter     | Description         | Type/Options                              | Default   |
| ------------- | ------------------- | ----------------------------------------- | --------- |
| `output`      | Output format       | `"spec"` &#124; `"image"` &#124; `"html"` | `"image"` |
| `width`       | Chart width         | Number                                    | `500`     |
| `height`      | Chart height        | Number                                    | `500`     |
| `title`       | Chart title         | String                                    | Optional  |
| `subTitle`    | Chart subtitle      | String                                    | Optional  |
| `titleOrient` | Title position      | String                                    | Optional  |
| `chartTheme`  | Chart theme         | String                                    | Optional  |
| `background`  | Background color    | String                                    | Optional  |
| `colors`      | Color configuration | Array/String                              | Optional  |

### Supported Chart Types and Tools

#### `generate_cartesian_chart`

Used to generate Cartesian coordinate system charts, including area charts, bar charts, line charts, and waterfall charts.

**Parameters:**

- `dataTable` - Array of data objects (required)
- `xField` - X-axis field name (required)
- `yField` - Y-axis field name (required)
- `chartType` - Chart type: "line" | "area" | "bar" | "waterfall" (required)
- `colorField` - Color mapping field (optional)
- `stackOrPercent` - Stack or percentage mode (optional)
- `xAxisType` - X-axis type (optional)
- `xAxisOrient` - X-axis position (optional)
- `xAxisTitle` - X-axis title (optional)
- `xAxisHasGrid` - Whether X-axis shows grid lines (optional)
- `xAxisHasLabel` - Whether X-axis shows labels (optional)
- `xAxisHasTick` - Whether X-axis shows ticks (optional)
- `yAxisType` - Y-axis type (optional)
- `yAxisOrient` - Y-axis position (optional)
- `yAxisTitle` - Y-axis title (optional)
- `yAxisHasGrid` - Whether Y-axis shows grid lines (optional)
- `yAxisHasLabel` - Whether Y-axis shows labels (optional)
- `yAxisHasTick` - Whether Y-axis shows ticks (optional)

#### `generate_polar_chart`

Used to generate polar coordinate system charts, including radar charts and rose charts.

**Parameters:**

- `dataTable` - Array of data objects (required)
- `categoryField` - Category field name (required)
- `valueField` - Value field name (required)
- `chartType` - Chart type: "radar" | "rose" | "pie" (required)
- `colorField` - Color mapping field (optional)
- `angleAxisTitle` - Angle axis title (optional)
- `angleAxisHasGrid` - Whether angle axis shows grid lines (optional)
- `angleAxisHasLabel` - Whether angle axis shows labels (optional)
- `angleAxisHasTick` - Whether angle axis shows ticks (optional)
- `angleAxisType` - Angle axis type (optional)
- `radiusAxisTitle` - Radius axis title (optional)
- `radiusAxisHasGrid` - Whether radius axis shows grid lines (optional)
- `radiusAxisHasLabel` - Whether radius axis shows labels (optional)
- `radiusAxisHasTick` - Whether radius axis shows ticks (optional)
- `radiusAxisType` - Radius axis type (optional)

#### `generate_hierarchical_chart`

Used to generate hierarchical structure charts, including treemap, circle packing, and sunburst charts.

**Parameters:**

- `dataTable` - Array of data objects (required)
- `chartType` - Chart type: "sunburst" | "treemap" | "circle_packing" (required)
- `colorField` - Color mapping field (optional)

#### `generate_progress_chart`

Generate progress bar charts, including linear progress bars, circular progress bars, and gauge charts.

**Parameters:**

- `dataTable` - Array of data objects (required)
- `chartType` - Chart type: "linear_progress" | "circular_progress" | "gauge" (required)
- `valueField` - Value field name (required)
- `colorField` - Color mapping field (optional)

#### `generate_wordcloud_chart`

Used to generate word cloud charts, suitable for displaying text data keywords and frequencies.

**Parameters:**

- `dataTable` - Array of data objects (required)
- `wordField` - Text field name (required)
- `sizeField` - Value field name (optional)

#### `generate_range_column_chart`

Generate horizontal range column charts, suitable for displaying data ranges and comparisons.

**Parameters:**

- `dataTable` - Array of data objects (required)
- `categoryField` - Category field name (required)
- `valueField` - Value field name (required)
- `colorField` - Color mapping field (optional)
- `xAxisType` - X-axis type (optional)
- `xAxisOrient` - X-axis position (optional)
- `xAxisTitle` - X-axis title (optional)
- `xAxisHasGrid` - Whether X-axis shows grid lines (optional)
- `xAxisHasLabel` - Whether X-axis shows labels (optional)
- `xAxisHasTick` - Whether X-axis shows ticks (optional)
- `yAxisType` - Y-axis type (optional)
- `yAxisOrient` - Y-axis position (optional)
- `yAxisTitle` - Y-axis title (optional)
- `yAxisHasGrid` - Whether Y-axis shows grid lines (optional)
- `yAxisHasLabel` - Whether Y-axis shows labels (optional)
- `yAxisHasTick` - Whether Y-axis shows ticks (optional)

#### `generate_ranking_bar_chart`

Used to generate ranking bar charts, suitable for displaying data rankings and comparisons.

**Parameters:**

- `dataTable` - Array of data objects (required)
- `categoryField` - Category field name (required)
- `valueField` - Value field name (required)
- `colorField` - Color mapping field (optional)

#### `generate_dual_axis_chart`

Dual-axis combination chart for comparing two indicators with different scales.

**Parameters:**

- `dataTable` - Array of data objects (required)
- `xField` - X-axis field name (required)
- `yField` - Array of two Y-axis field names (required)
- `colorField` - Color mapping field (optional)
- `stackOrPercent` - Stack or percentage mode (optional)
- `xAxisOrient` - X-axis position (optional)
- `xAxisTitle` - X-axis title (optional)
- `xAxisHasGrid` - Whether X-axis shows grid lines (optional)
- `xAxisHasLabel` - Whether X-axis shows labels (optional)
- `xAxisHasTick` - Whether X-axis shows ticks (optional)
- `leftYAxisTitle` - Left Y-axis title (optional)
- `leftYAxisHasGrid` - Whether left Y-axis shows grid lines (optional)
- `leftYAxisHasLabel` - Whether left Y-axis shows labels (optional)
- `leftYAxisHasTick` - Whether left Y-axis shows ticks (optional)
- `rightYAxisTitle` - Right Y-axis title (optional)
- `rightYAxisHasGrid` - Whether right Y-axis shows grid lines (optional)
- `rightYAxisHasLabel` - Whether right Y-axis shows labels (optional)
- `rightYAxisHasTick` - Whether right Y-axis shows ticks (optional)

#### `generate_scatter_chart`

Used to display correlations between two variables, suitable for discovering patterns and outliers in data.

**Parameters:**

- `dataTable` - Array of data objects (required)
- `xField` - X-axis field name (required)
- `yField` - Y-axis field name (required)
- `colorField` - Color mapping field (optional)
- `sizeField` - Size mapping field (optional)
- `xAxisType` - X-axis type (optional)
- `xAxisOrient` - X-axis position (optional)
- `xAxisTitle` - X-axis title (optional)
- `xAxisHasGrid` - Whether X-axis shows grid lines (optional)
- `xAxisHasLabel` - Whether X-axis shows labels (optional)
- `xAxisHasTick` - Whether X-axis shows ticks (optional)
- `yAxisType` - Y-axis type (optional)
- `yAxisOrient` - Y-axis position (optional)
- `yAxisTitle` - Y-axis title (optional)
- `yAxisHasGrid` - Whether Y-axis shows grid lines (optional)
- `yAxisHasLabel` - Whether Y-axis shows labels (optional)
- `yAxisHasTick` - Whether Y-axis shows ticks (optional)

#### `generate_funnel_chart`

Used to display process data conversion rates, suitable for analyzing user behavior and sales funnels.

**Parameters:**

- `dataTable` - Array of data objects (required)
- `xField` - Category field name (required)
- `yField` - Value field name (required)
- `colorField` - Color mapping field (optional)

#### `generate_sankey_chart`

Used to generate Sankey diagrams.

**Parameters:**

- `dataTable` - Array of data objects (required)
- `sourceField` - Source node field name (required)
- `targetField` - Target node field name (required)
- `valueField` - Value field name (required)

#### `generate_liquid_chart`

Used to generate liquid charts, suitable for displaying dynamic data and progress.

**Parameters:**

- `dataTable` - Array of data objects (required)
- `valueField` - Value field name (required)

#### `generate_venn_chart`

Used to generate Venn diagrams, suitable for displaying relationships between sets.

**Parameters:**

- `dataTable` - Array of data objects (required)
- `setFields` - Array of set field names (required)
- `valueField` - Value field name (required)

#### `generate_heatmap_chart`

Used to generate heatmaps, suitable for displaying data density and distribution.

**Parameters:**

- `dataTable` - Array of data objects (required)
- `xField` - X-axis field name (required)
- `yField` - Y-axis field name (required)
- `sizeField` - Value field name (required)
- `xAxisType` - X-axis type (optional)
- `xAxisOrient` - X-axis position (optional)
- `xAxisTitle` - X-axis title (optional)
- `xAxisHasGrid` - Whether X-axis shows grid lines (optional)
- `xAxisHasLabel` - Whether X-axis shows labels (optional)
- `xAxisHasTick` - Whether X-axis shows ticks (optional)
- `yAxisType` - Y-axis type (optional)
- `yAxisOrient` - Y-axis position (optional)
- `yAxisTitle` - Y-axis title (optional)
- `yAxisHasGrid` - Whether Y-axis shows grid lines (optional)
- `yAxisHasLabel` - Whether Y-axis shows labels (optional)
- `yAxisHasTick` - Whether Y-axis shows ticks (optional)

## Installation

### Installing via Smithery

To install vchart-mcp-server for Claude Desktop automatically via [Smithery](https://smithery.ai/server/@VisActor/vchart-mcp-server):

```bash
npx -y @smithery/cli install @VisActor/vchart-mcp-server --client claude
```

### Prerequisites

- Node.js 18 or higher
- npm or yarn

### Install from npm

```bash
npm install -g @visactor/vchart-mcp-server
```

### Install from source

```bash
git clone https://github.com/VisActor/vchart-mcp-server.git
cd vchart-mcp-server
npm install
npm run build
```

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

## Usage Examples in AI Conversations

After configuration, you can ask AI assistants to create charts:

**"Create an area chart showing monthly sales data"**

```
The assistant will use the generate_area_chart tool to create visualization
```

**"Generate a dual-axis chart comparing revenue and user growth"**

```
The assistant will use the generate_dual_axis_chart tool with appropriate parameters
```

**"Show me an interactive HTML bar chart for quarterly performance"**

```
The assistant will generate an HTML chart that can be embedded in web pages
```

**"Create a pie chart showing product sales distribution"**

```
The assistant will use the generate_pie_chart tool to show data distribution
```

**"Draw a scatter plot showing height and weight relationships"**

```
The assistant will use the generate_scatter_chart tool to analyze data correlations
```

**"Create a radar chart for team capability assessment"**

```
The assistant will use the generate_radar_chart tool for multi-dimensional display
```

## Development

### Build

```bash
npm run build
```

### Development mode (auto-rebuild)

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

Since MCP servers communicate via stdio, debugging can be challenging. Use MCP Inspector for development:

```bash
npm run inspector
```

Inspector provides a web interface at `http://localhost:3000` for testing tools and debugging.

## Environment Variables

- `VIMD_IMAGE_SERVER` - Custom image generation server URL (default: https://vmind.visactor.com/export)

## License

MIT License

## Contributing

Contributions are welcome! Please feel free to submit issues and pull requests.

## Related Projects

- [VChart](https://github.com/VisActor/VChart) - Underlying visualization library
- [Model Context Protocol](https://modelcontextprotocol.io/) - Protocol specification
