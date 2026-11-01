import fs from 'node:fs';
import assert from 'node:assert/strict';
import { photos } from '../src/data/photos.js';
const read = code => JSON.parse(fs.readFileSync(new URL(`../src/locales/${code}.json`, import.meta.url), 'utf8'));
function flatten(value, prefix = '') {
  return Object.fromEntries(Object.entries(value).flatMap(([key, item]) => {
    const path = prefix ? `${prefix}.${key}` : key;
    return typeof item === 'object' ? Object.entries(flatten(item, path)) : [[path, item]];
  }));
}
const reference = flatten(read('en'));
for (const code of ['en', 'es', 'te', 'hi']) {
  const data = read(code);
  const flat = flatten(data);
  assert.deepEqual(Object.keys(flat).sort(), Object.keys(reference).sort(), `${code}: mismatched keys`);
  for (const [key, value] of Object.entries(flat)) {
    assert.equal(typeof value, 'string');
    assert.ok(value.trim(), `${code}: empty ${key}`);
    const placeholders = text => [...text.matchAll(/{{\s*(\w+)\s*}}/g)].map(match => match[1]).sort();
    assert.deepEqual(placeholders(value), placeholders(reference[key]), `${code}: placeholders in ${key}`);
  }
  for (const photo of photos) {
    assert.ok(data.photos[photo.id]?.title && data.photos[photo.id]?.alt, `${code}: photo ${photo.id}`);
    assert.ok(data.categories[photo.category], `${code}: category ${photo.category}`);
  }
}
console.log('All four languages have matching keys, interpolation placeholders, and complete photo translations.');
