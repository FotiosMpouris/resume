// script.js

// Toggle the mobile menu open/close
document.addEventListener("DOMContentLoaded", function() {
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("open");
  });

  // Optional: close dropdown if you want a tap on a parent link
  const dropdownToggle = document.querySelector(".dropdown-toggle");
  const dropdownMenu   = document.querySelector(".dropdown-menu");

  if (dropdownToggle) {
    dropdownToggle.addEventListener("click", (e) => {
      // Prevent default link if you'd like
      e.preventDefault();
      dropdownMenu.classList.toggle("open");
    });
  }
});
