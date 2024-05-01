'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { jsonLd } from "./helpers";
import { greatVibes, raleway } from "./fonts";

export default function Home() {
    const router = useRouter();

    // Going to Next Page
    const goToDashboard = () => {
        router.push('/dashboard');
    }

    // Google Login
    const onClickGoogleLogin = async () => {
        router.push('/auth/google')
    }

    return (
        <main className="min-h-screen">

            {/* Your Body here */}
            <div className="flex flex-col items-center justify-center h-full">
                <h1>Welcome to organAIze</h1>

                <button onClick={goToDashboard} className="btn btn-primary">Go to Dashboard</button>
            </div>

            {/* Include this to use jsonLd for SEO */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
        </main>
    );
}
