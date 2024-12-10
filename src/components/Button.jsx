import React from 'react';

const Button = ({ text, className, children, disabled, onClick }) => {
  return (
    <button
      className={`${className} px-4 py-2 rounded-md flex gap-2 items-center justify-center`}
      disabled={disabled}
      onClick={onClick}
    >
      {text}
      {children}
    </button>
  );
};

export default Button;
