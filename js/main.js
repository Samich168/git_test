$(document).ready(function () {
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

  var ModalButton = $("[data-toggle=modal_window]");
  var ModalClose = $("[data-toggle=modal__closer]")
  ModalButton.on("click", openModal);
  ModalClose.on("click", closeModal);
  function openModal(){
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.addClass("modal__overlay--visible");
    modalDialog.addClass("modal__dialog--visible");
  }
  function closeModal(event){
    event.preventDefault()
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.removeClass("modal__overlay--visible");
    modalDialog.removeClass("modal__dialog--visible");
  }
});