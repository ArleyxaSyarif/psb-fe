import Link from "next/link";
import React from "react";

export default function LandingNavbar() {
    return (
        <header className="fixed top-0 w-full z-50 bg-white border-b border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
            <div className="flex justify-between items-center h-20 px-8 max-w-7xl mx-auto w-full">
                <div className="text-xl font-extrabold tracking-tighter text-slate-900">
                    AcademiaPortal
                </div>

                <nav className="hidden md:flex gap-8 items-center font-['Inter'] text-sm font-medium tracking-tight">
                    <Link className="text-orange-500 font-semibold border-b-2 border-orange-500 pb-1" href="/">
                        Home
                    </Link>
                    <Link className="text-slate-600 hover:text-orange-500 transition-colors" href="#">
                        About
                    </Link>
                    <Link className="text-slate-600 hover:text-orange-500 transition-colors" href="#">
                        Programs
                    </Link>
                    <Link className="text-slate-600 hover:text-orange-500 transition-colors" href="#">
                        News
                    </Link>
                    <Link className="text-slate-600 hover:text-orange-500 transition-colors" href="#">
                        Contact
                    </Link>
                </nav>

                <div className="flex items-center gap-4">
                    <Link
                        href="/login"
                        className="px-5 py-2.5 rounded-lg border border-slate-200 text-slate-600 font-medium hover:bg-slate-50 transition-all duration-200 active:scale-95 text-center"
                    >
                        Masuk
                    </Link>
                    <Link
                        href="/register"
                        className="px-6 py-2.5 rounded-lg bg-[#ff8c00] text-white font-semibold hover:opacity-90 transition-all duration-200 active:scale-95 text-center"
                    >
                        Daftar
                    </Link>
                </div>
            </div>
        </header>
    );
}
