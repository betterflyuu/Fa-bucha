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
