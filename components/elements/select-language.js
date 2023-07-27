// import React from 'react';
import { Select, Space } from 'antd';

const handleChange = (value) => {
  // console.log(`selected ${value}`);
};

const SelectLanguage = () => (
  <Space wrap>
    <Select
      defaultValue="en"
      style={{ width: 50, backgroundColor: "#000" }}
      onChange={handleChange}
      options={[
        { value: 'en', label: 'en' },
        { value: 'uz', label: 'uz' },
        { value: 'ru', label: 'ru' },
        // { value: 'disabled', label: 'Disabled' },
      ]}
    />
   
  </Space>
);

export default SelectLanguage;