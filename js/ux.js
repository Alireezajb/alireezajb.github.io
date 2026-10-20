document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.getElementById('nav-links');

  function closeMenu() {
    toggle.setAttribute('aria-expanded', 'false');
    nav.classList.remove('is-open');
  }

  toggle.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') !== 'true';
    toggle.setAttribute('aria-expanded', String(open));
    nav.classList.toggle('is-open', open);
  });
  nav.addEventListener('click', event => {
    if (event.target.closest('a')) closeMenu();
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
      closeMenu();
      toggle.focus();
    }
  });
  document.addEventListener('click', event => {
    if (!event.target.closest('nav')) closeMenu();
  });
  document.querySelector('nav').addEventListener('focusout', event => {
    if (!event.currentTarget.contains(event.relatedTarget)) closeMenu();
  });
  window.matchMedia('(min-width: 601px)').addEventListener('change', closeMenu);

  document.querySelectorAll('.footer-social a').forEach(link => {
    const name = link.getAttribute('aria-label').toLowerCase();
    link.href = SITE_CONTENT.footer.social[name];
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.setAttribute('aria-label', `${link.getAttribute('aria-label')} (opens in a new tab)`);
  });

  const sectionLinks = [...document.querySelectorAll('.nav-links a[href^="#"], .cs-toc a')];
  const sections = sectionLinks.map(link => document.getElementById(link.hash.slice(1))).filter(Boolean);
  if (sections.length) {
    const observer = new IntersectionObserver(entries => {
      const visible = entries.filter(entry => entry.isIntersecting);
      if (!visible.length) return;
      const id = visible[0].target.id;
      sectionLinks.forEach(link => {
        if (link.hash === `#${id}`) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    }, { rootMargin: '-80px 0px -55% 0px', threshold: 0 });
    sections.forEach(section => observer.observe(section));
  }

  const copyButton = document.getElementById('copy-email');
  if (copyButton) {
    copyButton.addEventListener('click', async () => {
      const status = document.getElementById('copy-status');
      try {
        await navigator.clipboard.writeText(SITE_CONTENT.contact.email);
        copyButton.innerHTML = svgIcon('check');
        copyButton.title = 'Email copied';
        status.textContent = 'Email copied.';
      } catch {
        copyButton.innerHTML = svgIcon('copy');
        copyButton.title = 'Copy email address';
        status.textContent = 'Could not copy. Select the email address above to copy it manually.';
      }
    });
  }
});
