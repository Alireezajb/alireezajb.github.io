/* ============================================================================
   RENDER-HOME.JS — این فایل را لازم نیست ویرایش کنی.
   فقط محتوای content.js و projects.js را می‌خواند و در index.html نمایش می‌دهد.
   ============================================================================ */

function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str == null ? '' : String(str);
  return div.innerHTML;
}

function renderHome(c, projects) {

  // NAV
  document.getElementById('nav-logo-text').textContent = c.nav.logo;
  document.getElementById('nav-links').innerHTML = c.nav.links.map(l =>
    `<li><a href="${l.href}">${escapeHtml(l.label)}</a></li>`
  ).join('');

  // HERO
  document.getElementById('hero-eyebrow').textContent = c.hero.eyebrow;
  document.getElementById('hero-title-line1').textContent = c.hero.titleLine1;
  document.getElementById('hero-title-line2').textContent = c.hero.titleLine2;
  document.getElementById('hero-subtitle').textContent = c.hero.subtitle;

  const heroPrimary = document.getElementById('hero-btn-primary');
  heroPrimary.textContent = c.hero.primaryButton.label;
  heroPrimary.href = c.hero.primaryButton.href;

  const heroSecondary = document.getElementById('hero-btn-secondary');
  heroSecondary.textContent = c.hero.secondaryButton.label;
  heroSecondary.href = c.hero.secondaryButton.href;

  const allStats = [c.hero.badge, ...c.hero.stats];
  document.getElementById('hero-stats').innerHTML = allStats.map(s => `
    <div class="stat-item">
      <div class="stat-number"><span class="count-up" data-target="${parseFloat(s.number)}">${/^\d+$/.test(s.number) ? '0' : s.number}</span><span>${s.suffix}</span></div>
      <div class="stat-label">${escapeHtml(s.label)}</div>
    </div>
  `).join('');

  // MARQUEE
  const marqueeItems = c.marquee.map(item =>
    `<span class="marquee-item">${escapeHtml(item)}</span><span class="marquee-dot"></span>`
  ).join('');
  document.getElementById('marquee-track').innerHTML = marqueeItems + marqueeItems;

  // ABOUT
  document.getElementById('about-label').textContent = c.about.label;
  document.getElementById('about-title').textContent = c.about.title;
  document.getElementById('about-paragraphs').innerHTML =
    c.about.paragraphs.map(p => `<p>${escapeHtml(p)}</p>`).join('');
  document.getElementById('about-skills').innerHTML =
    c.about.skills.map(s => `<span class="skill-tag">${escapeHtml(s)}</span>`).join('');

  const aboutBtn = document.getElementById('about-btn');
  aboutBtn.textContent = c.about.button.label;
  aboutBtn.href = c.about.button.href;

  const aboutImg = document.getElementById('about-photo-img');
  aboutImg.src = c.about.photo;
  aboutImg.alt = "Alireza Jaberi";
  document.getElementById('about-photo-placeholder').textContent = c.about.photoFallbackInitials;

  // SERVICES
  document.getElementById('services-label').textContent = c.services.label;
  document.getElementById('services-title').textContent = c.services.title;
  document.getElementById('services-intro').textContent = c.services.intro;
  document.getElementById('services-grid').innerHTML = c.services.items.map(s => `
    <div class="service-card anim-item">
      <div class="service-icon">${svgIcon(s.icon)}</div>
      <h3>${escapeHtml(s.title)}</h3>
      <p>${escapeHtml(s.description)}</p>
    </div>
  `).join('');

  // PROJECTS
  document.getElementById('projects-label').textContent = c.projectsSection.label;
  document.getElementById('projects-title').textContent = c.projectsSection.title;
  const projCta = document.getElementById('projects-cta');
  projCta.textContent = c.projectsSection.ctaButton.label;
  projCta.href = c.projectsSection.ctaButton.href;

  document.getElementById('projects-grid').innerHTML = projects.map(p => `
    <div class="project-card ${p.featured ? 'featured' : ''} anim-item">
      <div class="project-thumb">
        <img src="${p.cover || 'images/projects/default-cover.svg'}" alt="${escapeHtml(p.thumbLabel)}" loading="lazy" />
      </div>
      <div class="project-body">
        <div class="project-tags">${p.tags.map(t => `<span class="project-tag">${escapeHtml(t)}</span>`).join('')}</div>
        <h3>${escapeHtml(p.title)}</h3>
        <p>${escapeHtml(p.description)}</p>
        <div class="project-footer">
          <span style="font-size:0.8rem; color:var(--text-low);">${escapeHtml(p.meta)}</span>
          <a href="case-study.html?project=${encodeURIComponent(p.slug)}" class="project-link">View case study ${svgIcon('arrow-right', { style: 'width:14px;height:14px;' })}</a>
        </div>
      </div>
    </div>
  `).join('');

  // TESTIMONIALS
  document.getElementById('testimonials-label').textContent = c.testimonials.label;
  document.getElementById('testimonials-title').textContent = c.testimonials.title;
  document.getElementById('testimonial-track').innerHTML = c.testimonials.items.map(t => `
    <div class="testimonial-slide">
      <div class="testimonial-card">
        <div class="stars">${svgIcon('star').repeat(5)}</div>
        <p class="testimonial-quote">"${escapeHtml(t.quote)}"</p>
        <div class="testimonial-author">
          <div class="author-avatar">${escapeHtml(t.initials)}</div>
          <div>
            <div class="author-name">${escapeHtml(t.name)}</div>
            <div class="author-role">${escapeHtml(t.role)}</div>
          </div>
        </div>
      </div>
    </div>
  `).join('');
  document.getElementById('carousel-dots').innerHTML = c.testimonials.items.map((_, i) =>
    `<span class="carousel-dot ${i === 0 ? 'active' : ''}" data-index="${i}"></span>`
  ).join('');

  // CONTACT
  document.getElementById('contact-label').textContent = c.contact.label;
  document.getElementById('contact-availability').lastChild.textContent = c.contact.availability;
  document.getElementById('contact-title').textContent = c.contact.title;
  document.getElementById('contact-subtitle').textContent = c.contact.subtitle;

  const contactPrimary = document.getElementById('contact-primary-btn');
  contactPrimary.textContent = c.contact.primaryButton.label;
  contactPrimary.href = c.contact.primaryButton.href;

  document.getElementById('contact-email-value').textContent = c.contact.email;
  document.getElementById('contact-email-row').href = `mailto:${c.contact.email}`;
  document.getElementById('contact-phone-value').textContent = c.contact.phoneDisplay;
  document.getElementById('contact-phone-row').href = `tel:${c.contact.phoneHref}`;
  document.getElementById('contact-whatsapp-row').href = c.contact.whatsappHref;

  // FOOTER
  document.getElementById('footer-logo').textContent = c.footer.logo;
  document.getElementById('footer-tagline').textContent = c.footer.tagline;
  document.getElementById('footer-copy').textContent = c.footer.copyright;
  document.getElementById('footer-nav-links').innerHTML = c.nav.links.map(l =>
    `<a href="${l.href}">${escapeHtml(l.label)}</a>`
  ).join('');
}

