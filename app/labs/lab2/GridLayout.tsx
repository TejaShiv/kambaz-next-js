export default function GridLayout() {
  return (
    <div id="wd-css-grid-layout">
      <h3>Grid layout</h3>
      <div id="wd-grid-row" className="wd-grid-row">
        <div id="wd-grid-col" className="wd-grid-col wd-bg-color-green wd-fg-color-white">Third</div>
        <div className="wd-grid-col wd-bg-color-blue wd-fg-color-white">Third</div>
        <div className="wd-grid-col wd-bg-color-red wd-fg-color-white">Third</div>
      </div>
      <div className="wd-grid-row">
        <div id="wd-grid-col-two-thirds-page" className="wd-grid-col-two-thirds-page wd-bg-color-gray">
          Two thirds of the page
        </div>
        <div className="wd-grid-col-third-page wd-bg-color-yellow">One third</div>
      </div>
      <div className="wd-grid-row">
        <div id="wd-ai-grid" className="wd-grid-col-two-thirds-page wd-bg-color-blue wd-fg-color-white">
          Sample grid column
        </div>
      </div>
    </div>
  );
}
