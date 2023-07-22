// import React from 'react';
import { Select, Space } from 'antd';

const handleChange = (value) => {
  console.log(`selected ${value}`);
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
    {/* <Select
      defaultValue="lucy"
      style={{ width: 120 }}
      disabled
      options={[{ value: 'lucy', label: 'Lucy' }]}
    /> */}
    {/* <Select
      defaultValue="lucy"
      style={{ width: 120 }}
      loading
      options={[{ value: 'lucy', label: 'Lucy' }]}
    /> */}
    {/* <Select
      defaultValue="lucy"
      style={{ width: 120 }}
      allowClear
      options={[{ value: 'lucy', label: 'Lucy' }]}
    /> */}
  </Space>
);

export default SelectLanguage;