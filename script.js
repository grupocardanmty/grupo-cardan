const CONTACT = window.CARDAN_CONFIG || {
  whatsapp: '524495411631',
  phoneDisplay: '+52 449 541 1631',
  email: 'cardan.mty@gmail.com',
  location: 'Apodaca, Nuevo León',
  whatsappMessage: 'Hola Grupo Cardan, me gustaría solicitar información para un proyecto.'
};

document.querySelectorAll('[data-phone-display]').forEach(el => el.textContent = CONTACT.phoneDisplay);
document.querySelectorAll('[data-email-display]').forEach(el => el.textContent = CONTACT.email);
document.querySelectorAll('[data-location-display]').forEach(el => el.textContent = CONTACT.location);
document.querySelectorAll('[data-email-link]').forEach(el => el.href = `mailto:${CONTACT.email}`);

document.querySelectorAll('.js-wa').forEach(el => {
  const msg = encodeURIComponent(CONTACT.whatsappMessage);
  el.href = `https://wa.me/${CONTACT.whatsapp}?text=${msg}`;
});

const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

const toggle = document.querySelector('.menu-toggle');
const nav = document.getElementById('main-nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  }));
}

const form = document.getElementById('quote-form');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const fd = new FormData(form);
    const message = [
      'Hola Grupo Cardan, quiero solicitar una cotización.',
      '',
      `Nombre: ${fd.get('nombre') || ''}`,
      `Empresa: ${fd.get('empresa') || 'No indicada'}`,
      `Teléfono: ${fd.get('telefono') || 'No indicado'}`,
      `Servicio: ${fd.get('servicio') || ''}`,
      '',
      `Descripción: ${fd.get('descripcion') || ''}`
    ].join('\n');
    window.open(`https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(message)}`, '_blank', 'noopener');
  });
}
