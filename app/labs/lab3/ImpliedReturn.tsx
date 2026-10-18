export default function ImpliedReturn() {
  const multiply = (a: number, b: number) => a * b;
  const divide = (a: number, b: number) => a / b;
  const square = (a: number) => a * a;
  const fourTimesFive = multiply(4, 5);
  return (
    <div id="wd-implied-return">
      <h4>Implied return</h4>
      fourTimesFive = {fourTimesFive}
      <br />
      multiply(4, 5) = {multiply(4, 5)}
      <br />
      divide(20, 4) = {divide(20, 4)}
      <br />
      square(7) = {square(7)}
      <hr />
    </div>
  );
}
