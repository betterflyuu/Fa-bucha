const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

const modal = $("#orderModal");
const menuToggle = $("#menuToggle");
const navLinks = $("#navLinks");
const whatsappLink = $("#whatsappLink");
const toast = $("#toast");

// Update this message if you want a different default WhatsApp greeting.
const whatsappNumber = "6285701831367";
const whatsappMessage = "Halo Fa.Bucha! Aku tertarik dengan kombucha kalian. Boleh minta info varian, harga, dan cara pemesanannya?";
whatsappLink.href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

function openOrderModal() {
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  $("#modalClose").focus();
}
function closeOrderModal() {
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}
$$(".order-trigger").forEach((button) => button.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
  openOrderModal();
}));
$("#modalClose").addEventListener("click", closeOrderModal);
$$("[data-close-modal]").forEach((el) => el.addEventListener("click", closeOrderModal));
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeOrderModal();
});

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});
$$(".nav-links a").forEach((link) => link.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
}));

$("#year").textContent = new Date().getFullYear();

const revealObserver = "IntersectionObserver" in window
  ? new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 })
  : null;
$$(".reveal").forEach((element) => {
  if (revealObserver) revealObserver.observe(element);
  else element.classList.add("visible");
});

// Make the product cards useful even before final product photography is uploaded.
$$(".product-card .order-trigger").forEach((button) => {
  button.addEventListener("click", () => {
    const productName = button.closest(".product-card")?.querySelector("h3")?.textContent || "Fa.Bucha";
    whatsappLink.href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Halo Fa.Bucha! Aku tertarik dengan varian ${productName}. Boleh minta info harga dan ketersediaannya?`)}`;
  });
});

// Reset generic greeting when opening from non-product order buttons.
$$(".order-trigger").forEach((button) => {
  if (!button.closest(".product-card")) {
    button.addEventListener("click", () => {
      whatsappLink.href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    });
  }
});


// Mini learning library: short, separate lessons that open on demand.
const lessonContent = {
  kombucha: {
    icon: "🫙",
    kicker: "LESSON 01 · DASAR",
    title: "Apa itu kombucha?",
    body: `
      <p>Kombucha adalah minuman berbahan dasar teh manis yang difermentasi menggunakan kultur bakteri dan ragi. Selama prosesnya, mikroorganisme mengubah sebagian gula dan menghasilkan asam serta senyawa lain yang membentuk rasa khas.</p>
      <h3>Yang perlu diketahui</h3>
      <ul><li>Rasa dapat berkisar dari manis hingga asam, tergantung resep dan proses.</li><li>Setiap batch dapat memiliki karakter yang sedikit berbeda.</li><li>Kombucha tetap perlu dibuat, ditangani, dan disimpan dengan cara yang higienis.</li></ul>
      <p>Rasa, keasaman, dan kandungan akhir tidak bisa dipastikan hanya dari warna atau lamanya fermentasi.</p>`
  },
  scoby: {
    icon: "🍄",
    kicker: "LESSON 02 · KULTUR",
    title: "Kenalan dengan SCOBY",
    body: `
      <p>SCOBY adalah singkatan dari <i>Symbiotic Culture of Bacteria and Yeast</i>, yaitu komunitas bakteri dan ragi yang bekerja bersama dalam fermentasi kombucha.</p>
      <h3>Kenapa bentuknya seperti lapisan?</h3>
      <p>Lapisan kenyal yang sering terlihat di permukaan umumnya merupakan pelikel selulosa yang dibentuk oleh bakteri. Mikroorganisme juga berada di dalam cairan starter, jadi lapisan saja bukan keseluruhan kultur.</p>
      <h3>Perhatikan kebersihan</h3>
      <p>Gunakan wadah dan peralatan bersih. Jika terlihat pertumbuhan berbulu seperti kapang atau ada bau yang tidak biasa, jangan mencicipi untuk menguji keamanan; hentikan penggunaan batch dan evaluasi prosesnya.</p>`
  },
  fermentasi: {
    icon: "⏱️",
    kicker: "LESSON 03 · PROSES",
    title: "Bagaimana fermentasi bekerja?",
    body: `
      <p>Dalam fermentasi kombucha, kultur memanfaatkan sebagian gula di dalam teh. Waktu, suhu, komposisi bahan, dan kondisi kultur memengaruhi rasa serta tingkat keasaman.</p>
      <h3>Apakah selalu 7–14 hari?</h3>
      <p>Rentang itu sering dipakai sebagai panduan awal, bukan jaminan bahwa setiap batch selesai atau aman. Produsen perlu memantau proses secara konsisten, termasuk mengukur dan mencatat pH serta kondisi fermentasi.</p>
      <ul><li>Gunakan resep dan prosedur yang konsisten.</li><li>Catat tanggal, suhu, dan hasil pengukuran.</li><li>Jangan mengandalkan tampilan atau rasa saja untuk memastikan keamanan.</li></ul>`
  },
  care: {
    icon: "🌿",
    kicker: "LESSON 04 · PERAWATAN",
    title: "Merawat dan menyimpan kombucha",
    body: `
      <p>Kualitas kombucha bergantung pada kebersihan proses, kontrol fermentasi, kemasan, dan penyimpanan. Jika produk dijual dalam botol tertutup, gas dapat terus terbentuk bila fermentasi berlanjut, sehingga tekanan dan suhu penyimpanan harus diperhitungkan.</p>
      <h3>Kebiasaan baik</h3>
      <ul><li>Gunakan peralatan dan wadah yang bersih.</li><li>Ikuti petunjuk penyimpanan yang sudah divalidasi untuk produk.</li><li>Jangan konsumsi produk dengan tanda kontaminasi, kemasan rusak, atau kondisi yang meragukan.</li></ul>
      <p>Untuk produk komersial, ikuti persyaratan keamanan pangan dan pelabelan yang berlaku.</p>`
  }
};
const lessonModal = $("#lessonModal");
const lessonIcon = $("#lessonIcon");
const lessonKicker = $("#lessonKicker");
const lessonTitle = $("#lessonTitle");
const lessonBody = $("#lessonBody");

function openLesson(key) {
  const lesson = lessonContent[key];
  if (!lesson) return;
  lessonIcon.textContent = lesson.icon;
  lessonKicker.textContent = lesson.kicker;
  lessonTitle.textContent = lesson.title;
  lessonBody.innerHTML = lesson.body;
  lessonModal.classList.add("is-open");
  lessonModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  $("#lessonClose").focus();
}
function closeLesson() {
  lessonModal.classList.remove("is-open");
  lessonModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}
$$("[data-lesson]").forEach((button) => {
  button.addEventListener("click", () => openLesson(button.dataset.lesson));
});
$("#lessonClose")?.addEventListener("click", closeLesson);
$("#lessonDone")?.addEventListener("click", closeLesson);
$$("[data-close-lesson]").forEach((element) => element.addEventListener("click", closeLesson));
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeLesson();
});
