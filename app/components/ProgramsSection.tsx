"use client"

import React, { useEffect, useState } from "react";
import { get } from "@/lib/api";

export default function ProgramsSection() {

    const [programs, setPrograms] = useState<any>([]);
    const [startIndex, setStartIndex] = useState(0);

    useEffect(() => {
        get("/programs").then((res: any) => {
            if (Array.isArray(res)) {
                setPrograms(res);
            } else if (res && res.data) {
                setPrograms(res.data);
            }
        });
    }, []);

    const nextSlide = () => {
        if (startIndex + 3 < programs.length) {
            setStartIndex(prev => prev + 1);
        }
    };

    const prevSlide = () => {
        if (startIndex > 0) {
            setStartIndex(prev => prev - 1);
        }
    };

    // Ambil 3 data berdasarkan startIndex
    const visiblePrograms = programs.slice(startIndex, startIndex + 3);

    return (
        <section className="py-20 bg-[#f8f9ff]">
            <div className="max-w-[1440px] mx-auto px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div className="max-w-xl">
                        <h2 className="text-4xl font-bold text-[#0b1c30] mb-4">Program Unggulan Kami</h2>
                        <p className="text-slate-600">Kurikulum terintegrasi yang disesuaikan untuk setiap tahap perkembangan anak anda.</p>
                    </div>
                    <div className="flex gap-2">
                        <button 
                            onClick={prevSlide}
                            disabled={startIndex === 0}
                            className={`w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center transition-all ${
                                startIndex === 0 
                                ? "opacity-30 cursor-not-allowed" 
                                : "hover:bg-orange-50 hover:border-[#ff8c00]/30 text-slate-400 hover:text-[#ff8c00]"
                            }`}
                        >
                            <span className="material-symbols-outlined">arrow_back</span>
                        </button>
                        <button 
                            onClick={nextSlide}
                            disabled={startIndex + 3 >= programs.length}
                            className={`w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center transition-all ${
                                startIndex + 3 >= programs.length 
                                ? "opacity-30 cursor-not-allowed" 
                                : "hover:bg-orange-50 hover:border-[#ff8c00]/30 text-slate-400 hover:text-[#ff8c00]"
                            }`}
                        >
                            <span className="material-symbols-outlined">arrow_forward</span>
                        </button>
                    </div>
                </div>
                <div className="overflow-hidden">
                    <div 
                        className="flex transition-transform duration-500 ease-in-out gap-8"
                        style={{ 
                            transform: `translateX(-${startIndex * (100 / 3 + 2)}%)`, // 2% estimasi gap
                        }}
                    >
                        {programs.map((program: any) => (
                            <div 
                                key={program.id} 
                                className="min-w-[calc(33.333%-21.33px)] group bg-white rounded-xl overflow-hidden border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-xl transition-all duration-300"
                            >
                                <div className="h-64 relative overflow-hidden">
                                    <img
                                        alt={program.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        src={program.image}
                                    />
                                    <div className="absolute top-4 right-4 bg-[#ff8c00] text-white px-4 py-1 rounded-full text-xs font-bold uppercase">
                                        {program.title.split(' ')[0]}
                                    </div>
                                </div>
                                <div className="p-8">
                                    <h3 className="text-2xl font-bold mb-3 text-[#ff8c00] transition-colors">{program.title}</h3>
                                    <p className="text-slate-500 mb-6 text-sm line-clamp-3">{program.description}</p>
                                    <a className="inline-flex items-center text-[#ff8c00] font-bold hover:gap-2 transition-all text-sm" href="#">
                                        Selengkapnya <span className="material-symbols-outlined ml-1">chevron_right</span>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
