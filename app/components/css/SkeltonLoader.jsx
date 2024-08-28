import React from "react";

const SkeltonLoader = () => {
  return (
    <div className="spinner-border   border-1" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  );
};

export default SkeltonLoader;
