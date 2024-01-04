/* eslint-disable */
import React, { useEffect, useState, useRef } from 'react';
import { Button } from 'antd';
import CBDESDialog from '../componentDemo/CBDESDialog';

function EXample(props) {
  const [dialogVisible, setDialogVisible] = useState(null);
  const [dialogType, setDialogType] = useState(null);

  const constructDialogTitle = () => {
    return dialogType == 'info' ? '完成' : '失败';
  };

  const constructDialogMessage = () => {
    return dialogType == 'info' ? '代码已成功生成' : '代码生成失败';
  };

  const openDialog = () => {
    setDialogVisible(true);
    setDialogType('info');
  };

  const handleCancel = () => {
    setDialogVisible(false);
  }

  return (
    <div>
      <Button onClick={openDialog}>提示窗口</Button>
      <CBDESDialog
        footer={null}
        title={constructDialogTitle()}
        type={dialogType}
        handleCancel={handleCancel}
        message={constructDialogMessage()}
        visible={dialogVisible} />
    </div>
  );
}

export default EXample;