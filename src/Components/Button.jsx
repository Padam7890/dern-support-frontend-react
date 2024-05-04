// Button.js

import React from 'react';

const Button = ({type, onClick, className, children }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`focus:outline-none text-white focus:ring-4 focus:ring-pink-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;