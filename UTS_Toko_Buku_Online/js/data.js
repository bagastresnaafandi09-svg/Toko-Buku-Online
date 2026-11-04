// Data dummy aplikasi BukuKita (tanpa server/database)
const dataKatalogBuku = [
 {id:1,judul:"Laskar Pelangi",penulis:"Andrea Hirata",harga:85000,stok:12},
 {id:2,judul:"Bumi",penulis:"Tere Liye",harga:92000,stok:8},
 {id:3,judul:"Filosofi Teras",penulis:"Henry Manampiring",harga:78000,stok:15},
 {id:4,judul:"Negeri 5 Menara",penulis:"Ahmad Fuadi",harga:88000,stok:6}
];
const dataPengiriman = [
 {do:"DO-2026-001",nama:"Andi Saputra",buku:"Laskar Pelangi",total:85000,ekspedisi:"JNE",tanggal:"03 November 2026",paket:"Reguler",status:"Dalam perjalanan",progress:65}
];
const akunDemo = {email:"admin@bukukita.com",password:"123456"};
const rupiah = angka => new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR",maximumFractionDigits:0}).format(angka);
