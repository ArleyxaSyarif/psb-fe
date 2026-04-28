"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { get } from "@/lib/api";
import {
    CheckCircle2,
    Clock,
    XCircle,
    ArrowLeft,
    FileText,
    ShieldCheck,
    Search,
    Bell
} from "lucide-react";

export default function VerifikasiPage() {
    const router = useRouter();
    const [status, setStatus] = useState("pending");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchStatus = async () => {
            const token = localStorage.getItem("token");
            if (!token) {
                router.push("/login");
                return;
            }
            try {
                const res = await get("/students/check", token);
                setStatus(res.status || "pending");
            } catch (err) {
                console.error("Gagal ambil status:", err);
            } finally {
                setLoading(false);
            }
        };
        fetchStatus();
    }, [router]);

    const statusConfig = {
        diterima: {
            icon: <CheckCircle2 className="w-12 h-12" />,
            color: "text-emerald-500",
            bgColor: "bg-emerald-50 dark:bg-emerald-500/10",
            borderColor: "border-emerald-200 dark:border-emerald-500/20",
            title: "Selamat! Anda Diterima",
            desc: "Hasil verifikasi menyatakan data Anda memenuhi syarat. Selamat bergabung di keluarga besar SMA Unggul Bangsa.",
            step: 3
        },
        ditolak: {
            icon: <XCircle className="w-12 h-12" />,
            color: "text-rose-500",
            bgColor: "bg-rose-50 dark:bg-rose-500/10",
            borderColor: "border-rose-200 dark:border-rose-500/20",
            title: "Pendaftaran Belum Disetujui",
            desc: "Mohon maaf, berdasarkan hasil verifikasi berkas Anda belum dapat kami proses lebih lanjut. Silahkan hubungi admin.",
            step: 2
        },
        revisi: {
            icon: <XCircle className="w-12 h-12" />,
            color: "text-orange-500",
            bgColor: "bg-orange-50 dark:bg-orange-500/10",
            borderColor: "border-orange-200 dark:border-orange-500/20",
            title: "Pendaftaran Perlu Revisi",
            desc: "Mohon maaf, berdasarkan hasil verifikasi berkas Anda belum dapat kami proses lebih lanjut. Silahkan hubungi admin.",
            step: 2
        },
        pending: {
            icon: <Clock className="w-12 h-12" />,
            color: "text-amber-500",
            bgColor: "bg-amber-50 dark:bg-amber-500/10",
            borderColor: "border-amber-200 dark:border-amber-500/20",
            title: "Sedang Dalam Peninjauan",
            desc: "Panitia sedang melakukan validasi terhadap dokumen yang Anda unggah. Proses ini biasanya memakan waktu 1-3 hari kerja.",
            step: 2
        }
    };

    const current = statusConfig[status as keyof typeof statusConfig] || statusConfig.pending;

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950">
                <div className="flex flex-col items-center gap-4">
                    <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                    <p className="text-slate-500 animate-pulse font-medium">Mengecek Status...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 p-4 md:p-8 transition-colors duration-300">
            <div className="max-w-2xl mx-auto">

                {/* Header Navigation */}
                <button
                    onClick={() => router.push("/dashboard")}
                    className="group flex items-center gap-2 text-slate-500 hover:text-blue-600 mb-8 transition-all font-medium"
                >
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    Kembali ke Dashboard
                </button>

                {/* Main Status Card */}
                <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 shadow-2xl shadow-slate-200/50 dark:shadow-none overflow-hidden">

                    {/* Top Banner Status */}
                    <div className={`p-10 text-center ${current.bgColor} border-b ${current.borderColor}`}>
                        <div className={`${current.color} flex justify-center mb-6 drop-shadow-sm`}>
                            {current.icon}
                        </div>
                        <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-3 tracking-tight">
                            {current.title}
                        </h1>
                        <p className="text-slate-600 dark:text-slate-400 max-w-md mx-auto leading-relaxed">
                            {current.desc}
                        </p>
                    </div>

                    <div className="p-8 md:p-10 space-y-8">

                        {/* Timeline Stepper */}
                        <div className="relative flex justify-between items-center max-w-xs mx-auto">
                            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-slate-100 dark:bg-slate-800 z-0"></div>
                            <div className={`absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-blue-600 z-0 transition-all duration-1000`}
                                style={{ width: `${(current.step / 3) * 100}%` }}></div>

                            {[
                                { label: "Daftar", icon: <FileText className="w-4 h-4" /> },
                                { label: "Verifikasi", icon: <Search className="w-4 h-4" /> },
                                { label: "Selesai", icon: <ShieldCheck className="w-4 h-4" /> }
                            ].map((s, i) => (
                                <div key={i} className="relative z-10 flex flex-col items-center gap-2">
                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors border-4 border-white dark:border-slate-900 ${i + 1 <= current.step ? 'bg-blue-600 text-white' : 'bg-slate-200 dark:bg-slate-800 text-slate-400'}`}>
                                        {s.icon}
                                    </div>
                                    <span className={`text-[10px] font-bold uppercase tracking-tighter ${i + 1 <= current.step ? 'text-blue-600' : 'text-slate-400'}`}>
                                        {s.label}
                                    </span>
                                </div>
                            ))}
                        </div>

                        {/* Info Box */}
                        <div className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-6 border border-slate-100 dark:border-slate-800">
                            <div className="flex items-start gap-4">
                                <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-lg">
                                    <Bell className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1">Catatan Panitia:</h4>
                                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                                        {status === "diterima"
                                            ? "Silahkan melakukan pendaftaran ulang di gedung pusat pada jam kerja dengan membawa fotokopi KK."
                                            : "Pastikan nomor HP Anda selalu aktif, kami akan menghubungi jika ada dokumen yang kurang jelas."}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                            <button
                                onClick={() => window.print()}
                                className="px-6 py-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 font-bold hover:bg-slate-50 transition-all text-sm"
                            >
                                Cetak Bukti
                            </button>
                            <button
                                onClick={() => router.push("/help")}
                                className="px-6 py-4 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-bold transition-all shadow-lg shadow-blue-500/25 text-sm"
                            >
                                Hubungi Bantuan
                            </button>
                        </div>

                    </div>
                </div>

                {/* Footer Info */}
                <p className="text-center mt-8 text-sm text-slate-400">
                    ID Pendaftaran: <span className="font-mono text-slate-600 dark:text-slate-300">#REG-2026-00124</span>
                </p>
            </div>
        </div>
    );
}