"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiOutlineDashboard } from "react-icons/ai";
import { FaRegCircleUser, FaBook, FaRegCalendar, FaInbox, FaFlask } from "react-icons/fa6";

export default function KambazNavigation() {
  const pathname = usePathname();
  const accountActive = pathname.startsWith("/account");
  const tile = "block py-3 text-center text-sm no-underline";
  const idle = "bg-black text-white";
  const on = "bg-white text-red-600";

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

      <Link href="/account" id="wd-account-link" className={`${tile} ${accountActive ? on : idle}`}>
        <FaRegCircleUser className={`mx-auto text-3xl ${accountActive ? "text-red-600" : "text-white"}`} />
        Account
      </Link>

      <Link href="/dashboard" id="wd-dashboard-link" className={`${tile} ${pathname === "/dashboard" ? on : idle}`}>
        <AiOutlineDashboard className="mx-auto text-3xl text-red-600" />
        Dashboard
      </Link>

      <Link href="/dashboard" id="wd-course-link" className={`${tile} ${pathname.startsWith("/courses") ? on : idle}`}>
        <FaBook className="mx-auto text-3xl text-red-600" />
        Courses
      </Link>

      <Link href="/calendar" id="wd-calendar-link" className={`${tile} ${pathname === "/calendar" ? on : idle}`}>
        <FaRegCalendar className="mx-auto text-3xl text-red-600" />
        Calendar
      </Link>

      <Link href="/inbox" id="wd-inbox-link" className={`${tile} ${pathname === "/inbox" ? on : idle}`}>
        <FaInbox className="mx-auto text-3xl text-red-600" />
        Inbox
      </Link>

      <Link href="/labs" id="wd-labs-link" className={`${tile} ${pathname.startsWith("/labs") ? on : idle}`}>
        <FaFlask className="mx-auto text-3xl text-red-600" />
        Labs
      </Link>
    </nav>
  );
}
