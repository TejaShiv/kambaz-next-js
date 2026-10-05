export default function Zindex() {
  return (
    <div id="wd-z-index">
      <h3>Z index</h3>
      <div style={{ position: "relative", height: "120px" }}>
        <div style={{ position: "absolute", top: 0, left: 0, width: "120px", height: "80px", backgroundColor: "lightblue", zIndex: 1 }}>
          Behind
        </div>
        <div style={{ position: "absolute", top: "20px", left: "40px", width: "120px", height: "80px", backgroundColor: "lightcoral", zIndex: 2 }}>
          In front
        </div>
      </div>
    </div>
  );
}
