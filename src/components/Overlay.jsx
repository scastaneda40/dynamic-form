// src/components/Overlay.jsx
export default function Overlay({ loading, message, json }) {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.4)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
      }}
    >
      <div
        style={{
          background: "white",
          padding: "1.5rem",
          borderRadius: 12,
          width: "90%",
          maxWidth: 480,
          textAlign: "center",
          boxShadow: "0 8px 16px rgba(0,0,0,0.2)",
        }}
      >
        <h3>{loading ? "⏳ Saving..." : "✅ Success"}</h3>
        <p>{message}</p>
        {json && (
          <pre
            style={{
              textAlign: "left",
              background: "#f3f4f6",
              padding: "0.75rem",
              borderRadius: 8,
              overflowX: "auto",
              fontSize: "0.85rem",
              marginTop: "0.75rem",
            }}
          >
            {json}
          </pre>
        )}
      </div>
    </div>
  );
}
