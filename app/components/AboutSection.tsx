import React from "react";

export default function AboutSection() {
    return (
        <section className="py-24 bg-surface-container-lowest">
            <div className="max-w-[1400px] mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
                    <div className="lg:col-span-5 space-y-10">
                        <div className="space-y-6">
                            <div className="flex items-center gap-3">
                                <span className="w-8 h-px bg-secondary"></span>
                                <span className="text-secondary font-bold text-xs uppercase tracking-widest">Philosophy</span>
                            </div>
                            <h2 className="font-serif text-4xl md:text-6xl text-white leading-tight">Tradisi Berpadu <br /><span className="italic font-normal">Masa Depan</span></h2>
                            <p className="text-slate-400 text-lg leading-relaxed">
                                Prestige Academy adalah institusi pendidikan yang berakar pada tradisi namun berorientasi pada masa depan. Sejarah kami selama tujuh dekade menjadi landasan bagi inovasi pendidikan global, membentuk karakter yang tangguh dan intelek yang tajam.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="p-8 glass rounded-xl border-l-2 border-l-secondary/40">
                                <h3 className="font-serif text-xl text-white mb-4">Visi Kami</h3>
                                <p className="text-sm text-slate-400 leading-relaxed">Menjadi pusat keunggulan intelektual yang melahirkan pemimpin berintegritas tinggi di panggung dunia.</p>
                            </div>
                            <div className="p-8 glass rounded-xl border-l-2 border-l-secondary/40">
                                <h3 className="font-serif text-xl text-white mb-4">Misi Kami</h3>
                                <p className="text-sm text-slate-400 leading-relaxed">Memberdayakan setiap individu untuk mencapai potensi maksimalnya melalui pendekatan holistik dan inovatif.</p>
                            </div>
                        </div>
                    </div>
                    <div className="lg:col-span-7 relative">
                        <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                            <img className="w-full h-full object-cover scale-105" data-alt="Cinematic university library" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAyJlriNVuE36Qytfmcq26_KM5vafKfv1DKnyelEO79NYtHawmR7rzi988wug2NUYgVEcbepyRxnBucgCTEOx5-EmqLcnnjgWuTgQop7K5KYNkgB82lIi1iHX_h7QOPx2B3RKhP3cXC9swChb_QfmUQ2hEEKuWnG6LWYxDHJX3GtJJEvXx6Yoffe_vVM2rgGWfspmspc-o_mN5_FEQ_XSxci9I4cUWPnUAas3TpECfJmnpSllxI_l98mrydO_Y3ziKyqbwzRw05F5QE" />
                        </div>
                        <div className="absolute -bottom-10 -left-10 hidden md:block glass p-10 rounded-2xl shadow-2xl border border-white/10">
                            <div className="flex flex-col gap-1">
                                <span className="text-5xl font-serif text-secondary">A+</span>
                                <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">Akreditasi Global</span>
                            </div>
                        </div>
                        <div className="absolute -top-6 -right-6 w-32 h-32 border-t-2 border-r-2 border-secondary/30 rounded-tr-3xl hidden lg:block"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
