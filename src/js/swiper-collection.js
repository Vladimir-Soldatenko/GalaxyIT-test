const swiper = new Swiper(".men__collections__slider", {
  direction: "vertical",

  pagination: {
    clickable: true,
    // dynamicBullets: true,
    renderBullet: function (index, className) {
      return `<span class="${className}">0${index + 1}</span>`;
    },
    el: ".swiper-pagination",
  },
});
