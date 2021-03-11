import { atom } from 'recoil';

export const autoCompleteOption = atom({
  key: 'AutoCompleteOption',
  default: [],
});

export const formAtom = atom({
  key: 'FormAtom',
  default: {
    type: 'form',
    props: {
      colon: true,
      labelCol: { span: 8 },
      wrapperCol: { span: 16 },
      onFinish: (values) => console.log(values),
    },
    children: [
      {
        type: 'form.item',
        props: {
          label: '姓名',
          name: 'useName',
        },
        children: {
          type: 'input',
          props: {
            maxLength: 10,
          },
        },
      },
      {
        type: 'form.item',
        props: {
          label: '密码',
          name: 'password',
        },
        children: {
          type: 'input.password',
          key: 'password',
          props: {
            visibilityToggle: true,
          },
        },
      },
      {
        type: 'form.item',
        props: {
          label: '学生姓名',
          name: 'studentName',
        },
        children: {
          type: 'select',
          props: {},
          children: {
            type: 'select.option',
            props: {},
            children: {
              type: '@widget:student',
              props: {},
            },
            data: '@data:studentName',
          },
        },
      },
      {
        type: 'form.item',
        props: {
          name: 'remember',
          wrapperCol: { offset: 8, span: 16 },
          valuePropName: 'checked', // 这个必须有，不加会获取不到值
        },
        children: {
          type: 'checkbox',
          props: {},
          children: {
            type: 'string',
            props: {
              text: 'Remember me!',
            },
          },
        },
      },
      {
        type: 'form.item',
        props: {
          wrapperCol: { offset: 8, span: 16 },
          name: 'switch',
        },
        children: {
          type: 'switch',
          props: {},
        },
      },
      {
        type: 'form.item',
        props: {
          wrapperCol: { offset: 8, span: 16 },
        },
        children: {
          type: 'button',
          props: {
            type: 'primary',
            htmlType: 'submit',
          },
          children: {
            type: 'string',
            props: {
              text: 'Click me!',
            },
          },
        },
      },
    ],
  },
});

export const dataSchemaAtom = atom({
  key: 'DataSchema',
  default: {
    name: '',
    password: '',
  },
});
