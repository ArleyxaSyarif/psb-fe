import React from "react";

export default function LandingFooter() {
    return (
        <footer className="bg-surface-container-lowest border-t border-white/5">
            <div className="max-w-[1400px] mx-auto px-6 md:px-12 pt-20 pb-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
                    <div className="col-span-1 md:col-span-1 space-y-6">
                        <div className="text-2xl font-serif font-black text-white tracking-tight">
                            Prestige<span className="text-secondary italic">Academy</span>
                        </div>
                        <p className="text-slate-500 text-sm leading-relaxed">Institusi pendidikan elit dengan fokus pada integritas, inovasi, dan keunggulan karakter sejak 1954.</p>
                    </div>
                    <div>
                        <h6 className="text-white font-bold text-[10px] uppercase tracking-[0.3em] mb-8">Navigation</h6>
                        <ul className="space-y-4 text-sm text-slate-500">
                            <li><a className="hover:text-secondary transition-colors" href="#">Program Studi</a></li>
                            <li><a className="hover:text-secondary transition-colors" href="#">Fasilitas Kampus</a></li>
                            <li><a className="hover:text-secondary transition-colors" href="#">Kehidupan Siswa</a></li>
                            <li><a className="hover:text-secondary transition-colors" href="#">Proses Admisi</a></li>
                        </ul>
                    </div>
                    <div>
                        <h6 className="text-white font-bold text-[10px] uppercase tracking-[0.3em] mb-8">Quick Links</h6>
                        <ul className="space-y-4 text-sm text-slate-500">
                            <li><a className="hover:text-secondary transition-colors" href="#">Kalender Akademik</a></li>
                            <li><a className="hover:text-secondary transition-colors" href="#">Portal Alumni</a></li>
                            <li><a className="hover:text-secondary transition-colors" href="#">Karir &amp; Peluang</a></li>
                            <li><a className="hover:text-secondary transition-colors" href="#">Bantuan Finansial</a></li>
                        </ul>
                    </div>
                    <div>
                        <h6 className="text-white font-bold text-[10px] uppercase tracking-[0.3em] mb-8">Social</h6>
                        <div className="flex gap-4">
                            <a className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:border-secondary hover:text-secondary transition-all" href="#">
                                <span className="material-symbols-outlined text-[18px]">share</span>
                            </a>
                            <a className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:border-secondary hover:text-secondary transition-all" href="#">
                                <span className="material-symbols-outlined text-[18px]">play_circle</span>
                            </a>
                            <a className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:border-secondary hover:text-secondary transition-all" href="#">
                                <span className="material-symbols-outlined text-[18px]">public</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-slate-500 text-[10px] uppercase tracking-[0.2em]">
                        © 2024 Prestige Academy. Dirancang untuk keunggulan.
                    </div>
                    <div className="flex gap-8 text-[10px] uppercase tracking-[0.2em] font-bold">
                        <a className="text-slate-600 hover:text-white transition-colors" href="#">Privacy Policy</a>
                        <a className="text-slate-600 hover:text-white transition-colors" href="#">Terms</a>
                        <a className="text-slate-600 hover:text-white transition-colors" href="#">Cookies</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
