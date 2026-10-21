"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const LINKS = [
  { href: "/labs", id: "wd-home-link", label: "Home" },
  { href: "/labs/lab1", id: "wd-lab1-link", label: "Lab 1" },
  { href: "/labs/lab2", id: "wd-lab2-link", label: "Lab 2" },
  { href: "/labs/lab3", id: "wd-lab3-link", label: "Lab 3" },
  { href: "/labs/lab4", id: "wd-lab4-toc-link", label: "Lab 4" },
  { href: "/labs/lab5", id: "wd-lab5-toc-link", label: "Lab 5" },
  { href: "/", id: "wd-kambaz-link", label: "Kambaz" },
  { href: "/book/ch1", id: "wd-toc-book-link", label: "Chapter 1" },
];

export default function TOC() {
  const pathname = usePathname() ?? "";
  return (
    <div id="wd-toc">
      <p className="mb-2 px-2 text-xs font-semibold uppercase text-neutral-500">Labs</p>
      <ul className="m-0 list-none p-0">
        {LINKS.map((link) => {
          const active = pathname === link.href;
          return (
            <li key={link.id} className="mb-0.5">
              <Link
                href={link.href}
                id={link.id}
                aria-current={active ? "page" : undefined}
                className={active ? "block rounded bg-red-600 px-3 py-1.5 text-sm font-semibold text-white no-underline" : "block rounded px-3 py-1.5 text-sm text-neutral-700 no-underline hover:bg-neutral-200"}
              >
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>
      <p className="mt-4 border-t border-neutral-200 px-3 pt-3 text-xs text-neutral-500">Tejas Shivaprasad, CS 5610 Fall 2026</p>
    </div>
  );
}
