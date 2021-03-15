import React from 'react';
import { useRecoilValue } from 'recoil';
import Selectors from '../../../../store/selectors';

const CustomizeDataSource = ({ children, selector = '', valuePropName = '', onChange }) => {
  if (!Selectors[selector]) {
    console.error('输入数据源有误，请确认输入无误', selector);
  }
  const data = useRecoilValue(Selectors[selector]);
  return React.cloneElement(children, {
    [valuePropName]: data,
    onChange,
  });
};

export default CustomizeDataSource;
