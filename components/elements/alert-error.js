import React from 'react';
import { Alert, Button, Space } from 'antd';
const AlertComponentErr = () => (
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
    
      showIcon
      message="Incorrect information entered "
      type="error"
      closable
    />

  </Space>
);
export default AlertComponentErr;