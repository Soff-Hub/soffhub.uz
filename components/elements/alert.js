import React from 'react';
import { Alert, Button, Space } from 'antd';
import { t } from 'i18next';
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
      message={t("C_vacansy_alert_success")}
      type="success"
      showIcon
     
      closable
    />
  </Space>
);
export default AlertComponent;