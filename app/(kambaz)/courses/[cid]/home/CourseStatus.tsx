export default function CourseStatus() {
  const btn =
    "mb-2 block w-full rounded border border-gray-400 bg-gray-100 px-3 py-2 text-left text-sm";
  return (
    <div id="wd-course-status" className="w-[300px]">
      <h2 className="mb-3 text-xl font-semibold">Course Status</h2>
      <div className="mb-2 flex gap-2">
        <button type="button" className="flex-1 rounded border border-gray-400 bg-gray-100 px-3 py-2 text-sm">
          Unpublish
        </button>
        <button type="button" className="flex-1 rounded bg-green-700 px-3 py-2 text-sm text-white">
          Published
        </button>
      </div>
      <button type="button" className={btn}>Import Existing Content</button>
      <button type="button" className={btn}>Import From Commons</button>
      <button type="button" className={btn}>Choose Home Page</button>
      <button type="button" className={btn}>View Course Stream</button>
      <button type="button" className={btn}>New Announcement</button>
      <button type="button" className={btn}>New Analytics</button>
      <button type="button" className={btn}>View Course Notifications</button>
    </div>
  );
}
