const year = document.getElementById("year");
const bookingForm = document.getElementById("booking-form");

if (year) {
  year.textContent = new Date().getFullYear();
}

if (bookingForm) {
  bookingForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(bookingForm);
    const name = String(formData.get("name") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const visitDate = String(formData.get("visitDate") || "").trim();
    const interest = String(formData.get("interest") || "").trim();
    const notes = String(formData.get("notes") || "").trim();

    const messageLines = [
      "Halo Kampung Batik Giriloyo, saya ingin inquiry:",
      `Nama: ${name}`,
      `WhatsApp: ${phone}`,
      visitDate ? `Tanggal kunjungan: ${visitDate}` : null,
      `Kebutuhan: ${interest}`,
      notes ? `Catatan: ${notes}` : null,
    ].filter(Boolean);

    const targetUrl = `https://wa.me/6281234567890?text=${encodeURIComponent(messageLines.join("\n"))}`;
    window.open(targetUrl, "_blank", "noopener,noreferrer");
  });
}
