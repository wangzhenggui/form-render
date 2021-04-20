import React, { useEffect } from 'react';
import { Input, Form } from 'antd';

const AntdInput = ({ name, label, setValue, register, ...otherProps }) => {
  const handleChange = (e) => {
    setValue(name, e.target.value);
  };
  useEffect(() => {
    register(name);
  }, [register, name]);
  return (
    <Form.Item label={label}>
      <Input {...otherProps} onChange={handleChange} />
    </Form.Item>
  );
};

export default AntdInput;
