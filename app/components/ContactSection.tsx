import React from "react";

export default function ContactSection() {
    return (
        <section className="py-32 bg-surface-dim relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary/5 skew-x-[-15deg] translate-x-1/2 pointer-events-none"></div>
            <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32">
                    <div className="space-y-12">
                        <div className="space-y-6">
                            <div className="flex items-center gap-3">
                                <span className="w-8 h-px bg-secondary"></span>
                                <span className="text-secondary font-bold text-xs uppercase tracking-widest">Get In Touch</span>
                            </div>
                            <h2 className="font-serif text-4xl md:text-6xl text-white leading-tight">Mulai Perjalanan <br /><span className="italic font-normal text-secondary">Anda</span> Hari Ini</h2>
                            <p className="text-slate-400 text-lg">Punya pertanyaan mengenai program atau prosedur pendaftaran? Tim admisi kami siap membimbing Anda di setiap langkah.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            <div className="space-y-2">
                                <h5 className="text-white font-bold text-xs uppercase tracking-widest mb-4">Lokasi Kami</h5>
                                <p className="text-slate-400 text-sm leading-relaxed">Jl. Cendrawasih No. 10,<br />Kebayoran Baru, Jakarta Selatan<br />12110, Indonesia</p>
                            </div>
                            <div className="space-y-2">
                                <h5 className="text-white font-bold text-xs uppercase tracking-widest mb-4">Kontak Cepat</h5>
                                <p className="text-slate-400 text-sm leading-relaxed">info@prestige.ac.id<br />+62 21 555 1234<br />WhatsApp: +62 812 3456 789</p>
                            </div>
                        </div>
                        <div className="h-80 rounded-2xl overflow-hidden border border-white/10 grayscale opacity-80 hover:grayscale-0 transition-all duration-700 shadow-2xl">
                            <img className="w-full h-full object-cover" data-alt="Stylized map of Jakarta" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBdnqvObKXwyDe96oIFjIZ7lLKzeoaq8C82WtpNN7ejIgTT5ZnOEapH0LNlY9hdOOaQJC8h7rHTtIDYY0-uzjjkVqad2OwW55SxNnBT8FRA2nE9hpYW_1QNAxJDOF7eb3mAASFVukYQ5mUDjBmN9Xrv_m9QGM1EIJh8KeIjavqDuMjWCNn6oV5uDmFamDilqlwpdcAh8GGl_9rpMQ4fbfHtQmgv-JwA0zSSFwUltck_fr4uypYQ9kNTfdUx8MtGHsd4GCDqyrH-9gvA" />
                        </div>
                    </div>
                    <div className="glass p-10 md:p-14 rounded-2xl shadow-3xl">
                        <form className="space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Nama Lengkap</label>
                                    <input className="w-full bg-white/5 border-white/10 text-white rounded-lg p-5 focus:border-secondary focus:ring-0 transition-all placeholder:text-slate-600" placeholder="John Doe" type="text" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Email Akademik</label>
                                    <input className="w-full bg-white/5 border-white/10 text-white rounded-lg p-5 focus:border-secondary focus:ring-0 transition-all placeholder:text-slate-600" placeholder="john@example.com" type="email" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Peminatan Program</label>
                                <select className="w-full bg-white/5 border-white/10 text-slate-300 rounded-lg p-5 focus:border-secondary focus:ring-0 transition-all">
                                    <option className="bg-surface-dim">Sciences &amp; Technology</option>
                                    <option className="bg-surface-dim">Fine Arts &amp; Design</option>
                                    <option className="bg-surface-dim">Athletic Performance</option>
                                    <option className="bg-surface-dim">Lainnya</option>
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Pesan</label>
                                <textarea className="w-full bg-white/5 border-white/10 text-white rounded-lg p-5 focus:border-secondary focus:ring-0 transition-all placeholder:text-slate-600" placeholder="Sampaikan pertanyaan atau pesan Anda..." rows={4}></textarea>
                            </div>
                            <button className="w-full bg-secondary text-on-secondary-container font-sans font-bold py-5 rounded-lg hover:brightness-110 active:scale-[0.98] transition-all uppercase tracking-[0.2em] text-sm shadow-xl shadow-secondary/10" type="button">Kirim Pertanyaan</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
