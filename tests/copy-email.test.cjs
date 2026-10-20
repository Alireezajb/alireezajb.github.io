const { test } = require('node:test');
const assert = require('node:assert/strict');
const { readFileSync } = require('node:fs');
const { runInNewContext } = require('node:vm');
const { join } = require('node:path');

function setup(writeText) {
  const callbacks = {};
  const button = { addEventListener: (name, callback) => { callbacks[name] = callback; } };
  const status = { textContent: '' };
  const nav = { addEventListener() {} };
  let ready;
  const context = {
    document: {
      addEventListener: (name, callback) => { if (name === 'DOMContentLoaded') ready = callback; },
      querySelector: () => nav,
      querySelectorAll: () => [],
      getElementById: id => ({ 'nav-links': nav, 'copy-email': button, 'copy-status': status })[id]
    },
    window: { matchMedia: () => ({ addEventListener() {} }) },
    navigator: { clipboard: { writeText } }
  };
  for (const file of ['content.js', 'icons.js', 'ux.js']) {
    runInNewContext(readFileSync(join(__dirname, '../js', file), 'utf8'), context);
  }
  ready();
  return { click: callbacks.click, button, status };
}

test('copy icon writes the exact contact address and confirms success', async () => {
  let copied;
  const ui = setup(async text => { copied = text; });
  await ui.click();
  assert.equal(copied, 'alirezajaberi.programming@gmail.com');
  assert.equal(ui.status.textContent, 'Email copied.');
  assert.equal(ui.button.title, 'Email copied');
  assert.match(ui.button.innerHTML, /<polyline/);
});

test('clipboard denial shows a manual alternative without claiming success', async () => {
  const ui = setup(async () => { throw new Error('Permission denied'); });
  await assert.doesNotReject(ui.click);
  assert.match(ui.status.textContent, /copy it manually/);
  assert.equal(ui.button.title, 'Copy email address');
  assert.match(ui.button.innerHTML, /<rect/);
});
