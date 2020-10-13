'use strict';

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
