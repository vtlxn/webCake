'use strict'

const btn = document.querySelector('.lang__btn');
const menu = document.querySelector('.lang__items');
btn.onclick = () => menu.classList.toggle('show');

// slider
let mySwiper = new Swiper('.swiper-container', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});