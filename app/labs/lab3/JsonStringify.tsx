export default function JsonStringify() {
  const numberArray1 = [1, 2, 3, 4, 5];
  const stringArray1 = ["string1", "string2"];
  const course = {
    _id: "CS5610",
    name: "Web Development",
    credits: 4,
    online: true,
    instructor: {
      first: "Jose",
      last: "Annunziato",
      office: "Shillman Hall",
    },
    topics: ["HTML", "CSS", "JavaScript", "React", "Express", "MongoDB"],
  };
  return (
    <div id="wd-json-stringify">
      <h4>JSON Stringify</h4>
      numberArray1 = {JSON.stringify(numberArray1)}
      <br />
      stringArray1 = {JSON.stringify(stringArray1)}
      <br />
      course pretty printed:
      <pre id="wd-json-stringify-pre">{JSON.stringify(course, null, 2)}</pre>
      <hr />
    </div>
  );
}
