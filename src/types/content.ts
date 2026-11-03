export interface NavLinkItem {
  id: string;
  label: string;
  href: string;
  isSpecial?: boolean;
}

export interface SiteHeaderConfig {
  orgNamePrefix: string; // e.g. "OSIS MAN 19"
  orgNameHighlight: string; // e.g. "JAKARTA"
  periode: string; // e.g. "Periode 2026/2027"
  logoUrl: string; // e.g. "/logo-osis.jpg"
  navLinks: NavLinkItem[];
}

export interface HeroOverviewStat {
  iconType: "users" | "calendar" | "shield";
  value: string;
  label: string;
  subLabel: string;
}

export interface HeroConfig {
  badgeText: string;
  titleRegular: string;
  titleHighlight: string;
  description: string;
  ctaPrimaryText: string;
  ctaPrimaryHref: string;
  ctaSecondaryText: string;
  ctaSecondaryHref: string;
  ctaAspirasiText: string;
  ctaAspirasiHref: string;
  kabinetName: string;
  kabinetStatus: string;
  instansiName: string;
  subInstansi: string;
  stats: {
    pengurusCount: string;
    pengurusLabel: string;
    pengurusSub: string;
    prokerCount: string;
    prokerLabel: string;
    prokerSub: string;
    aspirasiStatus: string;
    aspirasiLabel: string;
    aspirasiBadge: string;
  };
}

export interface VisionPillar {
  title: string;
  desc: string;
}

export interface MisiItem {
  id: string;
  title: string;
  desc: string;
}

export interface VisiMisiConfig {
  sectionLabel: string;
  sectionTitle: string;
  sectionDesc: string;
  visionBadge: string;
  mainVision: string;
  pillars: VisionPillar[];
  missions: MisiItem[];
}

export interface PengurusIntiItem {
  id: string;
  nama: string;
  jabatan: string;
  kelas: string;
  bidang: string;
  urutan?: number;
  fotoUrl?: string;
  motto?: string;
  instagram?: string;
  bio?: string;
}

export interface AnggotaSekbid {
  id: string;
  nama: string;
  jabatan: string; // "Koordinator" | "Anggota" | custom
  kelas: string;
  fotoUrl?: string;
  motto?: string;
  instagram?: string;
  bio?: string;
}

export interface SekbidItem {
  id: string;
  namaSekbid: string;
  deskripsi: string;
  anggota: AnggotaSekbid[];
}

export interface StrukturConfig {
  sectionLabel: string;
  sectionTitle: string;
  sectionDesc: string;
  pengurusInti: PengurusIntiItem[];
  seksiBidang: SekbidItem[];
}

export interface ProkerItem {
  id: string;
  nama: string;
  jenis: "Eventual" | "Rutinitas";
  deskripsi: string;
  status?: "Terlaksana" | "Berjalan" | "Akan Datang" | "Terencana";
}

export interface SekbidProkerGroup {
  id: string;
  sekbid: string;
  proker: ProkerItem[];
}

export interface ProgramKerjaConfig {
  sectionLabel: string;
  sectionTitle: string;
  sectionDesc: string;
  data: SekbidProkerGroup[];
}

export interface GaleriCategoryItem {
  id: string;
  title: string;
  desc: string;
  tags: string[];
  count: string;
  iconType?: "calendar" | "layers" | "film" | "camera";
}

export interface GaleriDriveItem {
  id: string;
  title: string;
  date: string;
  driveLink: string;
  category: string;
}

export interface GaleriConfig {
  sectionLabel: string;
  sectionTitle: string;
  sectionDesc: string;
  categories: GaleriCategoryItem[];
  driveBadge: string;
  driveTitle: string;
  driveDesc: string;
  driveButtonText: string;
  driveButtonHref: string;
  driveCards: GaleriDriveItem[];
}

export interface AspirasiCardItem {
  id: string;
  title: string;
  description: string;
  href: string;
  badgeLabel: string;
  iconType: "users" | "graduation" | "message" | "lightbulb";
}

export interface AlurAspirasiItem {
  step: string;
  title: string;
  desc: string;
}

export interface AspirasiPageConfig {
  badgeText: string;
  pageTitle: string;
  pageHighlight: string;
  pageDesc: string;
  cards: AspirasiCardItem[];
  alurTitle: string;
  alurDesc: string;
  alurList: AlurAspirasiItem[];
}

export interface HomeAspirasiBannerConfig {
  badge: string;
  title: string;
  desc: string;
  buttonText: string;
  buttonHref: string;
  cards: {
    title: string;
    desc: string;
  }[];
}

export interface HomeCtaCollabConfig {
  badge: string;
  title: string;
  desc: string;
  btn1Text: string;
  btn1Href: string;
  btn2Text: string;
  btn2Href: string;
}

export interface FooterConfig {
  orgNamePrefix: string;
  orgNameHighlight: string;
  kabinetMasaBakti: string;
  bio: string;
  jamSekretariat: string;
  address: string;
  email: string;
  phone: string;
  instagramUrl: string;
  youtubeUrl?: string;
  tiktokUrl?: string;
  copyrightText: string;
  creditText: string;
}

export interface WebsiteData {
  header: SiteHeaderConfig;
  hero: HeroConfig;
  visiMisi: VisiMisiConfig;
  struktur: StrukturConfig;
  programKerja: ProgramKerjaConfig;
  galeri: GaleriConfig;
  homeAspirasiBanner: HomeAspirasiBannerConfig;
  aspirasiPage: AspirasiPageConfig;
  homeCtaCollab: HomeCtaCollabConfig;
  footer: FooterConfig;
  adminPin: string; // Hashed or clear PIN for simple admin authentication
  lastUpdated?: string;
}

