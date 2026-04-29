import React from "react";

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-slate-50/50">
      <div className="max-w-[1440px] mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#0b1c30] mb-4">Mengapa Memilih ScholarHub?</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Kami berdedikasi untuk memberikan pengalaman pendidikan terbaik yang mendukung pertumbuhan akademik dan karakter setiap siswa.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Feature 1 - International Curriculum */}
          <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all group">
            <div className="w-14 h-14 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center mb-6 group-hover:bg-orange-600 group-hover:text-white transition-colors">
              <span className="material-symbols-outlined text-[32px]">public</span>
            </div>
            <h3 className="text-xl font-bold mb-3 text-[#0b1c30]">Kurikulum Berstandar Internasional</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              Kurikulum yang diakui global untuk membekali siswa dengan wawasan dan daya saing internasional.
            </p>
          </div>

          {/* Feature 2 - Professional Teachers */}
          <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all group">
            <div className="w-14 h-14 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
              <span className="material-symbols-outlined text-[32px]">school</span>
            </div>
            <h3 className="text-xl font-bold mb-3 text-[#0b1c30]">Tenaga Pengajar Profesional</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              Dididik oleh mentor berpengalaman dan ahli di bidangnya yang berdedikasi penuh bagi kemajuan siswa.
            </p>
          </div>

          {/* Feature 3 - Modern Facilities */}
          <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all group">
            <div className="w-14 h-14 rounded-xl bg-green-50 text-green-600 flex items-center justify-center mb-6 group-hover:bg-green-600 group-hover:text-white transition-colors">
              <span className="material-symbols-outlined text-[32px]">apartment</span>
            </div>
            <h3 className="text-xl font-bold mb-3 text-[#0b1c30]">Fasilitas Modern & Lengkap</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              Dukungan infrastruktur teknologi dan laboratorium terkini untuk menunjang proses pembelajaran aktif.
            </p>
          </div>

          {/* Feature 4 - Extracurricular */}
          <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all group">
            <div className="w-14 h-14 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-6 group-hover:bg-purple-600 group-hover:text-white transition-colors">
              <span className="material-symbols-outlined text-[32px]">extension</span>
            </div>
            <h3 className="text-xl font-bold mb-3 text-[#0b1c30]">Ekstrakurikuler yang Variatif</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              Beragam pilihan klub dan kegiatan untuk mengembangkan minat, bakat, serta kepemimpinan siswa.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
