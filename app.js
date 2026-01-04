// Clean starter JS: small interactions + safe form demo

const menuBtn = document.getElementById("menuBtn");
const mobileNav = document.getElementById("mobileNav");

menuBtn?.addEventListener("click", () => {
  const isOpen = menuBtn.getAttribute("aria-expanded") === "true";
  menuBtn.setAttribute("aria-expanded", String(!isOpen));
  mobileNav.hidden = isOpen;
});

document.getElementById("year").textContent = String(new Date().getFullYear());

// Demo: hello button
const nameInput = document.getElementById("nameInput");
const helloBtn = document.getElementById("helloBtn");
const output = document.getElementById("output");

helloBtn?.addEventListener("click", () => {
  const name = (nameInput.value || "").trim();
  output.textContent = name ? `Hello, ${name}. Your site is running.` : "Type your name first.";
});

// Contact form demo (front-end only)
const contactForm = document.getElementById("contactForm");
const statusEl = document.getElementById("formStatus");

contactForm?.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!email || !subject || !message) {
    statusEl.textContent = "Please fill out all fields.";
    return;
  }

  // This is only a demo. For real sending, you’d connect a backend or a form provider.
  statusEl.textContent = "Message prepared (demo). Add a backend to actually send it.";
  contactForm.reset();
});
