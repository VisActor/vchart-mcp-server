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
一个基于 [@visactor/vchart](https://github.com/VisActor/VChart) 的 Model Context Protocol (MCP) 服务器，支持 AI 助手生成交互式图表和可视化。

[![MCP Server](https://badge.mcpx.dev?type=server 'MCP Server')](https://modelcontextprotocol.io/)
[![npm 版本](https://img.shields.io/npm/v/@visactor/vchart-mcp-server.svg)](https://www.npmjs.com/package/@visactor/vchart-mcp-server)
[![npm 许可证](https://img.shields.io/npm/l/@visactor/vchart-mcp-server.svg)](https://www.npmjs.com/package/@visactor/vchart-mcp-server)

</div>

<div align="center">

[English](./README.md) | 简体中文

</div>

## 功能特性

### 图表输出格式

每个图表都可以生成多种格式：

- **Image** - PNG/JPG 图像格式，用于嵌入（默认值）
- **Spec** - VChart 规范对象，用于编程使用
- **HTML** - 交互式 HTML 图表，用于网页显示

### 所有图表都支持的公共参数

| 参数名        | 说明       | 类型/可选值                               | 默认值    |
| ------------- | ---------- | ----------------------------------------- | --------- |
| `output`      | 输出格式   | `"spec"` &#124; `"image"` &#124; `"html"` | `"image"` |
| `width`       | 图表宽度   | 数值                                      | `500`     |
| `height`      | 图表高度   | 数值                                      | `500`     |
| `title`       | 图表标题   | 字符串                                    | 可选      |
| `subTitle`    | 图表副标题 | 字符串                                    | 可选      |
| `titleOrient` | 标题位置   | 字符串                                    | 可选      |
| `chartTheme`  | 图表主题   | 字符串                                    | 可选      |
| `background`  | 背景色     | 字符串                                    | 可选      |
| `colors`      | 色板配置   | 数组/字符串                               | 可选      |

### 支持的图表类型和工具

#### `generate_cartesian_chart`

用于生成直角坐标系图表，包含面积图、柱状图、折线图、水波图、漏斗图、动态条形图。

| 参数名           | 说明                                         | 类型                                                                                                  | 是否必需 |
| ---------------- | -------------------------------------------- | ----------------------------------------------------------------------------------------------------- | -------- |
| `dataTable`      | 数据对象数组                                 | 数组                                                                                                  | 必需     |
| `chartType`      | 图表类型                                     | `"line"` &#124; `"area"` &#124; `"bar"` &#124; `"waterfall"` &#124; `"funnel"` &#124; `"ranking_bar"` | 必需     |
| `xField`         | X 轴字段名                                   | `string`                                                                                              | 必需     |
| `yField`         | Y 轴字段名                                   | `string`                                                                                              | 必需     |
| `colorField`     | 颜色映射字段                                 | `string`                                                                                              | 可选     |
| `timeField`      | 时间字段，用于给动态条形图设置时间字段       | `string`                                                                                              | 可选     |
| `stackOrPercent` | 堆叠或百分比模式                             | `"stack"` &#124; `"percent"`                                                                          | 可选     |
| `transpose`      | 设置柱状图是否按照水平方向展示，也就是条形图 | `boolean`                                                                                             | 可选     |
| `xAxisType`      | X 轴类型                                     | `"band"` &#124; `"linear"`                                                                            | 可选     |
| `xAxisOrient`    | X 轴位置                                     | `"top"` &#124; `"bottom"`                                                                             | 可选     |
| `xAxisTitle`     | X 轴标题                                     | `string`                                                                                              | 可选     |
| `xAxisHasGrid`   | X 轴是否显示网格线                           | `boolean`                                                                                             | 可选     |
| `xAxisHasLabel`  | X 轴是否显示标签                             | `boolean`                                                                                             | 可选     |
| `xAxisHasTick`   | X 轴是否显示刻度                             | `boolean`                                                                                             | 可选     |
| `yAxisType`      | Y 轴类型                                     | `"band"` &#124; `"linear"`                                                                            | 可选     |
| `yAxisOrient`    | Y 轴位置                                     | `"left"` &#124; `"right"`                                                                             | 可选     |
| `yAxisTitle`     | Y 轴标题                                     | `string`                                                                                              | 可选     |
| `yAxisHasGrid`   | Y 轴是否显示网格线                           | `boolean`                                                                                             | 可选     |
| `yAxisHasLabel`  | Y 轴是否显示标签                             | `boolean`                                                                                             | 可选     |
| `yAxisHasTick`   | Y 轴是否显示刻度                             | `boolean`                                                                                             | 可选     |

#### `generate_polar_chart`

用于生成极坐标系图表，包含雷达图和玫瑰图。
| 参数名 | 说明 | 类型/可选值 | 是否必需 |
|---------------------|------------------------|-----------------------------------------------|----------|
| `dataTable` | 数据对象数组 | 数组 | 必需 |
| `chartType` | 图表类型 | `"radar"` &#124; `"rose"` &#124; `"pie"` | 必需 |
| `categoryField` | 类别字段名 | `string` | 必需 |
| `valueField` | 数值字段名 | `string` | 必需 |
| `colorField` | 颜色映射字段 | `string` | 可选 |
| `angleAxisTitle` | 角度轴标题 | `string` | 可选 |
| `angleAxisHasGrid` | 角度轴是否显示网格线 | `boolean` | 可选 |
| `angleAxisHasLabel` | 角度轴是否显示标签 | `booean` | 可选 |
| `angleAxisHasTick` | 角度轴是否显示刻度 | `boolean` | 可选 |
| `angleAxisType` | 角度轴类型 | `"band"` &#124; `"linear"` | 可选 |
| `radiusAxisTitle` | 半径轴标题 | `string` | 可选 |
| `radiusAxisHasGrid` | 半径轴是否显示网格线 | `boolean` | 可选 |
| `radiusAxisHasLabel`| 半径轴是否显示标签 | `boolean` | 可选 |
| `radiusAxisHasTick` | 半径轴是否显示刻度 | `boolean` | 可选 |
| `radiusAxisType` | 半径轴类型 | `"band"` &#124; `"linear"` | 可选 |

#### `generate_hierarchical_chart`

用于生成分层结构图表，包含矩形树图、圆形闭包图、旭日图。

| 参数名       | 说明         | 类型/可选值                                               | 是否必需 |
| ------------ | ------------ | --------------------------------------------------------- | -------- |
| `dataTable`  | 数据对象数组 | 数组                                                      | 必需     |
| `chartType`  | 图表类型     | `"sunburst"` &#124; `"treemap"` &#124; `"circle_packing"` | 必需     |
| `colorField` | 颜色映射字段 | `string`                                                  | 必需     |
| `valueField` | 数值映射字段 | `string`                                                  | 必需     |

#### `generate_progress_chart`

生成进度条图表，包括环形进度条和线性进度条、仪表盘图。

| 参数名       | 说明                                                     | 类型/可选值                                                                         | 是否必需 |
| ------------ | -------------------------------------------------------- | ----------------------------------------------------------------------------------- | -------- |
| `dataTable`  | 数据对象数组                                             | 数组                                                                                | 必需     |
| `chartType`  | 图表类型                                                 | `"linear_progress"` &#124; `"circular_progress"` &#124; `"gauge"` &#124; `"liquid"` | 必需     |
| `valueField` | 进度值数据字段名                                         | `string`                                                                            | 必需     |
| `colorField` | 颜色映射字段，对于水波图是可选配置，其他图表是必传的配置 | `string`                                                                            | 可选     |

#### `generate_wordcloud_venn`

用于生成词云图表/韦恩图，适合展示文本数据的关键词和频率。

**参数：**

| 参数名       | 说明                             | 类型/可选值                   | 是否必需 |
| ------------ | -------------------------------- | ----------------------------- | -------- |
| `dataTable`  | 数据对象数组                     | 数组                          | 必需     |
| `chartType`  | 图表类型                         | `"wordcloud"` &#124; `"venn"` | 必需     |
| `colorField` | 文本字段名或者韦恩图的集合字段名 | `string`                      | 必需     |
| `valueField` | 数值字段名，在韦恩图中必传       | `string`                      | 可选     |

#### `generate_range_column_chart`

生成横向的范围柱状图，适合展示数据范围和对比。

| 参数名          | 说明               | TS 类型/可选值         | 是否必需 |
| --------------- | ------------------ | ---------------------- | -------- |
| `dataTable`     | 数据对象数组       | `any[]`                | 必需     |
| `xField`        | 类别字段名         | `string`               | 必需     |
| `yField`        | 数值字段名         | `[string, string]`     | 必需     |
| `colorField`    | 颜色映射字段       | `string`               | 可选     |
| `xAxisType`     | X 轴类型           | `"band"` \| `"linear"` | 可选     |
| `xAxisOrient`   | X 轴位置           | `"top"` \| `"bottom"`  | 可选     |
| `xAxisTitle`    | X 轴标题           | `string`               | 可选     |
| `xAxisHasGrid`  | X 轴是否显示网格线 | `boolean`              | 可选     |
| `xAxisHasLabel` | X 轴是否显示标签   | `boolean`              | 可选     |
| `xAxisHasTick`  | X 轴是否显示刻度   | `boolean`              | 可选     |
| `yAxisType`     | Y 轴类型           | `"band"` \| `"linear"` | 可选     |
| `yAxisOrient`   | Y 轴位置           | `"left"` \| `"right"`  | 可选     |
| `yAxisTitle`    | Y 轴标题           | `string`               | 可选     |
| `yAxisHasGrid`  | Y 轴是否显示网格线 | `boolean`              | 可选     |
| `yAxisHasLabel` | Y 轴是否显示标签   | `boolean`              | 可选     |
| `yAxisHasTick`  | Y 轴是否显示刻度   | `boolean`              | 可选     |

#### `generate_dual_axis_chart`

具有两个 Y 轴的组合图表，用于比较两个具有不同量纲的指标。

| 参数名               | 说明                  | TS 类型                  | 是否必需 |
| -------------------- | --------------------- | ------------------------ | -------- |
| `dataTable`          | 数据对象数组          | `any[]`                  | 必需     |
| `xField`             | X 轴字段名            | `string`                 | 必需     |
| `yField`             | 两个 Y 轴字段名数组   | `[string, string]`       | 必需     |
| `colorField`         | 颜色映射字段          | `string`                 | 可选     |
| `stackOrPercent`     | 堆叠或百分比模式      | `"stack"` \| `"percent"` | 可选     |
| `xAxisOrient`        | X 轴位置              | `"top"` \| `"bottom"`    | 可选     |
| `xAxisTitle`         | X 轴标题              | `string`                 | 可选     |
| `xAxisHasGrid`       | X 轴是否显示网格线    | `boolean`                | 可选     |
| `xAxisHasLabel`      | X 轴是否显示标签      | `boolean`                | 可选     |
| `xAxisHasTick`       | X 轴是否显示刻度      | `boolean`                | 可选     |
| `leftYAxisTitle`     | 左 Y 轴标题           | `string`                 | 可选     |
| `leftYAxisHasGrid`   | 左 Y 轴是否显示网格线 | `boolean`                | 可选     |
| `leftYAxisHasLabel`  | 左 Y 轴是否显示标签   | `boolean`                | 可选     |
| `leftYAxisHasTick`   | 左 Y 轴是否显示刻度   | `boolean`                | 可选     |
| `rightYAxisTitle`    | 右 Y 轴标题           | `string`                 | 可选     |
| `rightYAxisHasGrid`  | 右 Y 轴是否显示网格线 | `boolean`                | 可选     |
| `rightYAxisHasLabel` | 右 Y 轴是否显示标签   | `boolean`                | 可选     |
| `rightYAxisHasTick`  | 右 Y 轴是否显示刻度   | `boolean`                | 可选     |

#### `generate_scatter_chart`

用于展示两个变量之间的相关关系，适合发现数据中的模式和异常值。

| 参数名          | 说明               | TS 类型                | 是否必需 |
| --------------- | ------------------ | ---------------------- | -------- |
| `dataTable`     | 数据对象数组       | `any[]`                | 必需     |
| `xField`        | X 轴字段名         | `string`               | 必需     |
| `yField`        | Y 轴字段名         | `string`               | 必需     |
| `colorField`    | 颜色映射字段       | `string`               | 可选     |
| `sizeField`     | 大小映射字段       | `string`               | 可选     |
| `xAxisType`     | X 轴类型           | `"band"` \| `"linear"` | 可选     |
| `xAxisOrient`   | X 轴位置           | `"top"` \| `"bottom"`  | 可选     |
| `xAxisTitle`    | X 轴标题           | `string`               | 可选     |
| `xAxisHasGrid`  | X 轴是否显示网格线 | `boolean`              | 可选     |
| `xAxisHasLabel` | X 轴是否显示标签   | `boolean`              | 可选     |
| `xAxisHasTick`  | X 轴是否显示刻度   | `boolean`              | 可选     |
| `yAxisType`     | Y 轴类型           | `"band"` \| `"linear"` | 可选     |
| `yAxisOrient`   | Y 轴位置           | `"left"` \| `"right"`  | 可选     |
| `yAxisTitle`    | Y 轴标题           | `string`               | 可选     |
| `yAxisHasGrid`  | Y 轴是否显示网格线 | `boolean`              | 可选     |
| `yAxisHasLabel` | Y 轴是否显示标签   | `boolean`              | 可选     |
| `yAxisHasTick`  | Y 轴是否显示刻度   | `boolean`              | 可选     |

#### `generate_sankey_chart`

用于生成桑基图

| 参数名        | 说明           | TS 类型  | 是否必需 |
| ------------- | -------------- | -------- | -------- |
| `dataTable`   | 数据对象数组   | `any[]`  | 必需     |
| `sourceField` | 来源节点字段名 | `string` | 必需     |
| `targetField` | 去向节点字段名 | `string` | 必需     |
| `valueField`  | 数值字段名     | `string` | 必需     |

#### `generate_heatmap_chart`

用于生成热力图，适合展示数据密度和分布。

| 参数名          | 说明               | TS 类型                | 是否必需 |
| --------------- | ------------------ | ---------------------- | -------- |
| `dataTable`     | 数据对象数组       | `any[]`                | 必需     |
| `xField`        | X 轴字段名         | `string`               | 必需     |
| `yField`        | Y 轴字段名         | `string`               | 必需     |
| `sizeField`     | 数值字段名         | `string`               | 必需     |
| `xAxisType`     | X 轴类型           | `"band"` \| `"linear"` | 可选     |
| `xAxisOrient`   | X 轴位置           | `"top"` \| `"bottom"`  | 可选     |
| `xAxisTitle`    | X 轴标题           | `string`               | 可选     |
| `xAxisHasGrid`  | X 轴是否显示网格线 | `boolean`              | 可选     |
| `xAxisHasLabel` | X 轴是否显示标签   | `boolean`              | 可选     |
| `xAxisHasTick`  | X 轴是否显示刻度   | `boolean`              | 可选     |
| `yAxisType`     | Y 轴类型           | `"band"` \| `"linear"` | 可选     |
| `yAxisOrient`   | Y 轴位置           | `"left"` \| `"right"`  | 可选     |
| `yAxisTitle`    | Y 轴标题           | `string`               | 可选     |
| `yAxisHasGrid`  | Y 轴是否显示网格线 | `boolean`              | 可选     |
| `yAxisHasLabel` | Y 轴是否显示标签   | `boolean`              | 可选     |
| `yAxisHasTick`  | Y 轴是否显示刻度   | `boolean`              | 可选     |

## 安装

### 先决条件

- Node.js 18 或更高版本
- npm 或 yarn

### 从 npm 安装

```bash
npm install -g @visactor/vchart-mcp-server
```

### 从源码安装

```bash
git clone https://github.com/VisActor/vchart-mcp-server.git
cd vchart-mcp-server
npm install
npm run build
```

## 使用方法

要在桌面应用（如 Trae、Claude、VSCode、Cline、Cherry Studio、Cursor 等）中使用，请添加以下 MCP 服务器配置：

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

### Windows 系统

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

## AI 对话中的使用示例

配置完成后，你可以要求 AI 助手创建图表：

**"创建一个显示月度销售数据的面积图"**

```
助手将使用 generate_cartesian_chart 工具，参数为：
- chartType: "area"
- dataTable: 你的销售数据
- xField: "month"
- yField: "sales"
```

**"生成一个比较收入和用户增长的双轴图表"**

```
助手将使用 generate_dual_axis_chart 工具，参数为：
- dataTable: 你的业务数据
- xField: "time"
- yField: ["revenue", "userGrowth"]
```

**"为我展示一个季度表现的交互式 HTML 柱状图"**

```
助手将使用 generate_cartesian_chart 工具，参数为：
- chartType: "bar"
- dataTable: 你的季度数据
- xField: "quarter"
- yField: "performance"
- output: "html"
```

**"制作一个产品销售占比的饼图"**

```
助手将使用 generate_polar_chart 工具，参数为：
- chartType: "pie"
- dataTable: 你的销售数据
- categoryField: "product"
- valueField: "sales"
```

**"绘制一个身高体重关系的散点图"**

```
助手将使用 generate_scatter_chart 工具，参数为：
- dataTable: 你的身体数据
- xField: "height"
- yField: "weight"
- colorField: "gender" (可选)
```

**"创建一个团队能力评估的雷达图"**

```
助手将使用 generate_polar_chart 工具，参数为：
- chartType: "radar"
- dataTable: 你的能力评估数据
- categoryField: "skill"
- valueField: "score"
```

**"生成一个展示数据流转的桑基图"**

```
助手将使用 generate_sankey_chart 工具，参数为：
- dataTable: 你的流转数据
- sourceField: "from"
- targetField: "to"
- valueField: "amount"
```

**"制作一个展示数据分布的热力图"**

```
助手将使用 generate_heatmap_chart 工具，参数为：
- dataTable: 你的分布数据
- xField: "x_category"
- yField: "y_category"
- sizeField: "value"
```

## 开发

### 构建

```bash
npm run build
```

### 开发模式（自动重建）

```bash
npm run watch
```

### 测试

```bash
# 测试图表生成
npm run test-tool

# 运行 MCP Inspector 进行调试
npm run inspector
```

### 调试

由于 MCP 服务器通过 stdio 通信，调试可能具有挑战性。使用 MCP Inspector 进行开发：

```bash
npm run inspector
```

Inspector 在 `http://localhost:3000` 提供 Web 界面，用于测试工具和调试。

## 环境变量

- `VIMD_IMAGE_SERVER` - 自定义图像生成服务器 URL（默认：https://vmind.visactor.com/export）

## 私有化开发

现在vchart-mcp-server产出的图片和html是通过访问 [https://vmind.visactor.com/export](https://vmind.visactor.com/export) 来生成的，如果需要私有化部署，可以通过设置环境变量 `VIMD_IMAGE_SERVER` 来指定自己的图像生成服务器。

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

## 许可证

MIT 许可证

## 贡献

欢迎贡献！请随时提交问题和拉取请求。

## 相关项目

- [VChart](https://github.com/VisActor/VChart) - 底层可视化库
- [Model Context Protocol](https://modelcontextprotocol.io/) - 协议规范
