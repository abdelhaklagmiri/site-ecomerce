(function () {
  'use strict';

  // Mobile menu
  const menuToggle = document.querySelector('.menu-toggle');
  const mobileNav = document.querySelector('.mobile-nav');
  const mobileNavClose = document.querySelector('.mobile-nav__close');

  if (menuToggle && mobileNav) {
    menuToggle.addEventListener('click', () => {
      mobileNav.classList.add('is-open');
      document.body.style.overflow = 'hidden';
    });
    if (mobileNavClose) {
      mobileNavClose.addEventListener('click', closeMobileNav);
    }
    mobileNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', closeMobileNav);
    });
  }

  function closeMobileNav() {
    mobileNav.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  // FAQ accordion
  document.querySelectorAll('.faq-item__question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const isOpen = item.classList.contains('is-open');
      item.closest('.faq-list')?.querySelectorAll('.faq-item').forEach(i => i.classList.remove('is-open'));
      if (!isOpen) item.classList.add('is-open');
    });
  });

  // Product gallery thumbs
  const mainImage = document.querySelector('.product-gallery__main img');
  document.querySelectorAll('.product-gallery__thumb').forEach(thumb => {
    thumb.addEventListener('click', () => {
      const img = thumb.querySelector('img');
      if (mainImage && img) {
        mainImage.src = img.src.replace(/width=\d+/, 'width=800');
        mainImage.alt = img.alt;
      }
      document.querySelectorAll('.product-gallery__thumb').forEach(t => t.classList.remove('is-active'));
      thumb.classList.add('is-active');
    });
  });

  // Quantity selector
  document.querySelectorAll('.quantity-selector').forEach(selector => {
    const input = selector.querySelector('input');
    const minus = selector.querySelector('[data-action="minus"]');
    const plus = selector.querySelector('[data-action="plus"]');
    if (minus) minus.addEventListener('click', () => {
      const val = parseInt(input.value, 10) || 1;
      if (val > 1) input.value = val - 1;
    });
    if (plus) plus.addEventListener('click', () => {
      input.value = (parseInt(input.value, 10) || 1) + 1;
    });
  });

  // Sticky add to cart
  const stickyCart = document.getElementById('sticky-cart');
  const addToCartBtn = document.querySelector('.product-form .btn--primary');
  if (stickyCart && addToCartBtn) {
    const observer = new IntersectionObserver(([entry]) => {
      stickyCart.hidden = false;
      stickyCart.classList.toggle('is-visible', !entry.isIntersecting);
    }, { threshold: 0 });
    observer.observe(addToCartBtn);
  }

  document.querySelectorAll('[data-scroll-to]').forEach(btn => {
    btn.addEventListener('click', () => {
      const target = document.querySelector(btn.getAttribute('data-scroll-to'));
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const href = anchor.getAttribute('href');
      if (!href || href === '#') return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
})();
