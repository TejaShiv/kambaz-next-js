export default function Positions() {
  return (
    <div id="wd-css-positions">
      <h3>Positions</h3>
      <div
        id="wd-css-position-relative"
        style={{ position: "relative", left: "40px", backgroundColor: "lightyellow" }}
      >
        Relative, shifted 40px from its normal spot
      </div>
      <div style={{ position: "relative", height: "100px", border: "1px solid gray", marginTop: "8px" }}>
        <div
          id="wd-css-position-absolute"
          style={{ position: "absolute", top: "20px", right: "20px", backgroundColor: "lightblue" }}
        >
          Absolute, placed against its positioned parent
        </div>
      </div>
      <div
        id="wd-css-position-fixed"
        style={{ position: "fixed", bottom: "10px", right: "10px", backgroundColor: "lightgreen", padding: "4px" }}
      >
        Fixed to the viewport
      </div>
    </div>
  );
}
