const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

function setup(scrollY = 0) {
  const classes = new Set();
  const events = {};
  const header = { classList: { toggle(name, active) { if (active) classes.add(name); else classes.delete(name); } } };
  const window = { scrollY, addEventListener(event, listener, options) { events[event] = { listener, options }; } };
  const elements = new Map();
  const element = id => {
    if (!elements.has(id)) elements.set(id, {
      textContent: '', listeners: {}, open: false,
      addEventListener(event, handler) { this.listeners[event] = handler; },
      replaceChildren(...items) { this.children = items; },
      showModal() { this.open = true; },
      close() { this.open = false; }
    });
    return elements.get(id);
  };
  const buttons = ['healthcare', 'fleet', 'research', 'dashcam', 'didarba'].map(slug => {
    const button = element(slug);
    button.dataset = { project: slug };
    return button;
  });
  const context = {
    document: {
      getElementById: element,
      querySelector: () => header,
      querySelectorAll: () => buttons,
      createElement: () => ({ textContent: '' })
    }, window
  };
  vm.runInNewContext(fs.readFileSync(path.join(__dirname, '../js/main.js'), 'utf8'), context);
  return { element, buttons, classes, window, events };
}

test('all five project controls open their own complete Persian details and can close', () => {
  const { element, buttons } = setup();
  const titles = new Set();
  for (const button of buttons) {
    button.listeners.click();
    assert.equal(element('project-dialog').open, true);
    const title = element('dialog-title').textContent;
    assert.match(title, /[آ-ی]/);
    titles.add(title);
    for (const field of ['category', 'summary', 'role', 'time', 'problem', 'stack']) {
      assert.ok(element(`dialog-${field}`).textContent.length > 0);
    }
    assert.ok(fs.existsSync(path.join(__dirname, '..', element('dialog-image').src.split('?')[0])));
    assert.equal(element('dialog-points').children.length, 4);
    element('close-dialog').listeners.click();
    assert.equal(element('project-dialog').open, false);
  }
  assert.equal(titles.size, 5);
  buttons[0].listeners.click();
  element('dialog-contact').listeners.click();
  assert.equal(element('project-dialog').open, false);
});

test('header follows restored scroll position, widens on scroll and returns at the top', () => {
  const page = setup(200);
  assert.equal(page.classes.has('is-scrolled'), true);
  assert.equal(page.events.scroll.options.passive, true);
  page.window.scrollY = 0;
  page.events.scroll.listener();
  assert.equal(page.classes.has('is-scrolled'), false);
  page.window.scrollY = 49;
  page.events.scroll.listener();
  assert.equal(page.classes.has('is-scrolled'), true);
});
