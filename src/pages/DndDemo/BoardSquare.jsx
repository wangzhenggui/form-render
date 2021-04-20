import React from 'react';
import { DropTarget } from 'react-dnd';
import Square from './Square';

const boardSquareStyle = {
  position: 'relative',
  width: '100%',
  height: '100%',
};
const BoardSquare = ({ x, y, connectDropTarget, children }) => {
  const black = (x + y) % 2 === 1;
  return connectDropTarget(
    // eslint-disable-next-line jsx-a11y/aria-role
    <div role="Space" data-testid={`(${x},${y})`} style={boardSquareStyle}>
      <Square black={black}>{children}</Square>
    </div>
  );
};
export default DropTarget(
  'knight',
  {
    canDrop: () => {
      return true;
      // console.warn('canDrop', props);
    },
    drop: (props) => {
      console.warn('drop', props);
    },
  },
  (connect, monitor) => {
    return {
      connectDropTarget: connect.dropTarget(),
      isOver: !!monitor.isOver(),
      canDrop: !!monitor.canDrop(),
    };
  }
)(BoardSquare);
