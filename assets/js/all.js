"use strict";

// header
// $(document).ready(function(){
//   $(window).on('wheel', function(event){
//     if(event.originalEvent.deltaY > 0){
//       $("header").removeClass("bg-transparent").addClass("bg-secondary");
//     }
//   });
// });
// swiper
var index__swiper = new Swiper('.index__swiper', {
  // Optional parameters
  // direction: 'horizontal',
  // loop: true,
  freeMode: true,
  slidesPerView: 1,
  spaceBetween: 10,
  // centeredSlides: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  breakpoints: {
    375: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    576: {
      slidesPerView: 3,
      spaceBetween: 20
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 40
    },
    1200: {
      slidesPerView: 5,
      spaceBetween: 40
    }
  }
});
//# sourceMappingURL=all.js.map
