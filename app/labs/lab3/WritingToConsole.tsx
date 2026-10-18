export default function WritingToConsole() {
  const house = { bedrooms: 4, owners: ["Alice", "Bob"] };
  console.log("Lab 3 console output");
  console.log(house);
  console.table(house.owners);
  return (
    <div id="wd-writing-to-console">
      <h4>Writing to the Console</h4>
      Open the browser console to see console.log and console.table output.
      <hr />
    </div>
  );
}
