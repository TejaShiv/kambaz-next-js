export default function TemplateLiterals() {
  const multiply = (a: number, b: number) => a * b;
  const fourTimesFive = multiply(4, 5);
  const name = "Tejas";
  const course = "CS5610";
  return (
    <div id="wd-template-literals">
      <h4>Template literals</h4>
      {`4 * 5 = ${fourTimesFive}`}
      <br />
      {`multiply(4, 5) = ${multiply(4, 5)}`}
      <br />
      {`${name} is taking ${course}`}
      <br />
      {`Two plus two is ${2 + 2}`}
      <hr />
    </div>
  );
}
