const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: false,
  spaceBetween: 10,
  slidesPerView: 3,
  scrollbar: false,
  

  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
      loop: false,
    },

    // when window width is >= 480px
    480: {
      slidesPerView: 1,
      spaceBetween: 10,
      loop: false,
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 5,
      spaceBetween: 40,
    },
  },

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
