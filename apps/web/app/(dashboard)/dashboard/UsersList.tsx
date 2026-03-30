"use client";

import { useUsers } from "@/features/dashboard/hooks/useUsers";

export default function UsersList() {
  const { data, isLoading, isError } = useUsers();

  if (isLoading) return <p>Loading users...</p>;
  if (isError) return <p>Error loading users</p>;

  return (
    <ul className="mt-4 space-y-2">
      {data.map((user: any) => (
        <li key={user.id} className="border p-2 rounded">
          {user.name}
        </li>
      ))}
    </ul>
  );
}