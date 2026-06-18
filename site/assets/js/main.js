/* VALON Hair Care — Front-end interactions */

document.addEventListener('DOMContentLoaded', () => {
  // ====== Mobile drawer ======
  const drawer = document.querySelector('.mobile-drawer');
  const openBtn = document.querySelector('.menu-toggle');
  const closeBtn = document.querySelector('.mobile-drawer .close');
  if (openBtn && drawer) openBtn.addEventListener('click', () => drawer.classList.add('open'));
  if (closeBtn && drawer) closeBtn.addEventListener('click', () => drawer.classList.remove('open'));
  document.querySelectorAll('.mobile-drawer nav a').forEach(a =>
    a.addEventListener('click', () => drawer && drawer.classList.remove('open'))
  );

  // ====== PDP qty controls ======
  document.querySelectorAll('.qty-control').forEach(ctrl => {
    const input = ctrl.querySelector('input');
    const minus = ctrl.querySelector('[data-act="minus"]');
    const plus = ctrl.querySelector('[data-act="plus"]');
    if (!input) return;
    minus && minus.addEventListener('click', () => {
      const v = Math.max(1, (parseInt(input.value, 10) || 1) - 1);
      input.value = v;
    });
    plus && plus.addEventListener('click', () => {
      const v = (parseInt(input.value, 10) || 1) + 1;
      input.value = v;
    });
  });

  // ====== PDP thumbnail switcher ======
  const thumbs = document.querySelectorAll('.pdp-thumbs button');
  const mainImg = document.querySelector('.pdp-main-img img');
  thumbs.forEach(btn => {
    btn.addEventListener('click', () => {
      thumbs.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const src = btn.querySelector('img').getAttribute('src');
      if (mainImg) mainImg.setAttribute('src', src);
    });
  });

  // ====== Sticky add-to-cart visibility ======
  const sticky = document.querySelector('.sticky-cart');
  const pdpActions = document.querySelector('.pdp-actions');
  if (sticky && pdpActions) {
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (!e.isIntersecting) sticky.classList.add('show');
        else sticky.classList.remove('show');
      });
    }, { rootMargin: '0px 0px -80% 0px' });
    io.observe(pdpActions);
  }

  // ====== Bundle / Order form basic validation + WhatsApp fallback ======
  const orderForm = document.querySelector('form.order-form');
  if (orderForm) {
    orderForm.addEventListener('submit', e => {
      e.preventDefault();
      const data = new FormData(orderForm);
      const required = ['fullname', 'phone', 'city', 'address'];
      for (const f of required) {
        if (!data.get(f) || !String(data.get(f)).trim()) {
          alert('Veuillez remplir tous les champs obligatoires.');
          return;
        }
      }
      // Build summary for WhatsApp + show confirmation
      const msg = [
        '*Nouvelle commande VALON*',
        `Produit: ${data.get('product') || 'Pack VALON Complet'}`,
        `Quantité: ${data.get('qty') || 1}`,
        `Nom: ${data.get('fullname')}`,
        `Téléphone: ${data.get('phone')}`,
        `Ville: ${data.get('city')}`,
        `Adresse: ${data.get('address')}`,
        data.get('notes') ? `Notes: ${data.get('notes')}` : ''
      ].filter(Boolean).join('\n');

      // Confirmation overlay
      const overlay = document.createElement('div');
      overlay.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.85);z-index:300;display:flex;align-items:center;justify-content:center;padding:24px;';
      overlay.innerHTML = `
        <div style="background:#fff;max-width:480px;width:100%;padding:40px;border-radius:10px;text-align:center;border:1px solid #c9a96e;">
          <div style="font-size:3rem;color:#c9a96e;">✓</div>
          <h3 style="font-family:'Cormorant Garamond',serif;font-size:1.8rem;margin:10px 0;">Commande reçue !</h3>
          <p style="color:#7a7a7a;margin-bottom:24px;">Notre équipe vous appelle dans les prochaines minutes pour confirmer votre commande. Paiement à la livraison.</p>
          <a href="https://wa.me/212716271604?text=${encodeURIComponent(msg)}"
             target="_blank"
             style="display:inline-block;background:#25D366;color:#fff;padding:14px 28px;border-radius:4px;font-weight:600;letter-spacing:0.15em;text-transform:uppercase;font-size:13px;">
            Confirmer aussi sur WhatsApp
          </a>
          <button id="close-overlay" style="display:block;margin:18px auto 0;background:none;border:none;color:#7a7a7a;cursor:pointer;font-size:13px;">Fermer</button>
        </div>`;
      document.body.appendChild(overlay);
      document.getElementById('close-overlay').onclick = () => overlay.remove();
      orderForm.reset();
    });
  }

  // ====== Reveal on scroll ======
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.opacity = '1';
        e.target.style.transform = 'translateY(0)';
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.08 });

  document.querySelectorAll('.reveal').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity .8s ease, transform .8s ease';
    observer.observe(el);
  });

  // ====== Live "X people viewing" — social proof ======
  const live = document.querySelector('[data-live-viewers]');
  if (live) {
    const update = () => {
      const n = 8 + Math.floor(Math.random() * 14);
      live.textContent = `${n} personnes consultent ce produit maintenant`;
    };
    update();
    setInterval(update, 9000);
  }
});
