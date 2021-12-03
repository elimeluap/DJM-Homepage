'use strict';

// DOM elements
const hamburgerIcon = document.querySelector('.hamburger-icon');
const sliderMenu = document.querySelector('.slider-menu');
const closeIcon = document.querySelector('.close-icon');

// Displays the slider menu
hamburgerIcon.addEventListener('click', function () {
  sliderMenu.style.right = 0;
});

// Hides the slider menu
closeIcon.addEventListener('click', function () {
  sliderMenu.style.right = '-200' + '%';
});
