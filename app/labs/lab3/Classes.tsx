import "./Classes.css";

export default function Classes() {
  const color = "blue";
  const dangerous = true;
  return (
    <div id="wd-classes">
      <h4>Classes</h4>
      <div className="wd-bg-yellow wd-fg-black wd-padding-10px">
        Yellow background
      </div>
      <div className="wd-bg-blue wd-fg-black wd-padding-10px">
        Blue background
      </div>
      <div className="wd-bg-red wd-fg-black wd-padding-10px">
        Red background
      </div>
      <div className={`wd-bg-${color} wd-fg-black wd-padding-10px`}>
        Background from a variable
      </div>
      <div
        className={`${dangerous ? "wd-bg-red" : "wd-bg-green"} wd-fg-black wd-padding-10px`}
      >
        Background chosen by a condition
      </div>
      <div className="wd-bg-purple wd-fg-black wd-padding-10px">
        My own sixth box
      </div>
      <hr />
    </div>
  );
}
