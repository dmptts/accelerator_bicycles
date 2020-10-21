'use strict';

(function () {
  var pageBody = document.body;
  var pageHeader = document.querySelector('.page-header');
  var burgerBtn = document.querySelector('.page-header__burger');
  var nav = document.querySelector('.page-header__nav');
  var promoBlock = document.querySelector('.promo');
  var callbackBlock = document.querySelector('.callback');

  var initPage = function () {
    pageHeader.classList.remove('page-header--no-js');
    promoBlock.classList.remove('promo--no-js');
    callbackBlock.classList.remove('callback--no-js');
  };

  var toggleNav = function () {
    pageHeader.classList.toggle('page-header--nav-opened');
    burgerBtn.classList.toggle('page-header__burger--nav-opened');
    nav.classList.toggle('page-header__nav--opened');
    pageBody.classList.toggle('no-scroll');
  };

  var onBurgerClick = function (evt) {
    evt.preventDefault();
    toggleNav();
  };

  var onBurgerEnterPress = function (evt) {
    evt.preventDefault();
    if (evt.key === 'Enter') {
      toggleNav();
    }
  };

  if (pageHeader && burgerBtn && nav) {
    burgerBtn.addEventListener('click', onBurgerClick);
    burgerBtn.addEventListener('click', onBurgerEnterPress);

    initPage();
  }

  if (objectFitImages) {
    objectFitImages();
  }

  window.main = {
    promoBlock: promoBlock,
    callbackBlock: callbackBlock
  };
})();
