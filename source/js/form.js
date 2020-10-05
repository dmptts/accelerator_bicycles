'use strict';

(function () {
  var nameInput = document.querySelector('#callback-name-field');
  var phoneInput = document.querySelector('#callback-phone-field');

  var validateName = function () {
    nameInput.setCustomValidity('');

    if (!nameInput.checkValidity()) {
      nameInput.setCustomValidity('Имя должно состоять из кириллических букв');
    }
  };

  var validatePhone = function () {
    phoneInput.setCustomValidity('');

    if (!phoneInput.checkValidity()) {
      phoneInput.setCustomValidity('Номер телефона должен состоять из 11 цифр, например 89998887766');
    }
  };

  nameInput.addEventListener('change', validateName);
  phoneInput.addEventListener('change', validatePhone);

})();
