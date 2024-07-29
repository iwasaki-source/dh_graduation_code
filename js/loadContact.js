const loadContactTit = document.querySelectorAll('.js-contact-tit span');
const loadContactHeader = document.querySelector('.header');
const loadContactLogo = document.querySelector('.logo');

const t1 = gsap.timeline();

gsap.set(loadContactTit, {
  opacity: 0,
  x: "350%",
  y: "20%",
  skewX: '-20deg',
})

gsap.set(loadContactHeader, {
  opacity: 0,
  y: 50,
})

gsap.set(loadContactLogo, {
  opacity: 0,
  x: 100,
})

loadContactTit.forEach((tit, index) => {
  t1.to(tit, {
    duration: 1.5,
    opacity: 1,
    x: 0,
    y: 0,
    skeW: '0deg',
  }, 0.1)
  .to(loadContactHeader, {
    y: 0,
    duration: 1.5,
    opacity: 1,
    ease: "power1.easeIn"
  }, "-=1.0")
  .to(loadContactLogo, {
    x: 0,
    duration: 1.5,
    opacity: 1,
    ease: "power1.easeIn",
  }, "-=1.0")
})