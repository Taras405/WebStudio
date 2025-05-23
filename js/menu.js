(() => {
    const mobileMenu = document.querySelector('.js-menu-container');
    const openMenuBtn = document.querySelector('.js-open-menu');
    const closeMenuBtn = document.querySelector('.js-close-menu');
  
    const toggleMenu = () => {
      const isOpen = mobileMenu.classList.toggle('is-open');
      openMenuBtn.setAttribute('aria-expanded', isOpen);
      mobileMenu.setAttribute('aria-hidden', !isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    };
  
    openMenuBtn.addEventListener('click', toggleMenu);
    closeMenuBtn.addEventListener('click', toggleMenu);
  
    window.addEventListener('resize', () => {
      if (window.innerWidth >= 768) {
        if (mobileMenu.classList.contains('is-open')) {
          mobileMenu.classList.remove('is-open');
          openMenuBtn.setAttribute('aria-expanded', false);
          mobileMenu.setAttribute('aria-hidden', true);
          document.body.style.overflow = 'auto';
        }
      }
    });
  })();
  