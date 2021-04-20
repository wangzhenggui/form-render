import React from 'react';
import { Input, Button, Form } from 'antd';
import { useForm, Controller } from 'react-hook-form';
import { AntdInput } from '../../components/widgets';

const UseFormDemo = () => {
  const { handleSubmit, control, setValue, register } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Form.Item label="姓名">
        <Controller as={Input} name="useName" control={control} defaultValue="" />
      </Form.Item>
      <Form.Item label="学号">
        <Controller as={Input} name="useNumber" control={control} defaultValue="" />
      </Form.Item>
      <Form.Item label="密码">
        <Controller as={Input} name="password" control={control} defaultValue="" />
      </Form.Item>
      <AntdInput name="name" label="名称" setValue={setValue} register={register} />
      <Button htmlType="submit">Submit</Button>
    </form>
  );
};

export default UseFormDemo;
