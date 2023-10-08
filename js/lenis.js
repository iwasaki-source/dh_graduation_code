class lenis {
  constructor() {
    this._initialize();
    this._render();
  }

  _initialize() {
    this._createLenis();
  }

  _createLenis() {
    this.lenis = new Lenis({
      lerp: 0.1
    })
  }

  _render(time) {
    this.lenis.raf(time);
    requestAnimationFrame(this._render.bind(this))
  }
}

new lenis();