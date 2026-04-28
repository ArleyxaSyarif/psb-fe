"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { get } from "@/lib/api";

export default function DashboardPage() {
    const router = useRouter();
    const [user, setUser] = useState<{ name: string } | null>(null);
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

    return (
        <div className="max-w-5xl mx-auto space-y-12">
            {/* Greeting Section */}
            <section className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                    <h1 className="font-headline-xl text-headline-xl text-slate-50 mb-2">
                        Selamat Datang, {user?.name || "Siswa"}
                    </h1>
                    <p className="text-on-surface-variant text-body-lg">
                        Pantau dan lengkapi proses pendaftaran akademik Anda di sini.
                    </p>
                </div>

            </section>

            {/* Featured Hero/CTA Section */}
            <section onClick={() => router.push(hasRegistered ? "/verifikasi" : "/pendaftaran")} className="relative h-[300px] rounded-3xl overflow-hidden glass-panel group cursor-pointer">
                <img alt="Academic Building" className="absolute inset-0 w-full h-full object-cover opacity-30 grayscale transition-transform duration-700 group-hover:scale-105" data-alt="stately stone architecture of a prestigious university building with large windows and lush trees under a dramatic evening sky" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7YkEnL1EkPnsn_7sl2if1qXcNHjp5ZQ8trv6dAIWgVww-mglA6LGJiSsbimvc4GIRZUHrIn2DkN_lWYonsIpnQsvPo8TXiBSdAah2QAgtUlKFyE8-nKuJVc_jZiZDFhVv_94UAsVFwGmwE7sa9OKfx1-Mfc7Hdu4Si2WMwTJyqdt145nxzl8fjMSim5RdqvGSfVcjwUR4N_Zq0SFjdpmlbKsgB6Wg8hfBruvKL4lhnYQN7pQy49Md4x8S86FKNZa5A2cZhfqok8L-" />
                <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent flex flex-col justify-center px-12">
                    <div className="max-w-md space-y-6">
                        <h2 className="font-headline-lg text-headline-lg text-slate-50">Segera Daftar</h2>
                        <p className="text-on-surface-variant">Pastikan semua dokumen valid telah diunggah untuk mempercepat proses verifikasi oleh tim admisi kami.</p>
                        <button className="bg-secondary text-on-secondary px-8 py-4 rounded-xl font-headline-md text-[16px] flex items-center gap-2 w-fit hover:translate-y-[-2px] transition-transform shadow-xl shadow-secondary/10">
                            Segera Daftar
                            <span className="material-symbols-outlined" data-icon="arrow_forward">arrow_forward</span>
                        </button>
                    </div>
                </div>
            </section>




        </div>
    );
}