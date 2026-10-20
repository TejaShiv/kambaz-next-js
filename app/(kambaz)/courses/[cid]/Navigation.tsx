"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const LINKS = [
  { segment: "home", id: "wd-course-home-link", label: "Home" },
  { segment: "modules", id: "wd-course-modules-link", label: "Modules" },
  { segment: "piazza", id: "wd-course-piazza-link", label: "Piazza" },
  { segment: "zoom", id: "wd-course-zoom-link", label: "Zoom" },
  { segment: "assignments", id: "wd-course-assignments-link", label: "Assignments" },
  { segment: "quizzes", id: "wd-course-quizzes-link", label: "Quizzes" },
  { segment: "grades", id: "wd-course-grades-link", label: "Grades" },
  { segment: "people/table", id: "wd-course-people-link", label: "People" },
];

export default function CourseNavigation({ cid }: { cid: string }) {
  const pathname = usePathname() ?? "";
  return (
    <div id="wd-courses-navigation" className="flex w-[160px] flex-col">
      {LINKS.map(({ segment, id, label }) => {
        const href = `/courses/${cid}/${segment}`;
        const active = pathname === href;
        return (
          <Link
            key={id}
            href={href}
            id={id}
            className={`border-l-4 px-3 py-2 text-base no-underline ${
              active
                ? "border-black font-medium text-black"
                : "border-transparent text-red-600"
            }`}
          >
            {label}
          </Link>
        );
      })}
    </div>
  );
}
