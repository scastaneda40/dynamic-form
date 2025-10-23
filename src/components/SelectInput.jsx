import React from "react";

const SelectInput = ({ label, options = [], ...props }) => {
  return (
    <div>
      {label && <label htmlFor={props.id}>{label}</label>}
      <select {...props}>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectInput;
