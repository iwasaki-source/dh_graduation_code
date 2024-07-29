const loadServiceHero = document.querySelector('.js-service-hero');
const loadServiceHeader = document.querySelector('.header');
const loadServiceLogo = document.querySelector('.logo');

const t1 = gsap.timeline();

gsap.set(loadServiceHero, {
  "-webkit-mask-image": "linear-gradient(135deg, rgba(0, 0, 0, 1) 30%, rgba(0, 0, 0, 0.4) 45%, rgba(0, 0, 0, 0) 55%, rgba(0, 0, 0, 0) 100%)",
  "-webkit-mask-size": "250% 250%",
  "-webkit-mask-repeat": "no-repeat",
  "-webkit-mask-position": "130% 130%",
})

gsap.set(loadServiceHeader, {
  opacity: 0,
  y: 50,
})

gsap.set(loadServiceLogo, {
  opacity: 0,
  x: 100,
})

t1.to(loadServiceHero, {
  "-webkit-mask-position": "0% 0%",
  duration: 2.0,
  ease: "power1.inOut",
})
.to(loadServiceHeader, {
  y: 0,
  duration: 1.5,
  opacity: 1,
  ease: "power1.easeIn"
}, "-=.5")
.to(loadServiceLogo, {
  x: 0,
  duration: 1.5,
  opacity: 1,
  ease: "power1.easeIn",
}, "-=1.0")