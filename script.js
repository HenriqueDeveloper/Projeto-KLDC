document.addEventListener('DOMContentLoaded', () => {
  const hamburgerMenu = document.querySelector('.hamburger-menu');
  const navMenu = document.querySelector('.nav-menu');

  
  function toggleMenu() {
    hamburgerMenu.classList.toggle('active');
    navMenu.classList.toggle('active');
  }

  
  hamburgerMenu.addEventListener('click', toggleMenu);

  
  navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', toggleMenu);
  });

  
  document.addEventListener('click', (event) => {
    if (!navMenu.contains(event.target) && !hamburgerMenu.contains(event.target)) {
      hamburgerMenu.classList.remove('active');
      navMenu.classList.remove('active');
    }
  });
});