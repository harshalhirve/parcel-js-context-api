import React from "react";

const Button = ({ type, name, value, className, disabled }) => {
  return (
    <input
      type={type}
      name={name}
      value={value}
      className={className}
      disabled={disabled}
    />
  );
};

export default Button;
