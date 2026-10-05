import Link from "next/link";

export default function AssignmentItem({
  cid,
  aid,
  title,
  details,
}: {
  cid: string;
  aid: string;
  title: string;
  details: string;
}) {
  return (
    <li className="wd-assignment-list-item border-b border-l-4 border-gray-200 border-l-green-600 p-4">
      <Link
        href={`/courses/${cid}/assignments/${aid}`}
        className="wd-assignment-link block font-medium text-black no-underline"
      >
        {title}
      </Link>
      <p className="m-0 mt-1 text-sm text-gray-600">{details}</p>
    </li>
  );
}
