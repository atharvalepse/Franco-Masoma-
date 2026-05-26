const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src', 'app');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(filePath));
    } else if (file.endsWith('.tsx')) {
      results.push(filePath);
    }
  });
  return results;
}

const files = walk(srcDir);

files.forEach((file) => {
  // We want to skip the Home page (page.tsx at root) because its sizes match globals.css
  if (file === path.join(srcDir, 'page.tsx')) return;
  if (file === path.join(srcDir, 'layout.tsx')) return;

  let content = fs.readFileSync(file, 'utf8');

  // Replace text-headline-md with text-[24px] leading-[1.4]
  content = content.replace(/text-headline-md/g, 'text-[24px] leading-[1.4]');
  // Replace text-headline-lg with text-[32px] leading-[1.3]
  content = content.replace(/text-headline-lg/g, 'text-[32px] leading-[1.3]');
  // Replace text-display-lg with text-[64px] leading-[1.1] tracking-[-0.02em]
  content = content.replace(/text-display-lg([^-\w]|$)/g, 'text-[64px] leading-[1.1] tracking-[-0.02em]$1');
  
  fs.writeFileSync(file, content, 'utf8');
  console.log(`Fixed typography in ${file}`);
});
