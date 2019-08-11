'use strict';

var btn = document.querySelector('.lang__btn');
var menu = document.querySelector('.lang__items');

btn.onclick = function () {
  return menu.classList.toggle('show');
}; // slider


var mySwiper = new Swiper('.swiper-container', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
});