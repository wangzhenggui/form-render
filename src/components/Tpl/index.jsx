import React from 'react';
import styles from './index.less';

const Template = ({ name }) => {
  return (
    <div className={styles.card}>
      <span>{name}</span>
    </div>
  );
};

export default Template;
