---
nav:
  title: 组件
  order: -1
group:
  title: 数据录入
  order: 4
demo:
  cols: 2
---

# Form表单
高性能表单控件，自带数据域管理。包含数据录入、校验以及对应样式。

### 何时使用

- 用于创建一个实体或收集信息。
- 需要对输入的数据类型进行校验时。


### 代码演示
<code src="./codeSec/form.tsx">基本使用</code>

### Config

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| colon | 配置 Form.Item 的 `colon` 的默认值。表示是否显示 label 后面的冒号 (只有在属性 layout 为 horizontal 时有效) | boolean | true |  |
| disabled | 设置表单组件禁用，仅对 antd 组件有效 | boolean | false | 4.21.0 |
| component | 设置 Form 渲染元素，为 `false` 则不创建 DOM 节点 | ComponentType \| false | form |  |
| fields | 通过状态管理（如 redux）控制表单字段，如非强需求不推荐使用。查看[示例](#components-form-demo-global-state) | [FieldData](#fielddata)\[] | - |  |
| form | 经 `Form.useForm()` 创建的 form 控制实例，不提供时会自动创建 | [FormInstance](#forminstance) | - |  |
| feedbackIcons | 当 `Form.Item` 有 `hasFeedback` 属性时可以自定义图标 | [FeedbackIcons](#feedbackicons) | - | 5.9.0 |
| initialValues | 表单默认值，只有初始化以及重置时生效 | object | - |  |
| labelAlign | label 标签的文本对齐方式 | `left` \| `right` | `right` |  |
| labelWrap | label 标签的文本换行方式 | boolean | false | 4.18.0 |
| labelCol | label 标签布局，同 `<Col>` 组件，设置 `span` `offset` 值，如 `{span: 3, offset: 12}` 或 `sm: {span: 3, offset: 12}` | [object](/components/grid-cn#col) | - |  |
| layout | 表单布局 | `horizontal` \| `vertical` \| `inline` | `horizontal` |  |
| name | 表单名称，会作为表单字段 `id` 前缀使用 | string | - |  |
| preserve | 当字段被删除时保留字段值 | boolean | true | 4.4.0 |
| requiredMark | 必选样式，可以切换为必选或者可选展示样式。此为 Form 配置，Form.Item 无法单独配置 | boolean \| `optional` \| ((label: ReactNode, info: { required: boolean }) => ReactNode) | true | `renderProps`: 5.9.0 |
| scrollToFirstError | 提交失败自动滚动到第一个错误字段 | boolean \| [Options](https://github.com/stipsan/scroll-into-view-if-needed/tree/ece40bd9143f48caf4b99503425ecb16b0ad8249#options) | false |  |
| size | 设置字段组件的尺寸（仅限 antd 组件） | `small` \| `middle` \| `large` | - |  |
| validateMessages | 验证提示模板，说明[见下](#validatemessages) | [ValidateMessages](https://github.com/ant-design/ant-design/blob/6234509d18bac1ac60fbb3f92a5b2c6a6361295a/components/locale/en_US.ts#L88-L134) | - |  |
| validateTrigger | 统一设置字段触发验证的时机 | string \| string\[] | `onChange` | 4.3.0 |
| wrapperCol | 需要为输入控件设置布局样式时，使用该属性，用法同 labelCol | [object](/components/grid-cn#col) | - |  |
| onFieldsChange | 字段更新时触发回调事件 | function(changedFields, allFields) | - |  |
| onFinish | 提交表单且数据验证成功后回调事件 | function(values) | - |  |
| onFinishFailed | 提交表单且数据验证失败后回调事件 | function({ values, errorFields, outOfDate }) | - |  |
| onValuesChange | 字段值更新时触发回调事件 | function(changedValues, allValues) | - |  |

