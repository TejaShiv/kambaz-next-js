export default function Flex() {
  return (
    <div id="wd-css-flex">
      <h3>Flex</h3>
      <div className="wd-flex-row">
        <div id="wd-flex-grow" className="wd-flex-grow wd-bg-color-green wd-fg-color-white">
          Grows to fill the space
        </div>
        <div className="wd-bg-color-blue wd-fg-color-white wd-padded">Fixed to content</div>
      </div>
      <div className="wd-flex-row">
        <div id="wd-ai-flex" className="wd-flex-grow wd-bg-color-red wd-fg-color-white">
          Sample growing column
        </div>
        <div className="wd-bg-color-gray wd-padded">Sample fixed column</div>
      </div>
    </div>
  );
}
