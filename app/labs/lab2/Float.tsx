export default function Float() {
  return (
    <div id="wd-float-divs">
      <h3>Float</h3>
      <div className="wd-float-left wd-dimension-square wd-bg-color-green wd-fg-color-white">
        Floated left
      </div>
      <div id="wd-float-right" className="wd-float-right wd-dimension-square wd-bg-color-blue wd-fg-color-white">
        Floated right
      </div>
      <div id="wd-ai-float" className="wd-float-right wd-dimension-square wd-bg-color-red wd-fg-color-white">
        Sample float
      </div>
      <p>
        This text wraps around the floated boxes, which is what float was
        originally designed to do before flex and grid existed.
      </p>
      <div id="wd-float-done" className="wd-float-done"></div>
    </div>
  );
}
