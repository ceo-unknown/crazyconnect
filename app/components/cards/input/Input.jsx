import React from "react";

const Input = ({
  type,
  placeholder,
  className = "",
  label,
  name = null,
  value = "",
}) => {
  return (
    <>
      <div className="mb-2">
        <label className="form-label small">{label}</label>
        <input
          type={type}
          placeholder={placeholder}
          className={`form-control ${className}`}
          name={name}
          value={value}
        />
      </div>
    </>
  );
};

export default Input;
