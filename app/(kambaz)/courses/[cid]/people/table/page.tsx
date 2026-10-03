import { FaUserCircle } from "react-icons/fa";

export default function PeopleTable() {
  const people = [
    { first: "Tony", last: "Stark", id: "001234561S", role: "STUDENT", email: "stark@northeastern.edu" },
    { first: "Bruce", last: "Wayne", id: "001234562S", role: "STUDENT", email: "wayne@northeastern.edu" },
    { first: "Steve", last: "Rogers", id: "001234563S", role: "TA", email: "rogers@northeastern.edu" },
    { first: "Natasha", last: "Romanoff", id: "001234564S", role: "STUDENT", email: "romanoff@northeastern.edu" },
    { first: "Peter", last: "Parker", id: "001234565S", role: "STUDENT", email: "parker@northeastern.edu" },
  ];

  return (
    <div id="wd-people-table">
      <h3 className="mb-3 text-xl font-semibold">People</h3>
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="border-b-2 border-gray-300 text-left">
            <th className="p-2">Name</th>
            <th className="p-2">Login ID</th>
            <th className="p-2">Section</th>
            <th className="p-2">Role</th>
            <th className="p-2">Last Activity</th>
          </tr>
        </thead>
        <tbody>
          {people.map((p, i) => (
            <tr key={p.id} className={i % 2 === 1 ? "bg-gray-50" : ""}>
              <td className="p-2 whitespace-nowrap">
                <FaUserCircle className="mr-2 inline-block text-xl text-gray-500" />
                <span className="font-medium text-red-700">
                  {p.first} {p.last}
                </span>
              </td>
              <td className="p-2">{p.id}</td>
              <td className="p-2">S101</td>
              <td className="p-2">{p.role}</td>
              <td className="p-2">{p.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
