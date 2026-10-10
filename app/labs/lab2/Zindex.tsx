export default function Zindex() {
  return (
    <div id="wd-z-index">
      <h3>Z index</h3>
      <div style={{ position: "relative", height: "200px" }}>
        <div className="wd-zindex-1 wd-dimension-portrait wd-bg-color-green wd-fg-color-white">Portrait</div>
        <div className="wd-zindex-2 wd-dimension-landscape wd-bg-color-blue wd-fg-color-white">Landscape</div>
        <div className="wd-zindex-3 wd-dimension-square wd-bg-color-red wd-fg-color-white">Square</div>
        <div id="wd-ai-zindex" className="wd-ai-zindex-top wd-dimension-square wd-bg-color-yellow">
          Sample top
        </div>
      </div>
    </div>
  );
}
