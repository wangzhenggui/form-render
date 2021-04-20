import React, { useEffect } from 'react';
import { InputNumber, Form } from 'antd';

const AntdNumber = ({ name, label, setValue, register, ...otherProps }) => {
  const handleChange = (value) => {
    setValue(name, value);
  };
  useEffect(() => {
    register(name);
  }, [register, name]);
  return (
    <Form.Item label={label}>
      <InputNumber {...otherProps} onChange={handleChange} />
    </Form.Item>
  );
};

export default AntdNumber;
