import React from "react";

const NumberInput = ({ label, ...props }) => {
  return (
    <div>
      {label && <label htmlFor={props.id}>{label}</label>}
      <input type="number" {...props} />
    </div>
  );
};

export default NumberInput;
