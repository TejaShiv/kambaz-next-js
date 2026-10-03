export default function GridLayout() {
  return (
    <div id="wd-css-grid-layout">
      <h3>Grid layout</h3>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "8px" }}>
        <div style={{ backgroundColor: "lightyellow", padding: "10px" }}>One</div>
        <div style={{ backgroundColor: "lightblue", padding: "10px" }}>Two</div>
        <div style={{ backgroundColor: "lightgreen", padding: "10px" }}>Three</div>
        <div style={{ backgroundColor: "lightcoral", padding: "10px" }}>Four</div>
        <div style={{ backgroundColor: "lavender", padding: "10px" }}>Five</div>
        <div style={{ backgroundColor: "wheat", padding: "10px" }}>Six</div>
      </div>
    </div>
  );
}
