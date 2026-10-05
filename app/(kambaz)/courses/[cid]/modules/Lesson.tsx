import type { ReactNode } from "react";

export default function Lesson({
  title,
  children,
}: {
  title: string;
  children?: ReactNode;
}) {
  return (
    <li className="wd-lesson border-l-4 border-green-600 p-3">
      <div className="wd-title flex items-center justify-between font-medium">
        <span>{title}</span>
        <span className="text-green-700">&#10003;</span>
      </div>
      <ul className="wd-content ml-5 list-disc text-sm text-gray-700">
        {children}
      </ul>
    </li>
  );
}
