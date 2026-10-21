(function () {
  var doc = document.documentElement;
  var header = document.querySelector('.site-header');
  var toggle = document.querySelector('.nav-toggle');

  // Solid header after scrolling past the top
  function onScroll() {
    if (header) header.classList.toggle('is-solid', window.scrollY > 24);
  }
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  // Mobile navigation
  if (toggle) {
    toggle.addEventListener('click', function () {
      var open = doc.classList.toggle('nav-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    document.querySelectorAll('.nav-links a').forEach(function (a) {
      a.addEventListener('click', function () {
        doc.classList.remove('nav-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Scroll reveal
  var items = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add('is-in');
          io.unobserve(e.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    items.forEach(function (el) { io.observe(el); });
  } else {
    items.forEach(function (el) { el.classList.add('is-in'); });
  }

  // Contact form: opens the visitor's mail client with the enquiry prefilled.
  // Swap for a form service (Formspree, Netlify Forms, etc.) when one is chosen.
  var form = document.querySelector('#enquiry-form');
  if (form) {
    form.addEventListener('submit', function (ev) {
      ev.preventDefault();
      if (!form.reportValidity()) return;
      var data = new FormData(form);
      var areas = data.getAll('area').join(', ') || 'Not specified';
      var body = [
        'Name: ' + data.get('name'),
        'Role: ' + (data.get('role') || ''),
        'School / organisation: ' + (data.get('school') || ''),
        'Country: ' + (data.get('country') || ''),
        'Email: ' + data.get('email'),
        'Preferred format: ' + (data.get('format') || ''),
        'Areas of interest: ' + areas,
        '',
        data.get('message') || ''
      ].join('\n');
      var to = form.getAttribute('data-to');
      window.location.href = 'mailto:' + to +
        '?subject=' + encodeURIComponent('Enquiry from ' + data.get('name')) +
        '&body=' + encodeURIComponent(body);
      var status = form.querySelector('.form-status');
      if (status) status.textContent = 'Thank you. Your email app should now open with your enquiry ready to send.';
    });
  }

  var year = document.querySelector('[data-year]');
  if (year) year.textContent = new Date().getFullYear();
})();
