# Habitly – Aplikasi Pencatat Kebiasaan

## Tentang Aplikasi

Habitly merupakan aplikasi pencatat kebiasaan harian yang dibuat menggunakan React dan TypeScript. Aplikasi ini membantu pengguna mengatur, mencatat, dan memantau kebiasaan sehari-hari agar lebih teratur dan konsisten.

## Fitur Aplikasi

1. **Menambahkan Kebiasaan** – Pengguna dapat menambahkan kebiasaan baru.
2. **Daftar Kebiasaan** – Menampilkan kebiasaan yang telah dibuat.
3. **Menandai Kebiasaan Selesai** – Pengguna dapat menandai kebiasaan yang sudah dilakukan.
4. **Menghapus Kebiasaan** – Pengguna dapat menghapus kebiasaan yang tidak diperlukan.
5. **Pencarian Kebiasaan** – Memudahkan pengguna mencari kebiasaan tertentu.
6. **Statistik Progres** – Menampilkan perkembangan kebiasaan pengguna.

## Teknologi yang Digunakan

- **React** – Digunakan untuk membangun tampilan aplikasi menggunakan komponen.
- **TypeScript** – Digunakan untuk mengatur tipe data agar kode lebih terstruktur.
- **Vite** – Digunakan sebagai alat pengembangan aplikasi.
- **CSS** – Digunakan untuk mengatur desain dan tampilan aplikasi.

## Komponen React yang Dibuat

Aplikasi Habitly memiliki beberapa komponen, yaitu:

- **Sidebar:** Menampilkan menu navigasi aplikasi.
- **Header:** Menampilkan bagian atas halaman.
- **ProgressCard:** Menampilkan ringkasan perkembangan kebiasaan.
- **HabitForm:** Menyediakan formulir untuk menambahkan kebiasaan.
- **HabitList:** Menampilkan daftar kebiasaan pengguna.
- **HabitCard:** Menampilkan informasi setiap kebiasaan beserta tindakan yang dapat dilakukan.

## Penggunaan Props, State, dan Event Handling

### 1. Props

Props digunakan untuk mengirimkan data dan fungsi dari komponen induk ke komponen anak. Contohnya, komponen HabitCard menerima informasi kebiasaan serta fungsi untuk menandai kebiasaan selesai dan menghapusnya.

### 2. State

State digunakan untuk menyimpan dan mengelola data yang dapat berubah selama aplikasi digunakan. Pada Habitly, state digunakan untuk menyimpan daftar kebiasaan, status penyelesaian, dan kata kunci pencarian. Pengelolaan state menggunakan `useState` dari React.

### 3. Event Handling

Event handling digunakan untuk menangani tindakan pengguna ketika berinteraksi dengan aplikasi, seperti menambahkan kebiasaan, menandai kebiasaan selesai, menghapus kebiasaan, dan melakukan pencarian.

## Cara Menjalankan Aplikasi

1. Pastikan Node.js sudah terpasang.
2. Clone atau unduh repository Habitly.
3. Buka folder proyek menggunakan Visual Studio Code.
4. Buka terminal dan jalankan perintah:

   ```bash
   npm install
   ```

5. Jalankan aplikasi menggunakan perintah:

   ```bash
   npm run dev
   ```

6. Buka alamat lokal yang muncul pada terminal.

## Link Aplikasi

https://habitly-nadhifazahra.vercel.app/

## Pengembang

**Nadhifa Zahra Syaifi**

Proyek ini dibuat untuk memenuhi tugas mata kuliah Pengembangan Aplikasi Web.
