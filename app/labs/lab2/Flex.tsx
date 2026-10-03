export default function Flex() {
  return (
    <div id="wd-css-flex">
      <h3>Flex</h3>
      <div style={{ display: "flex", gap: "8px" }}>
        <div style={{ flex: 1, backgroundColor: "lightyellow", padding: "10px" }}>Grows</div>
        <div style={{ flex: 2, backgroundColor: "lightblue", padding: "10px" }}>Grows twice as much</div>
        <div style={{ backgroundColor: "lightgreen", padding: "10px" }}>Fixed to content</div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", marginTop: "8px" }}>
        <div style={{ backgroundColor: "wheat", padding: "10px" }}>Left</div>
        <div style={{ backgroundColor: "wheat", padding: "10px" }}>Center</div>
        <div style={{ backgroundColor: "wheat", padding: "10px" }}>Right</div>
      </div>
    </div>
  );
}
