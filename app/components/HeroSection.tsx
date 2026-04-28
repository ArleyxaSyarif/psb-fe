import React from "react";

export default function HeroSection() {
    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
            <div className="absolute inset-0 z-0 scale-105 animate-[pulse_10s_ease-in-out_infinite]">
                <img className="w-full h-full object-cover brightness-75" data-alt="Modern architectural campus building at dawn with warm interior lights glowing through large glass windows, atmospheric morning fog" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0C5JjPEsC5CXNwCHfaSqripyLgWPXO2VXxz6T_3_j9LT700VAPNAWBHPAyPyZZ8s_Qfp0ykB5gZOO1BCg5IeHcvp65oyx75h0TQ9_LhqofaTCkg1Tvpo7p0ThRpq7UV7ATKajZiAQjT_lTnMyX2zLvzGGFn1MlJis1dM-p99t-YiscbeGwlZENaETg1vXo10N1QOr0LVvyLpv_o1N0XIMyYhK-aQDQUNeNnc1dwWZq5mTEWZ-qKcL3uWmt3B2gheuJs0GPujmtyGM" />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/60 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-surface-container-lowest/80 via-transparent to-transparent"></div>
            </div>
            <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 w-full">
                <div className="max-w-4xl space-y-10">
                    <div className="flex items-center gap-6 overflow-hidden">
                        <div className="w-16 h-[1px] bg-secondary/50"></div>
                        <span className="font-sans text-secondary font-bold uppercase tracking-[0.4em] text-[10px] md:text-xs">Established 1954 • Excellence in Education</span>
                    </div>
                    <h1 className="font-serif text-white text-5xl md:text-8xl leading-[0.95] hero-text-shadow">
                        Membentuk Masa <br />Depan <span className="italic font-normal text-secondary">Unggul</span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-300 max-w-xl font-light leading-relaxed">
                        Dedikasi kami untuk keunggulan akademik dan pengembangan karakter mempersiapkan pemimpin masa depan melalui kurikulum inovatif dan tradisi yang mendalam.
                    </p>
                    <div className="flex flex-wrap gap-6 pt-6">
                        <button className="group bg-secondary text-on-secondary-container px-10 py-5 rounded-lg font-sans font-bold text-sm uppercase tracking-widest transition-all hover:scale-[1.02] hover:shadow-2xl hover:shadow-secondary/20 flex items-center gap-3">
                            Mulai Menjelajah
                            <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_forward</span>
                        </button>
                        <button className="border border-white/20 backdrop-blur-sm text-white px-10 py-5 rounded-lg font-sans font-bold text-sm uppercase tracking-widest transition-all hover:bg-white/5">
                            Lihat Kurikulum
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
