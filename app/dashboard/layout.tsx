"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    const router = useRouter();
    const pathname = usePathname();
    const [hydrated, setHydrated] = useState(false);

    useEffect(() => {
        setHydrated(true);
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        router.push("/login");
    };

    if (!hydrated) return null;

    return (
        <div className="dark bg-background text-on-background font-body-md min-h-screen">
            {/* TopNavBar */}
            <header className="bg-slate-950/80 backdrop-blur-md border-b border-white/10 fixed top-0 w-full z-50">
                <nav className="flex justify-between items-center w-full px-8 py-4 max-w-7xl mx-auto">
                    <div className="text-2xl font-black text-slate-50 dark:text-slate-50 tracking-tighter">
                        Prestige Academy
                    </div>

                    <div className="flex items-center gap-4">
                        <button className="text-slate-300 dark:text-slate-400 text-sm hover:text-white transition-colors" onClick={handleLogout}>
                            Logout
                        </button>
                    </div>
                </nav>
            </header>

            <div className="flex min-h-screen pt-20">
                {/* Sidebar Navigation */}
                <aside className="hidden md:flex w-64 flex-col fixed left-0 top-20 bottom-0 border-r border-white/5 bg-surface-container-lowest p-6">
                    <div className="space-y-6">
                        <Link href="/dashboard" className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors group ${pathname === "/dashboard" ? "bg-primary-container text-amber-500 border border-amber-500/20" : "text-on-surface-variant hover:bg-surface-variant"}`}>
                            <span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
                            <span className="font-headline-md text-[16px]">Dashboard</span>
                        </Link>
                        <Link href="/pendaftaran" className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors group ${pathname === "/pendaftaran" ? "bg-primary-container text-amber-500 border border-amber-500/20" : "text-on-surface-variant hover:bg-surface-variant"}`}>
                            <span className="material-symbols-outlined group-hover:text-amber-500" data-icon="description">description</span>
                            <span className="font-label-sm">Pendaftaran</span>
                        </Link>
                        <Link href="/verifikasi" className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors group ${pathname === "/verifikasi" ? "bg-primary-container text-amber-500 border border-amber-500/20" : "text-on-surface-variant hover:bg-surface-variant"}`}>
                            <span className="material-symbols-outlined group-hover:text-amber-500" data-icon="assignment_turned_in">assignment_turned_in</span>
                            <span className="font-label-sm">Verifikasi</span>
                        </Link>
                    </div>

                    <div className="mt-auto pt-6 border-t border-white/5">
                        <button onClick={handleLogout} className="flex items-center gap-3 px-4 py-3 w-full rounded-xl text-error hover:bg-error-container/10 transition-colors">
                            <span className="material-symbols-outlined" data-icon="logout">logout</span>
                            <span className="font-label-sm">Logout</span>
                        </button>
                    </div>
                </aside>

                {/* Main Content Area */}
                <main className="flex-1 md:ml-64 p-8 md:p-12">
                    {children}
                </main>
            </div>
        </div>
    );
}
