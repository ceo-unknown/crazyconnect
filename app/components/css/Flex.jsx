import React from "react";

const Flex = ({ children, className = "", style = {} }) => {
  return (
    <div className={`d-flex ${className}`} style={style}>
      {children}
    </div>
  );
};

export default Flex;
