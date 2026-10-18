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
      <ul className="list-none p-0">
        {LINKS.map((link) => {
          const active = pathname === link.href;
          return (
            <li key={link.id}>
              <Link
                href={link.href}
                id={link.id}
                aria-current={active ? "page" : undefined}
                className={
                  active
                    ? "block rounded bg-blue-600 px-2 py-1 font-bold text-white no-underline"
                    : "block px-2 py-1 text-blue-700"
                }
              >
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>
      <p className="px-2 text-xs">Tejas Shivaprasad — CS 5610, Fall 2026</p>
    </div>
  );
}
