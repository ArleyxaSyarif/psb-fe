"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, GraduationCap, User, LogOut } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();
    const pathname = usePathname();

    const handleLogout = () => {
        localStorage.removeItem("token");
        router.push("/login");
    };

    if (pathname === "/login" || pathname === "/register") {
        return null;
    }

    return (
        <nav className="sticky top-0 z-50 w-full bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    {/* Logo */}
                    <div className="flex items-center gap-2">
                        <div className="bg-blue-600 p-1.5 rounded-lg">
                            <GraduationCap className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-500 dark:from-blue-400 dark:to-indigo-300">
                            SiswaPortal
                        </span>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-8">
                        <Link href="/" className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                            Beranda
                        </Link>
                        <Link href="/dashboard" className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                            Materi
                        </Link>
                        <Link href="/tugas" className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                            Tugas
                        </Link>

                        <div className="h-6 w-[1px] bg-slate-200 dark:bg-slate-800"></div>

                        <button onClick={handleLogout} className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600">
                            Keluar
                        </button>

                    </div>

                    {/* Mobile Button */}
                    <div className="md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-slate-600 dark:text-slate-300">
                            {isOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 p-4 space-y-4">
                    <Link href="/" className="block text-slate-600 dark:text-slate-300">Beranda</Link>
                    <Link href="/dashboard" className="block text-slate-600 dark:text-slate-300">Materi</Link>
                    <Link href="/login" className="block text-slate-600 dark:text-slate-300">Masuk</Link>
                    <Link href="/register" className="block w-full text-center bg-blue-600 text-white py-2 rounded-xl">Daftar</Link>
                </div>
            )}
        </nav>
    );
}