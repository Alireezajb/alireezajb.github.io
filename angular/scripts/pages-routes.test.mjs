import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const script = fileURLToPath(new URL('./pages-routes.mjs', import.meta.url));
test('creates project entry points and rejects unsafe IDs', async () => {
  const dir = await mkdtemp(join(tmpdir(), 'portfolio-pages-'));
  try {
    await mkdir(join(dir, 'dist/portfolio-angular/browser'), { recursive: true });
    await mkdir(join(dir, 'src/app/projects'), { recursive: true });
    await writeFile(join(dir, 'dist/portfolio-angular/browser/index.html'), 'entry');
    const json = join(dir, 'src/app/projects/projects.json');
    await writeFile(json, JSON.stringify([{ id: 'ranovika' }, { id: 'other-project' }]));
    assert.equal(spawnSync(process.execPath, [script], { cwd: dir }).status, 0);
    for (const route of ['projects', 'projects/ranovika', 'projects/other-project']) {
      assert.equal(await readFile(join(dir, 'dist/portfolio-angular/browser', route, 'index.html'), 'utf8'), 'entry');
    }
    assert.equal(await readFile(join(dir, 'dist/portfolio-angular/browser/404.html'), 'utf8'), 'entry');
    await writeFile(json, JSON.stringify([{ id: '../outside' }]));
    assert.notEqual(spawnSync(process.execPath, [script], { cwd: dir }).status, 0);
  } finally {
    await rm(dir, { recursive: true, force: true });
  }
});
