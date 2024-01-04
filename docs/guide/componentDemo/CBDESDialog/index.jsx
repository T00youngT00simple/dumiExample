import React, { useEffect, useState } from "react";
import { Modal } from "antd";
import './index.less'
import { InfoCircleFilled, CloseCircleFilled } from "@ant-design/icons";

function CBDESDialog(props) {
  const [visible, setVisible] = useState(props.visible);

  const handleOk = () => {
    setVisible(false);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  useEffect(() => {
    setVisible(props.visible);
  }, [props.visible]);

  const renderDialogTitle = () => {
    const titleIcon =
      props.type == "info" ? (
        <InfoCircleFilled className="titleIcon infoIcon" />
      ) : (
        <CloseCircleFilled className="titleIcon errorIcon" />
      );
    return (
      <>
        {titleIcon}
        <span className="dialogTitle">{props.title}</span>
      </>
    );
  };

  return (
    <Modal
      className="cbdesDialog"
      width={400}
      open={visible}
      title={renderDialogTitle()}
      onOk={props.handleOk || handleOk}
      onCancel={props.handleCancel || handleCancel}
      footer={props.footer || null}
    >
      <div className="dialogMessage">{props.message}</div>
    </Modal>
  );
}
export default CBDESDialog;
