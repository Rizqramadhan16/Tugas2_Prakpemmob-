// ============================================================
// DATA STATIS (HARDCODE) - Jadwal Kuliah Kelas 6D (VID)
// Semua data aplikasi bersumber dari file ini.
// Kode matkul, SKS, dan dosen adalah PLACEHOLDER karena tidak
// tercantum di jadwal asli. Silakan sesuaikan sendiri.
// ============================================================

// -------------------------------------------------------------
// 1. DAFTAR MATA KULIAH (untuk halaman Ringkasan - pakai .map())
// -------------------------------------------------------------
export const mataKuliahList = [
  { id: 'MK01', kode: 'TI601', nama: 'Big Data', sks: 3, dosen: 'MULYANTO, S.T, M.Cs, Ph.D' },
  { id: 'MK02', kode: 'TI601P', nama: 'Praktikum Big Data', sks: 1, dosen: 'MULYANTO, S.T, M.Cs, Ph.D' },
  { id: 'MK03', kode: 'TI602', nama: 'Pemrograman Mobile', sks: 3, dosen: 'PANJI RACHMAT SETIAWAN, S.Kom, M.M.S.I' },
  { id: 'MK04', kode: 'TI602P', nama: 'Praktikum Pemrograman Mobile', sks: 1, dosen: 'PANJI RACHMAT SETIAWAN, S.Kom, M.M.S.I' },
  { id: 'MK05', kode: 'TI603', nama: 'Routing & Switching', sks: 3, dosen: 'APRI SISWANTO, S.Kom, M.Kom, ph.D' },
  { id: 'MK06', kode: 'TI603P', nama: 'Praktikum Routing & Switching', sks: 1, dosen: 'APRI SISWANTO, S.Kom, M.Kom, ph.D' },
  { id: 'MK07', kode: 'TI604', nama: 'Interaksi Manusia & Komputer', sks: 3, dosen: 'ANA YULIANTI,S.T, M.Kom' },
  { id: 'MK08', kode: 'TI605', nama: 'Natural Language Processing', sks: 3, dosen: 'Prof.Dr. ARBI HAZA NASUTION,B.IT.,M.IT' },
  { id: 'MK09', kode: 'TI605P', nama: 'Praktikum NLP', sks: 1, dosen: 'Prof.Dr. ARBI HAZA NASUTION,B.IT.,M.IT' },
  { id: 'MK10', kode: 'TI606', nama: 'Implementasi & Pengujian Perangkat Lunak', sks: 3, dosen: 'Dr.Ir.AKMAR EVENDI,S.Kom,M.Kom' },
  { id: 'MK11', kode: 'TI607', nama: 'Machine Learning', sks: 3, dosen: 'ANGGI HANAFIAH, S.Kom, M.Kom' },
  { id: 'MK12', kode: 'TI607P', nama: 'Praktikum Machine Learning', sks: 1, dosen: 'ANGGI HANAFIAH, S.Kom, M.Kom' },
];

