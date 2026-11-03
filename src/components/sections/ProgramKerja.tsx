"use client";

import { useState, useMemo } from "react";
import { Calendar, Search, Layers, Clock, Flame, CheckCircle2, AlertCircle } from "lucide-react";

const dataProgramKerja = [
  {
    sekbid: "Kewarganegaraan",
    proker: [
      {
        nama: "Hari Guru",
        jenis: "Eventual",
        deskripsi:
          "Peringatan dan perayaan Hari Guru Nasional sebagai bentuk apresiasi kepada tenaga pendidik MAN 19 Jakarta.",
      },
      {
        nama: "Hari Kartini",
        jenis: "Eventual",
        deskripsi:
          "Peringatan Hari Kartini dengan menyelenggarakan berbagai kegiatan atau perlombaan bertema emansipasi.",
      },
      {
        nama: "Matamuda",
        jenis: "Eventual",
        deskripsi:
          "[Silakan isi: Penjelasan mengenai kegiatan kaderisasi/LDKS Matamuda...]",
      },
      {
        nama: "Mengawas Latihan Upacara",
        jenis: "Rutinitas",
        deskripsi:
          "Mendampingi, mengawasi, dan membimbing siswa dalam persiapan atau latihan upacara bendera.",
      },
      {
        nama: "Membuat Jadwal Petugas Upacara Hari-Hari Besar",
        jenis: "Rutinitas",
        deskripsi:
          "Menyusun dan mengkoordinasikan jadwal penugasan kelas/organisasi untuk upacara peringatan hari besar nasional.",
      },
    ],
  },
  {
    sekbid: "Olahraga & Seni (ORSEN)",
    proker: [
      {
        nama: "Bulan Bahasa",
        jenis: "Eventual",
        deskripsi:
          "Menyelenggarakan perlombaan dan kegiatan apresiasi sastra/seni dalam rangka memperingati Bulan Bahasa.",
      },
      {
        nama: "ClassMeeting 1",
        jenis: "Eventual",
        deskripsi:
          "Pertandingan olahraga dan seni antar kelas yang dilaksanakan setelah Ujian Akhir Semester Ganjil.",
      },
      {
        nama: "Liga E-Sport",
        jenis: "Eventual",
        deskripsi:
          "Turnamen E-Sports internal antar siswa MAN 19 Jakarta untuk mewadahi minat bakat di bidang digital.",
      },
      {
        nama: "ClassMeeting 2",
        jenis: "Eventual",
        deskripsi:
          "Pertandingan olahraga dan seni antar kelas yang dilaksanakan setelah Ujian Akhir Semester Genap.",
      },
      {
        nama: "17 Agustus 2027",
        jenis: "Eventual",
        deskripsi:
          "Penyelenggaraan lomba-lomba tradisional dan perayaan HUT Kemerdekaan Republik Indonesia.",
      },
    ],
  },
  {
    sekbid: "Kedisiplinan & Pengembangan SDM (KPS)",
    proker: [
      {
        nama: "Upgrading",
        jenis: "Eventual",
        deskripsi:
          "Kegiatan peningkatan kapasitas (soft skill) dan bonding khusus bagi internal pengurus MPK/OSIS.",
      },
      {
        nama: "Workshop Internal",
        jenis: "Eventual",
        deskripsi:
          "Pelatihan keterampilan organisasi yang difokuskan khusus untuk pengurus internal OSIS/MPK.",
      },
      {
        nama: "Workshop Eksternal",
        jenis: "Eventual",
        deskripsi:
          "[Silakan isi: Penjelasan mengenai target dan materi workshop untuk siswa umum...]",
      },
      {
        nama: "Bukber Internal",
        jenis: "Eventual",
        deskripsi:
          "Kegiatan buka puasa bersama di bulan suci Ramadhan untuk mempererat solidaritas pengurus.",
      },
      {
        nama: "Jaga Gerbang",
        jenis: "Rutinitas",
        deskripsi:
          "Bertugas di gerbang sekolah pada pagi hari untuk menertibkan atribut dan kedisiplinan kedatangan siswa.",
      },
      {
        nama: "Merapihkan Sepatu/Sendal",
        jenis: "Rutinitas",
        deskripsi:
          "Menjaga kerapian dan ketertiban penempatan alas kaki siswa di area masjid/mushola sekolah.",
      },
      {
        nama: "Pengumpulan Handphone",
        jenis: "Rutinitas",
        deskripsi:
          "Mengkoordinir pengumpulan gawai siswa selama Kegiatan Belajar Mengajar berlangsung agar kondusif.",
      },
      {
        nama: "Piket Sekret",
        jenis: "Rutinitas",
        deskripsi:
          "Menjaga kebersihan, inventaris, dan kerapian ruang sekretariat MPK/OSIS secara bergilir.",
      },
    ],
  },
  {
    sekbid: "HPDD",
    proker: [
      {
        nama: "Poster Hari Nasional",
        jenis: "Eventual",
        deskripsi:
          "Pembuatan dan publikasi desain visual untuk memperingati hari-hari penting nasional.",
      },
      {
        nama: "Nitefun",
        jenis: "Eventual",
        deskripsi:
          "[Silakan isi: Penjelasan mengenai acara hiburan/pensi Nitefun...]",
      },
      {
        nama: "After Movie",
        jenis: "Eventual",
        deskripsi:
          "Produksi video dokumentasi pasca-acara yang merangkum jalannya event-event besar OSIS.",
      },
      {
        nama: "Feeds",
        jenis: "Eventual",
        deskripsi:
          "Perancangan dan pengunggahan konten visual estetis di feed media sosial resmi OSIS.",
      },
      {
        nama: "Dokumentasi",
        jenis: "Eventual",
        deskripsi:
          "Pengambilan dan penyortiran foto/video di setiap kegiatan dan program sekolah.",
      },
      {
        nama: "Konten OSIS",
        jenis: "Eventual",
        deskripsi:
          "Pembuatan konten kreatif (reels, tiktok, infografis) yang edukatif maupun informatif untuk siswa.",
      },
      {
        nama: "Poster Birthday",
        jenis: "Eventual",
        deskripsi:
          "Pembuatan desain ucapan selamat ulang tahun untuk pengurus, dewan guru, atau tokoh penting sekolah.",
      },
      {
        nama: "Study Banding",
        jenis: "Eventual",
        deskripsi:
          "Kunjungan kerja ke sekolah lain untuk bertukar program, wawasan, dan pengalaman berorganisasi.",
      },
      {
        nama: "Buzzer/Blast Information",
        jenis: "Rutinitas",
        deskripsi:
          "Penyebaran informasi penting (broadcast) secara masif melalui grup perwakilan kelas (KM/Ketua Kelas).",
      },
      {
        nama: "Mengelola Media Sosial",
        jenis: "Rutinitas",
        deskripsi:
          "Pengelolaan algoritma, interaksi, dan jadwal posting akun media sosial resmi OSIS secara harian.",
      },
    ],
  },
  {
    sekbid: "Keagamaan",
    proker: [
      {
        nama: "Hari Santri",
        jenis: "Eventual",
        deskripsi:
          "Peringatan Hari Santri Nasional dengan serangkaian kegiatan islami di lingkungan madrasah.",
      },
      {
        nama: "Isra Miraj",
        jenis: "Eventual",
        deskripsi:
          "Penyelenggaraan tabligh akbar atau lomba islami untuk memperingati peristiwa Isra Mi'raj Nabi Muhammad SAW.",
      },
      {
        nama: "Gema Ramadhan",
        jenis: "Eventual",
        deskripsi:
          "Rangkaian program amaliah, perlombaan, dan kajian keislaman selama bulan suci Ramadhan.",
      },
      {
        nama: "Idul Adha",
        jenis: "Eventual",
        deskripsi:
          "Kepanitiaan penyembelihan dan pendistribusian hewan kurban di lingkungan MAN 19 Jakarta.",
      },
      {
        nama: "Maulid Nabi",
        jenis: "Eventual",
        deskripsi:
          "Peringatan hari kelahiran Nabi Muhammad SAW dengan tausiyah dan pembacaan shalawat/rawi.",
      },
      {
        nama: "Rekan Muharram",
        jenis: "Eventual",
        deskripsi:
          "[Silakan isi: Penjelasan mengenai program perayaan Tahun Baru Islam/Muharram...]",
      },
      {
        nama: "Petugas Shaf & Haid",
        jenis: "Rutinitas",
        deskripsi:
          "Menertibkan shaf shalat berjamaah dan memfasilitasi pendataan/pembinaan bagi siswi yang sedang berhalangan (haid).",
      },
      {
        nama: "Kultum, Adzan, Tadarus",
        jenis: "Rutinitas",
        deskripsi:
          "Menjadwalkan dan mengkoordinir petugas harian untuk kultum, adzan dhuha/dzuhur, dan tadarus pagi.",
      },
      {
        nama: "Takziah",
        jenis: "Insidental",
        deskripsi:
          "Kunjungan belasungkawa, doa, dan pemberian santunan kepada keluarga warga sekolah yang tertimpa musibah.",
      },
    ],
  },
  {
    sekbid: "Kewirausahaan",
    proker: [
      {
        nama: "Wiraman19",
        jenis: "Rutinitas",
        deskripsi:
          "[Silakan isi: Penjelasan operasional penjualan/koperasi Wiraman19...]",
      },
      {
        nama: "Bank Sampah",
        jenis: "Rutinitas",
        deskripsi:
          "Program pengumpulan dan pemilahan sampah daur ulang ekonomis dari setiap kelas secara berkala.",
      },
      {
        nama: "Wirus Event",
        jenis: "Eventual",
        deskripsi:
          "Membuka stand bazar, kantin sementara, atau penjualan merchandise komersial saat event besar sekolah.",
      },
      {
        nama: "Penyaluran Dana Konsumsi Panitia Event",
        jenis: "Eventual",
        deskripsi:
          "[Silakan isi: Mekanisme pengelolaan alokasi dana untuk kebutuhan logistik panitia...]",
      },
      {
        nama: "Almamater, Lanyard dan Pin",
        jenis: "Eventual",
        deskripsi:
          "[Silakan isi: Program pengadaan dan penjualan atribut organisasi untuk pengurus/siswa...]",
      },
    ],
  },
];

