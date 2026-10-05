export default function Display() {
  return (
    <div id="wd-css-display">
      <h3>Display</h3>
      <div style={{ display: "block", backgroundColor: "lightyellow" }}>Block</div>
      <span style={{ display: "inline", backgroundColor: "lightblue" }}>Inline A</span>
      <span style={{ display: "inline", backgroundColor: "lightgreen" }}>Inline B</span>
      <div style={{ display: "none" }}>You cannot see this</div>
    </div>
  );
}
