// script.js

document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const overlayBg = document.getElementById("overlay-bg");
  const overlayPopup = document.getElementById("overlay-popup");

  hamburger.addEventListener("click", () => {
    // Toggle the hamburger 'X' state
    hamburger.classList.toggle("active");

    // Toggle the overlay background and popup
    overlayBg.classList.toggle("open");
    overlayPopup.classList.toggle("open");
  });

  // Close if user clicks on the background
  overlayBg.addEventListener("click", () => {
    hamburger.classList.remove("active");
    overlayBg.classList.remove("open");
    overlayPopup.classList.remove("open");
  });

  // Close if user clicks on a menu link
  const menuLinks = document.querySelectorAll(".overlay-menu a");
  menuLinks.forEach(link => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active");
      overlayBg.classList.remove("open");
      overlayPopup.classList.remove("open");
    });
  });
});


