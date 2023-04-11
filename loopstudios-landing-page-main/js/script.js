var tgg = document.querySelector('.toggle');
tgg.addEventListener('click', () => {
    tgg.classList.toggle('toggle-sub');
    var mobile = document.querySelector('.nav-mobile');
    mobile.classList.toggle('mobile-toggler');

    var first = document.querySelector('.first-line');
    var second = document.querySelector('.second-line');
    var third = document.querySelector('.third-line');
    document.querySelector('.logo').classList.toggle('logo-sub');

    first.classList.toggle('firstr');
    third.classList.toggle('thirdr');
    second.classList.toggle('secondr');

});
const slideElements = document.querySelectorAll('.slide');

function handleScroll() {
  slideElements.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;
    const elementBottom = el.getBoundingClientRect().bottom;

    if (elementTop <= window.innerHeight && elementBottom >= 0) {
      el.classList.add('slide-in');
    }
  });
}

window.addEventListener('scroll', handleScroll);

handleScroll();





  