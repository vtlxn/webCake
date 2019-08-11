'use strict';

var btn = document.querySelector('.lang__btn');
var menu = document.querySelector('.lang__items');

btn.onclick = function () {
  return menu.classList.toggle('show');
}; // slider


var mySwiper = new Swiper('.swiper-container', {
  autoplay: {
    delay: 5000
  },
  speed: 1000,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
});

(function () {
  var hamburger = document.getElementById("menu-btn");
  var nav = document.querySelector(".navigation__items");

  var doToggle = function doToggle() {
    nav.classList.toggle('collapse');
    hamburger.classList.toggle('is-active');
  };

  hamburger.addEventListener('click', function (e) {
    doToggle();
  });
})();