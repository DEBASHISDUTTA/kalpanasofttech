// Mark JS active (so .reveal only hides when JS can reveal it)
document.documentElement.classList.add('js');

// Mobile nav toggle
(function () {
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      var open = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    links.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') links.classList.remove('open');
    });
  }

  // Scroll reveal
  var els = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && els.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
      });
    }, { threshold: 0.12 });
    els.forEach(function (el) { io.observe(el); });
  } else {
    els.forEach(function (el) { el.classList.add('in'); });
  }

  // Contact form -> compose mailto (no backend needed)
  var form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var name = encodeURIComponent(form.name.value || '');
      var org = encodeURIComponent(form.org.value || '');
      var msg = encodeURIComponent(form.message.value || '');
      var body = 'Name: ' + name + '%0D%0AOrganisation: ' + org + '%0D%0A%0D%0A' + msg;
      window.location.href = 'mailto:info@kalpanasofttech.com?subject=Website%20enquiry%20from%20' + name + '&body=' + body;
    });
  }
})();
