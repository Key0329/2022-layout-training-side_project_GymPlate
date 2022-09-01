// ---------------------- preloader ---------------------- 
$(window).on('load',function(){
  $('.loading').toggleClass('loader-hide');
})

$(document).ready(function () {


  // ---------------------- swiper ---------------------- 

  // swiper-place
  const index__swiper__place = new Swiper('.index__swiper__place', {
    slidesPerView: 1,
    spaceBetween: 10,

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      414: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      576: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
    },
  });

  // swiper PT

  const index__swiper__pt = new Swiper(".index__swiper__pt", {
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      // dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      576: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
    },
  });

  // swiper detail
  const gymDetail__swiper = new Swiper(".gymDetail__swiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + "</span>";
      },
    },
  });

  // ---------------------- AOS ---------------------- 
  // AOS
  AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 600, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

  });

  // ---------------------- scroll spy ---------------------- 
  // scrollspy
  let scrollSpy = new bootstrap.ScrollSpy(document.body, {
    target: '#navbar-feature'
  })

  // 調整scrollspy的監聽位置 from stackoverflow
  let offset = 80;
  $('.navbar li a').click(function (event) {
    event.preventDefault();
    $($(this).attr('href'))[0].scrollIntoView();
    scrollBy(0, -offset);
    window.location.hash = $(this).attr('href')
  });

  // ---------------------- feature img transition ---------------------- 

  // gym img button
  $(".btn-gym-1").click(function (e) {
    event.preventDefault();
    $(".gym-1").removeClass("d-none");
    $(".gym-2, .gym-3").addClass("d-none");
  });
  $(".btn-gym-2").click(function (e) {
    event.preventDefault();
    $(".gym-2").removeClass("d-none");
    $(".gym-1, .gym-3").addClass("d-none");
  });
  $(".btn-gym-3").click(function (e) {
    event.preventDefault();
    $(".gym-3").removeClass("d-none");
    $(".gym-1, .gym-2").addClass("d-none");
  });

  // trainer img button
  $(".btn-trainer-1").click(function (e) {
    event.preventDefault();
    $(".trainer-1").removeClass("d-none");
    $(".trainer-2, .trainer-3").addClass("d-none");
  });
  $(".btn-trainer-2").click(function (e) {
    event.preventDefault();
    $(".trainer-2").removeClass("d-none");
    $(".trainer-1, .trainer-3").addClass("d-none");
  });
  $(".btn-trainer-3").click(function (e) {
    event.preventDefault();
    $(".trainer-3").removeClass("d-none");
    $(".trainer-1, .trainer-2").addClass("d-none");
  });

  // exp img button
  $(".btn-exp-1").click(function (e) {
    event.preventDefault();
    $(".exp-1").removeClass("d-none");
    $(".exp-2, .exp-3").addClass("d-none");
  });
  $(".btn-exp-2").click(function (e) {
    event.preventDefault();
    $(".exp-2").removeClass("d-none");
    $(".exp-1, .exp-3").addClass("d-none");
  });
  $(".btn-exp-3").click(function (e) {
    event.preventDefault();
    $(".exp-3").removeClass("d-none");
    $(".exp-1, .exp-2").addClass("d-none");
  });

  // ---------------------- 切換layout會員狀態 ---------------------- 
    $(".member__login__button").click(function (e) {
      event.preventDefault();
      $("#index__login__status").removeClass("d-none");
      $("#index__login__button").addClass("d-none");
    });

  // ---------------------- masonry ---------------------- 
  $('.grid').masonry({
    // options...
    itemSelector: '.grid-item',
    columnWidth: 20,
  });

  // 確保圖片都載入後，以免造成剛進入頁面時圖片會被覆蓋
  $('.row').imagesLoaded().progress(function () {
    $('.row').masonry(); // 渲染整體畫面
  });

});























  // // ---------------------- scroll top 找不到無效的原因，暫時放棄未來再找 ---------------------- 
  // $(".toTop").click(function(e){
  //   e.preventDefault();
  //   $("html, body").animate(
  //     {
  //       scrollTop: 0,
  //     },
  //     600
  //   );
  // })