document.addEventListener('DOMContentLoaded', () => {
  const hamburgerMenu = document.querySelector('.hamburger-menu');
  const navMenu = document.querySelector('.nav-menu');

  
  function toggleMenu() {
    hamburgerMenu.classList.toggle('active');
    navMenu.classList.toggle('active');

    
    const menuItems = navMenu.querySelectorAll('li');
    menuItems.forEach((item, index) => {
      if (navMenu.classList.contains('active')) {
        item.style.transitionDelay = `${index * 0.1}s`;
        item.style.opacity = '0';
        item.style.transform = 'translateX(30px)';
        
        
        setTimeout(() => {
          item.style.opacity = '1';
          item.style.transform = 'translateX(0)';
        }, index * 100);
      } else {
        item.style.opacity = '0';
        item.style.transform = 'translateX(30px)';
      }
    });
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