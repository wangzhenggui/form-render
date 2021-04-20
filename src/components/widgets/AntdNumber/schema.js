const AntdInputSchema = {
  editData: [
    {
      key: 'bordered',
      name: '是否有边框',
      type: 'Switch',
    },
    {
      key: 'defaultValue',
      name: '输入框默认内容',
      type: 'Number',
    },
    {
      key: 'disabled',
      name: '禁用状态',
      type: 'Switch',
    },
    {
      key: 'max',
      name: '最大值',
      type: 'Number',
    },
    {
      key: 'min',
      name: '最小值',
      type: 'Number',
    },
    {
      key: 'keyboard',
      name: '是否启用快捷键盘',
      type: 'Switch',
    },
    {
      key: 'readOnly',
      name: '只读',
      type: 'Switch',
    },
    {
      key: 'step',
      name: '步进器',
      type: 'Number',
    },
  ],
  config: {
    bordered: false,
    defaultValue: 5,
    disabled: false,
    max: 10,
    min: 0,
    keyboard: false,
    readOnly: false,
    step: 1,
  },
};
export default AntdInputSchema;
