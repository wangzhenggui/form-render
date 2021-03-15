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
      labelCol: { span: 4 },
      wrapperCol: { span: 20 },
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
          type: '@widget:source',
          props: {
            selector: 'studentName',
            valuePropName: 'options',
          },
          children: {
            type: 'select',
            props: {},
          },
        },
      },
      {
        type: 'form.item',
        props: {
          label: '自定义组件',
          name: 'customizeComponent',
        },
        children: {
          type: '@widget:card',
          props: {},
        },
      },
      {
        type: 'form.item',
        props: {
          name: 'remember',
          wrapperCol: { offset: 4, span: 20 },
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
          wrapperCol: { offset: 4, span: 20 },
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
          wrapperCol: { offset: 4, span: 20 },
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
