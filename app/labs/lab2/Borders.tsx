export default function Borders() {
  return (
    <div id="wd-css-borders">
      <h3>Borders</h3>
      <div className="wd-bordered wd-padded wd-margined">Plain solid border</div>
      <div id="wd-border-yellow" className="wd-border-yellow wd-padded wd-margined">
        Yellow border
      </div>
      <div id="wd-border-fat" className="wd-bordered wd-border-fat wd-padded wd-margined">
        Fat border
      </div>
      <div id="wd-border-dashed" className="wd-bordered wd-border-dashed wd-padded wd-margined">
        Dashed border
      </div>
      <div id="wd-ai-border" className="wd-border-yellow wd-border-fat wd-border-dashed wd-padded wd-margined">
        Sample box combining a fat dashed yellow border
      </div>
    </div>
  );
}
