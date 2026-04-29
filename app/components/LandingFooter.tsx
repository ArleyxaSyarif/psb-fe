import React from "react";

export default function LandingFooter() {
    return (
        <footer className="w-full bg-[#FDFDFD] border-t border-slate-200 shadow-[0px_-4px_20px_rgba(0,0,0,0.02)]">
            <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-12 font-['Inter'] text-sm leading-relaxed">
                {/* Branding Column */}
                <div className="lg:col-span-2">
                    <div className="text-2xl font-bold tracking-tight text-slate-900 mb-6">ScholarHub</div>
                    <p className="text-slate-600 mb-8 max-w-sm">
                        Empowering the next generation through academic excellence, character building, and innovation in a global learning environment.
                    </p>
                    <div className="flex gap-4">
                        <a className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:text-[#FF8C00] hover:border-[#FF8C00] transition-all duration-200" href="#">
                            <span className="material-symbols-outlined text-[20px]">facebook</span>
                        </a>
                        <a className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:text-[#FF8C00] hover:border-[#FF8C00] transition-all duration-200" href="#">
                            <span className="material-symbols-outlined text-[20px]">x</span>
                        </a>
                        <a className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:text-[#FF8C00] hover:border-[#FF8C00] transition-all duration-200" href="#">
                            <span className="material-symbols-outlined text-[20px]">photo_camera</span>
                        </a>
                        <a className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:text-[#FF8C00] hover:border-[#FF8C00] transition-all duration-200" href="#">
                            <span className="material-symbols-outlined text-[20px]">share</span>
                        </a>
                    </div>
                </div>

                {/* Navigation: Admissions */}
                <div>
                    <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-wider text-xs">Admissions</h4>
                    <ul className="space-y-4">
                        <li><a className="text-slate-600 hover:text-[#FF8C00] transition-colors duration-200" href="#">Process</a></li>
                        <li><a className="text-slate-600 hover:text-[#FF8C00] transition-colors duration-200" href="#">Scholarships</a></li>
                        <li><a className="text-slate-600 hover:text-[#FF8C00] transition-colors duration-200" href="#">Tuition</a></li>
                        <li><a className="text-slate-600 hover:text-[#FF8C00] transition-colors duration-200" href="#">Student Portal</a></li>
                    </ul>
                </div>

                {/* Navigation: Academics */}
                <div>
                    <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-wider text-xs">Academics</h4>
                    <ul className="space-y-4">
                        <li><a className="text-slate-600 hover:text-[#FF8C00] transition-colors duration-200" href="#">Curriculum</a></li>
                        <li><a className="text-slate-600 hover:text-[#FF8C00] transition-colors duration-200" href="#">Library</a></li>
                        <li><a className="text-slate-600 hover:text-[#FF8C00] transition-colors duration-200" href="#">Faculty Directory</a></li>
                        <li><a className="text-slate-600 hover:text-[#FF8C00] transition-colors duration-200" href="#">Research</a></li>
                    </ul>
                </div>

                {/* Newsletter */}
                <div>
                    <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-wider text-xs">Newsletter</h4>
                    <p className="text-slate-600 mb-4">Stay updated with our latest news and events.</p>
                    <div className="flex flex-col gap-2">
                        <input
                            className="px-4 py-2 bg-slate-100 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF8C00]"
                            placeholder="Email address"
                            type="email"
                        />
                        <button className="bg-[#FF8C00] hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-lg transition-all active:scale-95">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-slate-200">
                <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="text-slate-500 text-xs">
                        © 2024 ScholarHub Global Academy. All rights reserved.
                    </div>
                    <div className="flex gap-8">
                        <a className="text-slate-500 hover:text-[#FF8C00] text-xs transition-colors" href="#">Privacy Policy</a>
                        <a className="text-slate-500 hover:text-[#FF8C00] text-xs transition-colors" href="#">Terms of Service</a>
                        <a className="text-slate-500 hover:text-[#FF8C00] text-xs transition-colors" href="#">Campus Map</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
