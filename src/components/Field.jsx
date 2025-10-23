// src/components/Field.jsx
import RangeInput from "./RangeInput";
import SelectInput from "./SelectInput";
import CheckboxInput from "./CheckboxInput";
import NumberInput from "./NumberInput";

const registry = {
  slider: RangeInput,
  select: SelectInput,
  checkbox: CheckboxInput,
  number: NumberInput,
};

export default function Field({ name, spec, value, onChange }) {
  const Comp = registry[spec.type];
  if (!Comp) {
    // fallback text input
    return (
      <div>
        {spec.label && <label htmlFor={name}>{spec.label}</label>}
        <input id={name} name={name} value={value ?? ""} onChange={onChange} />
      </div>
    );
  }

  const common = { id: name, name, label: spec.label, value, onChange };
  const extra =
    spec.type === "slider"
      ? { min: spec.min, max: spec.max }
      : spec.type === "select"
      ? { options: spec.options || [] }
      : spec.type === "checkbox"
      ? { checked: !!value }
      : {};

  return <Comp {...common} {...extra} />;
}
