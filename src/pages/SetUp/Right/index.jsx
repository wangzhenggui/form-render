import React from 'react';
import RenderForm from '../../../components/RenderForm';
import schemas from '../../../components/widgets/schemas';
import styles from './index.less';

const Right = () => {
  return (
    <div className={styles.rightWrap}>
      <RenderForm schema={schemas.AntdNumberSchema} />
    </div>
  );
};

export default Right;
