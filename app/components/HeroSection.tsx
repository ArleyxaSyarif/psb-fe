import React from "react";

export default function HeroSection() {
    return (
        <section className="relative min-h-[720px] flex items-center overflow-hidden">
            <div className="absolute inset-0 z-0">
                <img alt="Modern school campus" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCnfDYUT71dHfTXSplcSUoUxLPyOKvBLB6L7npkFKZK9NQGXczTLpYrQcfVmxZxoj3H_PPHiTAK8lcZefU9_k7XNPTl82XGg34fLZ7BKsXkeFN4U9cIIp_jRY8HKSzoS6pTA-OG_GHVWyQ4yykN1LKT3BO4M3TE_Evyy2ZuVMg6tZdvuD9F5vfWVjXbWFJr6fECCCNx0zAYI-NhqKsRpI1mvo4Ct2xkt4StNTlIzEU-sHzH_Gp3ItLQXLOVAP5G0JVV-nP3gOpekRIq" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0b1c30]/80 via-[#0b1c30]/40 to-transparent"></div>
            </div>
            <div className="relative z-10 max-w-[1440px] mx-auto px-8 w-full">
                <div className="max-w-2xl">
                    <span className="inline-block px-4 py-2 bg-orange-500/20 text-orange-400 rounded-full text-sm font-medium mb-6 backdrop-blur-sm border border-orange-500/30">
                        Penerimaan Mahasiswa Baru 2024
                    </span>
                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                        Membangun Masa Depan Gemilang
                    </h1>
                    <p className="text-lg text-slate-200 mb-10 max-w-lg">
                        Mempersiapkan generasi unggul melalui pendidikan holistik yang menggabungkan nilai-nilai tradisi dengan inovasi teknologi global.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <button className="px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-semibold text-lg transition-all shadow-lg active:scale-95">
                            Pendaftaran Siswa
                        </button>
                        <button className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 rounded-lg font-semibold text-lg transition-all active:scale-95">
                            Lihat Kurikulum
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
