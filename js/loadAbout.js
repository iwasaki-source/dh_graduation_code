const loadAboutHero = document.querySelectorAll('.js-about-hero');
const loadAboutTit = document.querySelectorAll('.js-about-tit span');
const loadAboutTex = document.querySelectorAll('.js-about-tex');
const loadAboutHeader = document.querySelector('.header');
const loadAboutLogo = document.querySelector('.logo');

const t1 = gsap.timeline();
const t2 = gsap.timeline({delay: 2.0});

gsap.set(loadAboutHero, {
  "-webkit-mask-image": "linear-gradient(135deg, rgba(0, 0, 0, 1) 30%, rgba(0, 0, 0, 0.4) 45%, rgba(0, 0, 0, 0) 55%, rgba(0, 0, 0, 0) 100%)",
  "-webkit-mask-size": "250% 250%",
  "-webkit-mask-repeat": "no-repeat",
  "-webkit-mask-position": "130% 130%",
})

gsap.set(loadAboutTit, {
  opacity: 0,
  x: "350%",
  y: "20%",
  skewX: '-20deg',
})

gsap.set(loadAboutTex, {
  opacity: 0,
  y: 50,
})

gsap.set(loadAboutHeader, {
  opacity: 0,
  y: 50,
})

gsap.set(loadAboutLogo, {
  opacity: 0,
  x: 100,
})


loadAboutTit.forEach((tit, index) => {
  t1.to(loadAboutHero, {
    "-webkit-mask-position": "0% 0%",
    duration: 2.0,
    ease: "power1.inOut",
  })
  .to(tit, {
    duration: 1.5,
    opacity: 1,
    x: 0,
    y: 0,
    skeW: '0deg',
  }, 2.0)  
}
)

loadAboutTex.forEach((tex, index) => {
  t2.to(tex, {
    duration: 1.5,
    opacity: 1,
    y: 0,
    ease: "power1.inOut",
  }, index * 0.5)
  .to(loadAboutHeader, {
    y: 0,
    duration: 1.5,
    opacity: 1,
    ease: "power1.easeIn"
  }, "-=.5")
  .to(loadAboutLogo, {
    x: 0,
    duration: 1.5,
    opacity: 1,
    ease: "power1.easeIn",
  }, "-=1.0")
})