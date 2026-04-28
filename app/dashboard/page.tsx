"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { get } from "@/lib/api";
import {
    GraduationCap,
    MapPin,
    Users,
    Trophy,
    ArrowRight,
    LogOut,
    CheckCircle,
    BookOpen
} from "lucide-react";

interface User {
    name: string;
    email: string;
}

export default function DashboardPage() {
    const router = useRouter();
    const [user, setUser] = useState<User | null>(null);
    const [hasRegistered, setHasRegistered] = useState(false);

    useEffect(() => {
        const checkUser = async () => {
            const token = localStorage.getItem("token");
            const userData = localStorage.getItem("user");

            if (!token) {
                router.push("/login");
                return;
            }

            if (userData) {
                setUser(JSON.parse(userData));
            }

            try {
                const res = await get("/students/check", token);
                setHasRegistered(res.has_registered);
            } catch (error) {
                console.error("Error check user:", error);
            }
        };

        checkUser();
    }, [router]);

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        router.push("/login");
    };

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-300">

            {/* 1. HERO SECTION */}
            <section className="relative py-12 md:py-20 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="bg-blue-600 rounded-[2rem] p-8 md:p-16 text-white relative overflow-hidden shadow-2xl shadow-blue-500/20">
                        {/* Dekorasi Background */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl"></div>

                        <div className="relative z-10 max-w-2xl">
                            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-6">
                                Selamat Datang di <br />
                                <span className="text-blue-200 underline decoration-wavy decoration-2">SMA Unggul Bangsa</span>
                            </h1>
                            <p className="text-blue-100 text-lg mb-8 leading-relaxed">
                                Halo, <span className="font-bold underline">{user?.name}</span>! Kami senang Anda tertarik menjadi bagian dari komunitas belajar kami yang inovatif dan berprestasi.
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <button
                                    onClick={() => router.push(hasRegistered ? "/verifikasi" : "/pendaftaran")}
                                    className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-2xl font-bold flex items-center gap-2 transition-all active:scale-95 shadow-lg"
                                >
                                    {hasRegistered ? "Lihat Status Pendaftaran" : "Mulai Pendaftaran"} <ArrowRight className="w-5 h-5" />
                                </button>
                                <button
                                    onClick={handleLogout}
                                    className="bg-blue-700/50 hover:bg-blue-700 text-white px-6 py-4 rounded-2xl font-semibold flex items-center gap-2 transition-all border border-blue-400/30"
                                >
                                    <LogOut className="w-5 h-5" /> Keluar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. STATS SECTION */}
            <section className="px-4 -mt-10 mb-16">
                <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                        { icon: Users, label: "Siswa Aktif", val: "1,200+" },
                        { icon: Trophy, label: "Prestasi", val: "150+" },
                        { icon: GraduationCap, label: "Alumni PTN", val: "85%" },
                        { icon: BookOpen, label: "E-Library", val: "10k+" }
                    ].map((item, i) => (
                        <div key={i} className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm text-center">
                            <div className="bg-blue-50 dark:bg-blue-900/20 w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-3">
                                <item.icon className="text-blue-600 w-6 h-6" />
                            </div>
                            <p className="text-2xl font-bold dark:text-white">{item.val}</p>
                            <p className="text-slate-500 text-xs uppercase tracking-widest mt-1">{item.label}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* 3. SCHOOL PROFILE CONTENT */}
            <section className="max-w-6xl mx-auto px-4 pb-20">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Sisi Kiri: Gambar/Visual */}
                    <div className="relative group">
                        <div className="absolute -inset-4 bg-gradient-to-tr from-blue-500 to-indigo-500 rounded-[2.5rem] blur-2xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
                        <div className="relative aspect-video md:aspect-square bg-slate-200 dark:bg-slate-800 rounded-[2rem] flex items-center justify-center overflow-hidden border-4 border-white dark:border-slate-900 shadow-2xl">
                            <span className="text-slate-400 italic">Foto Sekolah / Dokumentasi Siswa</span>
                        </div>
                    </div>

                    {/* Sisi Kanan: Teks Profil */}
                    <div className="space-y-6">
                        <div className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-bold uppercase tracking-widest">
                            Tentang Sekolah
                        </div>
                        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Membangun Karakter dan Mencerdaskan Kehidupan Bangsa</h2>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                            SMA Unggul Bangsa didirikan pada tahun 2005 dengan misi menciptakan pemimpin masa depan yang berintegritas tinggi. Kami menggabungkan kurikulum nasional dengan metode pembelajaran berbasis proyek (Project-Based Learning).
                        </p>

                        <div className="space-y-3">
                            {["Fasilitas Lab Modern", "Kurikulum Berbasis Karakter", "Pengajar Profesional", "Lingkungan Belajar Nyaman"].map((feature, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <div className="bg-emerald-100 dark:bg-emerald-900/30 p-1 rounded-full">
                                        <CheckCircle className="w-5 h-5 text-emerald-600" />
                                    </div>
                                    <span className="text-slate-700 dark:text-slate-300 font-medium">{feature}</span>
                                </div>
                            ))}
                        </div>

                        <div className="pt-4 flex items-center gap-4 text-slate-500 dark:text-slate-400">
                            <MapPin className="w-5 h-5 text-red-500" />
                            <p className="text-sm">Jl. Pendidikan No. 45, Jakarta Selatan</p>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}