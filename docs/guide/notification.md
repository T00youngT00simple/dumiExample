---
nav:
  title: 组件
  order: -1
group:
  title: 反馈
  order: 3
---
# Notification

### 何时使用
全局的信息提示

### 代码演示
```jsx
import React, { useEffect, useState, useRef } from 'react';
import { Button } from 'antd';
import CBDESNotification from './componentDemo/CBDESNotification';

function EXample(props) {
  const notificationRef = useRef(null);

  const openNotification = () => {
    notificationRef.current.open();
  };

  return (
    <div className='iconMoudleSection'>
      <Button onClick={openNotification}>全局提示</Button>
      <CBDESNotification
        ref={notificationRef}
        type='info'
        message='测试message'
        description='测试description'/>
    </div>
  );
}

export default EXample;
```


| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| message | 全局提示标题 | string | - |
| description | 全局提示框内容 class | string | - |
| type | 提示框左侧图标类型 | String ： info  success  warning  error  | info |
| footer | 自定义按钮 | ReactNode | null |

