const highlights = [
  {
    title: "Wisata budaya yang otentik",
    text: "Pengunjung bisa melihat sisi nyata batik tulis, bukan sekadar hasil akhirnya."
  },
  {
    title: "Belajar langsung dari perajin",
    text: "Cocok untuk sekolah, keluarga, komunitas, maupun wisatawan yang ingin pengalaman edukatif."
  },
  {
    title: "Produk batik untuk dibawa pulang",
    text: "Belanja batik sekaligus membawa cerita dan nilai budaya dari Wukirsari, Yogyakarta."
  }
];

const products = [
  {
    step: "01",
    title: "Kain batik tulis",
    text: "Untuk koleksi pribadi, busana, atau kebutuhan acara dan seremonial."
  },
  {
    step: "02",
    title: "Busana batik",
    text: "Pilihan yang nyaman dipakai untuk harian, acara formal, dan wisata budaya."
  },
  {
    step: "03",
    title: "Pesanan khusus",
    text: "Bisa disesuaikan dengan kebutuhan motif, warna, dan jumlah pesanan."
  }
];

const workshopSteps = [
  {
    title: "Pilih motif",
    text: "Peserta diperkenalkan dengan motif dan cerita di balik batik."
  },
  {
    title: "Latihan mencanting",
    text: "Belajar teknik dasar membatik dengan pendampingan perajin."
  },
  {
    title: "Jadi karya sendiri",
    text: "Hasil membatik bisa jadi pengalaman berkesan atau cenderamata personal."
  }
];

const workshopAudience = [
  "Rombongan wisata",
  "Sekolah dan kampus",
  "Keluarga dan komunitas",
  "Trip edukasi budaya"
];

const locationCards = [
  {
    title: "Alamat singkat",
    text: "Kampung Batik Giriloyo, Desa Wisata Wukirsari, Yogyakarta."
  },
  {
    title: "Rekomendasi kunjungan",
    text: "Pagi hingga siang cocok untuk belajar batik dan melihat aktivitas kampung."
  },
  {
    title: "Arah cepat",
    text: "Buka Maps lalu cari “Kampung Batik Giriloyo Wukirsari Yogyakarta”."
  }
];

const waNumber = "6281234567890";
const mapsUrl = "https://maps.app.goo.gl/QbsTYqDSTecW2K4v6";

