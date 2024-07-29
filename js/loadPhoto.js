const loadPhotoTit = document.querySelectorAll('.js-photo-tit span');
const loadPhotoHeader = document.querySelector('.header');
const loadPhotoLogo = document.querySelector('.logo');

const t1 = gsap.timeline();

gsap.set(loadPhotoTit, {
  opacity: 0,
  x: "350%",
  y: "20%",
  skewX: '-20deg',
})

gsap.set(loadPhotoHeader, {
  opacity: 0,
  y: 50,
})

gsap.set(loadPhotoLogo, {
  opacity: 0,
  x: 100,
})

loadPhotoTit.forEach((tit, index) => {
  t1.to(tit, {
    duration: 1.5,
    opacity: 1,
    x: 0,
    y: 0,
    skeW: '0deg',
  }, 0.1)
  .to(loadPhotoHeader, {
    y: 0,
    duration: 1.5,
    opacity: 1,
    ease: "power1.easeIn"
  }, "-=1.0")
  .to(loadPhotoLogo, {
    x: 0,
    duration: 1.5,
    opacity: 1,
    ease: "power1.easeIn",
  }, "-=1.0")
})