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

//TOPの撮影事例のスクロール

const getScrollPercent = () => {
  const scrolled = window.scrollY;
  console.log(scrolled);
  const percentage = ((scrolled - 3401) / (6139-3401)) * 100;
  document.querySelector('.bar').style.height = `${percentage}%`;
}

window.addEventListener('scroll', getScrollPercent);