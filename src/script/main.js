const btn = document.querySelector('.lang__btn');
const menu = document.querySelector('.lang__items');
btn.onclick = () => menu.classList.toggle('show');

// slider
let mySwiper = new Swiper('.swiper-container', {
  autoplay: {
    delay: 5000,
  },
  speed: 1000,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

(function () {
  const hamburger = document.getElementById("menu-btn");
  const nav = document.querySelector(".navigation__items");
  let doToggle = () => {
    nav.classList.toggle('collapse');
    hamburger.classList.toggle('is-active');
  }

  hamburger.onclick = () => doToggle();

}());