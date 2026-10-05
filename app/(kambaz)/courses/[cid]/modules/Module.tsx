import type { ReactNode } from "react";

export default function Module({
  title,
  children,
}: {
  title: string;
  children?: ReactNode;
}) {
  return (
    <li className="wd-module mb-4 border border-gray-300">
      <div className="wd-title flex items-center justify-between bg-gray-200 p-3 text-lg font-medium">
        <span>{title}</span>
        <span className="text-green-700">&#10003;</span>
      </div>
      <ul className="wd-lessons list-none p-0">{children}</ul>
    </li>
  );
}
