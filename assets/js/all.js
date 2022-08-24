"use strict";

// ----------------------  header ---------------------- 
// $(document).ready(function(){
//   $(window).on('wheel', function(event){
//     if(event.originalEvent.deltaY > 0){
//       $("header").removeClass("bg-transparent").addClass("bg-secondary");
//     }
//   });
// });
// ---------------------- swiper ---------------------- 
// swiper-place
var index__swiper__place = new Swiper('.index__swiper__place', {
  // Optional parameters
  // direction: 'horizontal',
  // loop: true,
  // freeMode: true,
  // centeredSlides: true,
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  breakpoints: {
    414: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 40
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 40
    }
  }
}); // swiper PT

var index__swiper__pt = new Swiper(".index__swiper__pt", {
  slidesPerView: 1,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true // dynamicBullets: true,

  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  breakpoints: {
    576: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 40
    }
  }
});
//# sourceMappingURL=all.js.map
