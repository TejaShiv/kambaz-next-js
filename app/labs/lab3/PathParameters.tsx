import Link from "next/link";

export default function PathParameters() {
  return (
    <div id="wd-path-parameters">
      <h4>Path Parameters</h4>
      <Link href="/labs/lab3/add/1/2" className="text-blue-700 underline">
        1 + 2
      </Link>
      <br />
      <Link href="/labs/lab3/add/3/4" className="text-blue-700 underline">
        3 + 4
      </Link>
      <br />
      <Link href="/labs/lab3/add/12/30" className="text-blue-700 underline">
        12 + 30
      </Link>
      <br />
      <Link href="/labs/lab3/add/5/6" className="text-blue-700 underline">
        5 + 6
      </Link>
      <hr />
    </div>
  );
}