interface ProkerItem {
  nama: string;
  jenis: string;
  deskripsi: string;
  sekbid: string;
}

const getBadgeConfig = (jenis: string) => {
  switch (jenis.toLowerCase()) {
    case "eventual":
      return {
        label: "Eventual",
        style: "bg-blue-50 text-blue-700 border-blue-200",
        dot: "bg-blue-600",
      };
    case "rutinitas":
      return {
        label: "Rutinitas",
        style: "bg-emerald-50 text-emerald-700 border-emerald-200",
        dot: "bg-emerald-600",
      };
    case "insidental":
      return {
        label: "Insidental",
        style: "bg-amber-50 text-amber-700 border-amber-200",
        dot: "bg-amber-600",
      };
    default:
      return {
        label: jenis,
        style: "bg-slate-100 text-slate-700 border-slate-200",
        dot: "bg-slate-500",
      };
  }
};

export default function ProgramKerja() {
  const [selectedSekbid, setSelectedSekbid] = useState<string>("Semua");
  const [selectedJenis, setSelectedJenis] = useState<string>("Semua");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const sekbidList = [
    "Semua",
    "Kewarganegaraan",
    "Olahraga & Seni (ORSEN)",
    "Kedisiplinan & Pengembangan SDM (KPS)",
    "HPDD",
    "Keagamaan",
    "Kewirausahaan",
  ];

  const jenisList = ["Semua", "Eventual", "Rutinitas", "Insidental"];

  // Flatten all proker for uniform filtering & stats
  const allProker: ProkerItem[] = useMemo(() => {
    return dataProgramKerja.flatMap((group) =>
      group.proker.map((p) => ({
        ...p,
        sekbid: group.sekbid,
      }))
    );
  }, []);

  // Filtered proker items
  const filteredProker = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    return allProker.filter((item) => {
      const matchSekbid =
        selectedSekbid === "Semua" || item.sekbid === selectedSekbid;
      const matchJenis =
        selectedJenis === "Semua" ||
        item.jenis.toLowerCase() === selectedJenis.toLowerCase();
      const matchSearch =
        !q ||
        item.nama.toLowerCase().includes(q) ||
        item.deskripsi.toLowerCase().includes(q) ||
        item.sekbid.toLowerCase().includes(q);

      return matchSekbid && matchJenis && matchSearch;
    });
  }, [allProker, selectedSekbid, selectedJenis, searchQuery]);

  return (
    <section id="proker" className="space-y-10 scroll-mt-24">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-blue-700 mb-2">
            <Calendar className="w-3.5 h-3.5" />
            <span>Agenda &amp; Rencana Kerja</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Program Kerja OSIS
          </h2>
        </div>
        <p className="text-sm text-slate-500 max-w-md">
          Sebanyak 39 agenda kerja yang dirancang untuk memperkuat solidaritas, prestasi, dan pembinaan karakter siswa/i MAN 19 Jakarta.
        </p>
      </div>

      {/* Control Bar: Filters & Search */}
      <div className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-2xs space-y-4">
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          {/* Search Box */}
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Cari program kerja (e.g. Hari Guru, E-Sport, Ramadhan)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 focus:bg-white transition-all"
            />
          </div>

          {/* Jenis Filter Pills */}
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="text-xs font-semibold text-slate-500 mr-1 hidden sm:inline">
              Tipe:
            </span>
            {jenisList.map((jenis) => {
              const isSelected = selectedJenis === jenis;
              return (
                <button
                  key={jenis}
                  onClick={() => setSelectedJenis(jenis)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    isSelected
                      ? "bg-slate-900 text-white shadow-xs"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
                  }`}
                >
                  {jenis}
                </button>
              );
            })}
          </div>
        </div>

        {/* Sekbid Filter Bar */}
        <div className="pt-3 border-t border-slate-100 flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          <span className="text-xs font-semibold text-slate-500 whitespace-nowrap mr-1">
            Bidang:
          </span>
          {sekbidList.map((sekbid) => {
            const isSelected = selectedSekbid === sekbid;
            return (
              <button
                key={sekbid}
                onClick={() => setSelectedSekbid(sekbid)}
                className={`px-3 py-1 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  isSelected
                    ? "bg-blue-700 text-white shadow-2xs font-bold"
                    : "bg-slate-50 text-slate-600 border border-slate-200/80 hover:bg-slate-100 hover:text-slate-900"
                }`}
              >
                {sekbid}
              </button>
            );
          })}
        </div>
      </div>

      {/* Proker Grid */}
      {filteredProker.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredProker.map((item, idx) => {
            const badge = getBadgeConfig(item.jenis);
            return (
              <div
                key={idx}
                className="p-6 bg-white rounded-2xl border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-blue-300 transition-all duration-200 flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  {/* Top Bar: Sekbid & Type Badge */}
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider truncate">
                      {item.sekbid}
                    </span>
                    <span
                      className={`inline-flex items-center gap-1.5 text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${badge.style}`}
                    >
                      <span className={`w-1.5 h-1.5 rounded-full ${badge.dot}`} />
                      {badge.label}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-extrabold text-base text-slate-900 group-hover:text-blue-700 transition-colors leading-snug">
                    {item.nama}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {item.deskripsi}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-slate-400" />
                    <span>Periode 2026/2027</span>
                  </span>
                  <span className="font-semibold text-slate-500">MAN 19 JKT</span>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="p-12 text-center bg-white rounded-3xl border border-dashed border-slate-300 space-y-2">
          <Calendar className="w-10 h-10 text-slate-400 mx-auto" />
          <h4 className="font-bold text-slate-800">
            Tidak Ada Program Kerja yang Cocok
          </h4>
          <p className="text-xs text-slate-500 max-w-sm mx-auto">
            Tidak ditemukan kegiatan untuk filter yang dipilih. Coba reset filter atau gunakan kata kunci pencarian lain.
          </p>
          <button
            onClick={() => {
              setSelectedSekbid("Semua");
              setSelectedJenis("Semua");
              setSearchQuery("");
            }}
            className="mt-3 inline-flex items-center justify-center px-4 py-2 rounded-xl text-xs font-bold bg-blue-700 text-white hover:bg-blue-800 transition-colors cursor-pointer"
          >
            Reset Filter
          </button>
        </div>
      )}
    </section>
  );
}

