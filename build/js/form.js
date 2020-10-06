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
