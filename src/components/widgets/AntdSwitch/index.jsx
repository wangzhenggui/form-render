import React, { useEffect } from 'react';
import { Switch, Form } from 'antd';

const AntdSwitch = ({ name, label, setValue, register, ...otherProps }) => {
  const handleChange = (checked) => {
    setValue(name, checked);
  };
  useEffect(() => {
    register(name);
  }, [register, name]);
  return (
    <Form.Item label={label}>
      <Switch {...otherProps} onChange={handleChange} />
    </Form.Item>
  );
};

export default AntdSwitch;
