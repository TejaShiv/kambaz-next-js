import Link from "next/link";

export default function NotFound() {
  return (
    <div id="wd-not-found">
      <h1>Page not found</h1>
      <p>That page does not exist yet.</p>
      <Link href="/dashboard">Back to Dashboard</Link>
    </div>
  );
}