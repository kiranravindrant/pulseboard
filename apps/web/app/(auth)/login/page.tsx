"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "../../../../../packages/ui/src/button";

export default function LoginPage() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const handleLogin = async () => {
        setLoading(true);

        // simulate API call
        await new Promise((res) => setTimeout(res, 1000));

        document.cookie = "auth=true; path=/";

        router.push("/dashboard");
    };

    return (
        <div className="flex h-screen items-center justify-center">
            <Button onClick={handleLogin}>
                {loading ? "Logging in..." : "Login"}
            </Button>
        </div>
    );
}