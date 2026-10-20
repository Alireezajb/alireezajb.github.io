const { test } = require('node:test');
const assert = require('node:assert/strict');
const { readFileSync } = require('node:fs');
const { runInNewContext } = require('node:vm');
const { join } = require('node:path');

function carousel(count = 3) {
  function element(index) {
    return {
      dataset: { index }, style: {}, attrs: {}, events: {},
      classList: { toggle() {} },
      addEventListener(name, callback) { this.events[name] = callback; },
      setAttribute(name, value) { this.attrs[name] = value; }
    };
  }
  const slides = Array.from({ length: count }, (_, i) => element(i));
  const dots = Array.from({ length: count }, (_, i) => element(i));
  const track = element();
  track.querySelectorAll = () => slides;
  const controls = element();
  const previous = element();
  const next = element();
  const region = element();
  const status = element();
  const ids = { 'testimonial-track': track, 'carousel-controls': controls,
    'carousel-prev': previous, 'carousel-next': next, 'carousel-status': status };
  const context = {
    document: { addEventListener() {}, getElementById: id => ids[id],
      querySelector: () => region, querySelectorAll: () => dots },
    window: { addEventListener() {} }
  };
  runInNewContext(readFileSync(join(__dirname, '../js/render-home.js'), 'utf8'), context);
  context.setupCarousel(count);
  return { slides, dots, previous, next, region, status, controls };
}

test('previous and next wrap while exposing only the selected testimonial', () => {
  const c = carousel();
  assert.equal(c.status.textContent, '1 / 3');
  c.previous.events.click();
  assert.equal(c.status.textContent, '3 / 3');
  assert.deepEqual(c.slides.map(s => s.attrs['aria-hidden']), ['true', 'true', 'false']);
  c.next.events.click();
  assert.equal(c.dots[0].attrs['aria-pressed'], 'true');
});

test('direct selection and arrow keys work; unrelated keys are untouched', () => {
  const c = carousel();
  c.dots[1].events.click();
  assert.equal(c.status.textContent, '2 / 3');
  let prevented = false;
  c.region.events.keydown({ key: 'ArrowRight', preventDefault() { prevented = true; } });
  assert.ok(prevented);
  assert.equal(c.status.textContent, '3 / 3');
  c.region.events.keydown({ key: 'Tab', preventDefault() { assert.fail('Tab must remain native'); } });
  assert.equal(c.status.textContent, '3 / 3');
});

test('a single testimonial needs no navigation controls', () => {
  assert.equal(carousel(1).controls.style.display, 'none');
});

for (const file of ['render-home.js', 'render-case-study.js']) {
  test(`${file} skips animation setup when reduced motion is requested`, () => {
    const context = {
      document: { addEventListener() {} },
      window: { addEventListener() {}, matchMedia: () => ({ matches: true }) }
    };
    runInNewContext(readFileSync(join(__dirname, '../js', file), 'utf8'), context);
    assert.doesNotThrow(() => context.setupAnimations());
  });
}
