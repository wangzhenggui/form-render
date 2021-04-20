import React from 'react';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';
import Board from './Board';

const Wrap = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <Board knightPosition={[0, 0]} />
    </DndProvider>
  );
};
export default Wrap;