/* ── TESTIMONIALS CAROUSEL ────────────────────────────────────────────── */
function setupCarousel(itemCount) {
  if (itemCount <= 1) {
    const controls = document.getElementById('carousel-controls');
    if (controls) controls.style.display = 'none';
    return;
  }
  let index = 0;
  const track = document.getElementById('testimonial-track');
  const dots = () => document.querySelectorAll('.carousel-dot');
  const prevBtn = document.getElementById('carousel-prev');
  const nextBtn = document.getElementById('carousel-next');

  function go(i) {
    index = (i + itemCount) % itemCount;
    track.style.transform = `translateX(-${index * 100}%)`;
    dots().forEach((d, di) => d.classList.toggle('active', di === index));
  }

  prevBtn.addEventListener('click', () => go(index - 1));
  nextBtn.addEventListener('click', () => go(index + 1));
  dots().forEach(d => d.addEventListener('click', () => go(parseInt(d.dataset.index, 10))));

  // auto-advance, pauses on hover
  let timer = setInterval(() => go(index + 1), 6000);
  const carousel = document.querySelector('.testimonial-carousel');
  carousel.addEventListener('mouseenter', () => clearInterval(timer));
  carousel.addEventListener('mouseleave', () => { timer = setInterval(() => go(index + 1), 6000); });

  go(0);
}

