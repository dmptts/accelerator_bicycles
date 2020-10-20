'use strict';

(function () {
  var nameInput = document.querySelector('#callback-name-field');
  var phoneInput = document.querySelector('#callback-phone-field');

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

  window.main = {
    promoBlock: promoBlock,
    callbackBlock: callbackBlock
  };
})();

(function () {
  var TABLET_WIDTH = 1023;

  var pageTop = document.querySelector('.index-page-top');
  var mainContent = document.querySelector('.main-content');
  var aboutSection = document.querySelector('.about');
  var currentClientWidth;
  var isDesktopVersion;

  var clone = function () {
    var pageTopFragment = document.createDocumentFragment();
    var promoFragment = document.createDocumentFragment();
    var callbackFragment = document.createDocumentFragment();

    if (isDesktopVersion) {
      pageTopFragment.appendChild(document.createElement('div'));
      pageTopFragment.childNodes[0].classList.add('index-page-top__wrapper');
      promoFragment.appendChild(window.main.promoBlock);
      callbackFragment.appendChild(window.main.callbackBlock);
      pageTopFragment.childNodes[0].appendChild(promoFragment);
      pageTopFragment.childNodes[0].appendChild(callbackFragment);
    } else {
      removeExcessWrapper();
      promoFragment.appendChild(window.main.promoBlock);
      callbackFragment.appendChild(window.main.callbackBlock);
      pageTop.appendChild(promoFragment);
      mainContent.insertBefore(callbackFragment, aboutSection);
    }

    pageTop.appendChild(pageTopFragment);
  };

  var getWindowWidth = function () {
    currentClientWidth = document.body.clientWidth;
  };

  var getSiteVersion = function () {
    if (currentClientWidth > TABLET_WIDTH) {
      isDesktopVersion = true;
    } else {
      isDesktopVersion = false;
    }
  };

  var removeExcessWrapper = function () {
    if (pageTop.querySelector('.index-page-top__wrapper')) {
      pageTop.querySelector('.index-page-top__wrapper').remove();
    }
  };

  if (pageTop && mainContent && aboutSection) {
    window.addEventListener('resize', function (evt) {
      evt.preventDefault();
      var currentVersion = isDesktopVersion;
      getWindowWidth();
      getSiteVersion();

      if (((currentClientWidth <= TABLET_WIDTH) && currentVersion) || (currentClientWidth > TABLET_WIDTH) && !currentVersion) {
        clone();
      }
    });

    getWindowWidth();
    getSiteVersion();
    clone();
  }
})();
