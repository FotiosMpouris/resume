// script.js

document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const overlayBg = document.getElementById("overlay-bg");
  const overlayPopup = document.getElementById("overlay-popup");

  // We'll grab the .navbar via class name or ID.
  // Easiest is to give your nav an id="navbar" in the HTML.
  const navbar = document.getElementById("navbar");

  // 1) Scroll Event: Toggle .scrolled on the navbar for desktop effect
  window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  // 2) Hamburger Click
  hamburger.addEventListener("click", () => {
    // Toggle the hamburger 'X'
    hamburger.classList.toggle("active");

    // Toggle the overlay
    overlayBg.classList.toggle("open");
    overlayPopup.classList.toggle("open");
  });

  // 3) Close overlay if user clicks background
  overlayBg.addEventListener("click", () => {
    hamburger.classList.remove("active");
    overlayBg.classList.remove("open");
    overlayPopup.classList.remove("open");
  });

  // 4) Close overlay when clicking a menu link
  const menuLinks = document.querySelectorAll(".overlay-menu a");
  menuLinks.forEach(link => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active");
      overlayBg.classList.remove("open");
      overlayPopup.classList.remove("open");
    });
  });
});
