import React from "react";

const CheckboxInput = ({ label, ...props }) => {
  return (
    <div>
      <label htmlFor={props.id}>
        <input type="checkbox" {...props} />
        {label}
      </label>
    </div>
  );
};

export default CheckboxInput;
