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

# CBDESDialog提示框

### 何时使用
在antd的modal组件基础上，对接受Modal.something的静态方法的提示图标提示框进行封装

### 代码演示
<code src="./codeSec/dialog.jsx">dialog代码演示</code>

### Config 

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| visible | 对话框是否可见 | boolean | - |
| title | 对话框标题 | string | - |
| onCancel | 点击遮罩层或右上角叉或取消按钮的回调 | function(e) | - |
| type | 对话框标题icon类型 | String ： info  error  | info |
| message | 对话框文字内容 | string | - |
| footer | 底部内容，当不需要默认底部按钮时，可以设为null或者不传 | ReactNode | Null |