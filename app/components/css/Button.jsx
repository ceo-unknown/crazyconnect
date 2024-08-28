import React from "react";

const Button = ({
  children,
  className = "",
  style = {},
  type = "",
  onClick,
}) => {
  return (
    <>
      <button
        type={type}
        style={style}
        className={`btn ${className}`}
        onClick={() => onClick}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
