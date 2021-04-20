import React, { useMemo, memo } from 'react';
import { useDrag } from 'react-dnd';
import schema from '../widgets/schemas';
import Template from '../Tpl';

const Drag = memo((props) => {
  const { item = {} } = props;
  const [{ isDragging }, drag] = useDrag({
    item: {
      type: item.type,
      config: schema[item.schemasType].config,
      // h: item.h,
      editableEl: schema[item.schemasType].editData,
      // category: item.category,
      // x: item.x || 0,
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const containerStyle = useMemo(
    () => ({
      opacity: isDragging ? 0.4 : 1,
      cursor: 'move',
      height: '140px',
    }),
    [isDragging]
  );
  return (
    <div style={{ ...containerStyle }} ref={drag}>
      <Template />
    </div>
  );
});

export default Drag;
