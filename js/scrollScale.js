class scrollScale {

  constructor() {
    this._initialize();
  }

  _initialize() {
    this._setIntialStates();
    this._createPinnedSection();
  }

  _setIntialStates() {

    gsap.set('.fullwidth-image img, .fullwidth-image-about img', {
      scale: 1.3
    })

  }

  _createPinnedSection() {
    const t1 = gsap.timeline({
      scrollTrigger: {
        trigger: '.fullwidth-image, .fullwidth-image-about',
        start: 'top top',
        end: '+=1200',
        scrub: true,
        pin: true,
      }
    });

    t1.to('.fullwidth-image, .fullwidth-image-about', {
      "clip-path": "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    },0).to('.fullwidth-image img, .fullwidth-image-about img', {
      scale: 1
    },0)
  }
}

new scrollScale();
