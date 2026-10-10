export default function Positions() {
  return (
    <div id="wd-css-positions">
      <h3>Positions</h3>

      <h4>Relative</h4>
      <div id="wd-css-position-relative" className="wd-pos-relative-nudge wd-dimension-landscape wd-bg-color-green wd-fg-color-white">
        Relative
      </div>
      <div id="wd-ai-relative" className="wd-ai-pos-relative-nudge wd-dimension-square wd-bg-color-blue wd-fg-color-white">
        Sample nudge
      </div>

      <h4>Absolute</h4>
      <div style={{ position: "relative", height: "160px" }} className="wd-bordered">
        <div id="wd-css-position-absolute" className="wd-pos-absolute-tr wd-dimension-square wd-bg-color-red wd-fg-color-white">
          Top right
        </div>
        <div id="wd-ai-absolute" className="wd-ai-pos-absolute-br wd-dimension-square wd-bg-color-green wd-fg-color-white">
          Bottom right
        </div>
      </div>

      <h4>Fixed position</h4>
      <div id="wd-css-position-fixed" className="wd-pos-fixed wd-dimension-square wd-bg-color-blue wd-fg-color-white">
        Fixed
      </div>
      <div id="wd-ai-fixed" className="wd-ai-pos-fixed-badge wd-bg-color-red wd-fg-color-white">
        Sample badge
      </div>
    </div>
  );
}
