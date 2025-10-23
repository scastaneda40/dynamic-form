// src/utils/form.js

export function buildInitialValues(tool) {
  const init = {};
  for (const section of ["basicSettings", "advancedSettings"]) {
    const group = tool?.[section];
    if (!group) continue;
    for (const [name, spec] of Object.entries(group)) {
      init[name] = spec?.default ?? (spec?.type === "checkbox" ? false : "");
    }
  }
  return init;
}

export function makeUnifiedChange(setter) {
  return (e) => {
    const { name, type, value, checked } = e.target;
    setter((prev) => ({
      ...prev,
      [name]:
        type === "checkbox"
          ? checked
          : type === "range" || type === "number"
          ? Number(value)
          : value,
    }));
  };
}
