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
# Checkbox选择框
多选框。

### 何时使用

- 在一组可选项中进行多项选择时；
- 单独使用可以表示两种状态之间的切换，和 `switch` 类似。区别在于切换 `switch` 会直接触发状态改变，而 `checkbox` 一般用于状态标记，需要和提交操作配合。

### 代码演示
<code src="./codeSec/checkbox.tsx">基本使用</code>

### Config

#### Checkbox

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| autoFocus | 自动获取焦点 | boolean | false |  |
| checked | 指定当前是否选中 | boolean | false |  |
| defaultChecked | 初始是否选中 | boolean | false |  |
| disabled | 失效状态 | boolean | false |  |
| indeterminate | 设置 indeterminate 状态，只负责样式控制 | boolean | false |  |
| onChange | 变化时的回调函数 | (e: CheckboxChangeEvent) => void | - |  |

#### Checkbox Group

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| defaultValue | 默认选中的选项 | (string \| number)\[] | \[] |  |
| disabled | 整组失效 | boolean | false |  |
| name | CheckboxGroup 下所有 `input[type="checkbox"]` 的 `name` 属性 | string | - |  |
| options | 指定可选项 | string\[] \| number\[] \| Option\[] | \[] |  |
| value | 指定选中的选项 | (string \| number \| boolean)\[] | \[] |  |
| onChange | 变化时的回调函数 | (checkedValue: CheckboxValueType[]) => void | - |  |
