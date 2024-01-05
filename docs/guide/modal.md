---
nav:
  title: 组件
  order: -1
group:
  title: 反馈
  order: 3
demo:
  cols: 2
---
# Modal对话框
模态对话框。

### 何时使用

需要用户处理事务，又不希望跳转页面以致打断工作流程时，可以使用 `Modal` 在当前页面正中打开一个浮层，承载相应的操作。

### 代码演示
<code src="./codeSec/modal.tsx">基本使用</code>

## Config

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| afterClose | Modal 完全关闭后的回调 | function | - |  |
| classNames | 配置弹窗内置模块的 className | `header?: string; body?: string; footer?: string; mask?: string; wrapper?: string;` | - |  |
| styles | 配置弹窗内置模块的 style | `header?: CSSProperties; body?: CSSProperties; footer?: CSSProperties; mask?: CSSProperties;` | - | 5.10.0 |
| cancelButtonProps | cancel 按钮 props | [ButtonProps](/components/button-cn#api) | - |  |
| cancelText | 取消按钮文字 | ReactNode | `取消` |  |
| centered | 垂直居中展示 Modal | boolean | false |  |
| closeIcon | 自定义关闭图标。5.7.0：设置为 `null` 或 `false` 时隐藏关闭按钮 | boolean \| ReactNode | &lt;CloseOutlined /> |  |
| confirmLoading | 确定按钮 loading | boolean | false |  |
| destroyOnClose | 关闭时销毁 Modal 里的子元素 | boolean | false |  |
| focusTriggerAfterClose | 对话框关闭后是否需要聚焦触发元素 | boolean | true | 4.9.0 |
| footer | 底部内容，当不需要默认底部按钮时，可以设为 `footer={null}` | (params:[footerRenderParams](/components/modal-cn#footerrenderparams))=> React.ReactNode \| React.ReactNode | (确定取消按钮) | 5.9.0 |
| forceRender | 强制渲染 Modal | boolean | false |  |
| getContainer | 指定 Modal 挂载的节点，但依旧为全屏展示，`false` 为挂载在当前位置 | HTMLElement \| () => HTMLElement \| Selectors \| false | document.body |  |
| keyboard | 是否支持键盘 esc 关闭 | boolean | true |  |
| mask | 是否展示遮罩 | boolean | true |  |
| maskClosable | 点击蒙层是否允许关闭 | boolean | true |  |
| modalRender | 自定义渲染对话框 | (node: ReactNode) => ReactNode | - | 4.7.0 |
| okButtonProps | ok 按钮 props | [ButtonProps](/components/button-cn#api) | - |  |
| okText | 确认按钮文字 | ReactNode | `确定` |  |
| okType | 确认按钮类型 | string | `primary` |  |
| style | 可用于设置浮层的样式，调整浮层位置等 | CSSProperties | - |  |
| title | 标题 | ReactNode | - |  |
| open | 对话框是否可见 | boolean | - |  |
| width | 宽度 | string \| number | 520 |  |
| wrapClassName | 对话框外层容器的类名 | string | - |  |
| zIndex | 设置 Modal 的 `z-index` | number | 1000 |  |
| onCancel | 点击遮罩层或右上角叉或取消按钮的回调 | function(e) | - |  |
| onOk | 点击确定回调 | function(e) | - |  |
| afterOpenChange | 打开和关闭 Modal 时动画结束后的回调 | (open: boolean) => void | - | 5.4.0 |
