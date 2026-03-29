"use client";

import { useRouter } from "next/navigation";

export default function LogoutButton() {
  const router = useRouter();

  const logout = () => {
    document.cookie = "auth=; Max-Age=0; path=/";
    router.push("/login");
  };

  return (
    <button onClick={logout} className="mt-4">
      Logout
    </button>
  );
}