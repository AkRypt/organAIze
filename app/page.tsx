'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { jsonLd } from "./helpers";
import { greatVibes, raleway } from "./fonts";
import Title from "./components/title";
import ThemeSelector from "./components/themeSelector";

export default function Home() {
    const router = useRouter();

    // Going to Next Page
    const goToDashboard = () => {
        router.push('/dashboard');
    }

    const onChangeTheme = (e: any) => {
        document.querySelector('html')?.setAttribute('data-theme', e);
    }

    // Google Login
    // const onClickGoogleLogin = async () => {
    //     router.push('/auth/google')
    // }

    return (
        <main className="min-h-screen">

            {/* Background */}
            <div className="absolute top-0 h-screen w-screen rotate-180 transform bg-base-100 bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)]"></div>


            {/* Your Body here */}
            <div className="flex flex-col items-center justify-center h-full relative">

                {/* Theme Selector */}
                <ThemeSelector onChangeTheme={onChangeTheme} />

                <Title />

                <h1 className="p-8 w-full md:w-[60%] text-5xl tracking-[0.1rem] text-center md:text-6xl font-bold">
                    Optimize your daily routine with the <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                        Power of AI
                    </span>
                </h1>

                {/* Description */}
                <p className="px-8 md:text-xl md:w-[60%]">
                    OrganAIze helps you find a daily routine that best suits your needs. You can mention whatever you want to be
                    included in your day and we will do the rest.
                </p>

                <button onClick={goToDashboard} className="btn btn-secondary btn-lg btn-wide my-6">
                    Get Started
                </button>

                <a href="https://akrypt.github.io" target="_blank"
                    className="fixed bottom-6 text-xs text-primary">
                    <span className="underline">Made by Akshit</span>&nbsp;
                    <span className="">👾</span>
                </a>
            </div>





            {/* Include this to use jsonLd for SEO */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
        </main>
    );
}
