import { FaUserCircle } from "react-icons/fa";
import * as db from "../../../../database";

export default async function PeopleTable({
  params,
}: {
  params: Promise<{ cid: string }>;
}) {
  const { cid } = await params;
  const enrolledIds = db.enrollments
    .filter((e) => e.course === cid)
    .map((e) => e.user);
  const people = db.users.filter((u) => enrolledIds.includes(u._id));

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
          {people.map((person, i) => (
            <tr key={person._id} className={i % 2 === 1 ? "bg-gray-50" : ""}>
              <td className="p-2 whitespace-nowrap">
                <FaUserCircle className="mr-2 inline-block text-xl text-gray-500" />
                <span className="font-medium text-red-700">
                  {person.firstName} {person.lastName}
                </span>
              </td>
              <td className="p-2">{person.loginId}</td>
              <td className="p-2">{person.section}</td>
              <td className="p-2">{person.role}</td>
              <td className="p-2">{person.lastActivity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
