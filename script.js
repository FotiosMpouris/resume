// script.js

document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const overlayBg = document.getElementById("overlay-bg");
  const overlayPopup = document.getElementById("overlay-popup");
  
  // The sticky navbar that becomes translucent
  const navbar = document.querySelector(".navbar");

  // 1) SCROLL EVENT: 
  window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  // 2) HAMBURGER CLICK (Mobile)
  hamburger.addEventListener("click", () => {
    // Toggle the hamburger 'X' state
    hamburger.classList.toggle("active");

    // Toggle the overlay background and popup
    overlayBg.classList.toggle("open");
    overlayPopup.classList.toggle("open");
  });

  // 3) CLICKING ON THE BACKGROUND
  overlayBg.addEventListener("click", () => {
    hamburger.classList.remove("active");
    overlayBg.classList.remove("open");
    overlayPopup.classList.remove("open");
  });

  // 4) CLICKING A MENU LINK
  const menuLinks = document.querySelectorAll(".overlay-menu a");
  menuLinks.forEach(link => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active");
      overlayBg.classList.remove("open");
      overlayPopup.classList.remove("open");
    });
  });
});
