'use strict'

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