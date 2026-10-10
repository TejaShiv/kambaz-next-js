export default function Padding() {
  return (
    <div id="wd-css-paddings">
      <h3>Padding</h3>
      <div className="wd-bordered wd-border-fat wd-margined">No padding</div>
      <div className="wd-bordered wd-border-fat wd-padded wd-margined">Padding on all sides</div>
      <div id="wd-ai-padded" className="wd-ai-padded-top wd-margined">
        Sample box with padding only on the top, a fat red border and a yellow background
      </div>
    </div>
  );
}
