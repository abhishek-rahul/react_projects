function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div
      role="alert"
      style={{
        padding: "20px",
        background: "#ffe6e6",
        borderRadius: "8px",
        color: "crimson",
        marginBottom: "20px",
      }}
    >
      <h4>Something went wrong 😢</h4>
      <pre style={{ whiteSpace: "normal" }}>{error.message}</pre>

      <button
        onClick={resetErrorBoundary}
        style={{
          padding: "6px 12px",
          background: "crimson",
          color: "white",
          border: "none",
          borderRadius: "4px",
          marginTop: "10px",
          cursor: "pointer",
        }}
      >
        Try Again
      </button>
    </div>
  );
}
export default ErrorFallback;