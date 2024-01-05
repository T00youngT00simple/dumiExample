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
# Input输入框

通过鼠标或键盘输入内容，是最基础的表单域的包装。

### 何时使用

- 需要用户输入表单域内容时。
- 提供组合型输入框，带搜索的输入框，还可以进行大小选择。

### 代码演示
<code src="./codeSec/input.tsx">基本使用</code>


### Config

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| addonAfter | 带标签的 input，设置后置标签 | ReactNode | - |  |
| addonBefore | 带标签的 input，设置前置标签 | ReactNode | - |  |
| allowClear | 可以点击清除图标删除内容 | boolean \| { clearIcon: ReactNode } | - |  |
| bordered | 是否有边框 | boolean | true | 4.5.0 |
| classNames | 语义化结构 class | Record<[SemanticDOM](#input-1), string> | - | 5.4.0 |
| count | 字符计数配置 | [CountConfig](#countconfig) | - | 5.10.0 |
| defaultValue | 输入框默认内容 | string | - |  |
| disabled | 是否禁用状态，默认为 false | boolean | false |  |
| id | 输入框的 id | string | - |  |
| maxLength | 最大长度 | number | - |  |
| prefix | 带有前缀图标的 input | ReactNode | - |  |
| showCount | 是否展示字数 | boolean \| { formatter: (info: { value: string, count: number, maxLength?: number }) => ReactNode } | false | 4.18.0 info.value: 4.23.0 |
| status | 设置校验状态 | 'error' \| 'warning' | - | 4.19.0 |
| styles | 语义化结构 style | Record<[SemanticDOM](#input-1), CSSProperties> | - | 5.4.0 |
| size | 控件大小。注：标准表单内的输入框大小限制为 `middle` | `large` \| `middle` \| `small` | - |  |
| suffix | 带有后缀图标的 input | ReactNode | - |  |
| type | 声明 input 类型，同原生 input 标签的 type 属性，见：[MDN](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/input#属性)(请直接使用 `Input.TextArea` 代替 `type="textarea"`) | string | `text` |  |
| value | 输入框内容 | string | - |  |
| onChange | 输入框内容变化时的回调 | function(e) | - |  |
| onPressEnter | 按下回车的回调 | function(e) | - |  |

> 如果 `Input` 在 `Form.Item` 内，并且 `Form.Item` 设置了 `id` 属性，则 `value` `defaultValue` 和 `id` 属性会被自动设置。

Input 的其他属性和 React 自带的 [input](https://reactjs.org/docs/dom-elements.html#all-supported-html-attributes) 一致。
