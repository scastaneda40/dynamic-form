// src/App.jsx
import Field from "./components/Field";
import Overlay from "./components/Overlay";
import { useToolConfig } from "./hooks/useToolConfig";
import "./App.css";

export default function App() {
  const {
    which,
    setWhich,
    tool,
    formValues,
    handleInputChange,
    overlay,
    submit,
  } = useToolConfig("A");

  if (!tool) return <div>Loading…</div>;

  return (
    <>
      <div className="page-wrapper">
        <form
          className="form-container"
          onSubmit={(e) => {
            e.preventDefault();
            submit();
          }}
        >
          <h2>{tool.name}</h2>

          <div style={{ display: "flex", gap: 8 }}>
            <button type="button" onClick={() => setWhich("A")}>
              Load Config A
            </button>
            <button type="button" onClick={() => setWhich("B")}>
              Load Config B
            </button>
          </div>

          {["basicSettings", "advancedSettings"].map(
            (section) =>
              tool[section] &&
              Object.entries(tool[section]).map(([name, spec]) => (
                <Field
                  key={name}
                  name={name}
                  spec={spec}
                  value={formValues[name]}
                  onChange={handleInputChange}
                />
              ))
          )}

          <button type="submit">Submit</button>
        </form>
        {overlay && <Overlay {...overlay} />}
      </div>
    </>
  );
}
