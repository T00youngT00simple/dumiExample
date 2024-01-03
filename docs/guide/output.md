---
nav:
  title: 组件
  order: -1
group:
  title: 数据展示
  order: 2
---

### 何时使用
基于xterm.js封装，完成仅限输出的日志显示功能

### 代码演示
```jsx

/* eslint-disable */
import React, { useEffect, useState, useRef } from 'react';
import { Button } from 'antd';
import CBDESOutput from './componentDemo/CBDESOutput';

function EXample(props) {
  const logOutputRef = useRef(null);

  const setLogData = () => {
    logOutputRef.current.setLogDataInfo("测试日志");
  }

  return (
    <div>
      <Button onClick={setLogData}>写日志</Button>
      <div>
        <CBDESOutput ref={logOutputRef}/>
      </div>
    </div>
  );
}

export default EXample;


```