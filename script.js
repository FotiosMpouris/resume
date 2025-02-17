// script.js

document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const overlayBg = document.getElementById("overlay-bg");
  const overlayPopup = document.getElementById("overlay-popup");

  // When hamburger is clicked
  hamburger.addEventListener("click", () => {
    // Toggle hamburger "X" state
    hamburger.classList.toggle("active");

    // Toggle the overlay and popup
    overlayBg.classList.toggle("open");
    overlayPopup.classList.toggle("open");
  });

  // Close the overlay popup if user clicks on overlay-bg outside popup
  overlayBg.addEventListener("click", () => {
    hamburger.classList.remove("active");
    overlayBg.classList.remove("open");
    overlayPopup.classList.remove("open");
  });

  // Close the popup when clicking a menu link
  const menuLinks = document.querySelectorAll(".overlay-menu a");
  menuLinks.forEach(link => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active");
      overlayBg.classList.remove("open");
      overlayPopup.classList.remove("open");
    });
  });
});
