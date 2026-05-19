# Kampung Batik Giriloyo

Landing page promosi untuk Kampung Batik Giriloyo di Desa Wisata Wukirsari, Yogyakarta.

## Tech Stack

- Next.js
- React
- CSS

## Fitur

- Hero section dengan CTA ke WhatsApp dan Google Maps
- Section produk batik
- Section belajar batik
- Informasi lokasi dan akses
- Galeri visual placeholder
- Form booking yang mengarahkan pesan ke WhatsApp
- Mobile-first dan responsif

## Menjalankan Lokal

```bash
npm install
npm run dev
```

Lalu buka `http://localhost:3000`.

## Deploy ke Vercel

Repo ini sudah disiapkan untuk deploy ke Vercel sebagai project Next.js.

Langkah umum:

1. Push repo ke GitHub
2. Import repo di Vercel
3. Biarkan Vercel mendeteksi `Next.js`
4. Deploy

## Yang Perlu Diganti

- Nomor WhatsApp di `app/page.js`
- Link Google Maps yang spesifik sudah bisa diisi lewat `app/page.js`
- Foto atau galeri asli
- Copywriting kalau mau disesuaikan lagi

## Catatan

- Form booking saat ini membuka WhatsApp dengan pesan yang sudah terisi.
- `metadata` sudah disiapkan di `app/layout.js` untuk SEO dasar.
