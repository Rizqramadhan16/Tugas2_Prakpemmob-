# Sistem Jadwal Kuliah (React Native / Expo)

## Cara Menjalankan
1. Ekstrak/buka folder project ini.
2. Install dependency:
   ```
   npm install
   ```
3. Jalankan project:
   ```
   npx expo start
   ```
4. Scan QR code dengan aplikasi **Expo Go** (Android/iOS), atau tekan `w` untuk buka di web browser.

## Struktur Project
```
JadwalKuliahApp/
├── App.js                     -> Bottom Tab Navigator (3 halaman)
├── data/
│   └── scheduleData.js        -> SEMUA DATA STATIS (edit di sini)
├── screens/
│   ├── RingkasanScreen.js     -> Ringkasan matkul, pakai .map()
│   ├── PertemuanScreen.js     -> Daftar pertemuan, pakai FlatList
│   └── JadwalScreen.js        -> Jadwal per hari, pakai SectionList
├── app.json
├── babel.config.js
└── package.json
```

## Pemenuhan Ketentuan Tugas

| Ketentuan | Lokasi | Keterangan |
|---|---|---|
| Halaman ringkasan pakai `.map()` | `RingkasanScreen.js` | key unik pakai `mk.id` |
| Halaman FlatList (min. 10 item) | `PertemuanScreen.js` | 14 item pertemuan di `scheduleData.js` |
| `keyExtractor` | `PertemuanScreen.js` | `item => item.id` |
| `ItemSeparatorComponent` | `PertemuanScreen.js` | garis pemisah antar item |
| `ListHeaderComponent` | `PertemuanScreen.js` | judul + subjudul halaman |
| `ListEmptyComponent` | `PertemuanScreen.js` | teks "Belum ada data pertemuan" |
| Halaman SectionList per hari | `JadwalScreen.js` | section = hari (Senin–Jumat) |
| Header seksi beda gaya | `JadwalScreen.js` | background gelap + huruf kapital tebal, beda total dari card item |
| Data dari array statis | `data/scheduleData.js` | `mataKuliahList`, `pertemuanList`, `jadwalPerHari` |

## Yang Perlu Kamu Sesuaikan
Kode matkul, jumlah SKS, dan nama dosen di `mataKuliahList` (dalam `scheduleData.js`)
adalah **placeholder** karena tidak tercantum di jadwal PDF asli — ganti sesuai KRS-mu.

## Cara Menguji ListEmptyComponent
Untuk membuktikan `ListEmptyComponent` berfungsi, sementara ubah:
```js
data={pertemuanList}
```
menjadi:
```js
data={[]}
```
di `PertemuanScreen.js`, lalu jalankan ulang — akan muncul teks "Belum ada data pertemuan."
Jangan lupa kembalikan ke `pertemuanList` setelah selesai menguji.
