/* ============================================================================
   RENDER-CASE-STUDY.JS — این فایل را لازم نیست ویرایش کنی.
   پروژه مورد نظر را از روی ?project=SLUG در URL پیدا می‌کند و از روی
   projects.js کل صفحه را می‌سازد. برای پروژه‌ی جدید فقط js/projects.js را
   ویرایش کن — این صفحه خودش با هر slug جدید کار می‌کند.
   ============================================================================ */

function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str == null ? '' : String(str);
  return div.innerHTML;
}

function renderNavAndFooter(c) {
  document.getElementById('nav-logo-text').textContent = c.nav.logo;
  document.getElementById('nav-links').innerHTML = c.nav.links.map(l => {
    const href = l.href.startsWith('#') ? `index.html${l.href}` : l.href;
    return `<li><a href="${href}">${escapeHtml(l.label)}</a></li>`;
  }).join('');

  document.getElementById('footer-logo').textContent = c.footer.logo;
  document.getElementById('footer-tagline').textContent = c.footer.tagline;
  document.getElementById('footer-copy').textContent = c.footer.copyright;
  document.getElementById('footer-nav-links').innerHTML = c.nav.links.map(l => {
    const href = l.href.startsWith('#') ? `index.html${l.href}` : l.href;
    return `<a href="${href}">${escapeHtml(l.label)}</a>`;
  }).join('');
}

function renderCaseStudy(project, allProjects) {
  document.getElementById('cs-content').style.display = '';
  document.getElementById('cs-not-found').style.display = 'none';

  const cs = project.caseStudy;

  document.getElementById('page-title').textContent = `${project.title} — Case Study | Alireza Jaberi`;
  document.getElementById('page-description').setAttribute('content', project.description);

  document.getElementById('cs-tags').innerHTML = project.tags.map(t => `<span class="cs-tag">${escapeHtml(t)}</span>`).join('');
  document.getElementById('cs-title').textContent = project.title;
  document.getElementById('cs-summary').textContent = project.description;

  document.getElementById('cs-client').textContent = cs.client;
  document.getElementById('cs-timeline').textContent = cs.timeline;
  document.getElementById('cs-role').textContent = cs.role;
  document.getElementById('cs-year').textContent = cs.year;

  const coverImg = document.getElementById('cs-cover-img');
  coverImg.src = project.cover || 'images/projects/default-cover.svg';
  coverImg.alt = project.thumbLabel || project.title;

  document.getElementById('cs-problem').innerHTML = cs.problem.map(p => `<p>${escapeHtml(p)}</p>`).join('');

  document.getElementById('cs-approach-intro').textContent = cs.approach.intro;
  document.getElementById('cs-approach-points').innerHTML = cs.approach.points.map(pt =>
    `<li>${svgIcon('arrow-right')}<span>${escapeHtml(pt)}</span></li>`
  ).join('');

  document.getElementById('cs-architecture').innerHTML = cs.architecture.map(p => `<p>${escapeHtml(p)}</p>`).join('');

  document.getElementById('cs-stats').innerHTML = cs.results.stats.map(s => `
    <div class="cs-stat-card">
      <div class="cs-stat-num">${escapeHtml(s.number)}</div>
      <div class="cs-stat-label">${escapeHtml(s.label)}</div>
    </div>
  `).join('');
  document.getElementById('cs-results-note').textContent = cs.results.note;
  document.getElementById('cs-quote-text').textContent = `"${cs.results.quote.text}"`;
  document.getElementById('cs-quote-author').textContent = `— ${cs.results.quote.author}`;

  document.getElementById('cs-stack').innerHTML = cs.stack.map(t => `<span class="cs-stack-tag">${escapeHtml(t)}</span>`).join('');

  // prev / next navigation (circular)
  const idx = allProjects.findIndex(p => p.slug === project.slug);
  const nextProject = allProjects[(idx + 1) % allProjects.length];
  const prevAvailable = allProjects.length > 2; // only show a "previous" card if there's a meaningfully distinct one
  let navHtml = `
    <a href="case-study.html?project=${encodeURIComponent(nextProject.slug)}" class="cs-nav-card is-next">
      <div class="cs-nav-card-label">Next case study ${svgIcon('arrow-right', { style: 'width:14px;height:14px;' })}</div>
      <div class="cs-nav-card-title">${escapeHtml(nextProject.title)}</div>
    </a>
    <a href="index.html#contact" class="cs-nav-card">
      <div class="cs-nav-card-label">${svgIcon('message-circle', { style: 'width:14px;height:14px;' })} Have something similar in mind?</div>
      <div class="cs-nav-card-title">Let's talk about it →</div>
    </a>`;
  document.getElementById('cs-nav-projects').innerHTML = navHtml;
}

function setupAnimations() {
  const heroEls = Array.from(document.querySelectorAll('.cs-back, .cs-tags span, .cs-title, .cs-summary, .cs-meta-bar, .cs-cover'));
  const revealEls = Array.from(document.querySelectorAll('.cs-block, .cs-nav-projects'));
  const allEls = heroEls.concat(revealEls);

  function forceShow() {
    allEls.forEach(el => { el.style.opacity = ''; el.style.transform = ''; });
  }
  const safetyTimer = setTimeout(forceShow, 4000);

  function start(retriesLeft) {
    if (typeof gsap === 'undefined') {
      if (retriesLeft > 0) { setTimeout(() => start(retriesLeft - 1), 300); return; }
      clearTimeout(safetyTimer);
      forceShow();
      return;
    }

    try {
      gsap.set(heroEls, { opacity: 0, y: 16 });
      gsap.to(heroEls, { opacity: 1, y: 0, duration: 0.55, stagger: 0.06, ease: 'power2.out', delay: 0.1 });

      if (revealEls.length) {
        gsap.set(revealEls, { opacity: 0, y: 24 });
        const io = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              gsap.to(entry.target, { opacity: 1, y: 0, duration: 0.55, ease: 'power2.out' });
              io.unobserve(entry.target);
            }
          });
        }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
        revealEls.forEach(el => io.observe(el));
      }
    } catch (e) {
      clearTimeout(safetyTimer);
      forceShow();
    }
  }

  start(10);
}

function fixHashScroll() {
  if (!window.location.hash) return;
  const target = document.querySelector(window.location.hash);
  if (!target) return;
  requestAnimationFrame(() => {
    requestAnimationFrame(() => target.scrollIntoView({ block: 'start' }));
  });
}

function hideLoader() {
  const loader = document.getElementById('page-loader');
  if (!loader) return;
  loader.classList.add('is-hidden');
  setTimeout(() => loader.remove(), 450);
}

document.addEventListener('DOMContentLoaded', () => {
  renderNavAndFooter(SITE_CONTENT);

  const slug = new URLSearchParams(window.location.search).get('project');
  const project = PROJECTS.find(p => p.slug === slug);

  if (project) {
    renderCaseStudy(project, PROJECTS);
  } else {
    document.getElementById('cs-content').style.display = 'none';
    document.getElementById('cs-not-found').style.display = '';
  }

  setupAnimations();
  fixHashScroll();
  hideLoader();
});

window.addEventListener('load', fixHashScroll);
