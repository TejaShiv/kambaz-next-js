"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiOutlineDashboard } from "react-icons/ai";
import { FaRegCircleUser, FaBook, FaRegCalendar, FaInbox, FaFlask } from "react-icons/fa6";

const LINKS = [
  { href: "/account", id: "wd-account-link", label: "Account", Icon: FaRegCircleUser,
    match: (p: string) => p.startsWith("/account") },
  { href: "/dashboard", id: "wd-dashboard-link", label: "Dashboard", Icon: AiOutlineDashboard,
    match: (p: string) => p === "/dashboard" },
  { href: "/dashboard", id: "wd-course-link", label: "Courses", Icon: FaBook,
    match: (p: string) => p.startsWith("/courses") },
  { href: "/calendar", id: "wd-calendar-link", label: "Calendar", Icon: FaRegCalendar,
    match: (p: string) => p === "/calendar" },
  { href: "/inbox", id: "wd-inbox-link", label: "Inbox", Icon: FaInbox,
    match: (p: string) => p === "/inbox" },
  { href: "/labs", id: "wd-labs-link", label: "Labs", Icon: FaFlask,
    match: (p: string) => p.startsWith("/labs") },
];

export default function KambazNavigation() {
  const pathname = usePathname() ?? "";
  return (
    <nav
      id="wd-kambaz-navigation"
      className="fixed bottom-0 top-0 z-20 hidden w-[88px] flex-col overflow-y-auto bg-black md:flex"
    >
      <a
        href="https://www.northeastern.edu/"
        id="wd-neu-link"
        target="_blank"
        rel="noreferrer"
        className="flex h-[76px] items-center justify-center text-base font-bold tracking-tight text-red-600 no-underline"
      >
        NU
      </a>
      {LINKS.map(({ href, id, label, Icon, match }) => {
        const active = match(pathname);
        return (
          <Link
            key={id}
            href={href}
            id={id}
            className={
              active
                ? "flex flex-col items-center gap-1 bg-white px-1 py-2.5 text-[11px] font-medium text-red-600 no-underline"
                : "flex flex-col items-center gap-1 px-1 py-2.5 text-[11px] text-white no-underline transition-colors hover:bg-neutral-800"
            }
          >
            <Icon
              className={
                id === "wd-account-link" && !active
                  ? "text-[22px] text-white"
                  : "text-[22px] text-red-600"
              }
            />
            <span className="leading-tight">{label}</span>
          </Link>
        );
      })}
      <p id="wd-ai-nav-help" className="mt-auto px-2 py-3 text-center text-[9px] leading-tight text-neutral-500">
        Active tile shows white on red.
      </p>
    </nav>
  );
}
