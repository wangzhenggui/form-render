import React from 'react';
import { FORM_WIDGET_TEMPLATE } from '../../../common/constant';
import Drag from '../../../components/Drag';
import styles from './index.less';

const Left = () => {
  return (
    <div className={styles.leftWrap}>
      <h3>组件名称</h3>
      <div className={styles.templatesLayout}>
        {FORM_WIDGET_TEMPLATE.map((item) => {
          return <Drag item={item} key={item.type} />;
        })}
      </div>
    </div>
  );
};

export default Left;
