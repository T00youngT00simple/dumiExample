import React, { useEffect, useState, useRef } from 'react';
import { Button } from 'antd';
import CBDESOutput from '../componentDemo/CBDESOutput';

function Output(props) {
  const logOutputRef = useRef(null);

  const setLogData = () => {
    logOutputRef.current.setLogDataInfo("测试日志");
  }

  return (
    <div>
      <Button onClick={setLogData}>写日志</Button>
      <div>
        <CBDESOutput ref={logOutputRef} />
      </div>
    </div>
  );
}

export default Output;
