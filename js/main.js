(function () {
  const config = typeof BRAND_CONFIG !== 'undefined' ? BRAND_CONFIG : {};

  function applyConfig() {
    const igUrl = config.instagram?.url || 'https://instagram.com';
    const igHandle = config.instagram?.handle || '@smitha.valon.hair';
    const waNumber = config.whatsapp?.number || '212600000000';
    const waDisplay = config.whatsapp?.display || '+212 6 00 00 00 00';
    const waUrl = `https://wa.me/${waNumber}`;

    document.querySelectorAll(
      '#instagram-link, #instagram-gallery-link, #instagram-contact-link, #instagram-footer-link'
    ).forEach((el) => {
      el.href = igUrl;
    });

    const igContact = document.getElementById('instagram-contact-link');
    if (igContact) igContact.textContent = igHandle;

    document.querySelectorAll('#whatsapp-link, #whatsapp-float').forEach((el) => {
      el.href = waUrl;
    });

    const waLink = document.getElementById('whatsapp-link');
    if (waLink) waLink.textContent = waDisplay;
  }

  function initNav() {
    const header = document.getElementById('header');
    const toggle = document.querySelector('.nav__toggle');
    const menu = document.querySelector('.nav__menu');

    window.addEventListener('scroll', () => {
      header.classList.toggle('header--scrolled', window.scrollY > 50);
    });

    toggle?.addEventListener('click', () => {
      const open = menu.classList.toggle('nav__menu--open');
      toggle.setAttribute('aria-expanded', open);
      document.body.style.overflow = open ? 'hidden' : '';
    });

    menu?.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        menu.classList.remove('nav__menu--open');
        toggle?.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });
  }

  function initForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('name').value.trim();
      const phone = document.getElementById('phone').value.trim();
      const service = document.getElementById('service');
      const serviceLabel = service.options[service.selectedIndex].text;
      const message = document.getElementById('message').value.trim();

      const text = [
        'Bonjour Smitha Valon Hair 👋',
        '',
        `Nom : ${name}`,
        `Téléphone : ${phone}`,
        `Service : ${serviceLabel}`,
        message ? `Message : ${message}` : ''
      ].filter(Boolean).join('\n');

      const waNumber = config.whatsapp?.number || '212600000000';
      window.open(`https://wa.me/${waNumber}?text=${encodeURIComponent(text)}`, '_blank');
    });
  }

  function initReveal() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    document.querySelectorAll(
      '.service-card, .galerie__item, .temoignage-card, .apropos__image, .apropos__content, .contact__info, .contact__form'
    ).forEach((el) => {
      el.classList.add('reveal');
      observer.observe(el);
    });
  }

  applyConfig();
  initNav();
  initForm();
  initReveal();
})();
