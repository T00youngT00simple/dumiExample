---
nav:
  title: 组件
  order: -1
group:
  title: 反馈
  order: 3
---
# CBDESNotification全局提示

### 何时使用
全局的信息提示

### 代码演示
<code src="./codeSec/notification.jsx">notification代码演示</code>

### API 

| 属性 | 参数 | 说明 |
| --- | --- | --- |
| open | (params:  message?: string desc?: string  duration?: number) | 打开提示 |

### Config 

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| message | 全局提示标题 | string | - |
| description | 全局提示框内容 class | string | - |
| type | 提示框左侧图标类型 | String ： info  success  warning  error  | info |
| footer | 自定义按钮 | ReactNode | null |

