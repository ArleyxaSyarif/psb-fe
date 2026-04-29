"use client";

import { useState } from "react";
import { post } from "@/lib/api";
import { Loader2, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function RegisterPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await post("/register", form);
      console.log(res);
      setIsSuccess(true);
      // Reset form atau redirect bisa dilakukan di sini
    } catch (error) {
      console.error("Registration failed", error);
    } finally {
      setIsLoading(false);
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
      {/* Main Content: Register Form Section */}
      <main className="flex-grow flex items-center justify-center pt-24 pb-12 px-6 relative overflow-hidden">
        {/* Glassmorphism Background Decor */}
        <div className="absolute -z-10 top-1/4 left-1/4 w-64 h-64 bg-[#ff8c00]/10 rounded-full blur-3xl"></div>
        <div className="absolute -z-10 bottom-1/4 right-1/4 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl"></div>

        <div className="w-full max-w-md">

          {/* Alert Success */}
          {isSuccess && (
            <div className="mb-4 p-4 bg-emerald-50 border border-emerald-200 rounded-xl flex items-center gap-3 text-emerald-700 animate-in fade-in slide-in-from-top-2">
              <CheckCircle2 className="w-5 h-5" />
              <p className="text-sm font-medium">Akun berhasil terdaftar! Silahkan login.</p>
            </div>
          )}

          {/* Register Card */}
          <div className="bg-white rounded-xl border border-[#ddc1ae]/30 shadow-[0px_4px_20px_rgba(0,0,0,0.04)] p-8">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-[#0b1c30] mb-2">Buat Akun Baru</h1>
              <p className="text-[#564334]">Silakan lengkapi data diri Anda untuk bergabung dengan ScholarHub</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Nama Lengkap */}
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-[#0b1c30]" htmlFor="full_name">Nama Lengkap</label>
                <div className="relative group">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#897362] group-focus-within:text-[#ff8c00] transition-colors">person</span>
                  <input
                    required
                    className="w-full text-[#897362] pl-10 pr-4 py-3 bg-[#f8f9ff] border border-[#ddc1ae] rounded-lg font-body-md focus:ring-2 focus:ring-[#ffb77d] focus:border-[#ff8c00] outline-none transition-all duration-200"
                    id="full_name"
                    placeholder="Masukkan nama lengkap Anda"
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                </div>
              </div>

              {/* Email */}
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-[#0b1c30]" htmlFor="email">Alamat Email</label>
                <div className="relative group">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#897362] group-focus-within:text-[#ff8c00] transition-colors">mail</span>
                  <input
                    required
                    className="w-full text-[#897362] pl-10 pr-4 py-3 bg-[#f8f9ff] border border-[#ddc1ae] rounded-lg font-body-md focus:ring-2 focus:ring-[#ffb77d] focus:border-[#ff8c00] outline-none transition-all duration-200"
                    id="email"
                    placeholder="contoh@email.com"
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                  />
                </div>
              </div>

              {/* Password */}
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-[#0b1c30]" htmlFor="password">Password</label>
                <div className="relative group">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#897362] group-focus-within:text-[#ff8c00] transition-colors">lock</span>
                  <input
                    required
                    className="w-full text-[#897362] pl-10 pr-12 py-3 bg-[#f8f9ff] border border-[#ddc1ae] rounded-lg font-body-md focus:ring-2 focus:ring-[#ffb77d] focus:border-[#ff8c00] outline-none transition-all duration-200"
                    id="password"
                    placeholder="Min. 8 karakter"
                    type="password"
                    value={form.password}
                    onChange={(e) => setForm({ ...form, password: e.target.value })}
                  />
                  <button className="absolute right-3 top-1/2 -translate-y-1/2 text-[#897362] hover:text-[#ff8c00]" type="button">
                    <span className="material-symbols-outlined">visibility</span>
                  </button>
                </div>
              </div>

              {/* Terms Agreement */}
              <div className="flex items-start gap-3 py-2">
                <input className="mt-1 rounded border-[#ddc1ae] text-[#ff8c00] focus:ring-[#ff8c00]" id="terms" type="checkbox" required />
                <label className="text-xs text-[#564334]" htmlFor="terms">
                  Saya menyetujui <Link className="text-[#ff8c00] font-semibold hover:underline" href="#">Syarat & Ketentuan</Link> serta <Link className="text-[#ff8c00] font-semibold hover:underline" href="#">Kebijakan Privasi</Link> yang berlaku.
                </label>
              </div>

              {/* Submit Button */}
              <button
                disabled={isLoading}
                className="w-full py-4 bg-[#ff8c00] text-white font-bold rounded-lg shadow-lg hover:brightness-110 active:scale-[0.98] transition-all duration-200 mt-4 flex justify-center items-center gap-2"
                type="submit"
              >
                {isLoading ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  "Daftar"
                )}
              </button>
            </form>

            {/* Login Option */}
            <div className="mt-8 text-center border-t border-[#ddc1ae]/30 pt-6">
              <p className="text-sm text-[#564334]">
                Sudah memiliki akun?{" "}
                <Link className="text-[#ff8c00] font-bold hover:underline ml-1" href="/login">Masuk Sekarang</Link>
              </p>
            </div>
          </div>

          {/* Additional Links / Decorative Info */}
          <div className="mt-8 grid grid-cols-2 gap-4">
            <div className="bg-white/50 p-4 rounded-lg flex items-center gap-3 border border-[#ddc1ae]/20">
              <span className="material-symbols-outlined text-[#ff8c00]">verified_user</span>
              <span className="text-[10px] text-[#564334]">Data Aman & Terenkripsi</span>
            </div>
            <div className="bg-white/50 p-4 rounded-lg flex items-center gap-3 border border-[#ddc1ae]/20">
              <span className="material-symbols-outlined text-[#ff8c00]">speed</span>
              <span className="text-[10px] text-[#564334]">Akses Cepat Portal</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}