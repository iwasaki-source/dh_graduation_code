const exItems = document.querySelectorAll('.js-ex-item');
const exTit = document.querySelectorAll('.js-ex-tit');

gsap.set(exItems, {
    filter: "grayscale(0.2)",
})

gsap.set(exTit, {
    visibility: "hidden",
    y: 50,
    opacity: 0,
})

const expand = (item, i) => {
    exItems.forEach((it, ind) => {
        if (i === ind) return;
        it.clicked = false;
        gsap.to(exTit[ind], {
            visibility: "hidden",
        });
    });

    gsap.to(exItems, {
        width: item.clicked ? '15vw' : '8vw',
        filter: item.clicked ? "grayscale(0)" : "grayscale(1)",
        duration: .5,
        ease: 'elastic(1, 0.6)'
    })

    item.clicked = !item.clicked;

    gsap.to(item, {
        width: item.clicked ? '42vw' : '15vw',
        filter: "grayscale(0)",
        duration: 0.8,
        ease: {
            width: 'elastic(1, 0.6)',
            filter: 'ease-in',
        }
    })

    if (item.clicked) {
        gsap.to(exTit[i], {
            delay: 1,
            visibility: "visible",
            y: 0,
            opacity: 1,
        })
        // gsap.to(exItems[i], {
        //     filter: "grayscale(0)",
        // })
    } else {
        gsap.to(exTit[i], {            
            visibility: "hidden",
            y: 50,
            opacity: 0,
        })
    }
}

exItems.forEach((item, i) => {
    item.clicked = false;
    item.addEventListener('click', () => expand(item, i));
})


gsap.registerPlugin(ScrollTrigger);

const exOn = document.querySelector('.service-content');
const exOnTex = document.querySelectorAll('.js-texColor1');
const ex = document.querySelector('.service-example-container');
const exBt = document.querySelector('.service_question');
const exBtTex =document.querySelectorAll('.js-texColor2');

gsap.set(exBt, {
    backgroundColor: "#444",
})
gsap.set(exBtTex, {
    color: "#fff",
})

gsap.to(exOn, {
  backgroundColor: "#444", 
  scrollTrigger: {
    trigger: ex,
    start: "top bottom",
    end: "top top",
    // markers: true,
    toggleActions: "play none none reverse", // アニメーションのトグル動作
  }
});

exOnTex.forEach((tex) => {
    gsap.to(tex, {
    color: "#fff", 
    scrollTrigger: {
        trigger: ex,
        start: "top bottom",
        end: "top top",
        // markers: true,
        toggleActions: "play none none reverse", // アニメーションのトグル動作
    }
    });
})

gsap.to(exBt, {
    backgroundColor: "initial", 
    duration: 3,
    scrollTrigger: {
      trigger: exBt,
      start: "top top",
      end: "top top",
    //   markers: true,
    toggleActions: "play none none reverse", // アニメーションのトグル動作
    // scrub: true,
    }
  });

  exBtTex.forEach((tex) => {
    gsap.to(tex, {
    color: "#363636", 
    scrollTrigger: {
        trigger: exBt,
        start: "top top",
        end: "top top",
        // markers: true,
        toggleActions: "play none none reverse", // アニメーションのトグル動作
    }
    });
})
