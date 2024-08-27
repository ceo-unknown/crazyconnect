import React from "react";

const ImageGrid = ({ children, className = "", style = {} }) => {
  return (
    <div className={`d-grid ${className}`} style={style}>
      {children}
    </div>
  );
};

export default ImageGrid;
