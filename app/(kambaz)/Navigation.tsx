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
      className="fixed bottom-0 top-0 z-20 hidden w-[120px] flex-col bg-black md:flex"
    >
      <a
        href="https://www.northeastern.edu/"
        id="wd-neu-link"
        target="_blank"
        rel="noreferrer"
        className="block py-4 text-center text-xs text-red-600 no-underline"
      >
        Northeastern
      </a>
      {LINKS.map(({ href, id, label, Icon, match }) => {
        const active = match(pathname);
        return (
          <Link
            key={id}
            href={href}
            id={id}
            className={`block py-3 text-center text-sm no-underline ${
              active ? "bg-white text-red-600" : "bg-black text-white"
            }`}
          >
            <Icon
              className={`mx-auto text-3xl ${
                id === "wd-account-link" && !active ? "text-white" : "text-red-600"
              }`}
            />
            {label}
          </Link>
        );
      })}
      <p id="wd-ai-nav-help" className="px-2 pt-4 text-center text-[10px] text-gray-400">
        Sample note: the active tile shows white on red.
      </p>
    </nav>
  );
}
