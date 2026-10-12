# Fa.Bucha website

Website landing page responsif untuk brand kombucha Fa.Bucha.

## File
- `index.html` — struktur halaman
- `style.css` — desain, responsive layout, animasi gradient
- `script.js` — menu mobile, modal pilihan order, link WhatsApp/Instagram
- `images/` — tempat menyimpan foto produk asli nantinya

## Kontak yang sudah diatur
- WhatsApp: +62 857-0183-1367
- Instagram: https://www.instagram.com/fa.bucha?dlrf=dnpvMWg4c3lxYjFr

## Cara menambahkan foto produk nanti
1. Unggah foto produk ke folder `images/` di repository GitHub.
2. Ganti ilustrasi botol sementara di `index.html` dengan elemen gambar `<img src="images/nama-foto.jpg" alt="Fa.Bucha Original">`.
3. Tambahkan class pada gambar dan atur `object-fit: contain` atau `cover` di `style.css`.
4. Pastikan nama file sama persis, termasuk huruf besar/kecil.

## Deploy lewat HP dengan GitHub + Vercel
1. Buat repository baru di GitHub, misalnya `fa-bucha-website`.
2. Upload `index.html`, `style.css`, `script.js`, dan folder `images`.
3. Buka Vercel, pilih **Add New → Project**, lalu import repository GitHub.
4. Untuk website statis ini, framework preset dapat dibiarkan `Other`; tidak perlu build command. Deploy.
5. Setiap perubahan yang di-commit ke branch utama GitHub akan memicu deployment baru.

## Sebelum dipublikasikan
- Ganti ilustrasi botol dengan foto produk asli.
- Tambahkan harga, ukuran, pilihan pengiriman, dan kebijakan penyimpanan jika sudah dikonfirmasi.
- Periksa kembali klaim produk dan informasi keamanan pangan sebelum menampilkannya.
