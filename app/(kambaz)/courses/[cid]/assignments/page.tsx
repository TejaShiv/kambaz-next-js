import AssignmentItem from "./AssignmentItem";

export default async function Assignments({
  params,
}: {
  params: Promise<{ cid: string }>;
}) {
  const { cid } = await params;
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
        <AssignmentItem cid={cid} aid="123" title="A1 - ENV + HTML"
          details="Multiple Modules | Not available until May 6 at 12:00am | Due May 13 at 11:59pm | 100 pts" />
        <AssignmentItem cid={cid} aid="124" title="A2 - CSS + TAILWIND"
          details="Multiple Modules | Not available until May 13 at 12:00am | Due May 20 at 11:59pm | 100 pts" />
        <AssignmentItem cid={cid} aid="125" title="A3 - JAVASCRIPT + REACT"
          details="Multiple Modules | Not available until May 20 at 12:00am | Due May 27 at 11:59pm | 100 pts" />
      </ul>
    </div>
  );
}
