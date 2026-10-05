import Link from "next/link";

export default function Signup() {
  const field = "mb-3 w-full rounded border border-gray-400 px-3 py-2 text-sm";
  return (
    <div id="wd-signup-screen" className="w-[300px]">
      <h3 className="mb-4 text-xl font-semibold">Sign up</h3>
      <input placeholder="username" className={`wd-username ${field}`} defaultValue="ada" />
      <input placeholder="password" type="password" className={`wd-password ${field}`} defaultValue="123" />
      <input placeholder="verify password" type="password" className={`wd-password-verify ${field}`} />
      <Link href="/account/profile"
        className="mb-2 block rounded bg-red-600 px-4 py-2 text-center text-sm text-white no-underline">
        Sign up
      </Link>
      <Link href="/account/signin" className="text-sm text-red-600">Sign in</Link>
    </div>
  );
}
