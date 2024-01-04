import React, { useEffect, useState, useRef } from 'react';
import { Button } from 'antd';
import CBDESNotification from '../componentDemo/CBDESNotification';

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
        description='测试description' />
    </div>
  );
}

export default EXample;