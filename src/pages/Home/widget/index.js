import { Form, Input, Select, Checkbox, Switch, Button } from 'antd';
import Student from './Student';
import Card from './Card';
import CustomizeString from './CustomizeString';
import CustomizeDataSource from './CustomizeDataSource';

export default {
  form: Form,
  input: Input,
  select: Select,
  checkbox: Checkbox,
  switch: Switch,
  button: Button,
  'form.item': Form.Item,
  'input.password': Input.Password,
  'select.option': Select.Option,
  string: CustomizeString,
  source: CustomizeDataSource,
  student: Student,
  card: Card,
};
