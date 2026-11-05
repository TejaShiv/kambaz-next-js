"use client";

import { useState } from "react";
import CourseCard from "./CourseCard";
import { useCoursesStore, emptyCourse, type Course } from "../store/coursesStore";

export default function Dashboard() {
  const { courses, addCourse, deleteCourse, updateCourse } = useCoursesStore();
  const [course, setCourse] = useState<Course>(emptyCourse);

  const field =
    "w-full rounded border border-gray-400 px-3 py-2 text-sm mb-2";

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title" className="text-3xl font-bold">Dashboard</h1>
      <hr className="my-3" />

      <div id="wd-course-form" className="mb-5 max-w-[600px]">
        <h5 className="mb-2 text-lg font-semibold">
          New Course
          <button
            type="button"
            id="wd-add-new-course-click"
            className="float-end rounded bg-red-600 px-3 py-1 text-sm text-white"
            onClick={() => addCourse(course)}
          >
            Add
          </button>
          <button
            type="button"
            id="wd-update-course-click"
            className="float-end mr-2 rounded border border-gray-400 px-3 py-1 text-sm"
            onClick={() => updateCourse(course)}
          >
            Update
          </button>
        </h5>
        <br />
        <input
          id="wd-course-name"
          className={field}
          placeholder="Course name"
          value={course.name}
          onChange={(e) => setCourse({ ...course, name: e.target.value })}
        />
        <input
          id="wd-course-number"
          className={field}
          placeholder="Course number"
          value={course.number}
          onChange={(e) => setCourse({ ...course, number: e.target.value })}
        />
        <input
          id="wd-course-start-date"
          type="date"
          className={field}
          value={course.startDate}
          onChange={(e) => setCourse({ ...course, startDate: e.target.value })}
        />
        <input
          id="wd-course-end-date"
          type="date"
          className={field}
          value={course.endDate}
          onChange={(e) => setCourse({ ...course, endDate: e.target.value })}
        />
        <textarea
          id="wd-course-description"
          className={field}
          rows={3}
          placeholder="Course description"
          value={course.description}
          onChange={(e) =>
            setCourse({ ...course, description: e.target.value })
          }
        />
      </div>

      <hr className="my-3" />
      <h2 id="wd-dashboard-published" className="mt-5 text-xl font-semibold">
        Published Courses ({courses.length})
      </h2>
      <hr className="my-3" />

      <div
        id="wd-dashboard-courses"
        className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4"
      >
        {courses.map((c) => (
          <div key={c._id}>
            <CourseCard {...c} />
            <div className="mt-2">
              <button
                type="button"
                id="wd-edit-course-click"
                className="mr-2 rounded border border-gray-400 px-3 py-1 text-sm"
                onClick={(e) => {
                  e.preventDefault();
                  setCourse(c);
                }}
              >
                Edit
              </button>
              <button
                type="button"
                id="wd-delete-course-click"
                className="rounded bg-red-600 px-3 py-1 text-sm text-white"
                onClick={(e) => {
                  e.preventDefault();
                  deleteCourse(c._id);
                }}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
