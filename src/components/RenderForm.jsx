import React from 'react';
import { useForm } from 'react-hook-form';
import { Form } from 'antd';
import { AntdInput, AntdSwitch, AntdNumber } from './widgets';

const mapperType = {
  Input: AntdInput,
  Switch: AntdSwitch,
  Number: AntdNumber,
};

const RenderForm = ({ schema = {} }) => {
  const { setValue, register } = useForm();
  const { editData = [], config = {} } = schema;

  return (
    <Form colon labelCol={{ span: 10 }} wrapperCol={{ span: 14 }}>
      {editData.length > 0 && <h3>组件属性</h3>}
      {editData.map(({ key, name, type }) => {
        const Type = mapperType[type];
        return (
          <Type key={key} name={key} label={name} setValue={setValue} register={register} defaultValue={config[key]} />
        );
      })}
    </Form>
  );
};

export default RenderForm;
