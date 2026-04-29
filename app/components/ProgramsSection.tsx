import React from "react";

export default function ProgramsSection() {
    return (
        <section className="py-20 bg-[#f8f9ff]">
            <div className="max-w-[1440px] mx-auto px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div className="max-w-xl">
                        <h2 className="text-4xl font-bold text-[#0b1c30] mb-4">Program Unggulan Kami</h2>
                        <p className="text-slate-600">Kurikulum terintegrasi yang disesuaikan untuk setiap tahap perkembangan anak anda.</p>
                    </div>
                    <div className="flex gap-2">
                        <button className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center hover:bg-orange-50 hover:border-[#ff8c00]/30 text-slate-400 hover:text-[#ff8c00] transition-all">
                            <span className="material-symbols-outlined">arrow_back</span>
                        </button>
                        <button className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center hover:bg-orange-50 hover:border-[#ff8c00]/30 text-slate-400 hover:text-[#ff8c00] transition-all">
                            <span className="material-symbols-outlined">arrow_forward</span>
                        </button>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* SD */}
                    <div className="group bg-white rounded-xl overflow-hidden border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-xl transition-all duration-300">
                        <div className="h-64 relative overflow-hidden">
                            <img alt="Elementary" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCU9aoKu69LdXd8ztxIP1pL_HU35ObamadMoj0B54lrgfiXrMNcm-M_mT2JjemRlJtfiov6jzB_y521WN8T7q_O1b7W5KNdaa4QhH0Qz-385zMidG3VZKCRPeSYheej-ShEEB-cP9J-90DTORPRlPf3NjyPtgD7jCV8NFtVnBR4d3f6EkP5N_hHT5jF1zNCWUHFi8F4ji-NMFOlTUvbDL9yj3rW8DJfAlhDC9BMPkelVSAC6173CQ1pCi530T7Y0cC1mQNf9qO-Ezb8" />
                            <div className="absolute top-4 right-4 bg-[#ff8c00] text-white px-4 py-1 rounded-full text-xs font-bold">SD</div>
                        </div>
                        <div className="p-8">
                            <h3 className="text-2xl font-bold mb-3 text-[#ff8c00] transition-colors">Sekolah Dasar</h3>
                            <p className="text-slate-500 mb-6 text-sm">Membangun fondasi karakter dan rasa ingin tahu melalui metode active learning.</p>
                            <a className="inline-flex items-center text-[#ff8c00] font-bold hover:gap-2 transition-all text-sm" href="#">
                                Selengkapnya <span className="material-symbols-outlined ml-1">chevron_right</span>
                            </a>
                        </div>
                    </div>
                    {/* SMP */}
                    <div className="group bg-white rounded-xl overflow-hidden border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-xl transition-all duration-300">
                        <div className="h-64 relative overflow-hidden">
                            <img alt="SMP" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7c2XkDrP3orjtbkD6TSy9BosoKOlLXv7QJeJEyVNBvXgF-vWEfXxqENDK0NgjgJrXjo3rTMj2LdvBUZ2EVcV8ufvS0u2YG6pxdQFeEcY--MbT2msS3AasVXYEIl6e4JOsly5wFPa2qMeREl2I0zmfTAEzsOdONS5Vh07CwqGJgUfIzbCt7FccnvOaY6_lHPkgApEvbwPTGquOGxO_FM6yUUh1txDqY-UQb7o9vnKkuuuZJtQf4vuo2492h9cYXcUwOSstAlZ3J3ny" />
                            <div className="absolute top-4 right-4 bg-[#ff8c00] text-white px-4 py-1 rounded-full text-xs font-bold">SMP</div>
                        </div>
                        <div className="p-8">
                            <h3 className="text-2xl font-bold mb-3 text-[#ff8c00] transition-colors">Sekolah Menengah Pertama</h3>
                            <p className="text-slate-500 mb-6 text-sm">Mengembangkan kemandirian dan pemikiran kritis untuk eksplorasi minat siswa.</p>
                            <a className="inline-flex items-center text-[#ff8c00] font-bold hover:gap-2 transition-all text-sm" href="#">
                                Selengkapnya <span className="material-symbols-outlined ml-1">chevron_right</span>
                            </a>
                        </div>
                    </div>
                    {/* SMA */}
                    <div className="group bg-white rounded-xl overflow-hidden border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-xl transition-all duration-300">
                        <div className="h-64 relative overflow-hidden">
                            <img alt="SMA" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2jeCzndh2DUH-jeZIPwAgYwDLaeRXoiyLii4IgevsuKLDBjWVbnXrwbJg1CDCroW1rpa9eerdllTt-jWJBIogpj9-chUqGH-YXJw9dXFtIiYlOn2BuxtvmfhzjYMIPGiLo6Nl9-tQlYdR8y6shSZcgXwPhKDuEHw3FtpS4EYWfqygifC-JDPWJLw9SjZeF6Tn5KcwWmvIPz0S1URUCdhEZu38hKZOcopbCi1WpUzr9iykH7KNdZo6rTb4pqg79paNa06_KWhvy2dZ" />
                            <div className="absolute top-4 right-4 bg-[#ff8c00] text-white px-4 py-1 rounded-full text-xs font-bold">SMA</div>
                        </div>
                        <div className="p-8">
                            <h3 className="text-2xl font-bold mb-3 text-[#ff8c00] transition-colors">Sekolah Menengah Atas</h3>
                            <p className="text-slate-500 mb-6 text-sm">Persiapan matang menuju pendidikan tinggi melalui jalur akademis dan vokasi.</p>
                            <a className="inline-flex items-center text-[#ff8c00] font-bold hover:gap-2 transition-all text-sm" href="#">
                                Selengkapnya <span className="material-symbols-outlined ml-1">chevron_right</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
