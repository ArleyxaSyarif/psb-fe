"use client";

import { GraduationCap, Mail } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Footer() {
    const pathname = usePathname();

    if (pathname === "/login" || pathname === "/register") {
        return null;
    }
    return (
        <footer className="bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800">
            <div className="max-w-7xl mx-auto pt-12 pb-8 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    {/* Brand Column */}
                    <div className="col-span-1 md:col-span-1">
                        <div className="flex items-center gap-2 mb-4">
                            <GraduationCap className="w-6 h-6 text-blue-600" />
                            <span className="text-xl font-bold dark:text-white">SiswaPortal</span>
                        </div>
                        <p className="text-sm text-slate-500 dark:text-slate-400">
                            Platform pembelajaran digital terbaik untuk masa depan siswa yang lebih cerah dan terstruktur.
                        </p>
                    </div>

                    {/* Links Column 1 */}
                    <div>
                        <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-4">Layanan</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 transition-colors">E-Learning</a></li>
                            <li><a href="#" className="text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 transition-colors">Konsultasi</a></li>
                            <li><a href="#" className="text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 transition-colors">Sertifikasi</a></li>
                        </ul>
                    </div>

                    {/* Links Column 2 */}
                    <div>
                        <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-4">Bantuan</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 transition-colors">Pusat Bantuan</a></li>
                            <li><a href="#" className="text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 transition-colors">Kontak Kami</a></li>
                            <li><a href="#" className="text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 transition-colors">Kebijakan Privasi</a></li>
                        </ul>
                    </div>

                </div>

                <div className="border-t border-slate-200 dark:border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-slate-500 dark:text-slate-500">
                        © 2026 SiswaPortal. Dibuat dengan ❤️ untuk pendidikan Indonesia.
                    </p>
                    <div className="flex gap-6 text-xs text-slate-500 dark:text-slate-500">
                        <a href="#">Terms of Service</a>
                        <a href="#">Cookies Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}