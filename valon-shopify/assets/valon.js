document.addEventListener('DOMContentLoaded', function () {
  // Mobile menu toggle
  const menuToggle = document.querySelector('.valon-menu-toggle');
  const nav = document.querySelector('.valon-nav');
  if (menuToggle && nav) {
    menuToggle.addEventListener('click', function () {
      nav.classList.toggle('is-open');
    });
  }

  // FAQ accordion
  document.querySelectorAll('.valon-faq__question').forEach(function (btn) {
    btn.addEventListener('click', function () {
      const item = btn.closest('.valon-faq__item');
      const isOpen = item.classList.contains('is-open');
      document.querySelectorAll('.valon-faq__item').forEach(function (el) {
        el.classList.remove('is-open');
      });
      if (!isOpen) item.classList.add('is-open');
    });
  });

  // Product tabs
  document.querySelectorAll('.valon-tabs__btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      const tabId = btn.dataset.tab;
      const container = btn.closest('.valon-product__tabs');
      container.querySelectorAll('.valon-tabs__btn').forEach(function (b) {
        b.classList.remove('is-active');
      });
      container.querySelectorAll('.valon-tabs__panel').forEach(function (p) {
        p.classList.remove('is-active');
      });
      btn.classList.add('is-active');
      container.querySelector('[data-panel="' + tabId + '"]').classList.add('is-active');
    });
  });

  // Quantity selector
  document.querySelectorAll('.valon-qty-selector').forEach(function (selector) {
    const input = selector.querySelector('.valon-qty-input');
    const minus = selector.querySelector('[data-action="minus"]');
    const plus = selector.querySelector('[data-action="plus"]');
    if (minus) {
      minus.addEventListener('click', function () {
        const val = parseInt(input.value, 10);
        if (val > 1) input.value = val - 1;
      });
    }
    if (plus) {
      plus.addEventListener('click', function () {
        const val = parseInt(input.value, 10);
        input.value = val + 1;
      });
    }
  });

  // Product thumbnail gallery
  document.querySelectorAll('.valon-product__thumb').forEach(function (thumb) {
    thumb.addEventListener('click', function () {
      const gallery = thumb.closest('.valon-product__gallery');
      gallery.querySelectorAll('.valon-product__thumb').forEach(function (t) {
        t.classList.remove('is-active');
      });
      thumb.classList.add('is-active');
    });
  });
});
