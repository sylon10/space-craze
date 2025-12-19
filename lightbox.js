// LIGHTBOX JS //

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const lightboxClose = document.getElementById("lightboxClose");
const lightboxCaption = document.getElementById("lightboxCaption");

function openLightbox(src, alt) {
  lightboxImg.src = src;
  lightboxImg.alt = alt || "";
  if (lightboxCaption) lightboxCaption.textContent = alt || "";
  lightbox.classList.add("is-open");
  lightbox.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden"; // prevent page scroll behind overlay
}

function closeLightbox() {
  document.activeElement.blur();

  lightbox.classList.remove("is-open");
  lightbox.setAttribute("aria-hidden", "true");
  lightboxImg.src = "";
  if (lightboxCaption) lightboxCaption.textContent = "";
  document.body.style.overflow = "";
}

// Click any gallery image
document.querySelectorAll(".gallery-item img").forEach((img) => {
  img.style.cursor = "pointer";
  img.addEventListener("click", () => openLightbox(img.src, img.alt));
});

// Close: X button
lightboxClose.addEventListener("click", closeLightbox);

// Close: click outside the image
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) closeLightbox();
});

// Close: Escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && lightbox.classList.contains("is-open")) closeLightbox();
});
