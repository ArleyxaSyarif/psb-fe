
"use client"

import React, { useEffect, useState } from "react";

import { get } from "@/lib/api";



export default function HeroSection() {
    const [heroImages, setHeroImages] = useState<string[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchHero = async () => {
            try {
                const res = await get("/hero");
                if (res && res.images && res.images.length > 0) {
                    setHeroImages(res.images);
                }
            } catch (error) {
                console.error("Gagal mengambil data hero:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchHero();
    }, []);

    useEffect(() => {
        if (heroImages.length > 1) {
            const interval = setInterval(() => {
                setCurrentIndex((prev) => (prev + 1) % heroImages.length);
            }, 5000); // Ganti setiap 5 detik
            return () => clearInterval(interval);
        }
    }, [heroImages]);

    return (
        <section className="relative min-h-[720px] flex items-center overflow-hidden">
            <div className="absolute inset-0 z-0">
                {heroImages.map((img, index) => (
                    <img
                        key={index}
                        alt={`hero-${index}`}
                        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                            index === currentIndex ? "opacity-100" : "opacity-0"
                        }`}
                        src={img}
                    />
                ))}
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
