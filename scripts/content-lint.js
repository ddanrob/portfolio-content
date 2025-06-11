#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const REQUIRED_FIELDS = ['title', 'date', 'slug'];
let errors = [];

function checkFolder(base, dir) {
  const folder = path.join(base, dir);
  const indexPath = path.join(folder, 'index.md');
  if (!fs.existsSync(indexPath)) {
    errors.push(`Missing index.md in ${folder}`);
    return;
  }
  const file = fs.readFileSync(indexPath, 'utf8');
  const fm = matter(file).data;
  for (const field of REQUIRED_FIELDS) {
    if (!fm[field]) {
      errors.push(`Missing \`${field}\` in ${indexPath}`);
    }
  }
  if (fm.coverImage) {
    const imgPath = path.join(folder, fm.coverImage);
    if (!fs.existsSync(imgPath)) {
      errors.push(`Image not found: ${imgPath}`);
    }
  }
}

function walk(base) {
  if (!fs.existsSync(base)) return;
  for (const dir of fs.readdirSync(base)) {
    const full = path.join(base, dir);
    if (fs.statSync(full).isDirectory()) {
      checkFolder(base, dir);
    }
  }
}

walk('blogs');
walk('drafts');

if (errors.length) {
  console.error(errors.join('\n'));
  process.exit(1);
} else {
  console.log('Content looks good');
}
