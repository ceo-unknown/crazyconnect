import React from "react";

const Button = ({ children, className = "", style = {}, type = "" }) => {
  return (
    <>
      <button type={type} style={style} className={`btn ${className}`}>
        {children}
      </button>
    </>
  );
};

export default Button;
