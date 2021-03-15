### 静态表单
```
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
}
```
定义FieldElement类型
- type: 表单元素类型
- props: 表单元素属性
- children: 子元素；一般只有`type=form`时，这个字段是数组，`type=form.item`时，一般为对象类型【这个是因为antd类型校验机制导致这么设计的】,对于Button/Switch这种内部需要描述文本节点时，通过定义`type=string`来定义文本节点


### 动态表单
```
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
```
表单中元素的数据源不是静态固定的，需要绑定数据源
- 我们自定义了一个DataSource的widget组件，通过`type='@widget:source'`来包裹在需要动态数据源的元素外层
- props中绑定一个selector来绑定当前组件对应的数据源
- props中定义valuePropName,来将数据和组件直接之间的属性关联
- 该widget组件会手动实现双向绑定，对于消费者而言，不用去考虑


### 自定义组件
```
# 配置文件
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
}

const Card = ({ onChange }) => {
  const handleClick = () => {
    onChange('已点击');
  };
  return <Button onClick={handleClick}>点击</Button>;
};

export default Card;
```
通过`@widget:`来定义我们的自定义组件,将onChange函数注入，需要自己在自定义组件中实现双向绑定


