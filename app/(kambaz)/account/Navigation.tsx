"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AccountNavigation() {
  const pathname = usePathname();
  const links = [
    { label: "Signin", href: "/account/signin" },
    { label: "Signup", href: "/account/signup" },
    { label: "Profile", href: "/account/profile" },
  ];
  return (
    <div id="wd-account-navigation" className="flex w-[140px] flex-col">
      {links.map((l) => (
        <Link
          key={l.href}
          href={l.href}
          className={`px-3 py-2 text-base no-underline ${
            pathname === l.href ? "font-medium text-black" : "text-red-600"
          }`}
        >
          {l.label}
        </Link>
      ))}
    </div>
  );
}
