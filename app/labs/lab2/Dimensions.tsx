export default function Dimensions() {
  return (
    <div id="wd-css-dimensions">
      <h3>Dimensions</h3>
      <div style={{ width: "200px", height: "60px", backgroundColor: "lightgreen" }}>
        Fixed 200 by 60
      </div>
      <div style={{ width: "50%", height: "60px", backgroundColor: "lightcoral", marginTop: "8px" }}>
        Half the width of its container
      </div>
    </div>
  );
}
