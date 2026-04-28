import React from "react";

export default function FactsSection() {
    return (
        <section className="relative z-20 -mt-24 pb-32">
            <div className="max-w-[1400px] mx-auto px-6 md:px-12">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 glass rounded-2xl overflow-hidden shadow-2xl">
                    <div className="p-10 md:p-14 text-center group transition-colors hover:bg-white/5">
                        <div className="text-4xl md:text-6xl font-serif text-secondary mb-3">70+</div>
                        <div className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-widest">Tahun Warisan</div>
                    </div>
                    <div className="p-10 md:p-14 text-center group transition-colors hover:bg-white/5">
                        <div className="text-4xl md:text-6xl font-serif text-secondary mb-3">12:1</div>
                        <div className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-widest">Rasio Siswa-Guru</div>
                    </div>
                    <div className="p-10 md:p-14 text-center group transition-colors hover:bg-white/5">
                        <div className="text-4xl md:text-6xl font-serif text-secondary mb-3">98%</div>
                        <div className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-widest">Lulusan Universitas</div>
                    </div>
                    <div className="p-10 md:p-14 text-center group transition-colors hover:bg-white/5">
                        <div className="text-4xl md:text-6xl font-serif text-secondary mb-3">45+</div>
                        <div className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-widest">Negara Asal Siswa</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
