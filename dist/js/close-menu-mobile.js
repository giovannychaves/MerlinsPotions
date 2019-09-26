"use strict";

function closeMenu() {
  var btnclose = document.querySelector(".header-menu-mobile-icon-close");
  btnclose.addEventListener('click', function () {
    document.querySelector('.menu-mobile').classList.add('close-menu');
    document.querySelector('.menu-mobile').classList.remove('show-menu');
  });
}

;
closeMenu();