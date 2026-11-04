# BukuKita — Project UTS Pemrograman Web 1

Aplikasi front-end sederhana untuk pemesanan buku pada toko online. Dibuat menggunakan HTML, CSS, dan JavaScript tanpa server/database. Data katalog awal berada di `js/data.js`, sedangkan transaksi yang dibuat disimpan di `localStorage` browser.

## 1. Fitur sesuai soal
1. **Login (`login.html`)**: input email dan password, alert jika salah, modal Lupa Password dan Daftar.
2. **Dashboard (`dashboard.html`)**: navigasi menu dan greeting berdasarkan waktu lokal (pagi/siang/sore/malam).
3. **Stok/Katalog (`stok.html`)**: data dari konstanta `dataKatalogBuku`, tambah buku dan hapus baris menggunakan JavaScript DOM, serta pencarian.
4. **Pemesanan (`checkout.html`)**: input pemesan, pilihan buku, jumlah, metode pembayaran, validasi stok, hitung total, dan riwayat transaksi.
5. **Tracking (`tracking.html`)**: pencarian nomor DO, nama pemesan, status, progress bar, ekspedisi, tanggal, jenis paket, dan total pembayaran.

## 2. Struktur folder
```text
UTS_Toko_Buku_Online/
├── login.html
├── dashboard.html
├── stok.html
├── checkout.html
├── tracking.html
├── css/
│   └── style.css
├── js/
│   ├── data.js
│   ├── login.js
│   ├── dashboard.js
│   ├── stok.js
│   ├── checkout.js
│   └── tracking.js
└── README.md
```

## 3. Cara menjalankan
1. Ekstrak file ZIP ke folder komputer.
2. Buka folder `UTS_Toko_Buku_Online` menggunakan Visual Studio Code.
3. Jalankan `login.html` dengan browser atau gunakan ekstensi **Live Server** di VS Code (klik kanan `login.html` → Open with Live Server).
4. Masuk dengan akun demo:
   - Email: `admin@bukukita.com`
   - Password: `123456`
5. Dari dashboard, buka menu Katalog, Pemesanan, atau Pengiriman.

## 4. Cara menguji fitur
- Login salah: masukkan email/password selain akun demo. Browser menampilkan alert sesuai instruksi soal.
- Modal: klik **Lupa Password?** atau **Daftar** di halaman login.
- Greeting: buka dashboard; sapaan menyesuaikan jam komputer.
- Tambah stok: buka Katalog, isi semua kolom, lalu klik Tambahkan Buku.
- Pemesanan: pilih buku, isi data pembeli, jumlah, dan pembayaran. Nomor DO akan muncul setelah pesanan disimpan.
- Tracking: salin nomor DO yang muncul pada hasil pemesanan, lalu cari di halaman Pengiriman. Nomor demo awal: `DO-2026-001`.

## 5. Penjelasan file
- `data.js`: menyimpan data dummy katalog, data tracking contoh, akun demo, dan fungsi format Rupiah.
- `login.js`: memvalidasi akun dan mengatur modal.
- `dashboard.js`: membuat greeting sesuai waktu dan menghitung ringkasan.
- `stok.js`: menampilkan, mencari, menambah, dan menghapus data buku melalui DOM.
- `checkout.js`: menghitung total, memvalidasi pesanan/stok, dan menyimpan transaksi ke localStorage.
- `tracking.js`: mencari data pengiriman berdasarkan nomor DO dan menampilkan progres.

## 6. Catatan
- Ini adalah simulasi front-end untuk tugas. Login, pendaftaran, dan lupa password belum terhubung ke server/email sungguhan.
- Data katalog yang ditambah saat halaman berjalan tersimpan di memori halaman; data transaksi tersimpan pada `localStorage` browser.
- Untuk demo, jalankan dari browser yang sama agar data transaksi localStorage dapat dibaca halaman tracking.
