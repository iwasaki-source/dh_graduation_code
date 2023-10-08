//ハンバーガーメニュー
const cameraIcon = document.querySelector('.camera-icon');
const headerBox = document.querySelector('.header-box');

cameraIcon.addEventListener('mouseenter', () => {
  headerBox.animate(
    {translate: ['0 -100vh', 0], opacity: [0, 1]}, 
    {duration: 1000, fill: 'forwards'});
}, false);
headerBox.addEventListener('mouseleave', () => {
  headerBox.animate(
    {translate: [0, '0 -100vh'], opacity: [1, 0]},
  {duration: 1000, fill: 'forwards'});
}, false);