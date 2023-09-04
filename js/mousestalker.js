/* お問い合わせのマウスストーカー */
const mouseStalker = document.getElementById('g-ms');
let msPos = {
    //マウスストーカーの位置
    s: {
        x: document.documentElement.clientWidth / 2,
        y: document.documentElement.clientHeight / 2
    },
    //マウスポインターの位置
    m: {
        x: document.documentElement.clientWidth / 2,
        y: document.documentElement.clientHeight / 2
    }
};

//マウスストーカーをactiveにする
if (window.matchMedia("(pointer: fine)" ).matches) {
    document.addEventListener("mousemove", msActivate);
}
function msActivate() {
    mouseStalker.classList.add('g-ms-active');
    document.removeEventListener('mousemove', msActivate);
    //mouseの位置セット
    document.addEventListener('mousemove', function(e) {
        msPos.m.x = e.clientX;
        msPos.m.y = e.clientY;
    });
    //アニメーション開始
    requestAnimationFrame(msPosUpdate);
}
function msPosUpdate() {
  msPos.s.x += (msPos.m.x - msPos.s.x) * 0.1;
  msPos.s.y += (msPos.m.y - msPos.s.y) * 0.1;
  const x = Math.round(msPos.s.x * 10) / 10;
  const y = Math.round(msPos.s.y * 10) / 10;
  mouseStalker.style.transform = `translate3d(` + x + 'px,' + y + 'px, 0)';
  requestAnimationFrame(msPosUpdate);
}
//hover時にclass追加
const stalkerLingObj = document.querySelector('.contact-area');
stalkerLingObj.addEventListener('mouseover', function() {
    mouseStalker.classList.add('g-ms-hover');
});
stalkerLingObj.addEventListener('mouseout', function(){
    mouseStalker.classList.remove('g-ms-hover');
});