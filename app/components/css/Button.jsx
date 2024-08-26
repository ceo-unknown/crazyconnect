import React from "react";

const Button = ({ children, className = "", style = {} }) => {
  return (
    <button style={style} className={`btn ${className}`}>
      {children}
    </button>
  );
};

export default Button;
