//TOPヒーローのSwiper
const swiper = new Swiper(".swiper", {
  loop: true,
  effect: "fade",
  
  autoplay: {
    delay: 4000,
    disableOnInteraction: false, //ユーザーが操作しても自動再生を継続
  },
  speed: 2000,
});
