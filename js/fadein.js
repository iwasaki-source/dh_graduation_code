class fadein {
  constructor() {
    this.fadeInnerImages = [...document.querySelectorAll('.js-fadeInner')];
    this.scrollImages = [...document.querySelectorAll('.js-fadeScroll')];
    this.fadeText = [...document.querySelectorAll('.js-fadetex span')];
    this._initialize();
  }

  _initialize() {
    this._setIntialStates();
    this._createImageFadein();
    this._createImageScroll();
    this._createTextFadein();
  }

  _setIntialStates() {
    gsap.set('.js-fadeInner, .js-fadeScroll', {
      "-webkit-mask-image": "linear-gradient(135deg, rgba(0, 0, 0, 1) 30%, rgba(0, 0, 0, 0.4) 45%, rgba(0, 0, 0, 0) 55%, rgba(0, 0, 0, 0) 100%)",
      "-webkit-mask-size": "250% 250%",
      "-webkit-mask-repeat": "no-repeat",
      "-webkit-mask-position": "130% 130%",
    })

    gsap.set('.js-fadetex span', {
      opacity: 0,
      x: "350%",
      y: "20%",
      skewX: '-20deg',
    })
  }

  _createImageFadein() {
    this.fadeInnerImages.forEach(image => {
      const t1 = gsap.timeline({
        scrollTrigger: {
          trigger: image,
          start: 'top bottom',
          end: 'bottom top',
          // scrub: true,
          // markers: true,
        }
      });

      t1.to(image, {
        duration: 2.0,        
        "-webkit-mask-position": "0% 0%",
        scale: 1,
      })
    })
  }

  _createImageScroll() {
    this.scrollImages.forEach(image => {
      const t1 = gsap.timeline({
        scrollTrigger: {
          trigger: image,
          start: 'top bottom',
          end: 'bottom 10%',
          scrub: true,
          // markers: true,
        }
      });
      t1.to(image, {
        duration: 2.5,
        "-webkit-mask-position": "0% 0%",
        scale: 1,
      })
    })
  }

  _createTextFadein() {
    this.fadeText.forEach(text => {
      const t1 = gsap.timeline({
        scrollTrigger: {
          trigger: text,
          start: 'top bottom',
          end: 'bottom top',
        }
      });
      t1.to(text, {
        duration: 1.5,
        opacity: 1,
        x: 0,
        y: 0,
        skewX: '0deg',
      })
    })
  }

}
new fadein();