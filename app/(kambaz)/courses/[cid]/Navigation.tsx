"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function CourseNavigation({ cid }: { cid: string }) {
  const pathname = usePathname();
  const links = [
    { label: "Home", slug: "home", id: "wd-course-home-link" },
    { label: "Modules", slug: "modules", id: "wd-course-modules-link" },
    { label: "Piazza", slug: "piazza", id: "wd-course-piazza-link" },
    { label: "Zoom", slug: "zoom", id: "wd-course-zoom-link" },
    { label: "Assignments", slug: "assignments", id: "wd-course-assignments-link" },
    { label: "Quizzes", slug: "quizzes", id: "wd-course-quizzes-link" },
    { label: "Grades", slug: "grades", id: "wd-course-grades-link" },
    { label: "People", slug: "people/table", id: "wd-course-people-link" },
  ];

  return (
    <div id="wd-courses-navigation" className="flex w-[160px] flex-col">
      {links.map((l) => {
        const href = `/courses/${cid}/${l.slug}`;
        const active = pathname === href;
        return (
          <Link
            key={l.id}
            href={href}
            id={l.id}
            className={`border-l-4 px-3 py-2 text-base no-underline ${
              active
                ? "border-black font-medium text-black"
                : "border-transparent text-red-600"
            }`}
          >
            {l.label}
          </Link>
        );
      })}
    </div>
  );
}
