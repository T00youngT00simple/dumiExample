---
nav:
  title: 组件
  order: -1
group:
  title: 反馈
  order: 3
---

# Dialog

### 何时使用
在antd的modal组件基础上，对接受Modal.something的静态方法的提示图标提示框进行封装

### 代码演示

```jsx
/* eslint-disable */
import React, { useEffect, useState, useRef } from 'react';
import { Button } from 'antd';
import CBDESDialog from './componentDemo/CBDESDialog';

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
				visible={dialogVisible}/>
		</div>
	);
}

export default EXample;

```

### Config 

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| visible | 对话框是否可见 | boolean | - |
| title | 对话框标题 | string | - |
| onCancel | 点击遮罩层或右上角叉或取消按钮的回调 | function(e) | - |
| type | 对话框标题icon类型 | String ： info  error  | info |
| message | 对话框文字内容 | string | - |
| footer | 底部内容，当不需要默认底部按钮时，可以设为null或者不传 | ReactNode | Null |