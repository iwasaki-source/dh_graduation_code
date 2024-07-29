const loadTopTitTex = document.querySelectorAll('.load_tit_1 span, .load_tit_2 span');
const loadTopSubTex = document.querySelectorAll('.load_sub span');
const loadTopImages = document.querySelectorAll('.load_image_group img');
const loadContent = document.querySelector('.load_content');
const loadHero = document.querySelector('.js-tophero');
const loadTopHeader = document.querySelector('.header');
const loadTopLogo = document.querySelector('.logo');

const t1 = gsap.timeline();
const t2 = gsap.timeline({delay: 2.5});
const t3 = gsap.timeline({delay: 5});
const t4 = gsap.timeline({delay: 8.5});

gsap.set('.js-tophero', {
    "-webkit-mask-image": "linear-gradient(135deg, rgba(0, 0, 0, 1) 30%, rgba(0, 0, 0, 0.4) 45%, rgba(0, 0, 0, 0) 55%, rgba(0, 0, 0, 0) 100%)",
    "-webkit-mask-size": "250% 250%",
    "-webkit-mask-repeat": "no-repeat",
    "-webkit-mask-position": "130% 130%",
})

loadTopTitTex.forEach((tit, index) => {
    t1.from(tit, {
        x: "random(-500, 500, 100)",
        y: "random(-500, 500, 100)",
        ease: "power2.inOut",
        duration: 2.5,
        opacity: 0,
    }, index * 0.1)
})

loadTopSubTex.forEach((sub, index) => {
    t2.from(sub, {
        x: "random(-100, 100)",
        y: "random(-100, 100)",
        ease: "power2.inOut",
        duration: 2.5,
        opacity: 0,
    }, index * 0.1)
})

loadTopImages.forEach((img, index) => {
    t3.from(img, {
        x: "random(-1000, 1000)",
        y: "random(-1000, 1000)",
        ease: "power1.inOut",
        duration: 2.5,
        opacity: 0,
        rotate: "random(360, -360)",
    }, index * 0.1)
})

t4.to(loadContent, {
    // height: 0,
    y: "-110vh",
    duration: 2.5,
    opacity: 0.5,
    ease: "power4.inOut"
}).to(loadHero, {
    "-webkit-mask-position": "0% 0%",
    duration: 3.5,
    ease: "power1.inOut"
},"-=2.0").from(loadTopHeader, {
    y: 50,
    duration: 2,
    opacity: 0,
    ease: "power1.easeIn"
},"-=1.5").from(loadTopLogo, {
    // y: 50,
    // scale: 0.8,
    x: 100,
    duration: 1.5,
    opacity: 0,
    ease: "power1.easeIn"
},"-=1.5")