// -------------------------------------------------------------
// 2. DAFTAR PERTEMUAN (untuk halaman FlatList) - minimal 10 item
// -------------------------------------------------------------
export const pertemuanList = [
  { id: 'P001', matkul: 'Big Data', pertemuanKe: 1, topik: 'Pengenalan konsep Big Data & ekosistem Hadoop', tanggal: '01 Sep 2026' },
  { id: 'P002', matkul: 'Praktikum Big Data', pertemuanKe: 1, topik: 'Instalasi environment Hadoop di lab', tanggal: '01 Sep 2026' },
  { id: 'P003', matkul: 'Prak Pemrograman Mobile', pertemuanKe: 1, topik: 'Setup Expo & struktur project React Native', tanggal: '01 Sep 2026' },
  { id: 'P004', matkul: 'Praktikum Routing & Switching', pertemuanKe: 1, topik: 'Pengenalan Cisco Packet Tracer', tanggal: '02 Sep 2026' },
  { id: 'P005', matkul: 'Interaksi Manusia & Komputer', pertemuanKe: 1, topik: 'Prinsip usability dan user-centered design', tanggal: '02 Sep 2026' },
  { id: 'P006', matkul: 'Routing & Switching', pertemuanKe: 1, topik: 'Konsep dasar routing statis', tanggal: '02 Sep 2026' },
  { id: 'P007', matkul: 'Natural Language Processing', pertemuanKe: 1, topik: 'Pengenalan NLP dan text preprocessing', tanggal: '03 Sep 2026' },
  { id: 'P008', matkul: 'Implementasi & Pengujian Perangkat Lunak', pertemuanKe: 1, topik: 'Overview pengujian perangkat lunak (black box & white box)', tanggal: '03 Sep 2026' },
  { id: 'P009', matkul: 'Praktikum NLP', pertemuanKe: 1, topik: 'Instalasi library NLTK & tokenisasi teks', tanggal: '04 Sep 2026' },
  { id: 'P010', matkul: 'Pemrograman Mobile', pertemuanKe: 1, topik: 'Pengenalan komponen dasar React Native', tanggal: '04 Sep 2026' },
  { id: 'P011', matkul: 'Praktikum Machine Learning', pertemuanKe: 1, topik: 'Setup Python, NumPy, dan Pandas', tanggal: '04 Sep 2026' },
  { id: 'P012', matkul: 'Machine Learning', pertemuanKe: 1, topik: 'Pengenalan supervised vs unsupervised learning', tanggal: '04 Sep 2026' },
  { id: 'P013', matkul: 'Big Data', pertemuanKe: 2, topik: 'Arsitektur HDFS dan MapReduce', tanggal: '08 Sep 2026' },
  { id: 'P014', matkul: 'Routing & Switching', pertemuanKe: 2, topik: 'Routing dinamis: RIP dan OSPF', tanggal: '09 Sep 2026' },
];

// -------------------------------------------------------------
// 3. JADWAL PER HARI (untuk halaman SectionList)
// Format section: { title: 'Nama Hari', data: [ ...jadwal ] }
// -------------------------------------------------------------
export const jadwalPerHari = [
  {
    title: 'Senin',
    data: [
      { id: 'S01', matkul: 'Big Data', ruangan: '3C.2.08', kelas: 'D', jamMulai: '08:45', jamSelesai: '10:25' },
      { id: 'S02', matkul: 'Praktikum Big Data', ruangan: 'Lab AI (D)', kelas: 'D', jamMulai: '10:30', jamSelesai: '12:10' },
      { id: 'S03', matkul: 'Praktikum Pemrograman Mobile', ruangan: 'Lab Mobile (D)', kelas: 'B', jamMulai: '13:00', jamSelesai: '14:40' },
    ],
  },
  {
    title: 'Selasa',
    data: [
      { id: 'S04', matkul: 'Praktikum Routing & Switching', ruangan: 'Lab Network (C)', kelas: 'D', jamMulai: '07:00', jamSelesai: '08:40' },
      { id: 'S05', matkul: 'Interaksi Manusia & Komputer', ruangan: '3D.3.15', kelas: 'B', jamMulai: '08:45', jamSelesai: '11:15' },
      { id: 'S06', matkul: 'Routing & Switching', ruangan: '3C.2.08', kelas: 'F', jamMulai: '13:00', jamSelesai: '14:40' },
    ],
  },
  {
    title: 'Rabu',
    data: [
      { id: 'S07', matkul: 'Natural Language Processing', ruangan: '3C.1.03', kelas: 'B', jamMulai: '10:30', jamSelesai: '12:10' },
      { id: 'S08', matkul: 'Implementasi & Pengujian Perangkat Lunak', ruangan: '3C.2.07', kelas: 'F', jamMulai: '13:00', jamSelesai: '15:30' },
    ],
  },
  {
    title: 'Kamis',
    data: [], // Tidak ada jadwal
  },
  {
    title: 'Jumat',
    data: [
      { id: 'S09', matkul: 'Praktikum NLP', ruangan: 'Lab AI (D)', kelas: 'B', jamMulai: '07:00', jamSelesai: '08:40' },
      { id: 'S10', matkul: 'Pemrograman Mobile', ruangan: '3C.2.07', kelas: 'D', jamMulai: '08:45', jamSelesai: '10:25' },
      { id: 'S11', matkul: 'Praktikum Machine Learning', ruangan: 'Lab AI (D)', kelas: 'D', jamMulai: '13:30', jamSelesai: '15:10' },
      { id: 'S12', matkul: 'Machine Learning', ruangan: '3C.1.04', kelas: 'D', jamMulai: '15:15', jamSelesai: '16:55' },
    ],
  },
];
