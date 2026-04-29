import React from "react";

export default function FactsSection() {
  return (
    <section className="py-20 bg-white border-b border-slate-100">
      <div className="max-w-[1440px] mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex items-center gap-6 p-8 rounded-xl hover:bg-slate-50 transition-colors">
            <div className="w-16 h-16 rounded-full bg-orange-50 flex items-center justify-center text-orange-600">
              <span className="material-symbols-outlined text-[32px]">history_edu</span>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#0b1c30]">20+</div>
              <div className="text-slate-500 font-medium">Tahun Pengalaman</div>
            </div>
          </div>
          <div className="flex items-center gap-6 p-8 rounded-xl hover:bg-slate-50 transition-colors">
            <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
              <span className="material-symbols-outlined text-[32px]">account_balance</span>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#0b1c30]">50+</div>
              <div className="text-slate-500 font-medium">Fasilitas Unggulan</div>
            </div>
          </div>
          <div className="flex items-center gap-6 p-8 rounded-xl hover:bg-slate-50 transition-colors">
            <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center text-green-600">
              <span className="material-symbols-outlined text-[32px]">workspace_premium</span>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#0b1c30]">1000+</div>
              <div className="text-slate-500 font-medium">Alumni Sukses</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
