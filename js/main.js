const hotelSwiper = new Swiper('.hotel-swiper', {
    // Optional parameters
    loop: true,
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button--next',
      prevEl: '.swiper-button--prev',
    },
  
});

const reviewSwiper = new Swiper('.review-swiper', {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.review-button--next',
    prevEl: '.review-button--prev',
  },

});
