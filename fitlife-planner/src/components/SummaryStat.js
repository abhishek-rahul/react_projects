function SummaryStat({ label, value }) {

  return (
    <div style={{ padding: "20px", fontFamily: "Serif" }}>
      {/* Label + Value */}
      <p><strong>Label:</strong> {label}</p>
      <p><strong>Value:</strong> {value}</p>
    </div>
  );
}
export default SummaryStat;