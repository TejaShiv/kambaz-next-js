export default function Corners() {
  return (
    <div id="wd-css-corners">
      <h3>Corners</h3>
      <div style={{ border: "3px solid purple", borderRadius: "0px", padding: "10px", marginBottom: "8px" }}>
        Square corners
      </div>
      <div style={{ border: "3px solid purple", borderRadius: "16px", padding: "10px", marginBottom: "8px" }}>
        Rounded corners
      </div>
      <div style={{ border: "3px solid purple", borderRadius: "50%", padding: "10px", width: "120px" }}>
        Circle
      </div>
    </div>
  );
}
