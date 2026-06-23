/* ============================================================================
   ICONS.JS — مجموعه‌ی آیکون‌های SVG داخلی سایت
   ============================================================================
   به‌جای وابستگی به CDN خارجی (Lucide)، همه‌ی آیکون‌ها همینجا به‌صورت
   SVG خام تعریف شدن — یعنی هیچ‌وقت لود نشدن یک اسکریپت خارجی باعث
   نمایش‌نیافتن آیکون‌ها نمی‌شه. برای اضافه‌کردن آیکون جدید، یک ورودی به
   شیء ICONS اضافه کن (یک <path>/<circle>/... ساده با مختصات داخل
   viewBox مربع ۲۴×۲۴).
   ============================================================================ */

const ICONS = {
  'arrow-right': {
    type: 'stroke',
    body: '<line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>'
  },
  'chevron-left': {
    type: 'stroke',
    body: '<polyline points="15 18 9 12 15 6"/>'
  },
  'chevron-right': {
    type: 'stroke',
    body: '<polyline points="9 18 15 12 9 6"/>'
  },
  'star': {
    type: 'fill',
    body: '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>'
  },
  'mail': {
    type: 'stroke',
    body: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>'
  },
  'phone': {
    type: 'stroke',
    body: '<path d="M6.6 10.8c1.4 2.8 3.8 5.2 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.4c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1l-2.2 2.2z"/>'
  },
  'message-circle': {
    type: 'stroke',
    body: '<rect x="3" y="4" width="18" height="13" rx="2"/><path d="M7 17l-2 4 5-4"/>'
  },
  'zap': {
    type: 'stroke',
    body: '<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>'
  },
  'bar-chart-3': {
    type: 'stroke',
    body: '<line x1="12" y1="20" x2="12" y2="10"/><line x1="18" y1="20" x2="18" y2="4"/><line x1="6" y1="20" x2="6" y2="16"/>'
  },
  'link-2': {
    type: 'stroke',
    body: '<path d="M9 17H7a5 5 0 1 1 0-10h2"/><path d="M15 7h2a5 5 0 1 1 0 10h-2"/><line x1="8" y1="12" x2="16" y2="12"/>'
  },
  'layers': {
    type: 'stroke',
    body: '<polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/>'
  },
  'wrench': {
    type: 'stroke',
    body: '<circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1"/>'
  },
  'rocket': {
    type: 'stroke',
    body: '<path d="M12 2L8 10v6l4 4 4-4v-6z"/><circle cx="12" cy="9" r="1.4"/><path d="M8 14l-3 2 1 4 3-2"/><path d="M16 14l3 2-1 4-3-2"/>'
  },
  'github': {
    type: 'fill',
    body: '<path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.03A9.6 9.6 0 0 1 12 6.8c.85 0 1.71.11 2.51.33 1.91-1.3 2.75-1.03 2.75-1.03.55 1.37.2 2.39.1 2.64.64.7 1.03 1.6 1.03 2.69 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.85 0 1.34-.01 2.42-.01 2.75 0 .27.18.58.69.48A10 10 0 0 0 22 12c0-5.52-4.48-10-10-10z"/>'
  },
  'linkedin': {
    type: 'fill',
    body: '<rect x="2" y="2" width="20" height="20" rx="3"/><g fill="var(--bg)"><rect x="5.5" y="9.5" width="2.6" height="9"/><circle cx="6.8" cy="6.3" r="1.6"/><path d="M11 9.5h2.5v1.3h.04c.35-.65 1.2-1.34 2.46-1.34 2.63 0 3.1 1.73 3.1 3.98v5.06h-2.6v-4.48c0-1.07-.02-2.44-1.49-2.44-1.49 0-1.72 1.16-1.72 2.36v4.56H11V9.5z"/></g>'
  }
};

function svgIcon(name, opts) {
  opts = opts || {};
  const icon = ICONS[name];
  if (!icon) return '';
  const classAttr = 'icon-inline' + (opts.className ? ' ' + opts.className : '');
  const styleAttr = opts.style ? ` style="${opts.style}"` : '';
  const presentation = icon.type === 'fill'
    ? 'fill="currentColor"'
    : 'fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"';
  return `<svg class="${classAttr}"${styleAttr} viewBox="0 0 24 24" ${presentation} xmlns="http://www.w3.org/2000/svg" aria-hidden="true">${icon.body}</svg>`;
}
