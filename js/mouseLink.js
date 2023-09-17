const mouseLinks = document.querySelectorAll('.js-link');
const moreLinks = document.querySelectorAll('.js-more');

mouseLinks.forEach((mouseLink, index) => {
    mouseLink.addEventListener('mouseover', () => {
        moreLinks[index].classList.add('active');
    }, false);

    mouseLink.addEventListener('mouseleave', () => {
        moreLinks[index].classList.remove('active');
    }, false)
});
