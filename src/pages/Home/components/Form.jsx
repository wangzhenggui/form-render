import React from 'react';
import { useRecoilState, RecoilRoot } from 'recoil';
import { isObject } from 'lodash';
import { Spin } from 'antd';
import WidgetMapper from '../widget';
import { formAtom } from '../../../store/atoms';
import styles from './index.less';

const renderForm = (config = {}, key) => {
  const { key: setKey, props = {}, children } = config;
  let { type = '' } = config;
  // 动态Widget引入
  if (type.startsWith('@widget:')) {
    type = type.replace('@widget:', '');
  }
  if (!WidgetMapper[type]) {
    console.warn('输入类型不匹配，请确认输入无误', type);
    return null;
  }
  const Widget = WidgetMapper[type];
  if (Array.isArray(children)) {
    return (
      <Widget {...props} key={setKey || key}>
        {children.map((item, index) => renderForm(item, index))}
      </Widget>
    );
  }
  if (isObject(children)) {
    return (
      <Widget {...props} key={setKey || key}>
        {renderForm(children)}
      </Widget>
    );
  }
  return <Widget {...props} key={setKey || key} />;
};

const CustomizeForm = () => {
  const [formState] = useRecoilState(formAtom);
  return (
    <RecoilRoot>
      <React.Suspense fallback={<Spin loading />}>
        <div className={styles.fromContainer}>{renderForm(formState)}</div>
      </React.Suspense>
    </RecoilRoot>
  );
};

export default CustomizeForm;
