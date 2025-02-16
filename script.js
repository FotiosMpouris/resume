// script.js

document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const overlay = document.getElementById("overlay");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    overlay.classList.toggle("open");
  });

  // Close overlay when clicking on a menu link (optional)
  const menuLinks = document.querySelectorAll(".overlay-menu a");
  menuLinks.forEach(link => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active");
      overlay.classList.remove("open");
    });
  });
});
