export default function BoxModel() {
  return (
    <div id="wd-css-box-model">
      <h3>Box model</h3>
      <div
        style={{
          border: "5px solid navy",
          padding: "20px",
          margin: "25px",
          backgroundColor: "lightyellow",
        }}
      >
        Content sits inside padding, padding inside the border, and margin is
        the empty space outside the border.
      </div>
    </div>
  );
}
