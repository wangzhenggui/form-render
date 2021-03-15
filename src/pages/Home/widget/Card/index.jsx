import React from 'react';
import { Button } from 'antd';

const Card = ({ onChange }) => {
  const handleClick = () => {
    onChange('已点击');
  };
  return <Button onClick={handleClick}>点击</Button>;
};

export default Card;
