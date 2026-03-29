import Image from "next/image";
import { Button } from "../../../packages/ui/src/button";

import Link from "next/link";

export default function Home() {
  return (
    <main className="p-10 space-x-4">
      <Link href="/login">
        <Button>Login</Button>
      </Link>

      <Link href="/dashboard">
        <Button>Go to Dashboard</Button>
      </Link>
    </main>
  );
}