const count = 25;
const blurCount = 20;
const background = document.querySelector(".background");

for (let i = 0; i < count; i++) {
    setTimeout(() => {
        makeLight(i);
    }, 40 * i);
}

function makeLight(i) {
    let span = document.createElement("span");
    if (i < blurCount) {
        span.classList.add("blur");
    }
    background.appendChild(span);

    gsap.set(span, {
        left: gsap.utils.random(0, background.offsetWidth),
        top: gsap.utils.random(0, background.offsetHeight),
        scale: gsap.utils.random(0.8, 1.2, .1),
        opacity: 0
    });
    let tl = gsap.timeline({
        paused: true,
        onComplete: () => {
            span.remove();
            makeLight(i);
        }
    })

    if (i < blurCount) {
        tl.to(span, {
            opacity: gsap.utils.random(0.1, 0.2),
            duration: 0.3
        })
        tl.to(span, {
            x: gsap.utils.random(-100, 100),
            y: gsap.utils.random(-100, 100),
            duration: gsap.utils.random(5, 7, 0.2),
            ease: Power0.easeNone
        }, -0.3)
        tl.to(span, {
            opacity: 0,
            duration: 0.3
        }, ">-0.3")
    } else {
        tl.to(span, {
            opacity: gsap.utils.random(0.5, 0.8),
            duration: 0.3
        })
        tl.to(span, {
            x: gsap.utils.random(-40, 40),
            y: gsap.utils.random(-40, 40),
            duration: gsap.utils.random(5, 7, 0.2),
            ease: Power0.easeNone
        }, -0.3)
        tl.to(span, {
            opacity: 0,
            duration: 0.3
        }, ">-0.3")
    }
    tl.play();
}