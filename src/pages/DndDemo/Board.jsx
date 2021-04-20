import React from 'react';
import BoardSquare from './BoardSquare';
import Knight from './Knight';

function renderSquare(i, [knightX, knightY]) {
  const x = i % 8;
  const y = Math.floor(i / 8);
  const isKnightHere = x === knightX && y === knightY;
  const piece = isKnightHere ? <Knight /> : null;

  return (
    <div key={i} style={{ width: '12.5%', height: '12.5%' }}>
      <BoardSquare x={x} y={y}>
        {piece}
      </BoardSquare>
    </div>
  );
}

export default function Board({ knightPosition }) {
  const squares = [];
  for (let i = 0; i < 64; i += 1) {
    squares.push(renderSquare(i, knightPosition));
  }

  return (
    <div
      style={{
        width: '100%',
        height: '500px',
        display: 'flex',
        flexWrap: 'wrap',
      }}
    >
      {squares}
    </div>
  );
}
