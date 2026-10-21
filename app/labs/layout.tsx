import { ReactNode } from "react";
import TOC from "./TOC";
import "./labs.css";

export default function LabsLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <div className="mx-auto flex max-w-[1400px] gap-8 p-6">
      <aside className="sticky top-6 hidden h-fit w-[180px] shrink-0 rounded-lg border border-neutral-200 bg-neutral-50 p-3 md:block">
        <TOC />
      </aside>
      <main className="wd-labs-content min-w-0 flex-1 leading-relaxed">{children}</main>
    </div>
  );
}
