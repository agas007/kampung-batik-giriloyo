"use client";

import { useState } from "react";

const waNumber = "6281234567890";

export default function BookingForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    visitDate: "",
    interest: "Produk batik",
    notes: ""
  });

  function handleSubmit(event) {
    event.preventDefault();

    const messageLines = [
      "Halo Kampung Batik Giriloyo, saya ingin inquiry:",
      `Nama: ${form.name.trim()}`,
      `WhatsApp: ${form.phone.trim()}`,
      form.visitDate ? `Tanggal kunjungan: ${form.visitDate}` : null,
      `Kebutuhan: ${form.interest}`,
      form.notes.trim() ? `Catatan: ${form.notes.trim()}` : null
    ].filter(Boolean);

    const targetUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(messageLines.join("\n"))}`;
    window.open(targetUrl, "_blank", "noopener,noreferrer");
  }

  function updateField(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label>
        Nama
        <input type="text" name="name" placeholder="Nama Anda" value={form.name} onChange={updateField} required />
      </label>
      <label>
        Nomor WhatsApp
        <input type="tel" name="phone" placeholder="08xxxxxxxxxx" value={form.phone} onChange={updateField} required />
      </label>
      <label>
        Tanggal kunjungan
        <input type="date" name="visitDate" value={form.visitDate} onChange={updateField} />
      </label>
      <label>
        Kebutuhan
        <select name="interest" value={form.interest} onChange={updateField} required>
          <option value="Produk batik">Produk batik</option>
          <option value="Belajar batik">Belajar batik</option>
          <option value="Produk batik dan belajar batik">Produk batik dan belajar batik</option>
        </select>
      </label>
      <label className="full">
        Catatan
        <textarea
          name="notes"
          rows="4"
          placeholder="Contoh: jumlah peserta, kebutuhan khusus, atau jam kunjungan yang diinginkan."
          value={form.notes}
          onChange={updateField}
        />
      </label>
      <button className="btn btn-primary btn-block" type="submit">
        Kirim ke WhatsApp
      </button>
    </form>
  );
}
