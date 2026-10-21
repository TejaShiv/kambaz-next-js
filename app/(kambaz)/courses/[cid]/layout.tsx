import { ReactNode } from "react";
import CourseNavigation from "./Navigation";
import Breadcrumb from "./Breadcrumb";
import { courses } from "../../database";

export default async function CoursesLayout({
  children,
  params,
}: Readonly<{ children: ReactNode; params: Promise<{ cid: string }> }>) {
  const { cid } = await params;
  const course = courses.find((c) => c._id === cid);
  return (
    <div id="wd-courses">
      <header className="border-b border-neutral-200 pb-3">
        <h2 className="m-0 text-xl font-semibold text-red-700">
          <Breadcrumb course={course} />
        </h2>
        {course && (
          <p className="m-0 mt-1 text-sm text-neutral-500">
            {course.number} &middot; {course.term} &middot; {course.credits} credits
          </p>
        )}
      </header>
      <div className="flex gap-6 pt-4">
        <CourseNavigation cid={cid} />
        <div className="min-w-0 flex-1">{children}</div>
      </div>
    </div>
  );
}
