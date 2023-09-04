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


//ハンバーガーメニュー
const cameraIcon = document.querySelector('.camera-icon');
const headerBox = document.querySelector('.header-box');

cameraIcon.addEventListener('mouseover', () => {
  headerBox.animate(
    {translate: ['0 -100vh', 0], opacity: [0, 1]}, 
    {duration: 1000, fill: 'forwards'});
}, false);
headerBox.addEventListener('mouseleave', () => {
  headerBox.animate(
    {translate: [0, '0 -100vh'], opacity: [1, 0]},
  {duration: 1000, fill: 'forwards'});
}, false);

//TOPのサービス紹介のマウスホバー


//TOPの撮影事例のスクロール
const elem = document.getElementById('index_example');
const elemheight = elem.scrollHeight - 300;

let elemtop = elem.getBoundingClientRect().top + window.pageYOffset;

const getScrollPercent = () => {
  const scrolled = window.scrollY;
  const percentage = ((scrolled - elemtop) / ((elemtop + elemheight) - elemtop)) * 100;
  document.querySelector('.bar').style.height = `${percentage}%`;
}

window.addEventListener('scroll', getScrollPercent);