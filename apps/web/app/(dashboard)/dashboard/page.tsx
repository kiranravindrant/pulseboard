// app/(dashboard)/dashboard/page.tsx

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import LogoutButton from "./LogoutButton";
import UsersList from "./UsersList";


export default async function DashboardPage() {
  const cookieStore = await cookies();
  const isAuth = cookieStore.get("auth");

  if (!isAuth) {
    redirect("/login");
  }

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <p>Welcome to Pulseboard 🚀</p>
<UsersList />
      <LogoutButton />
    </div>
  );
}