export default function Home() {
  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="brand" href="#beranda" aria-label="Kampung Batik Giriloyo">
          <span className="brand-mark" aria-hidden="true" />
          <span className="brand-text">
            <strong>Kampung Batik Giriloyo</strong>
            <small>Wukirsari · Yogyakarta</small>
          </span>
        </a>
        <nav className="nav">
          <a href="#tentang">Tentang</a>
          <a href="#produk">Produk</a>
          <a href="#belajar">Belajar Batik</a>
          <a href="#lokasi">Lokasi</a>
          <a href="#kontak">Kontak</a>
        </nav>
        <a className="btn btn-ghost btn-small" href="#kontak">
          Booking Kunjungan
        </a>
      </header>

      <main>
        <section className="hero section" id="beranda">
          <div className="hero-copy">
            <p className="eyebrow">Desa Wisata Wukirsari, Yogyakarta</p>
            <h1>Kampung Batik Giriloyo untuk batik tulis, belanja, dan belajar membatik.</h1>
            <p className="lead">
              Temukan pengalaman wisata budaya yang hangat dan autentik: memilih batik, melihat
              proses pembuatan, lalu mencoba membatik langsung bersama perajin.
            </p>
            <div className="hero-actions">
              <a
                className="btn btn-primary"
                href={`https://wa.me/${waNumber}?text=${encodeURIComponent(
                  "Halo Kampung Batik Giriloyo, saya ingin tanya produk batik dan belajar membatik."
                )}`}
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp Sekarang
              </a>
              <a
                className="btn btn-secondary"
                href={mapsUrl}
                target="_blank"
                rel="noreferrer"
              >
                Lihat Lokasi
              </a>
            </div>
            <div className="hero-pills" aria-label="Sorotan utama">
              <span>Batik tulis asli</span>
              <span>Kelas membatik</span>
              <span>Wisata budaya</span>
            </div>
          </div>

          <div className="hero-visual" aria-hidden="true">
            <div className="hero-card">
              <div className="pattern pattern-a" />
              <div className="pattern pattern-b" />
              <div className="visual-content">
                <span className="visual-badge">Handcrafted Experience</span>
                <h2>Batik yang hidup di tengah desa wisata.</h2>
                <p>
                  Ruang promosi yang menampilkan produk, cerita, dan aktivitas belajar dalam satu
                  alur yang mudah dipahami.
                </p>
              </div>
            </div>
            <div className="floating-card floating-card-top">
              <strong>Produk unggulan</strong>
              <span>Kain, busana, dan pesanan khusus</span>
            </div>
            <div className="floating-card floating-card-bottom">
              <strong>Paket belajar</strong>
              <span>Rombongan, sekolah, keluarga, komunitas</span>
            </div>
          </div>
        </section>

        <section className="section section-grid" id="tentang">
          <div className="section-heading">
            <p className="eyebrow">Kenapa Giriloyo</p>
            <h2>Destinasi batik yang terasa dekat, hangat, dan berisi pengalaman.</h2>
          </div>
          <div className="feature-grid">
            {highlights.map((item) => (
              <article className="feature-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section section-split" id="produk">
          <div className="section-heading">
            <p className="eyebrow">Produk Batik</p>
            <h2>Koleksi batik tulis untuk dipakai, dikoleksi, atau dijadikan hadiah.</h2>
            <p>
              Fokus kami ada pada kualitas, motif khas, dan pengalaman memilih batik langsung di
              kampung batik.
            </p>
          </div>
          <div className="product-grid">
            {products.map((item) => (
              <article className="info-card" key={item.title}>
                <span className="card-kicker">{item.step}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section workshop" id="belajar">
          <div className="section-heading">
            <p className="eyebrow">Jasa Belajar Batik</p>
            <h2>Rasakan proses membatik dari awal sampai jadi.</h2>
          </div>
          <div className="workshop-layout">
            <div className="workshop-steps">
              {workshopSteps.map((item, index) => (
                <article className="step-card" key={item.title}>
                  <span>Langkah {index + 1}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
            <aside className="workshop-panel">
              <h3>Cocok untuk</h3>
              <ul>
                {workshopAudience.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <a className="btn btn-primary btn-block" href="#kontak">
                Booking Kunjungan
              </a>
            </aside>
          </div>
        </section>

        <section className="section location-section" id="lokasi">
          <div className="section-heading">
            <p className="eyebrow">Lokasi & Akses</p>
            <h2>Datang ke Desa Wisata Wukirsari, Yogyakarta.</h2>
            <p>
              Lokasi ini cocok untuk itinerary wisata budaya, belajar, dan belanja batik dalam satu
              kunjungan.
            </p>
          </div>
          <div className="location-content">
            <div className="location-grid">
              {locationCards.map((item) => (
                <article className="location-card" key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
            <div className="location-actions">
              <a
                className="btn btn-secondary"
                href={mapsUrl}
                target="_blank"
                rel="noreferrer"
              >
                Buka Google Maps
              </a>
              <a
                className="btn btn-ghost"
                href={`https://wa.me/${waNumber}?text=${encodeURIComponent(
                  "Halo saya mau tanya akses dan jadwal kunjungan ke Kampung Batik Giriloyo."
                )}`}
                target="_blank"
                rel="noreferrer"
              >
                Tanya Jadwal
              </a>
            </div>
          </div>
        </section>

        <section className="section gallery-section">
          <div className="section-heading">
            <p className="eyebrow">Galeri Singkat</p>
            <h2>Visual yang bisa dipakai untuk nunjukin suasana kampung batik.</h2>
          </div>
          <div className="gallery-grid">
            <article className="gallery-card gallery-card-1">
              <span>Suasana workshop</span>
            </article>
            <article className="gallery-card gallery-card-2">
              <span>Proses membatik</span>
            </article>
            <article className="gallery-card gallery-card-3">
              <span>Hasil batik tulis</span>
            </article>
          </div>
        </section>

        <section className="section contact-section" id="kontak">
          <div className="section-heading">
            <p className="eyebrow">Kontak & Booking</p>
            <h2>Kirim inquiry langsung untuk produk atau jadwal belajar batik.</h2>
            <p>
              Form ini akan membuka WhatsApp dengan pesan yang sudah terisi, jadi pengunjung tinggal
              kirim.
            </p>
          </div>
          <BookingForm />
        </section>
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Kampung Batik Giriloyo · Wukirsari, Yogyakarta</p>
        <a href="#beranda">Kembali ke atas</a>
      </footer>

      <div className="mobile-cta" aria-label="Aksi cepat">
        <a
          className="mobile-cta-primary"
          href={`https://wa.me/${waNumber}?text=${encodeURIComponent(
            "Halo Kampung Batik Giriloyo, saya ingin booking kunjungan."
          )}`}
          target="_blank"
          rel="noreferrer"
        >
          WhatsApp
        </a>
        <a
          className="mobile-cta-secondary"
          href={mapsUrl}
          target="_blank"
          rel="noreferrer"
        >
          Maps
        </a>
      </div>
    </div>
  );
}
import BookingForm from "./components/BookingForm";
