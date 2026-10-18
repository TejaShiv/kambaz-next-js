export default function FunctionDestructing() {
  const add = (a: number, b: number) => a + b;
  const sum = add(1, 2);
  const subtract = ({ a, b }: { a: number; b: number }) => a - b;
  const difference = subtract({ a: 4, b: 2 });
  const greet = (who = "Ada") => `Hello ${who}`;
  return (
    <div id="wd-function-destructing">
      <h4>Function Destructing</h4>
      sum = {sum}
      <br />
      difference = {difference}
      <br />
      greet() = {greet()}
      <br />
      greet(&quot;Tejas&quot;) = {greet("Tejas")}
      <hr />
    </div>
  );
}
