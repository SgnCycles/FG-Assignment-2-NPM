const hamburgerMenu = document.querySelector('.hamburger');
const navMenu = document.querySelector('.navMenuList');
const navMenuItems = document.querySelectorAll('.navMenuItem');

hamburgerMenu.addEventListener('click', () => {
  hamburgerMenu.classList.toggle('active');
  navMenu.classList.toggle('active');
});

document.querySelectorAll('.navMenuList a').forEach(link => {
  link.addEventListener('click', () => {
    hamburgerMenu.classList.remove('active');
    navMenu.classList.remove('active');
  });
});

navMenuItems.forEach(item => {
  item.addEventListener('click', (e) => {
    navMenuItems.forEach(nav => nav.setAttribute('aria-current', 'false'));
    item.setAttribute('aria-current', 'true')
  });
});

console.log('hamburger:', hamburgerMenu);
console.log('navMenu:', navMenu);