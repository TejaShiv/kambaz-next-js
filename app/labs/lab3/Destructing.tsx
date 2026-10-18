export default function Destructing() {
  const numbers = [1, 2, 3, 4, 5];
  const [first, second, ...rest] = numbers;
  const person = { name: "Ada", age: 36, city: "London" };
  const { name, age, city } = person;
  const { name: fullName } = person;
  return (
    <div id="wd-destructing">
      <h4>Destructing</h4>
      first = {first}
      <br />
      second = {second}
      <br />
      rest = {JSON.stringify(rest)}
      <br />
      name = {name}, age = {age}, city = {city}
      <br />
      renamed fullName = {fullName}
      <hr />
    </div>
  );
}
