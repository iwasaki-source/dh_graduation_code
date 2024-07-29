//TOPの撮影事例のスクロール
const elem = document.getElementById('index_example');
const elemheight = elem.scrollHeight;

let elemtop = elem.getBoundingClientRect().top + window.pageYOffset;

const getScrollPercent = () => {
  const scrolled = window.scrollY;
  const percentage = ((scrolled - elemtop) / ((elemtop + elemheight) - elemtop)) * 100;
  document.querySelector('.bar').style.height = `${percentage}%`;
}

window.addEventListener('scroll', getScrollPercent);