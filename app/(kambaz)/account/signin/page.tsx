"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import users from "../../database/users.json";
import { useAccountContext } from "../AccountContext";

export default function Signin() {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const { setCurrentUser } = useAccountContext();
  const router = useRouter();
  const field = "mb-3 w-full rounded border border-gray-400 px-3 py-2 text-sm";

  const signin = () => {
    const user = users.find(
      (u) =>
        u.username === credentials.username &&
        u.password === credentials.password
    );
    if (!user) return;
    setCurrentUser(user);
    router.push("/dashboard");
  };

  return (
    <div id="wd-signin-screen" className="w-[300px]">
      <h3 className="mb-4 text-xl font-semibold">Sign in</h3>
      <input
        id="wd-username"
        placeholder="username"
        className={`wd-username ${field}`}
        value={credentials.username}
        onChange={(e) =>
          setCredentials({ ...credentials, username: e.target.value })
        }
      />
      <input
        id="wd-password"
        type="password"
        placeholder="password"
        className={`wd-password ${field}`}
        value={credentials.password}
        onChange={(e) =>
          setCredentials({ ...credentials, password: e.target.value })
        }
      />
      <button
        type="button"
        id="wd-signin-btn"
        onClick={signin}
        className="mb-2 block w-full rounded bg-red-600 px-4 py-2 text-center text-sm text-white"
      >
        Sign in
      </button>
      <Link href="/account/signup" id="wd-signup-link" className="text-sm text-red-600">
        Sign up
      </Link>
    </div>
  );
}
