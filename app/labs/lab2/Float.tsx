export default function Float() {
  return (
    <div id="wd-float-divs">
      <h3>Float</h3>
      <div style={{ float: "left", width: "100px", height: "60px", backgroundColor: "lightyellow" }}>
        Floated left
      </div>
      <div style={{ float: "right", width: "100px", height: "60px", backgroundColor: "lightblue" }}>
        Floated right
      </div>
      <p>
        This text wraps around the floated boxes above, which is the original
        purpose of float before flex and grid existed.
      </p>
      <div style={{ clear: "both" }}></div>
    </div>
  );
}
