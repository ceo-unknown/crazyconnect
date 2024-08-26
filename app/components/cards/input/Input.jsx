import React from "react";

const Input = ({ type, placeholder, className = "", label }) => {
  return (
    <>
      <div className="mb-3">
        <label className="form-label">{label}</label>
        <input
          type={type}
          placeholder={placeholder}
          className={`form-control ${className}`}
        />
      </div>
    </>
  );
};

export default Input;
