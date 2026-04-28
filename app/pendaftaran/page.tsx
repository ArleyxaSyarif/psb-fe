"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { post, get } from "@/lib/api";
import {
    ArrowLeft,
    Save,
    User,
    Mail,
    Phone,
    MapPin,
    Globe,
    Calendar,
    Heart,
    Star,
    CheckCircle,
    ArrowRight
} from "lucide-react";

export default function RegisterFormData() {


    const router = useRouter();
    const [blocked, setBlocked] = useState(false);
    const [loading, setLoading] = useState(false);
    const [checking, setChecking] = useState(true);
    const [provinsiList, setProvinsiList] = useState<any[]>([]);
    const [kabkotList, setKabkotList] = useState<any[]>([]);
    const [form, setForm] = useState({
        nama_lengkap: "",
        email: "",
        nomor_hp: "",
        alamat_ktp: "",
        alamat_domisili: "",
        kecamatan: "",
        kabupaten: "",
        provinsi: "",
        kewarganegaraan: "WNI",
        negara_asal: "",
        tempat_lahir: "",
        tanggal_lahir: "",
        jenis_kelamin: "",
        status_pernikahan: "",
        agama: "",
        status: "pending",
    });


    useEffect(() => {
        const checkUser = async () => {
            const token = localStorage.getItem("token");

            if (!token) {
                router.push("/login");
                return;
            }

            try {
                const res = await get("/students/check", token);


                if (res.has_registered) {
                    setBlocked(true);
                }
            } catch (error) {
                console.error("Error check user:", error);
            }
        };

        checkUser();
    }, []);

    useEffect(() => {
        const fetchProvinsi = async () => {
            try {
                const apiBase = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000/api";
                const res = await fetch(`${apiBase}/provinsi`);
                const data = await res.json();
                setProvinsiList(data);
            } catch (err) {
                console.error("Gagal ambil provinsi:", err);
            }
        };

        fetchProvinsi();
    }, []);

    const fetchKabkot = async (provinsiId: number) => {
        try {
            const res = await get(`/kabkot/${provinsiId}`);
            console.log("DATA KABKOT:", res); // 👈 tambahin ini
            setKabkotList(res);
        } catch (err) {
            console.error("Gagal fetch kabkot:", err);
        }
    };


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const token = localStorage.getItem("token") || undefined;
            const res = await post("/students", form, token);

            if (res.message) {
                alert("Data berhasil disimpan!");
                setBlocked(true);
                router.push("/verifikasi");
            } else {
                alert("Gagal menyimpan data, periksa inputan Anda.");
                console.log(res); // buat ngecek error validasi dari laravel
            }
            if (res.has_registered) {
                setBlocked(true);
            }
        } catch (error) {
            console.error(error);
            alert("Terjadi kesalahan sistem.");
        } finally {
            setLoading(false);
        }

    };


    return (

        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 p-4 md:p-8">

            <div className="max-w-4xl mx-auto">

                {/* Tombol Kembali */}
                <button
                    onClick={() => router.back()}
                    className="flex items-center gap-2 text-slate-500 hover:text-blue-600 mb-6 transition-colors font-medium"
                >
                    <ArrowLeft className="w-4 h-4" /> Kembali ke Dashboard
                </button>

                <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[2rem] shadow-xl overflow-hidden">
                    <div className="p-8 border-b border-slate-100 dark:border-slate-800">
                        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Formulir Pendaftaran Siswa</h1>
                        <p className="text-slate-500 dark:text-slate-400 text-sm">Silahkan lengkapi data diri Anda dengan sebenar-benarnya.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="p-8 space-y-8">

                        {blocked && (
                            <div className="bg-yellow-50 dark:bg-yellow-900/30 border border-yellow-200 dark:border-yellow-700/50 text-yellow-800 dark:text-yellow-300 rounded-xl p-4 flex items-center gap-3 text-sm font-medium">
                                ⚠️ Kamu sudah mendaftar. Form ini ditutup. Silahkan klik tombol di bawah untuk melihat hasil seleksi.
                            </div>
                        )}

                        <fieldset disabled={blocked} className="space-y-8 group opacity-100 disabled:opacity-50 transition-opacity">

                            {/* SECTION 1: IDENTITAS UTAMA */}
                            <div>
                                <h3 className="text-blue-600 font-bold text-sm uppercase tracking-widest mb-4 flex items-center gap-2">
                                    <User className="w-4 h-4" /> Identitas Pribadi
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="space-y-1">
                                        <label className="text-xs font-semibold ml-1 dark:text-slate-300">Nama Lengkap</label>
                                        <input required className="w-full p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border dark:border-slate-700 dark:text-white outline-none focus:ring-2 focus:ring-blue-500"
                                            placeholder="Masukkan nama lengkap"
                                            onChange={(e) => setForm({ ...form, nama_lengkap: e.target.value })} />
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-xs font-semibold ml-1 dark:text-slate-300">Email</label>
                                        <input required type="email" className="w-full p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border dark:border-slate-700 dark:text-white outline-none focus:ring-2 focus:ring-blue-500"
                                            placeholder="nama@email.com"
                                            onChange={(e) => setForm({ ...form, email: e.target.value })} />
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-xs font-semibold ml-1 dark:text-slate-300">Nomor HP</label>
                                        <input required type="number" className="w-full p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border dark:border-slate-700 dark:text-white outline-none focus:ring-2 focus:ring-blue-500"
                                            placeholder="0812xxxx"
                                            onChange={(e) => setForm({ ...form, nomor_hp: e.target.value })} />
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-xs font-semibold ml-1 dark:text-slate-300">Jenis Kelamin</label>
                                        <select required className="w-full p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border dark:border-slate-700 dark:text-white outline-none focus:ring-2 focus:ring-blue-500"
                                            onChange={(e) => setForm({ ...form, jenis_kelamin: e.target.value })}>
                                            <option value="">Pilih Jenis Kelamin</option>
                                            <option value="L">Laki-laki (L)</option>
                                            <option value="P">Perempuan (P)</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            {/* SECTION 2: KELAHIRAN & STATUS */}
                            <div>
                                <h3 className="text-blue-600 font-bold text-sm uppercase tracking-widest mb-4 flex items-center gap-2">
                                    <Calendar className="w-4 h-4" /> Kelahiran & Status
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="space-y-1">
                                        <label className="text-xs font-semibold ml-1 dark:text-slate-300">Tempat Lahir</label>
                                        <input required className="w-full p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border dark:border-slate-700 dark:text-white"
                                            onChange={(e) => setForm({ ...form, tempat_lahir: e.target.value })} />
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-xs font-semibold ml-1 dark:text-slate-300">Tanggal Lahir</label>
                                        <input required type="date" className="w-full p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border dark:border-slate-700 dark:text-white"
                                            onChange={(e) => setForm({ ...form, tanggal_lahir: e.target.value })} />
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-xs font-semibold ml-1 dark:text-slate-300">Agama</label>
                                        <select required className="w-full p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border dark:border-slate-700 dark:text-white"
                                            onChange={(e) => setForm({ ...form, agama: e.target.value })}>
                                            <option value="">Pilih Agama</option>
                                            <option value="Islam">Islam</option>
                                            <option value="Kristen">Kristen</option>
                                            <option value="Katolik">Katolik</option>
                                            <option value="Budha">Budha</option>
                                            <option value="Konghucu">Konghucu</option>
                                            <option value="Lainnya">Lainnya</option>
                                        </select>
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-xs font-semibold ml-1 dark:text-slate-300">Status Pernikahan</label>
                                        <select required className="w-full p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border dark:border-slate-700 dark:text-white"
                                            onChange={(e) => setForm({ ...form, status_pernikahan: e.target.value })}>
                                            <option value="">Pilih Status</option>
                                            <option value="belum_menikah">Belum Menikah</option>
                                            <option value="menikah">Sudah Menikah</option>
                                            <option value="lainnya">Lainnya (Duda/Janda)</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            {/* SECTION 3: ALAMAT */}
                            <div>
                                <h3 className="text-blue-600 font-bold text-sm uppercase tracking-widest mb-4 flex items-center gap-2">
                                    <MapPin className="w-4 h-4" /> Alamat Lengkap
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <div className="md:col-span-3 space-y-1">
                                        <label className="text-xs font-semibold ml-1 dark:text-slate-300">Alamat Sesuai KTP</label>
                                        <textarea required className="w-full p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border dark:border-slate-700 dark:text-white"
                                            onChange={(e) => setForm({ ...form, alamat_ktp: e.target.value })}></textarea>
                                    </div>
                                    <div className="md:col-span-3 space-y-1">
                                        <label className="text-xs font-semibold ml-1 dark:text-slate-300">Alamat Domisili</label>
                                        <textarea required className="w-full p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border dark:border-slate-700 dark:text-white"
                                            onChange={(e) => setForm({ ...form, alamat_domisili: e.target.value })}></textarea>
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-xs font-semibold ml-1 dark:text-slate-300">Kecamatan</label>
                                        <input required className="w-full p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border dark:border-slate-700 dark:text-white"
                                            onChange={(e) => setForm({ ...form, kecamatan: e.target.value })} />
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-xs font-semibold ml-1 dark:text-slate-300">Kabupaten</label>
                                        <select required className="w-full p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border dark:border-slate-700 dark:text-white outline-none focus:ring-2 focus:ring-blue-500"
                                            disabled={kabkotList.length === 0}
                                            onChange={(e) => setForm({ ...form, kabupaten: e.target.value })}>
                                            <option value="">Pilih Kabupaten</option>
                                            {kabkotList.map((kab) => (
                                                <option key={kab.id} value={kab.name}>{kab.name}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-xs font-semibold ml-1 dark:text-slate-300">Provinsi</label>
                                        <select required className="w-full p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border dark:border-slate-700 dark:text-white outline-none focus:ring-2 focus:ring-blue-500"
                                            onChange={(e) => {
                                                const selectedOption = e.target.selectedOptions[0];
                                                const provId = selectedOption.getAttribute('data-id');
                                                setForm({ ...form, provinsi: e.target.value, kabupaten: "" });
                                                if (provId) {
                                                    fetchKabkot(Number(provId));
                                                } else {
                                                    setKabkotList([]);
                                                }
                                            }}>
                                            <option value="">Pilih Provinsi</option>
                                            {provinsiList.map((prov) => (
                                                <option key={prov.id} value={prov.name} data-id={prov.id}>{prov.name}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                            </div>

                            {/* SECTION 4: KEWARGANEGARAAN */}
                            <div className="bg-blue-50 dark:bg-blue-900/10 p-6 rounded-2xl border border-blue-100 dark:border-blue-900/30">
                                <h3 className="text-blue-600 font-bold text-sm uppercase tracking-widest mb-4 flex items-center gap-2">
                                    <Globe className="w-4 h-4" /> Kewarganegaraan
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="space-y-1">
                                        <label className="text-xs font-semibold ml-1 dark:text-slate-300">Tipe Kewarganegaraan</label>
                                        <select required className="w-full p-3 rounded-xl bg-white dark:bg-slate-800 border dark:border-slate-700 dark:text-white outline-none focus:ring-2 focus:ring-blue-500"
                                            value={form.kewarganegaraan}
                                            onChange={(e) => setForm({ ...form, kewarganegaraan: e.target.value })}>
                                            <option value="WNI">WNI</option>
                                            <option value="WNI Keturunan">WNI Keturunan</option>
                                            <option value="WNA">WNA (Warga Negara Asing)</option>
                                        </select>
                                    </div>

                                    {/* Input ini hanya muncul jika pilih WNA */}
                                    {form.kewarganegaraan === "WNA" && (
                                        <div className="space-y-1 animate-in slide-in-from-left-2 transition-all">
                                            <label className="text-xs font-semibold ml-1 dark:text-slate-300">Sebutkan Asal Negara</label>
                                            <input required className="w-full p-3 rounded-xl bg-white dark:bg-slate-800 border border-red-300 dark:border-red-900 dark:text-white outline-none focus:ring-2 focus:ring-red-500"
                                                placeholder="Contoh: Malaysia, Australia, dll"
                                                onChange={(e) => setForm({ ...form, negara_asal: e.target.value })} />
                                        </div>
                                    )}
                                </div>
                            </div>

                        </fieldset>

                        <div className="flex justify-end pt-6">
                            {blocked ? (
                                <button
                                    type="button"
                                    onClick={() => router.push("/verifikasi")}
                                    className="bg-emerald-600 hover:bg-emerald-700 text-white px-10 py-4 rounded-2xl font-bold flex items-center gap-2 transition-all shadow-xl shadow-emerald-500/30"
                                >
                                    Lihat Hasil Seleksi <ArrowRight className="w-5 h-5" />
                                </button>
                            ) : (
                                <button
                                    disabled={loading}
                                    type="submit"
                                    className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-2xl font-bold flex items-center gap-2 transition-all shadow-xl shadow-blue-500/30 disabled:opacity-50"
                                >
                                    {loading ? "Menyimpan..." : (
                                        <>
                                            <Save className="w-5 h-5" />
                                            Simpan Data
                                        </>
                                    )}
                                </button>
                            )}
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
}