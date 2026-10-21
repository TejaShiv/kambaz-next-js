import { ReactNode } from "react";
import TOC from "./TOC";
import "./labs.css";

export default function LabsLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <div className="flex gap-6 p-6">
      <aside className="sticky top-6 hidden h-fit w-[180px] shrink-0 rounded-lg border border-neutral-200 bg-neutral-50 p-3 md:block">
        <TOC />
      </aside>
      <main className="wd-labs-content min-w-0 max-w-[1000px] flex-1 leading-relaxed">{children}</main>
    </div>
  );
}
