import "./globals.css";
import { Fraunces, Manrope } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope"
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces"
});

export const metadata = {
  title: "Kampung Batik Giriloyo | Batik Tulis & Belajar Membatik di Wukirsari, Yogyakarta",
  description:
    "Kampung Batik Giriloyo menghadirkan batik tulis, pengalaman belajar membatik, dan wisata budaya di Desa Wisata Wukirsari, Yogyakarta.",
  metadataBase: new URL("https://kampungbatikgiriloyo.example"),
  openGraph: {
    title: "Kampung Batik Giriloyo",
    description:
      "Batik tulis, pengalaman belajar membatik, dan wisata budaya di Wukirsari, Yogyakarta.",
    type: "website"
  }
};

export const viewport = {
  themeColor: "#7a3f1d"
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={`${manrope.variable} ${fraunces.variable}`}>
      <body>{children}</body>
    </html>
  );
}
