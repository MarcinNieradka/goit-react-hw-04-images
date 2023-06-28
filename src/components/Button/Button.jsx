import clsx from 'clsx';
import React from 'react';

const Button = ({ onClick }) => {
  return (
    <button className={clsx('Button')} type="button" onClick={onClick}>
      Load more
    </button>
  );
};

export default Button;
