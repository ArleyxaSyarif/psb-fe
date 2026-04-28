import React from "react";
import Link from "next/link";

export default function LandingNavbar() {
    return (
        <nav className="fixed top-0 w-full z-[100] border-b border-white/5 bg-background/40 backdrop-blur-xl">
            <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-5 flex justify-between items-center w-full">
                <div className="flex items-center gap-12">
                    <div className="text-2xl font-serif font-black text-white tracking-tight">
                        Prestige<span className="text-secondary italic">Academy</span>
                    </div>
                    <div className="hidden lg:flex items-center gap-8 font-sans text-sm font-semibold tracking-wider uppercase">
                        <Link className="nav-link-underline text-slate-400 hover:text-white transition-colors" href="#">Programs</Link>
                        <Link className="nav-link-underline text-slate-400 hover:text-white transition-colors" href="#">Faculty</Link>
                        <Link className="nav-link-underline text-slate-400 hover:text-white transition-colors" href="#">News</Link>
                        <Link className="nav-link-underline text-slate-400 hover:text-white transition-colors" href="#">History</Link>
                        <Link className="nav-link-underline text-slate-400 hover:text-white transition-colors" href="#">Admissions</Link>
                    </div>
                </div>
                <div className="flex items-center gap-8">
                    <button className="hidden md:flex items-center text-slate-300 hover:text-secondary transition-colors">
                        <span className="material-symbols-outlined text-[20px]">search</span>
                    </button>
                    <Link href="/login" className="bg-secondary text-on-secondary-container px-7 py-2.5 rounded-full font-bold text-xs uppercase tracking-widest hover:brightness-110 active:scale-95 transition-all shadow-lg shadow-secondary/20">
                        Login
                    </Link>
                </div>
            </div>
        </nav>
    );
}
