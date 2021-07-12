const header = document.querySelector('.header')
const overlay = document.querySelector('.header__overlay')
const hamMenu = document.querySelector('#hamMenu');
const headerMenu = document.querySelector('.header__menu');

// Open and Close header Menu
hamMenu.addEventListener('click', function() {
  if (header.classList.contains('open')) {
    header.classList.remove('open');
    overlay.classList.remove('fade-in');
    overlay.classList.add('fade-out');
  } else {
    header.classList.add('open');
    overlay.classList.remove('fade-out');
    overlay.classList.add('fade-in');
  }
});