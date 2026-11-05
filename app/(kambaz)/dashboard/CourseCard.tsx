"use client";

import Link from "next/link";
import type { Course } from "../store/coursesStore";

export default function CourseCard({
  course,
  onEdit,
  onDelete,
}: {
  course: Course;
  onEdit: (course: Course) => void;
  onDelete: (courseId: string) => void;
}) {
  return (
    <div className="wd-dashboard-course w-[300px] max-w-full overflow-hidden rounded border border-neutral-300 shadow-sm">
      <Link
        href={`/courses/${course._id}/home`}
        className="wd-dashboard-course-link block text-neutral-900 no-underline"
      >
        <img
          src={course.image}
          width={300}
          height={160}
          alt={course.name}
          className="h-40 w-full object-cover"
        />
        <div className="px-4 pt-4">
          <h5 className="m-0 mb-2 truncate text-lg font-semibold text-red-700">
            {course.name}
          </h5>
          <p className="wd-dashboard-course-title m-0 mb-3 h-[40px] overflow-hidden text-sm text-neutral-600">
            {course.description}
          </p>
        </div>
      </Link>
      <div className="flex gap-2 px-4 pb-4">
        <Link
          href={`/courses/${course._id}/home`}
          className="rounded bg-red-600 px-4 py-2 text-sm text-white no-underline"
        >
          Go
        </Link>
        <button
          type="button"
          id="wd-edit-course-click"
          className="rounded border border-gray-400 px-3 py-2 text-sm"
          onClick={(e) => {
            e.preventDefault();
            onEdit(course);
          }}
        >
          Edit
        </button>
        <button
          type="button"
          id="wd-delete-course-click"
          className="rounded border border-red-600 px-3 py-2 text-sm text-red-600"
          onClick={(e) => {
            e.preventDefault();
            onDelete(course._id);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