/* ── ANIMATIONS ───────────────────────────────────────────────────────
   از IntersectionObserver برای تشخیص ورود به دید استفاده می‌کنیم (نه
   ScrollTrigger) چون موقعیتش را یک‌بار محاسبه نمی‌کند و وابسته به اینکه
   محتوا کِی کامل لود شده باشد نیست — یعنی هیچ‌وقت یک عنصر برای همیشه
   مخفی نمی‌ماند. علاوه‌بر این یک «safety net» قطعی هم هست: مهم نیست چه
   اتفاقی برای GSAP بیفتد، بعد از چند ثانیه همه‌چیز قطعاً نمایش داده می‌شود. */
function setupAnimations() {
  const revealEls = Array.from(document.querySelectorAll('.anim-item, .anim-fade'));
  const heroEls = Array.from(document.querySelectorAll('.hero-eyebrow, #hero h1, .hero-sub, .hero-actions a, .hero-stats'));
  const allEls = revealEls.concat(heroEls);

  function forceShow() {
    allEls.forEach(el => { el.style.opacity = ''; el.style.transform = ''; });
  }

  // safety net — مهم نیست GSAP/CDN چه کند، حداکثر بعد از ۴ ثانیه همه‌چیز دیده می‌شود
  const safetyTimer = setTimeout(forceShow, 4000);

  function start(retriesLeft) {
    if (typeof gsap === 'undefined') {
      if (retriesLeft > 0) { setTimeout(() => start(retriesLeft - 1), 300); return; }
      clearTimeout(safetyTimer);
      forceShow();
      return;
    }

    try {
      // Hero entrance — فوری، بدون نیاز به اسکرول
      gsap.set(heroEls, { opacity: 0, y: 16 });
      gsap.to(heroEls, { opacity: 1, y: 0, duration: 0.6, stagger: 0.08, ease: 'power2.out', delay: 0.1 });

      // Scroll reveal — هر عنصر فقط وقتی واقعا وارد دید می‌شود انیمیت می‌شود
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

      // شمارش انیمیت‌شده‌ی آمار هیرو
      const countEls = document.querySelectorAll('.count-up');
      if (countEls.length) {
        const countIO = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const el = entry.target;
              const target = parseFloat(el.dataset.target);
              if (!isNaN(target)) {
                const obj = { val: 0 };
                gsap.to(obj, { val: target, duration: 1.2, ease: 'power2.out', onUpdate: () => { el.textContent = Math.round(obj.val); } });
              }
              countIO.unobserve(el);
            }
          });
        }, { threshold: 0.4 });
        countEls.forEach(el => countIO.observe(el));
      }
    } catch (e) {
      clearTimeout(safetyTimer);
      forceShow();
    }
  }

  start(10); // تا حدود ۳ ثانیه صبر می‌کند تا GSAP (یا fallback آن) لود شود
}

/* ── HASH SCROLL FIX ──────────────────────────────────────────────────
   اگر از یک صفحه‌ی دیگر با لینکی مثل index.html#contact به این صفحه
   بیایی، مرورگر سعی می‌کند همان لحظه‌ی اول به #contact اسکرول کند —
   اما در آن لحظه محتوا هنوز خالی است (ارتفاع صفحه کوتاه است)، پس اسکرول
   اشتباه می‌افتد. بعد از اینکه محتوا کامل پر شد، دوباره با موقعیت درست
   اسکرول می‌کنیم. */
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

/* ── ICON INIT ─────────────────────────────────────────────────────────
   آیکون‌ها دیگه SVG داخلی هستن (js/icons.js) و همزمان با باقی محتوا
   رندر می‌شن — نیازی به صبر کردن برای یک CDN خارجی نیست. */

document.addEventListener('DOMContentLoaded', () => {
  renderHome(SITE_CONTENT, PROJECTS);

  setupCarousel(SITE_CONTENT.testimonials.items.length);
  setupAnimations();
  fixHashScroll();
  hideLoader();
});

// در صورتی که تصاویر/فونت‌ها دیرتر لود شوند و ارتفاع صفحه را تغییر دهند،
// یک‌بار دیگر هم موقعیت اسکرول را تصحیح می‌کنیم.
window.addEventListener('load', fixHashScroll);
