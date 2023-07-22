import React from 'react';
import { Alert, Button, Space } from 'antd';
const AlertComponent = () => (
  <Space
    direction="vertical"
    style={{
      width: '300px',
      position:'fixed',
      right:'20px',
      height:'300px',
      top:'90px',
      zIndex: '99999999999'
    }}
  >
    <Alert
      message="Information was sent successfully"
      type="success"
      showIcon
     
      closable
    />
  </Space>
);
export default AlertComponent;