import Link from "next/link";

export default function Signin() {
  const field = "mb-3 w-full rounded border border-gray-400 px-3 py-2 text-sm";
  return (
    <div id="wd-signin-screen" className="w-[300px]">
      <h3 className="mb-4 text-xl font-semibold">Sign in</h3>
      <input placeholder="username" className={`wd-username ${field}`} defaultValue="ada" />
      <input placeholder="password" type="password" className={`wd-password ${field}`} defaultValue="123" />
      <Link href="/dashboard" id="wd-signin-btn"
        className="mb-2 block rounded bg-red-600 px-4 py-2 text-center text-sm text-white no-underline">
        Sign in
      </Link>
      <Link href="/account/signup" id="wd-signup-link" className="text-sm text-red-600">
        Sign up
      </Link>
    </div>
  );
}
