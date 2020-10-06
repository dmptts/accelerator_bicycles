'use strict';

(function () {
  var pageHeader = document.querySelector('.page-header');
  var burgerBtn = document.querySelector('.page-header__burger');
  var nav = document.querySelector('.page-header__nav');
  var nameInput = document.querySelector('#callback-name-field');
  var phoneInput = document.querySelector('#callback-phone-field');

  var initPage = function () {
    pageHeader.classList.remove('page-header--no-js');
  };

  var toggleNav = function () {
    pageHeader.classList.toggle('page-header--nav-opened');
    burgerBtn.classList.toggle('page-header__burger--nav-opened');
    nav.classList.toggle('page-header__nav--opened');
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

  if (nameInput && phoneInput) {
    nameInput.addEventListener('change', function (evt) {
      evt.preventDefault();
      nameInput.setCustomValidity('');

      if (!nameInput.checkValidity()) {
        nameInput.setCustomValidity('Имя должно состоять из кириллических букв');
      }
    });

    phoneInput.addEventListener('change', function (evt) {
      evt.preventDefault();
      phoneInput.setCustomValidity('');

      if (!phoneInput.checkValidity()) {
        phoneInput.setCustomValidity('Номер телефона должен состоять из 11 цифр, например 89998887766');
      }
    });
  }
})();
