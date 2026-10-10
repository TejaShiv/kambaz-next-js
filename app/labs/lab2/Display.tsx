export default function Display() {
  return (
    <div id="wd-css-display">
      <h3>Display</h3>
      <div className="wd-display-block wd-bg-color-gray">Block takes the full width</div>
      <div id="wd-display-inline" className="wd-display-inline wd-width-75px wd-bg-color-green wd-fg-color-white">
        Inline div, width ignored
      </div>
      <div id="wd-ai-display" className="wd-display-inline wd-bg-color-yellow">
        Sample inline div on yellow
      </div>
      <div className="wd-display-none">You cannot see this</div>
    </div>
  );
}
