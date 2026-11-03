import { WebsiteData } from "@/types/content";

export const defaultWebsiteData: WebsiteData = {
  header: {
    orgNamePrefix: "OSIS MAN 19",
    orgNameHighlight: "JAKARTA",
    periode: "Periode 2026/2027",
    logoUrl: "/logo-osis.jpg",
    navLinks: [
      { id: "1", label: "BERANDA", href: "/#beranda" },
      { id: "2", label: "STRUKTUR", href: "/#struktur" },
      { id: "3", label: "PROKER", href: "/#proker" },
      { id: "4", label: "GALERI", href: "/#galeri" },
      { id: "5", label: "KOTAK ASPIRASI", href: "/aspirasi", isSpecial: true },
    ],
  },
  hero: {
    badgeText: "OSIS MAN 19 JAKARTA • PERIODE 2026/2027",
    titleRegular: "Mewujudkan Generasi Pemimpin yang ",
    titleHighlight: "Berkarakter, Unggul & Berdampak",
    description:
      "Selamat datang di portal resmi Organisasi Siswa Intra Sekolah Madrasah Aliyah Negeri 19 Jakarta. Wadah sinergi pengurus dan seluruh siswa untuk merancang kegiatan akademis, keagamaan, seni, olahraga, dan kepemimpinan.",
    ctaPrimaryText: "Jelajahi Program Kerja",
    ctaPrimaryHref: "#proker",
    ctaSecondaryText: "Susunan Pengurus",
    ctaSecondaryHref: "#struktur",
    ctaAspirasiText: "Kotak Aspirasi Siswa & Guru",
    ctaAspirasiHref: "/aspirasi",
    kabinetName: "Kabinet Bersinergi • BEST OSIS",
    kabinetStatus: "Aktif Bertugas",
    instansiName: "MAN 19 Jakarta Selatan",
    subInstansi: "Kementerian Agama RI",
    stats: {
      pengurusCount: "44",
      pengurusLabel: "Pengurus Resmi Dilantik",
      pengurusSub: "6 Sekbid",
      prokerCount: "39",
      prokerLabel: "Program Kerja Teragenda",
      prokerSub: "1 Periode",
      aspirasiStatus: "100%",
      aspirasiLabel: "Aspirasi Terbuka & Terbimbing",
      aspirasiBadge: "Online",
    },
  },
  visiMisi: {
    sectionLabel: "Arah Gerak Organisasi",
    sectionTitle: "Visi & Misi Kepengurusan",
    sectionDesc:
      "Pondasi nilai dan komitmen kerja BEST OSIS MAN 19 Jakarta dalam melayani dan menginspirasi seluruh civitas sekolah.",
    visionBadge: "Visi Utama 2026/2027",
    mainVision:
      "“Menjadikan OSIS sebagai ruang belajar kepemimpinan yang religius, terbuka, dan berdampak nyata bagi seluruh siswa MAN 19 Jakarta.”",
    pillars: [
      { title: "Religius", desc: "Berakhlak Mulia" },
      { title: "Terbuka", desc: "Transparan & Sigap" },
      { title: "Berdampak", desc: "Aksi Nyata" },
    ],
    missions: [
      {
        id: "1",
        title: "Pembinaan Karakter & Keagamaan",
        desc: "Menyelenggarakan kegiatan keagamaan yang rutin, inklusif, dan melibatkan seluruh angkatan siswa.",
      },
      {
        id: "2",
        title: "Saluran Aspirasi yang Responsif",
        desc: "Membuka dan menindaklanjuti suara siswa secara transparan bersama pembina dan dewan guru.",
      },
      {
        id: "3",
        title: "Wadah Minat, Bakat, & Literasi",
        desc: "Mengelola kegiatan olahraga, seni, sains, dan literasi secara terjadwal dan terarsip rapi.",
      },
      {
        id: "4",
        title: "Transparansi & Akuntabilitas Kerja",
        desc: "Menjaga keterbukaan rencana kerja, anggaran, evaluasi berkala, dan dokumentasi setiap program.",
      },
    ],
  },
  struktur: {
    sectionLabel: "Susunan Organisasi",
    sectionTitle: "Struktur Kepengurusan OSIS",
    sectionDesc:
      "Kolaborasi seluruh pimpinan dan fungsionaris OSIS MAN 19 Jakarta periode 2026/2027.",
    pengurusInti: [
      {
        id: "pi-1",
        nama: "Rizky Wahyu Satrio, S.Si., M.Pd.",
        jabatan: "Pembina OSIS",
        kelas: "Tenaga Pendidik",
        bidang: "Pengurus Inti",
        urutan: 1,
      },
      {
        id: "pi-2",
        nama: "Muhammad Salman Al Farisi",
        jabatan: "Ketua OSIS",
        kelas: "XI-G",
        bidang: "Pengurus Inti",
        urutan: 2,
      },
      {
        id: "pi-3",
        nama: "Najlah Salsabilah",
        jabatan: "Wakil Ketua OSIS",
        kelas: "XI-E",
        bidang: "Pengurus Inti",
        urutan: 3,
      },
      {
        id: "pi-4",
        nama: "Haykal Arsyad Ramadhan",
        jabatan: "Sekretaris 1",
        kelas: "XI-A",
        bidang: "Pengurus Inti",
        urutan: 4,
      },
      {
        id: "pi-5",
        nama: "Zahra Aurelia Fatah",
        jabatan: "Sekretaris 2",
        kelas: "XI-A",
        bidang: "Pengurus Inti",
        urutan: 5,
      },
      {
        id: "pi-6",
        nama: "Elisa Kansa Salsabila",
        jabatan: "Bendahara 1",
        kelas: "XI-A",
        bidang: "Pengurus Inti",
        urutan: 6,
      },
      {
        id: "pi-7",
        nama: "Muhammad Hafiz Ramadhan",
        jabatan: "Bendahara 2",
        kelas: "XI-D",
        bidang: "Pengurus Inti",
        urutan: 7,
      },
    ],
    seksiBidang: [
      {
        id: "sek-1",
        namaSekbid: "Kewarganegaraan",
        deskripsi:
          "Menegakkan jiwa nasionalisme, upacara bendera, dan wawasan kebangsaan siswa.",
        anggota: [
          { id: "a-1", nama: "Jingga Angraeni Safitri", jabatan: "Koordinator", kelas: "XI-H" },
          { id: "a-2", nama: "Ahza Nasyitha Abidin", jabatan: "Anggota", kelas: "XI-F" },
          { id: "a-3", nama: "Syamil Muhammad Aulia", jabatan: "Anggota", kelas: "X-B" },
          { id: "a-4", nama: "Gita Ramadhani", jabatan: "Anggota", kelas: "X-C" },
          { id: "a-5", nama: "Kireina Anjani", jabatan: "Anggota", kelas: "X-D" },
          { id: "a-6", nama: "Muhammad Fathur Rahman Shiddiq", jabatan: "Anggota", kelas: "X-H" },
        ],
      },
      {
        id: "sek-2",
        namaSekbid: "Olahraga & Seni (ORSEN)",
        deskripsi:
          "Mengembangkan potensi bakat, kompetisi olahraga antarkelas, dan apresiasi seni budaya.",
        anggota: [
          { id: "b-1", nama: "Nikko Adinata Ruliff", jabatan: "Koordinator", kelas: "XI-F" },
          { id: "b-2", nama: "Atika Nainawah", jabatan: "Anggota", kelas: "XI-B" },
          { id: "b-3", nama: "Balqis Amira Rahmah", jabatan: "Anggota", kelas: "XI-F" },
          { id: "b-4", nama: "Andika Rasyad Putra Juliansyah", jabatan: "Anggota", kelas: "X-A" },
          { id: "b-5", nama: "Kinar Gendhis Dhanasthri", jabatan: "Anggota", kelas: "X-D" },
          { id: "b-6", nama: "Muhammad Raakha Mulia", jabatan: "Anggota", kelas: "X-D" },
          { id: "b-7", nama: "Khalisha Syabella Widjaya", jabatan: "Anggota", kelas: "X-F" },
        ],
      },
      {
        id: "sek-3",
        namaSekbid: "Kewirausahaan",
        deskripsi:
          "Mengasah jiwa kemandirian finansial siswa melalui unit usaha dan bazar sekolah.",
        anggota: [
          { id: "c-1", nama: "Iffah Izzatunnissa Baharuddin", jabatan: "Koordinator", kelas: "XI-D" },
          { id: "c-2", nama: "Sabih Sulthani Adlan", jabatan: "Anggota", kelas: "XI-B" },
          { id: "c-3", nama: "Nayfa Azizah", jabatan: "Anggota", kelas: "X-A" },
          { id: "c-4", nama: "Latisya Nurramadhani", jabatan: "Anggota", kelas: "X-B" },
          { id: "c-5", nama: "Naomi Yasashii Fawaz", jabatan: "Anggota", kelas: "X-F" },
          { id: "c-6", nama: "Rafisqi Gavin Atha Pramana", jabatan: "Anggota", kelas: "X-G" },
        ],
      },
      {
        id: "sek-4",
        namaSekbid: "Keagamaan",
        deskripsi:
          "Membangun iklim madrasah yang religius melalui ibadah berjamaah dan peringatan hari besar Islam.",
        anggota: [
          { id: "d-1", nama: "Naura Afzhyanisa", jabatan: "Koordinator", kelas: "XI-D" },
          { id: "d-2", nama: "Sultan Oktasio Putra", jabatan: "Anggota", kelas: "XI-D" },
          { id: "d-3", nama: "Khansaa Azzahra Ardiansyah", jabatan: "Anggota", kelas: "X-B" },
          { id: "d-4", nama: "Rifqi Umar Jamaludin", jabatan: "Anggota", kelas: "X-C" },
          { id: "d-5", nama: "Azkiah Kayla Sya'ra", jabatan: "Anggota", kelas: "X-E" },
          { id: "d-6", nama: "Syafira Yudian Pradita", jabatan: "Anggota", kelas: "X-E" },
          { id: "d-7", nama: "Zabri Ardiansyah", jabatan: "Anggota", kelas: "X-H" },
        ],
      },
      {
        id: "sek-5",
        namaSekbid: "HPDD",
        deskripsi:
          "Humas, Publikasi, Desain & Dokumentasi kegiatan dan citra digital OSIS MAN 19.",
        anggota: [
          { id: "e-1", nama: "Haura Azka Syahrani", jabatan: "Koordinator", kelas: "XI-E" },
          { id: "e-2", nama: "Aurel Ananda Fey", jabatan: "Anggota", kelas: "XI-F" },
          { id: "e-3", nama: "Rameyza Dylana Dyawigya", jabatan: "Anggota", kelas: "XI-F" },
          { id: "e-4", nama: "Haikal Raffasya Putra", jabatan: "Anggota", kelas: "X-B" },
          { id: "e-5", nama: "Mutiara Salsabila Putri Dewi", jabatan: "Anggota", kelas: "X-D" },
          { id: "e-6", nama: "Firaz Atharauf Harish", jabatan: "Anggota", kelas: "X-G" },
        ],
      },
      {
        id: "sek-6",
        namaSekbid: "Kedisiplinan & Pengembangan SDM (KPS)",
        deskripsi:
          "Menegakkan ketertiban tata tertib siswa serta upgrading kompetensi kepemimpinan.",
        anggota: [
          { id: "f-1", nama: "Syafira Wahidah Ramadhani", jabatan: "Koordinator", kelas: "XI-G" },
          { id: "f-2", nama: "Adinda Fauzia Zahrani", jabatan: "Anggota", kelas: "XI-G" },
          { id: "f-3", nama: "Danish Saputra Arifiansyah", jabatan: "Anggota", kelas: "XI-G" },
          { id: "f-4", nama: "Nasyfa Qurrotu'aini Al-Adi", jabatan: "Anggota", kelas: "X-B" },
          { id: "f-5", nama: "Muhammad Alfrazi Wijaya", jabatan: "Anggota", kelas: "X-D" },
          { id: "f-6", nama: "Besty Okta Catelya", jabatan: "Anggota", kelas: "X-E" },
        ],
      },
    ],
  },
  programKerja: {
    sectionLabel: "Agenda Aksi",
    sectionTitle: "Program Kerja Kepengurusan",
    sectionDesc:
      "Daftar program terencana dan terlaksana dari setiap bidang OSIS MAN 19 Jakarta.",
    data: [
      {
        id: "proker-sek-1",
        sekbid: "Kewarganegaraan",
        proker: [
          {
            id: "p-1",
            nama: "Hari Guru",
            jenis: "Eventual",
            deskripsi:
              "Peringatan dan perayaan Hari Guru Nasional sebagai bentuk apresiasi kepada tenaga pendidik MAN 19 Jakarta.",
            status: "Terlaksana",
          },
          {
            id: "p-2",
            nama: "Hari Kartini",
            jenis: "Eventual",
            deskripsi:
              "Peringatan Hari Kartini dengan menyelenggarakan berbagai kegiatan atau perlombaan bertema emansipasi.",
            status: "Terencana",
          },
          {
            id: "p-3",
            nama: "Matamuda (LDKS)",
            jenis: "Eventual",
            deskripsi:
              "Kegiatan kaderisasi dan Latihan Dasar Kepemimpinan Siswa (LDKS) bagi calon penerus organisasi.",
            status: "Terencana",
          },
          {
            id: "p-4",
            nama: "Mengawas Latihan Upacara",
            jenis: "Rutinitas",
            deskripsi:
              "Mendampingi, mengawasi, dan membimbing siswa dalam persiapan atau latihan upacara bendera.",
            status: "Berjalan",
          },
          {
            id: "p-5",
            nama: "Membuat Jadwal Petugas Upacara Hari-Hari Besar",
            jenis: "Rutinitas",
            deskripsi:
              "Menyusun dan mengkoordinasikan jadwal penugasan kelas/organisasi untuk upacara peringatan hari besar nasional.",
            status: "Berjalan",
          },
        ],
      },
      {
        id: "proker-sek-2",
        sekbid: "Olahraga & Seni (ORSEN)",
        proker: [
          {
            id: "p-6",
            nama: "Bulan Bahasa",
            jenis: "Eventual",
            deskripsi:
              "Menyelenggarakan perlombaan dan kegiatan apresiasi sastra/seni dalam rangka memperingati Bulan Bahasa.",
            status: "Terlaksana",
          },
          {
            id: "p-7",
            nama: "ClassMeeting 1",
            jenis: "Eventual",
            deskripsi:
              "Pertandingan olahraga dan seni antar kelas yang dilaksanakan setelah Ujian Akhir Semester Ganjil.",
            status: "Terlaksana",
          },
          {
            id: "p-8",
            nama: "Liga E-Sport",
            jenis: "Eventual",
            deskripsi:
              "Turnamen E-Sports internal antar siswa MAN 19 Jakarta untuk mewadahi minat bakat di bidang digital.",
            status: "Terencana",
          },
          {
            id: "p-9",
            nama: "ClassMeeting 2",
            jenis: "Eventual",
            deskripsi:
              "Pertandingan olahraga dan seni antar kelas yang dilaksanakan setelah Ujian Akhir Semester Genap.",
            status: "Terencana",
          },
          {
            id: "p-10",
            nama: "17 Agustus 2027",
            jenis: "Eventual",
            deskripsi:
              "Penyelenggaraan lomba-lomba tradisional dan perayaan HUT Kemerdekaan Republik Indonesia.",
            status: "Terencana",
          },
        ],
      },
      {
        id: "proker-sek-3",
        sekbid: "Kewirausahaan",
        proker: [
          {
            id: "p-11",
            nama: "Bazar Siswa WIRAMAN19",
            jenis: "Eventual",
            deskripsi:
              "Penyelenggaraan bazar kuliner dan kerajinan tangan hasil kreasi siswa pada event besar sekolah.",
            status: "Terencana",
          },
          {
            id: "p-12",
            nama: "Unit Merchandise OSIS",
            jenis: "Rutinitas",
            deskripsi:
              "Pengadaan dan penjualan atribut resmi serta cinderamata sekolah.",
            status: "Berjalan",
          },
          {
            id: "p-13",
            nama: "Pengelolaan Bank Sampah",
            jenis: "Rutinitas",
            deskripsi:
              "Program daur ulang sampah bernilai ekonomis untuk melatih kesadaran lingkungan dan kemandirian kas.",
            status: "Berjalan",
          },
        ],
      },
      {
        id: "proker-sek-4",
        sekbid: "Keagamaan",
        proker: [
          {
            id: "p-14",
            nama: "Peringatan Maulid Nabi Muhammad SAW",
            jenis: "Eventual",
            deskripsi:
              "Kajian akbar dan peringatan maulid nabi yang melibatkan penceramah dan seluruh siswa.",
            status: "Terlaksana",
          },
          {
            id: "p-15",
            nama: "Isra Mi'raj",
            jenis: "Eventual",
            deskripsi:
              "Peringatan peristiwa Isra Mi'raj untuk mempertebal keimanan dan wawasan keislaman.",
            status: "Terencana",
          },
          {
            id: "p-16",
            nama: "Gema Ramadhan & Santunan",
            jenis: "Eventual",
            deskripsi:
              "Rangkaian pesantren kilat, buka puasa bersama, dan santunan anak yatim di bulan suci.",
            status: "Terencana",
          },
          {
            id: "p-17",
            nama: "Piket Sholat Berjamaah & Tadarus",
            jenis: "Rutinitas",
            deskripsi:
              "Mengkoordinir ketertiban shalat dzuhur dan ashar berjamaah serta pembacaan Al-Qur'an pagi.",
            status: "Berjalan",
          },
        ],
      },
      {
        id: "proker-sek-5",
        sekbid: "HPDD",
        proker: [
          {
            id: "p-18",
            nama: "Aftermovie & Dokumentasi Event",
            jenis: "Rutinitas",
            deskripsi:
              "Mendokumentasikan seluruh rangkaian acara dalam bentuk video sinematik dan foto resolusi tinggi.",
            status: "Berjalan",
          },
          {
            id: "p-19",
            nama: "Pengelolaan Media Sosial & Portal Web",
            jenis: "Rutinitas",
            deskripsi:
              "Mempublikasikan info kegiatan, ucapan hari besar, dan profil organisasi di Instagram & Website resmi.",
            status: "Berjalan",
          },
          {
            id: "p-20",
            nama: "Majalah Dinding Digital (Mading)",
            jenis: "Eventual",
            deskripsi:
              "Publikasi konten literasi, komik, dan karya siswa secara berkala.",
            status: "Terencana",
          },
        ],
      },
      {
        id: "proker-sek-6",
        sekbid: "Kedisiplinan & Pengembangan SDM (KPS)",
        proker: [
          {
            id: "p-21",
            nama: "Upgrading Pengurus",
            jenis: "Eventual",
            deskripsi:
              "Kegiatan peningkatan kapasitas (soft skill) dan bonding khusus bagi internal pengurus MPK/OSIS.",
            status: "Terlaksana",
          },
          {
            id: "p-22",
            nama: "Workshop Internal",
            jenis: "Eventual",
            deskripsi:
              "Pelatihan keterampilan manajemen administrasi, public speaking, dan koordinasi internal tim.",
            status: "Terlaksana",
          },
          {
            id: "p-23",
            nama: "Workshop Eksternal & Kepemimpinan",
            jenis: "Eventual",
            deskripsi:
              "Seminar pengembangan potensi kepemimpinan dan karakter untuk seluruh siswa MAN 19 Jakarta.",
            status: "Terencana",
          },
          {
            id: "p-24",
            nama: "Piket Penegakan Ketertiban & Atribut Siswa",
            jenis: "Rutinitas",
            deskripsi:
              "Membantu guru piket dalam menyambut siswa pagi dan mengingatkan kelengkapan seragam madrasah.",
            status: "Berjalan",
          },
        ],
      },
    ],
  },
  galeri: {
    sectionLabel: "Dokumentasi & Publikasi",
    sectionTitle: "Galeri & Arsip Kegiatan",
    sectionDesc:
      "Dokumentasi foto, rekaman video, dan aftermovie setiap agenda kegiatan OSIS MAN 19 Jakarta yang diarsipkan secara terpusat.",
    categories: [
      {
        id: "gk-1",
        title: "Peringatan Hari Besar & Keagamaan",
        desc: "Isra Miraj, Maulid Nabi, Gema Ramadhan, Hari Guru Nasional, dan Upacara 17 Agustus.",
        tags: ["Keagamaan", "Nasional"],
        count: "Arsip Rutin",
        iconType: "calendar",
      },
      {
        id: "gk-2",
        title: "Kaderisasi & Kepemimpinan Siswa",
        desc: "Latihan Dasar Kepemimpinan Siswa (LDKS Matamuda), Upgrading Pengurus, & Workshop.",
        tags: ["KPS", "Leadership"],
        count: "Tahunan",
        iconType: "layers",
      },
      {
        id: "gk-3",
        title: "Pekan Olahraga, Seni & Literasi",
        desc: "Classmeeting Semester, Bulan Bahasa, Pentas Seni, dan Turnamen E-Sport antarkelas.",
        tags: ["ORSEN", "Kompetisi"],
        count: "Semesteran",
        iconType: "film",
      },
      {
        id: "gk-4",
        title: "Sosial, Wirausaha & Publikasi",
        desc: "Bazar Wiraman19, Bank Sampah, Aftermovie dokumentasi, dan bakti sosial.",
        tags: ["Wirausaha", "HPDD"],
        count: "Berkala",
        iconType: "camera",
      },
    ],
    driveBadge: "Pusat Penyimpanan Aset Digital",
    driveTitle: "Akses Folder Dokumentasi Google Drive Resmi",
    driveDesc:
      "Seluruh foto resolusi tinggi, aset publikasi, materi presentasi, dan aftermovie acara tersimpan secara terstruktur di Google Drive OSIS MAN 19 Jakarta. Dikelola dan diperbarui secara berkala oleh tim HPDD.",
    driveButtonText: "Buka Google Drive OSIS",
    driveButtonHref: "https://drive.google.com",
    driveCards: [
      {
        id: "dc-1",
        title: "Dokumentasi Lengkap Hari Guru Nasional 2026",
        date: "2026-11-25",
        driveLink: "https://drive.google.com",
        category: "Nasional",
      },
      {
        id: "dc-2",
        title: "Arsip Classmeeting Semester Ganjil 2026",
        date: "2026-12-18",
        driveLink: "https://drive.google.com",
        category: "ORSEN",
      },
      {
        id: "dc-3",
        title: "Dokumentasi Upgrading & Kaderisasi Pengurus",
        date: "2026-10-15",
        driveLink: "https://drive.google.com",
        category: "Leadership",
      },
    ],
  },
  homeAspirasiBanner: {
    badge: "Saluran Resmi Komunikasi Dua Arah",
    title: "Punya Aspirasi, Kritik Membangun, atau Usulan Kegiatan?",
    desc: "Suara siswa dan arahan bapak/ibu guru adalah landasan kemajuan kita bersama. Sampaikan kritik, evaluasi, atau ide inovatif secara nyaman dan transparan melalui formulir resmi OSIS MAN 19.",
    buttonText: "Buka Formulir Aspirasi",
    buttonHref: "/aspirasi",
    cards: [
      {
        title: "Aspirasi Siswa",
        desc: "Keluhan, saran belajar & fasilitas",
      },
      {
        title: "Aspirasi Guru",
        desc: "Masukan & bimbingan dewan guru",
      },
      {
        title: "Kritik & Evaluasi",
        desc: "Evaluasi kinerja berkala pengurus",
      },
      {
        title: "Ide Kegiatan Baru",
        desc: "Usulan event kreatif & lomba",
      },
    ],
  },
  aspirasiPage: {
    badgeText: "Suara Civitas Akademika MAN 19",
    pageTitle: "Kotak Aspirasi",
    pageHighlight: "OSIS MAN 19",
    pageDesc:
      "Saluran resmi aspirasi, kritik, masukan ide, dan evaluasi kinerja organisasi. Setiap suara Anda sangat berharga bagi kemajuan sekolah kita bersama.",
    cards: [
      {
        id: "siswa",
        title: "ASPIRASI SISWA SISWI",
        description: "Wadah suara bagi seluruh siswa MAN 19 Jakarta.",
        href: "https://forms.gle/GyT6FnVGEoFS2AnX7",
        badgeLabel: "Siswa & Siswi",
        iconType: "users",
      },
      {
        id: "guru",
        title: "ASPIRASI KHUSUS GURU",
        description: "Masukan dan saran dari Bapak/Ibu Guru untuk OSIS.",
        href: "https://forms.gle/ERA5FWPBJzVCQvnH7",
        badgeLabel: "Dewan Guru",
        iconType: "graduation",
      },
      {
        id: "kritik-saran",
        title: "KRITIK/SARAN UNTUK OSIS",
        description: "Evaluasi kinerja pengurus BEST OSIS agar lebih baik.",
        href: "https://forms.gle/77VDQSqMk75pDRvx6",
        badgeLabel: "Evaluasi & Saran",
        iconType: "message",
      },
      {
        id: "ide-kegiatan",
        title: "MASUKAN IDE KEGIATAN",
        description: "Punya ide acara seru? Sampaikan idemu di sini!",
        href: "https://forms.gle/C5qe5q9xdLGo3wJ3A",
        badgeLabel: "Inovasi Acara",
        iconType: "lightbulb",
      },
    ],
    alurTitle: "Alur Penanganan Aspirasi",
    alurDesc:
      "Bagaimana proses saran dan masukan Anda kami tindaklanjuti secara nyata.",
    alurList: [
      {
        step: "01",
        title: "Pilih Formulir",
        desc: "Tentukan jenis formulir yang sesuai dengan pesan yang ingin disampaikan.",
      },
      {
        step: "02",
        title: "Tuliskan Masukan",
        desc: "Isi formulir secara jujur dan konstruktif. Dapat dilakukan secara anonim.",
      },
      {
        step: "03",
        title: "Rapat Koordinasi",
        desc: "Aspirasi dibahas dalam rapat bulanan BEST OSIS bersama pembina.",
      },
      {
        step: "04",
        title: "Realisasi Program",
        desc: "Saran dan ide terpilih diwujudkan ke dalam program kerja nyata.",
      },
    ],
  },
  homeCtaCollab: {
    badge: "Kolaborasi Tanpa Batas",
    title: "Mari Bergerak & Bersinergi Bersama OSIS",
    desc: "Dukung setiap inisiatif kegiatan sekolah, ikuti perkembangan agenda terdekat, serta dokumentasikan momen berharga perjalanan kita di MAN 19 Jakarta.",
    btn1Text: "Lihat Program Kerja",
    btn1Href: "#proker",
    btn2Text: "Buka Arsip Galeri",
    btn2Href: "#galeri",
  },
  footer: {
    orgNamePrefix: "OSIS MAN 19",
    orgNameHighlight: "JAKARTA",
    kabinetMasaBakti: "Masa Bakti 2026/2027 • Kabinet Bersinergi",
    bio: "Wadah resmi representasi, kreasi, dan pengabdian seluruh siswa/i MAN 19 Jakarta untuk membentuk insan yang berakhlakul karimah, berjiwa kepemimpinan, dan berwawasan luas.",
    jamSekretariat: "Sekretariat Aktif Hari Sekolah (07.00 - 15.30 WIB)",
    address:
      "Jl. H. Muchtar Raya Gg. H. Jaelani III, Petukangan Utara, Pesanggrahan, Jakarta Selatan 12260",
    email: "man19jakarta@kemenag.go.id",
    phone: "0812-3456-7890",
    instagramUrl: "https://instagram.com/osisman19jkt",
    youtubeUrl: "https://youtube.com",
    tiktokUrl: "https://tiktok.com",
    copyrightText: "© 2026 OSIS MAN 19 Jakarta. Seluruh hak cipta dilindungi.",
    creditText: "Dikelola bersama oleh Bidang HPDD & Tim IT",
  },
  adminPin: "adminosis19",
  lastUpdated: new Date().toISOString(),
};

