const AntdSwitchSchema = {
  editData: [
    {
      key: 'defaultChecked',
      name: '初始状态',
      type: 'Switch',
    },
    {
      key: 'disabled',
      name: '是否禁用',
      type: 'Switch',
    },
  ],
  config: {
    defaultChecked: false,
    disabled: false,
  },
};
export default AntdSwitchSchema;
