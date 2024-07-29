//TOPヒーローのSwiper
// const swiper = new Swiper(".swiper", {
//   loop: true,
//   effect: "fade",
  
//   autoplay: {
//     delay: 4000,
//     disableOnInteraction: false, //ユーザーが操作しても自動再生を継続
//   },
//   speed: 2000,
// });

const mySwiper = new Swiper('.swiper', {
  loop: true,
  loopAdditionalSlides: 10,
  speed: 2500,
  parallax: true,
  autoplay: {
    delay: 7000,
    disableOnInteraction: false,
    waitForTransition: false,
  },
  followFinger: false,
  observeParents: true,
});

//サービス紹介ページ事例のSwiper
const swiperPhoto = new Swiper(".service_photo-video-swiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop: true,
  grabCursor: true,
  slidesPerView: 3, //スライダーコンテナにスライドを3枚同時表示
  spaceBetween: 16, //スライド間の距離を16pxに
  speed: 600,
});