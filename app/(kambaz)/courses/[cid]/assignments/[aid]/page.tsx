import Link from "next/link";

export default async function AssignmentEditor({
  params,
}: {
  params: Promise<{ cid: string }>;
}) {
  const { cid } = await params;
  const field = "w-full rounded border border-gray-400 px-3 py-2 text-sm";
  const label = "mb-1 block text-sm font-medium";
  const row = "mb-4 md:flex md:items-start md:gap-4";
  const labelCol = "mb-1 md:mb-0 md:w-[180px] md:pt-2 md:text-right";

  return (
    <div id="wd-assignments-editor" className="max-w-[720px]">
      <div className="mb-4">
        <label htmlFor="wd-name" className={label}>Assignment Name</label>
        <input id="wd-name" defaultValue="A1 - ENV + HTML" className={field} />
      </div>

      <div className="mb-4">
        <textarea
          id="wd-description"
          rows={8}
          className={field}
          defaultValue="The assignment is available online. Submit a link to the landing page of your web application running on Vercel. The landing page should include your full name and section, links to each lab assignment, a link to the Kambaz application, and a link to your GitHub repository."
        />
      </div>

      <div className={row}>
        <div className={labelCol}><label htmlFor="wd-points" className={label}>Points</label></div>
        <div className="flex-1"><input id="wd-points" defaultValue={100} className={field} /></div>
      </div>

      <div className={row}>
        <div className={labelCol}><label htmlFor="wd-group" className={label}>Assignment Group</label></div>
        <div className="flex-1">
          <select id="wd-group" defaultValue="ASSIGNMENTS" className={field}>
            <option value="ASSIGNMENTS">ASSIGNMENTS</option>
            <option value="QUIZZES">QUIZZES</option>
            <option value="EXAMS">EXAMS</option>
            <option value="PROJECT">PROJECT</option>
          </select>
        </div>
      </div>

      <div className={row}>
        <div className={labelCol}><label htmlFor="wd-display-grade-as" className={label}>Display Grade as</label></div>
        <div className="flex-1">
          <select id="wd-display-grade-as" defaultValue="PERCENTAGE" className={field}>
            <option value="PERCENTAGE">Percentage</option>
            <option value="POINTS">Points</option>
            <option value="LETTER">Letter Grade</option>
          </select>
        </div>
      </div>

      <div className={row}>
        <div className={labelCol}><label htmlFor="wd-submission-type" className={label}>Submission Type</label></div>
        <div className="flex-1 rounded border border-gray-300 p-4">
          <select id="wd-submission-type" defaultValue="ONLINE" className={`${field} mb-4`}>
            <option value="ONLINE">Online</option>
            <option value="ON_PAPER">On Paper</option>
            <option value="NO_SUBMISSION">No Submission</option>
          </select>
          <label className="mb-2 block text-sm font-medium">Online Entry Options</label>
          <div className="mb-2">
            <input type="checkbox" id="wd-text-entry" className="mr-2" />
            <label htmlFor="wd-text-entry" className="text-sm">Text Entry</label>
          </div>
          <div className="mb-2">
            <input type="checkbox" id="wd-website-url" defaultChecked className="mr-2" />
            <label htmlFor="wd-website-url" className="text-sm">Website URL</label>
          </div>
          <div className="mb-2">
            <input type="checkbox" id="wd-media-recordings" className="mr-2" />
            <label htmlFor="wd-media-recordings" className="text-sm">Media Recordings</label>
          </div>
          <div className="mb-2">
            <input type="checkbox" id="wd-student-annotation" className="mr-2" />
            <label htmlFor="wd-student-annotation" className="text-sm">Student Annotation</label>
          </div>
          <div>
            <input type="checkbox" id="wd-file-upload" className="mr-2" />
            <label htmlFor="wd-file-upload" className="text-sm">File Uploads</label>
          </div>
        </div>
      </div>

      <div className={row}>
        <div className={labelCol}><label htmlFor="wd-assign-to" className={label}>Assign</label></div>
        <div className="flex-1 rounded border border-gray-300 p-4">
          <label htmlFor="wd-assign-to" className={label}>Assign to</label>
          <input id="wd-assign-to" defaultValue="Everyone" className={`${field} mb-4`} />
          <label htmlFor="wd-due-date" className={label}>Due</label>
          <input type="date" id="wd-due-date" defaultValue="2026-05-13" className={`${field} mb-4`} />
          <div className="md:flex md:gap-4">
            <div className="mb-4 flex-1">
              <label htmlFor="wd-available-from" className={label}>Available from</label>
              <input type="date" id="wd-available-from" defaultValue="2026-05-06" className={field} />
            </div>
            <div className="mb-4 flex-1">
              <label htmlFor="wd-available-until" className={label}>Until</label>
              <input type="date" id="wd-available-until" defaultValue="2026-05-20" className={field} />
            </div>
          </div>
        </div>
      </div>

      <hr className="my-4" />
      <div className="flex justify-end gap-2">
        <Link href={`/courses/${cid}/assignments`} id="wd-cancel"
          className="rounded border border-gray-400 px-4 py-2 text-sm text-black no-underline">
          Cancel
        </Link>
        <Link href={`/courses/${cid}/assignments`} id="wd-save"
          className="rounded bg-red-600 px-4 py-2 text-sm text-white no-underline">
          Save
        </Link>
      </div>
    </div>
  );
}
