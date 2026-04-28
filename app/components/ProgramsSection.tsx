import React from "react";

export default function ProgramsSection() {
    return (
        <section className="py-32 bg-surface-dim overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-6 md:px-12">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                    <div className="max-w-2xl space-y-6">
                        <div className="flex items-center gap-3">
                            <span className="w-8 h-px bg-secondary"></span>
                            <span className="text-secondary font-bold text-xs uppercase tracking-widest">Curriculum</span>
                        </div>
                        <h2 className="font-serif text-4xl md:text-6xl text-white">Spektrum <span className="italic font-normal">Pendidikan</span></h2>
                        <p className="text-slate-400 text-lg">Eksplorasi jalur pendidikan yang dirancang secara presisi untuk mengasah bakat alami dan mempersiapkan kematangan profesional.</p>
                    </div>
                    <button className="group text-secondary font-bold text-xs uppercase tracking-[0.2em] flex items-center gap-3 hover:text-white transition-all">
                        Semua Program <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">trending_flat</span>
                    </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    <div className="group relative aspect-[4/5] rounded-2xl overflow-hidden bg-slate-900 shadow-2xl cursor-pointer">
                        <img className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-70 group-hover:opacity-40" data-alt="High-tech laboratory" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAdULPeJ10ZMpv7ULizAkP25g3ptQS43fOe7I_5uWANQGqAcegfkZiE4VavZ58YQaxHw63OWeOUYbX5L0tSCZfcC4MJeTh4w7X7-yVSaRAAE2HdwsVs7T551Z8X0xRoqDbK7OtmqPD2dMH1xCGwAXAWqxxA5DbFTHHuIRpcKai82XHgB6CH1h12KzCBOlH_UCU2nCyDyBRLEVpQ9azq31nWjrO1pGC0hJgY_E0zcSYT6XgGb32nEtoVrIUjH7AFqLvtcVjtMeN2KndW" />
                        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent"></div>
                        <div className="absolute inset-0 border border-white/5 rounded-2xl group-hover:border-secondary/20 transition-colors pointer-events-none"></div>
                        <div className="absolute bottom-0 p-10 w-full transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                            <span className="inline-block px-4 py-1.5 glass text-secondary rounded text-[9px] font-bold tracking-[0.3em] uppercase mb-6">Research &amp; Tech</span>
                            <h3 className="font-serif text-3xl md:text-4xl text-white mb-4">Sciences</h3>
                            <p className="text-slate-400 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">Menembus batas kognisi melalui riset AI dan bio-teknologi mutakhir di laboratorium modern.</p>
                        </div>
                    </div>
                    <div className="group relative aspect-[4/5] rounded-2xl overflow-hidden bg-slate-900 shadow-2xl cursor-pointer">
                        <img className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-70 group-hover:opacity-40" data-alt="Creative art studio" src="https://lh3.googleusercontent.com/aida-public/AB6AXuApC3Y1z-axJT60GLplH1pLG9Ap6GB5V4cUs6ve5cftPxai_sg1XMaMWdpVUXdwM2i4d1RjEhmwRKjia_EPEiFVXWc_RYrhx_eqNoVkt52Oj6aVXozZjdLfWGzNKFMB3hFO7sGwVZT35YIt_-aLyhakj3TlhewT0W_HROB-gfcHt8bkGR4TUtvRnTM0l3wmTnu5HIKwrggJeSKAO7Ygt8wa6faCtH22YMdpvmMGRCpH_A2SIEg2Yx8fEO_HmY7jEgHOyXIATzaAkkXC" />
                        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent"></div>
                        <div className="absolute inset-0 border border-white/5 rounded-2xl group-hover:border-secondary/20 transition-colors pointer-events-none"></div>
                        <div className="absolute bottom-0 p-10 w-full transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                            <span className="inline-block px-4 py-1.5 glass text-secondary rounded text-[9px] font-bold tracking-[0.3em] uppercase mb-6">Creative Practice</span>
                            <h3 className="font-serif text-3xl md:text-4xl text-white mb-4">Fine Arts</h3>
                            <p className="text-slate-400 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">Mengekspresikan visi artistik melalui sintesis media tradisional dan teknik digital kontemporer.</p>
                        </div>
                    </div>
                    <div className="group relative aspect-[4/5] rounded-2xl overflow-hidden bg-slate-900 shadow-2xl cursor-pointer">
                        <img className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-70 group-hover:opacity-40" data-alt="Modern athletic stadium" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA8dXVAAoZHka7LjxRbfPQga08bMNECXmE6AQ2GrC-MP0mjlS-VPU8-AnIzqyklYulf7nK_JHTGOT08eGV5ae71dqV6Zo5t61qdytd9uwSMbr0U8d9USN8yPO0vkTZ1GvEtTMc0142BWGhg-EM01MWdA2J6kaG6sxsuDBRWpS_1cWpJUDMui7dkheGtMw1o-FdVWoOpTUP1naC1Cz_L5xI90fTByFda-BHKcYT0MiISGX-tQWqwtfa6-hSih5hWfYi0mXUWkxs0bFNl" />
                        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent"></div>
                        <div className="absolute inset-0 border border-white/5 rounded-2xl group-hover:border-secondary/20 transition-colors pointer-events-none"></div>
                        <div className="absolute bottom-0 p-10 w-full transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                            <span className="inline-block px-4 py-1.5 glass text-secondary rounded text-[9px] font-bold tracking-[0.3em] uppercase mb-6">Elite Performance</span>
                            <h3 className="font-serif text-3xl md:text-4xl text-white mb-4">Athletics</h3>
                            <p className="text-slate-400 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">Membangun disiplin dan ketangguhan fisik melalui fasilitas kelas dunia dan coaching berstandar internasional.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
