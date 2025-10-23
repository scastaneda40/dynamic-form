import React from "react";

const RangeInput = ({ label, ...props }) => {
  return (
    <div>
      {label && <label htmlFor={props.id}>{label}</label>}
      <input type="range" {...props} />
    </div>
  );
};

export default RangeInput;
