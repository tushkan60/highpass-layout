let search = document.querySelector('.header__search');
let searchForm = document.querySelector('.header__form');
let searchBtn = document.querySelectorAll('.header__form .form__search');

search.addEventListener('click',

  function () {

    searchForm.classList.toggle('search__form--active');

  })

searchBtn.forEach(function (el) {
  el.addEventListener('click', function () {

    searchForm.classList.remove('search__form--active');

  })
})
