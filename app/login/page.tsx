"use client";

import { useState } from "react";
import { post } from "@/lib/api";
import { useRouter } from "next/navigation";
import { Loader2, AlertCircle } from "lucide-react";
import Link from "next/link";

export default function LoginPage() {
    const router = useRouter();
    const [form, setForm] = useState({
        email: "",
        password: "",
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        try {
            const res = await post("/login", form);

            if (res.token) {
                localStorage.setItem("token", res.token);
                localStorage.setItem("user", JSON.stringify(res.user));

                // Redirect langsung tanpa alert kaku
                router.push("/dashboard");
            } else {
                setError(res.message || "Email atau password salah.");
            }
        } catch (err) {
            setError("Terjadi kesalahan jaringan. Coba lagi nanti.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-[#f8f9ff] min-h-screen flex flex-col font-['Inter',_sans-serif] relative">
            {/* Kembali Button */}
            <Link
                href="/"
                className="absolute top-8 left-8 flex items-center gap-2 text-[#564334] hover:text-[#ff8c00] transition-all duration-300 group z-50"
            >
                <span className="material-symbols-outlined text-[24px]">arrow_back</span>
                <span className="font-medium">Kembali ke Beranda</span>
            </Link>

         
            {/* Main Content: Login Screen */}
            <main className="flex-grow flex items-center justify-center pt-24 pb-12 px-6 relative overflow-hidden">
                {/* Glassmorphism Background Decor */}
                <div className="absolute -z-10 top-1/4 left-1/4 w-64 h-64 bg-[#ff8c00]/10 rounded-full blur-3xl"></div>
                <div className="absolute -z-10 bottom-1/4 right-1/4 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl"></div>

                <div className="w-full max-w-[440px]">

                    {/* Modern Error Alert */}
                    {error && (
                        <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-xl flex items-center gap-3 text-red-700 animate-in fade-in slide-in-from-top-2">
                            <AlertCircle className="w-5 h-5" />
                            <p className="text-sm font-medium">{error}</p>
                        </div>
                    )}

                    {/* Login Card */}
                    <div className="bg-white border border-[#ddc1ae]/30 rounded-xl p-8 md:p-10 shadow-[0px_4px_20px_rgba(0,0,0,0.04)]">
                        <div className="text-center mb-10">
                            <h1 className="text-3xl font-bold text-[#0b1c30] mb-2">Selamat Datang</h1>
                            <p className="text-[#564334]">Masuk ke ScholarHub untuk melanjutkan.</p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Email/Username Input */}
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-[#0b1c30] flex items-center gap-2" htmlFor="identity">
                                    <span className="material-symbols-outlined text-[18px]">person</span>
                                    Email
                                </label>
                                <input
                                    required
                                    type="text"
                                    id="identity"
                                    placeholder="nama@siswa.com"
                                    className="w-full text-[#897362] px-4 py-3 bg-[#f8f9ff] border border-[#ddc1ae] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff8c00]/20 focus:border-[#ff8c00] transition-all"
                                    value={form.email}
                                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                                />
                            </div>

                            {/* Password Input */}
                            <div className="space-y-2">
                                <div className="flex justify-between items-center">
                                    <label className="text-sm font-medium text-[#0b1c30] flex items-center gap-2" htmlFor="password">
                                        <span className="material-symbols-outlined text-[18px]">lock</span>
                                        Kata Sandi
                                    </label>
                                    {/* <Link href="#" className="text-xs text-[#904d00] hover:underline">Lupa Password?</Link> */}
                                </div>
                                <div className="relative">
                                    <input
                                        required
                                        type="password"
                                        id="password"
                                        placeholder="••••••••"
                                        className="w-full text-[#897362] px-4 py-3 bg-[#f8f9ff] border border-[#ddc1ae] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff8c00]/20 focus:border-[#ff8c00] transition-all"
                                        value={form.password}
                                        onChange={(e) => setForm({ ...form, password: e.target.value })}
                                    />
                                    <button className="absolute right-3 top-1/2 -translate-y-1/2 text-[#564334] hover:text-[#0b1c30]" type="button">
                                        <span className="material-symbols-outlined">visibility</span>
                                    </button>
                                </div>
                            </div>

                            {/* Remember Me */}
                            <div className="flex items-center gap-2">
                                <input className="w-4 h-4 rounded border-[#ddc1ae] text-[#ff8c00] focus:ring-[#ff8c00]" id="remember" type="checkbox" />
                                <label className="text-xs text-[#564334]" htmlFor="remember">Tetap masuk di perangkat ini</label>
                            </div>

                            {/* Submit Button */}
                            <button
                                disabled={loading}
                                type="submit"
                                className="w-full py-3.5 bg-[#ff8c00] text-white font-bold rounded-lg shadow-md hover:bg-orange-700 active:scale-[0.98] transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {loading ? (
                                    <Loader2 className="w-5 h-5 animate-spin" />
                                ) : (
                                    <>
                                        Masuk
                                        <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                                    </>
                                )}
                            </button>
                        </form>

                        <div className="mt-8 pt-8 border-t border-[#ddc1ae]/30 text-center">
                            <p className="text-xs text-[#564334]">
                                Belum punya akun?{" "}
                                <Link href="/register" className="text-[#904d00] font-bold hover:underline">
                                    Daftar sekarang
                                </Link>
                            </p>
                        </div>
                    </div>


                </div>
            </main>


        </div>
    );
}