import React from "react";
import { Modal } from "antd";

const ErrorModal = ({ visible, error, onClose }) => {
  return (
    <Modal
      title="Error"
      visible={visible}
      onOk={onClose}
      onCancel={onClose}
      okText="Confirm"
      cancelText="Cancel"
      centered
    >
      <p>{error}</p>
    </Modal>
  );
};

export default ErrorModal;
