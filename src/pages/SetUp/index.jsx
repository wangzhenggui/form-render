import React from 'react';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';
import Left from './Left';
import Container from './Container';
import Right from './Right';
import styles from './index.less';

const SetUp = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className={styles.container}>
        <Left />
        <Container />
        <Right />
      </div>
    </DndProvider>
  );
};

export default SetUp;
