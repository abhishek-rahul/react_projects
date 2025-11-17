import Card from "../ui/Card";
function Section({ title, children }) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: 12,
        padding: 16,
        marginBottom: 16,
      }}
    >
      <h2 style={{ marginTop: 0 }}>{title}</h2>
      <Card>{children}</Card>
    </div>
  );
}

export default Section;
