import React from "react";

export default function NewsSection() {
    return (
        <section className="py-32 bg-surface-container-lowest">
            <div className="max-w-[1400px] mx-auto px-6 md:px-12">
                <div className="flex flex-col md:flex-row justify-between items-baseline mb-16 gap-4">
                    <h2 className="font-serif text-4xl md:text-5xl text-white">Journal &amp; <span className="italic font-normal text-secondary">Insights</span></h2>
                    <div className="h-px flex-grow mx-8 bg-white/5 hidden md:block"></div>
                    <a className="text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-white transition-colors" href="#">Arsip Berita</a>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                    <div className="lg:col-span-8 group cursor-pointer">
                        <div className="relative aspect-video rounded-2xl overflow-hidden mb-8">
                            <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="Diverse students collaborating" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA96l0UtuhL1gd0JXIwDkS39Rs5l-niaU7XvhbyISH7LkFKwEAMmUUBDrA5Beo5Ymo7xn5oT6LjbmrrDUSOkAyl8l8u4hKjgzAHBR5c5qIJlxRRWBGDoTe7eH4UuSQ3vcQnVHk_jzPkM5bEo-QVA5fzLszyth1IzHMVZZZjA0VJOju9e4n4_r5W9YrsZbMcn8dhv7niRaSK578u6CPBlk5G2WkN3oY3yn3urSuYw9catBVVwNKbo7waqg2utQmY_uXFMbT593j9SoiO" />
                            <div className="absolute top-6 left-6">
                                <span className="px-5 py-2 glass text-secondary rounded text-[10px] font-bold tracking-widest uppercase">Featured Article</span>
                            </div>
                        </div>
                        <div className="space-y-4 max-w-3xl">
                            <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">15 Oktober, 2024 • Event</div>
                            <h3 className="font-serif text-3xl md:text-4xl text-white group-hover:text-secondary transition-colors leading-tight">Global Leadership Summit 2024: Menavigasi Perubahan dalam Era Digital</h3>
                            <p className="text-slate-400 text-lg leading-relaxed">Diskusi mendalam bersama para pemimpin industri global tentang bagaimana pendidikan harus beradaptasi dengan kecepatan inovasi teknologi saat ini.</p>
                        </div>
                    </div>
                    <div className="lg:col-span-4 space-y-12">
                        <div className="group cursor-pointer flex flex-col gap-4 border-b border-white/5 pb-8">
                            <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">22 September, 2024 • Research</div>
                            <h4 className="font-serif text-xl text-white group-hover:text-secondary transition-colors">Terobosan Baru Laboratorium Robotik di Bidang Medis</h4>
                            <p className="text-sm text-slate-400 line-clamp-2">Tim mahasiswa teknik kami berhasil mengembangkan prototipe alat bantu bedah berbasis AI yang mendapat apresiasi internasional.</p>
                        </div>
                        <div className="group cursor-pointer flex flex-col gap-4 border-b border-white/5 pb-8">
                            <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">05 September, 2024 • Campus Life</div>
                            <h4 className="font-serif text-xl text-white group-hover:text-secondary transition-colors">Festival Budaya Tahunan: Merayakan Keberagaman Global</h4>
                            <p className="text-sm text-slate-400 line-clamp-2">Sebuah selebrasi seni, musik, dan kuliner dari 45 negara yang mewakili profil demografis siswa kami di akademi.</p>
                        </div>
                        <div className="group cursor-pointer flex flex-col gap-4 border-b border-white/5 pb-8">
                            <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">30 Agustus, 2024 • Academic</div>
                            <h4 className="font-serif text-xl text-white group-hover:text-secondary transition-colors">Pembukaan Penerimaan Mahasiswa Baru Gelombang II</h4>
                            <p className="text-sm text-slate-400 line-clamp-2">Informasi lengkap mengenai jadwal seleksi, beasiswa prestasi, dan persyaratan pendaftaran untuk tahun akademik mendatang.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
