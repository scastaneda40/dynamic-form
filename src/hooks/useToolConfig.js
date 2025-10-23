// src/hooks/useToolConfig.js
import { useEffect, useState } from "react";
import { fetchToolConfig, sendToolConfig } from "../api/toolService";
import { buildInitialValues, makeUnifiedChange } from "../utils/form";

export function useToolConfig(initialKind = "A") {
  const [which, setWhich] = useState(initialKind);
  const [tool, setTool] = useState(null);
  const [formValues, setFormValues] = useState({});
  const [overlay, setOverlay] = useState(null);

  const handleInputChange = makeUnifiedChange(setFormValues);

  useEffect(() => {
    fetchToolConfig(which).then((cfg) => {
      setTool(cfg);
      setFormValues(buildInitialValues(cfg));
    });
  }, [which]);

  const submit = async () => {
    const payload = {
      id: tool.id,
      name: tool.name,
      settings: { ...formValues },
    };
    setOverlay({ loading: true, message: "Saving your settings..." });
    const res = await sendToolConfig(payload);
    setOverlay({
      loading: false,
      message: res.message,
      json: JSON.stringify(payload, null, 2),
    });
    setTimeout(() => setOverlay(null), 3000);
  };

  return {
    which,
    setWhich,
    tool,
    formValues,
    handleInputChange,
    overlay,
    setOverlay,
    submit,
  };
}
