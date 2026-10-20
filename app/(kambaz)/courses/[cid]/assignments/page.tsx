import Link from "next/link";
import * as db from "../../../database";

export default async function Assignments({
  params,
}: {
  params: Promise<{ cid: string }>;
}) {
  const { cid } = await params;
  const assignments = db.assignments.filter((a) => a.course === cid);
  return (
    <div id="wd-assignments">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
        <input
          id="wd-search-assignment"
          placeholder="Search for Assignments"
          className="w-[300px] max-w-full rounded border border-gray-400 px-3 py-2 text-sm"
        />
        <div className="flex gap-2">
          <button type="button" id="wd-add-assignment-group" className="rounded border border-gray-400 px-3 py-2 text-sm">
            + Group
          </button>
          <button type="button" id="wd-add-assignment" className="rounded bg-red-600 px-3 py-2 text-sm text-white">
            + Assignment
          </button>
        </div>
      </div>
      <h3 id="wd-assignments-title" className="m-0 flex items-center justify-between bg-gray-200 p-3 text-base font-semibold">
        <span>ASSIGNMENTS</span>
        <span className="rounded-full border border-gray-500 px-3 py-1 text-xs font-normal">
          40% of Total
        </span>
      </h3>
      <ul id="wd-assignment-list" className="m-0 list-none border border-gray-200 p-0">
        {assignments.map((assignment) => (
          <li
            key={assignment._id}
            className="wd-assignment-list-item border-b border-l-4 border-gray-200 border-l-green-600 p-4"
          >
            <Link
              href={`/courses/${cid}/assignments/${assignment._id}`}
              className="wd-assignment-link block font-medium text-black no-underline"
            >
              {assignment.title}
            </Link>
            <p className="m-0 mt-1 text-sm text-gray-600">
              Multiple Modules | Not available until {assignment.available} | Due{" "}
              {assignment.due} | {assignment.points} pts
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
