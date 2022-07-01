const navToggler = document.querySelector('.nav-toggler');
const navList = document.querySelector('.nav-list');

navToggler.addEventListener('click', function (event) {
  if (navList.classList.contains('show')) {
    this.innerHTML = '<i class="fa-solid fa-bars fa-xl"></i>';
    navList.classList.remove('show');
    navList.classList.add('hide');
  } else {
    this.innerHTML = '<i class="fa-solid fa-xmark fa-xl"></i>';
    navList.classList.remove('hide');
    navList.classList.add('show');
  }
});

const navItems = navList.querySelectorAll('li');
navItems.forEach((navItem) => {
  navItem.addEventListener('click', function () {
    if (navList.classList.contains('show')) {
      navToggler.innerHTML = '<i class="fa-solid fa-bars fa-xl"></i>';
      navList.classList.remove('show');
      navList.classList.add('hide');
    }
  });
});
