import React from "react";

const TextBox = ({
  type,
  name,
  value,
  maxLength,
  className,
  onChange,
  required
}) => {
  return (
    <input
      type={type}
      name={name}
      value={value}
      maxLength={maxLength}
      className={className}
      onChange={onChange}
      required={required}
    />
  );
};

export default TextBox;
