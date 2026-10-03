import Link from "next/link";

export default function Profile() {
  const field = "mb-3 w-full rounded border border-gray-400 px-3 py-2 text-sm";
  return (
    <div id="wd-profile-screen" className="w-[300px]">
      <h3 className="mb-4 text-xl font-semibold">Profile</h3>
      <input defaultValue="alice" placeholder="username" className={`wd-username ${field}`} />
      <input defaultValue="123" placeholder="password" type="password" className={`wd-password ${field}`} />
      <input defaultValue="Alice" placeholder="First Name" id="wd-firstname" className={field} />
      <input defaultValue="Wonderland" placeholder="Last Name" id="wd-lastname" className={field} />
      <input defaultValue="2000-01-01" type="date" id="wd-dob" className={field} />
      <input defaultValue="alice@wonderland.com" type="email" id="wd-email" className={field} />
      <select defaultValue="FACULTY" id="wd-role" className={field}>
        <option value="USER">User</option>
        <option value="ADMIN">Admin</option>
        <option value="FACULTY">Faculty</option>
        <option value="STUDENT">Student</option>
      </select>
      <Link href="/account/signin"
        className="block rounded bg-red-600 px-4 py-2 text-center text-sm text-white no-underline">
        Sign out
      </Link>
    </div>
  );
}
