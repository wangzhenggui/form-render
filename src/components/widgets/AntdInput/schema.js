const AntdInputSchema = {
  editData: [
    {
      key: 'allowClear',
      name: '清除图标',
      type: 'Switch',
    },
    {
      key: 'bordered',
      name: '是否有边框',
      type: 'Switch',
    },
    {
      key: 'defaultValue',
      name: '输入框默认内容',
      type: 'Input',
    },
    {
      key: 'disabled',
      name: '禁用状态',
      type: 'Switch',
    },
    {
      key: 'maxLength',
      name: '最大长度',
      type: 'Number',
    },
  ],
  config: {
    allowClear: 'left',
    bordered: false,
    defaultValue: '爱你',
    disabled: false,
    maxLength: 10,
  },
};
export default AntdInputSchema;
