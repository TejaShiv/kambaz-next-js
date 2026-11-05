"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useAccountContext } from "../AccountContext";

export default function Profile() {
  const { currentUser, setCurrentUser } = useAccountContext();
  const router = useRouter();
  const field = "mb-3 w-full rounded border border-gray-400 px-3 py-2 text-sm";

  useEffect(() => {
    if (!currentUser) router.push("/account/signin");
  }, [currentUser, router]);

  if (!currentUser) return null;

  return (
    <div id="wd-profile-screen" className="w-[300px]">
      <h3 className="mb-4 text-xl font-semibold">Profile</h3>
      <input
        id="wd-username"
        className={field}
        value={currentUser.username}
        onChange={(e) =>
          setCurrentUser({ ...currentUser, username: e.target.value })
        }
      />
      <input
        id="wd-firstname"
        className={field}
        value={currentUser.firstName}
        onChange={(e) =>
          setCurrentUser({ ...currentUser, firstName: e.target.value })
        }
      />
      <input
        id="wd-lastname"
        className={field}
        value={currentUser.lastName}
        onChange={(e) =>
          setCurrentUser({ ...currentUser, lastName: e.target.value })
        }
      />
      <input
        id="wd-email"
        type="email"
        className={field}
        value={currentUser.email}
        onChange={(e) =>
          setCurrentUser({ ...currentUser, email: e.target.value })
        }
      />
      <select
        id="wd-role"
        className={field}
        value={currentUser.role}
        onChange={(e) =>
          setCurrentUser({ ...currentUser, role: e.target.value })
        }
      >
        <option value="STUDENT">Student</option>
        <option value="FACULTY">Faculty</option>
        <option value="TA">TA</option>
      </select>
      <button
        type="button"
        id="wd-signout-btn"
        onClick={() => {
          setCurrentUser(null);
          router.push("/account/signin");
        }}
        className="block w-full rounded bg-red-600 px-4 py-2 text-center text-sm text-white"
      >
        Sign out
      </button>
    </div>
  );
}
