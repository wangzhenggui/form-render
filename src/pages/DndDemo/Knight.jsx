import React from 'react';
import { DragSource, DragPreviewImage } from 'react-dnd';
import { knightImage } from './Image';

// export default function Knight() {
//   return <span style={{ fontSize: '50px' }}>♘</span>;
// }

const knightStyle = {
  fontSize: 40,
  fontWeight: 'bold',
  cursor: 'move',
};
const Knight = ({ connectDragSource, connectDragPreview, isDragging }) => {
  return (
    <>
      <DragPreviewImage connect={connectDragPreview} src={knightImage} />
      <div
        ref={connectDragSource}
        style={{
          ...knightStyle,
          opacity: isDragging ? 0.5 : 1,
        }}
      >
        ♘
      </div>
    </>
  );
};
export default DragSource(
  'knight',
  {
    beginDrag: (props, monitor) => {
      console.warn('开始拽动', props, monitor);
      return {};
    },
    endDrag: () => {
      console.warn('结束拽动');
      return {};
    },
    canDrag: () => {
      console.warn('当前可以拖拽');
      return {};
    },
    isDragging: () => {
      console.warn('正在拖拽');
      return {};
    },
  },
  (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging(),
  })
)(Knight);
