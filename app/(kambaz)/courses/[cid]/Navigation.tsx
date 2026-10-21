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
    <div id="wd-courses-navigation" className="hidden w-[150px] shrink-0 flex-col sm:flex">
      {LINKS.map(({ segment, id, label }) => {
        const href = `/courses/${cid}/${segment}`;
        const active = pathname === href;
        return (
          <Link
            key={id}
            href={href}
            id={id}
            className={
              active
                ? "border-l-[3px] border-black px-3 py-1.5 text-[15px] font-semibold text-black no-underline"
                : "border-l-[3px] border-transparent px-3 py-1.5 text-[15px] text-red-600 no-underline transition-colors hover:border-neutral-300 hover:bg-neutral-50"
            }
          >
            {label}
          </Link>
        );
      })}
      <span id="wd-course-ai-link" className="mt-3 px-3 text-[11px] leading-tight text-neutral-400">
        Active route gets a left border.
      </span>
    </div>
  );
}
