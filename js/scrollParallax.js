const parallaxImg = document.querySelectorAll('.parallax-move-img');

parallaxImg.forEach((image) => {
  gsap.fromTo(image.querySelector('img'), {
    y: 60,
  }, {
    y: -60,
    ease: "none",
    scrollTrigger: {
      trigger: image,
      start: "top bottom",
      end: "bottom top",
      scrub: 1,
    }
  });
});