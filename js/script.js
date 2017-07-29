  var authorization = document.querySelector('.user-login a');
  var popup = document.querySelector('.popup');
  var closePopup = document.querySelector('.close-popup');
  var form = document.querySelector('.popup-form')
  var login = document.querySelector('.popup-form input[name=\'login\']');
  var password = document.querySelector('.popup-form input[name=\'password\']');
  var storage = localStorage.getItem('login');

  var modalMap = document.querySelector('.modal-content-map');
  var showMap = document.querySelector('.show-map');
  var closeMap = document.querySelector('.close-map');

  authorization.addEventListener('click', function(event) {
    event.preventDefault();
    popup.classList.add('popup-show');
    login.focus();
    if (storage) {
      login.value = storage;
      password.focus();
    } else {
      login.focus();
    }
  })
  showMap.addEventListener('click', function(event){
    event.preventDefault();
    modalMap.classList.add('map-show');
  })

  closePopup.addEventListener('click', function(event){
    event.preventDefault();
    popup.classList.remove('popup-show');
    popup.classList.remove('modal-error');
  })
  closeMap.addEventListener('click', function(event){
    event.preventDefault();
    modalMap.classList.remove('map-show');
  })

  form.addEventListener('submit', function(event) {
    if (login.value.length == 0 || password.value.length == 0) {
      event.preventDefault();
      popup.classList.add('modal-error');
    } else {
      localStorage.setItem('login', login.value);
    }
  })

  window.addEventListener('keydown', function(event) {
    if (event.keyCode === 27) {
      popup.classList.remove('popup-show');
      popup.classList.remove('modal-error');
    }
  })
