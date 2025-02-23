// script.js

document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.getElementById("navbar");
  const hamburger = document.getElementById("hamburger");
  const overlayBg = document.getElementById("overlay-bg");
  const overlayPopup = document.getElementById("overlay-popup");

  // 1) SCROLL: Toggle .scrolled on navbar + hamburger
  window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
      navbar.classList.add("scrolled");
      hamburger.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
      hamburger.classList.remove("scrolled");
    }
  });

  // 2) HAMBURGER click => open/close overlay
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    overlayBg.classList.toggle("open");
    overlayPopup.classList.toggle("open");
  });

  // 3) Clicking dark background => close menu
  overlayBg.addEventListener("click", () => {
    hamburger.classList.remove("active");
    overlayBg.classList.remove("open");
    overlayPopup.classList.remove("open");
  });

  // 4) Clicking a menu link => close menu
  const menuLinks = document.querySelectorAll(".overlay-menu a");
  menuLinks.forEach(link => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active");
      overlayBg.classList.remove("open");
      overlayPopup.classList.remove("open");
    });
  });

  // 5) VIDEO: Allow only one unmuted video at a time
  const videos = document.querySelectorAll(".media-video");
  videos.forEach(video => {
    video.addEventListener("click", () => {
      // Mute all videos first
      videos.forEach(otherVideo => {
        otherVideo.muted = true;
      });
      // Then unmute and play the clicked video
      video.muted = false;
      video.play();
    });
  });
});
