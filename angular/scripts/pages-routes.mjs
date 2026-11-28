import { copyFile, mkdir, readFile } from 'node:fs/promises';
import { join } from 'node:path';

const output = 'dist/portfolio-angular/browser';
const projects = JSON.parse(await readFile('src/app/projects/projects.json', 'utf8'));
const ids = projects.map(project => project.id);
if (ids.some(id => typeof id !== 'string' || !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(id)) || new Set(ids).size !== ids.length) {
  throw new Error('Project IDs must be unique, URL-safe slugs.');
}

for (const route of ['projects', ...ids.map(id => `projects/${id}`)]) {
  const directory = join(output, route);
  await mkdir(directory, { recursive: true });
  await copyFile(join(output, 'index.html'), join(directory, 'index.html'));
}
await copyFile(join(output, 'index.html'), join(output, '404.html'));
