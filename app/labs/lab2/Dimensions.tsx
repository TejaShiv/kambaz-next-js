export default function Dimensions() {
  return (
    <div id="wd-css-dimensions">
      <h3>Dimensions</h3>
      <div className="wd-dimension-portrait wd-bg-color-green wd-fg-color-white">Portrait</div>
      <div className="wd-dimension-landscape wd-bg-color-blue wd-fg-color-white">Landscape</div>
      <div id="wd-dimension-square" className="wd-dimension-square wd-bg-color-red wd-fg-color-white">
        Square
      </div>
      <div id="wd-width-75px" className="wd-width-75px wd-bg-color-gray">
        Seventy five pixels wide no matter how long this sentence gets
      </div>
      <div id="wd-ai-dimension" className="wd-ai-dimension">
        Sample box with a declared width and height and a deliberately long sentence inside it
      </div>
    </div>
  );
}
