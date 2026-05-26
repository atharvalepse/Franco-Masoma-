const fs = require('fs');
const path = require('path');

const appDir = path.join(__dirname, 'src', 'app');

// Pages to fix (skip home and faq which are already done)
const pages = ['suits', 'sport-coats', 'shirts', 'overcoats', 'suede-jackets', 'collections', 'the-house', 'ready-to-wear'];

// Map broken Tailwind tokens → inline CSS equivalents
// We inject a <style> tag at the top of each page with overrides
const globalFixes = `
/* === LAYOUT FIXES === */
.page-wrap { padding-top: 80px; }
.container { max-width: 1200px; margin: 0 auto; padding: 0 40px; }

/* Spacing utilities */
.py-xxl  { padding-top: 96px !important; padding-bottom: 96px !important; }
.py-xl   { padding-top: 64px !important; padding-bottom: 64px !important; }
.py-lg   { padding-top: 32px !important; padding-bottom: 32px !important; }
.py-md   { padding-top: 16px !important; padding-bottom: 16px !important; }
.px-lg   { padding-left: 40px !important; padding-right: 40px !important; }
.px-xl   { padding-left: 64px !important; padding-right: 64px !important; }
.p-lg    { padding: 32px !important; }
.p-xl    { padding: 64px !important; }
.p-md    { padding: 16px !important; }
.mb-xxl  { margin-bottom: 96px !important; }
.mb-xl   { margin-bottom: 64px !important; }
.mb-lg   { margin-bottom: 32px !important; }
.mb-md   { margin-bottom: 16px !important; }
.mb-sm   { margin-bottom: 8px !important; }
.mt-xl   { margin-top: 64px !important; }
.mt-lg   { margin-top: 32px !important; }
.mt-sm   { margin-top: 8px !important; }
.gap-gutter { gap: 24px !important; }
.gap-xl  { gap: 64px !important; }
.gap-lg  { gap: 32px !important; }
.gap-md  { gap: 16px !important; }
.gap-sm  { gap: 8px !important; }
.space-y-xl > * + * { margin-top: 64px !important; }
.space-y-lg > * + * { margin-top: 32px !important; }
.space-y-md > * + * { margin-top: 16px !important; }

/* Max widths */
.max-w-container-max { max-width: 1200px !important; margin-left: auto !important; margin-right: auto !important; }
.max-w-\\[1000px\\] { max-width: 1000px !important; }

/* Typography */
.font-display-lg, .font-display-lg-mobile, .font-display-md, .font-headline-lg, .font-headline-md {
  font-family: "EB Garamond", Georgia, serif !important;
}
.font-body-lg, .font-body-md, .font-label-sm, .font-label-caps {
  font-family: "Inter", system-ui, sans-serif !important;
}
.text-display-lg {
  font-size: clamp(40px, 6vw, 64px) !important;
  line-height: 1.1 !important;
  letter-spacing: -0.02em !important;
  font-weight: 400 !important;
}
.text-display-md {
  font-size: clamp(30px, 4vw, 48px) !important;
  line-height: 1.2 !important;
  letter-spacing: -0.01em !important;
}
.text-display-lg-mobile { font-size: clamp(32px, 5vw, 48px) !important; line-height: 1.1 !important; }
.text-headline-lg { font-size: clamp(22px, 3vw, 32px) !important; line-height: 1.3 !important; font-weight: 400 !important; }
.text-headline-md { font-size: 22px !important; line-height: 1.4 !important; font-weight: 500 !important; }
.text-body-lg  { font-size: 17px !important; line-height: 1.75 !important; }
.text-body-md  { font-size: 15px !important; line-height: 1.65 !important; }
.text-label-sm { font-size: 11px !important; letter-spacing: 0.15em !important; font-weight: 600 !important; line-height: 1 !important; }
.text-label-caps { font-size: 11px !important; letter-spacing: 0.15em !important; font-weight: 600 !important; line-height: 1 !important; }

/* Colors */
.text-primary          { color: #000000 !important; }
.text-secondary        { color: #904a42 !important; }
.text-on-surface       { color: #1b1c1a !important; }
.text-on-surface-variant { color: #444748 !important; }
.bg-background         { background: #fbf9f5 !important; }
.bg-surface            { background: #fbf9f5 !important; }
.bg-surface-container-low { background: #f5f3ef !important; }
.bg-surface-container  { background: #efeeea !important; }
.bg-surface-container-high { background: #e9e8e4 !important; }
.bg-surface-container-lowest { background: #ffffff !important; }
.bg-primary            { background: #000 !important; }
.text-on-primary       { color: #fff !important; }
.text-surface          { color: #fbf9f5 !important; }
.border-outline-variant\\/30 { border-color: rgba(196,199,199,0.3) !important; }
.divide-outline-variant\\/30 > * { border-color: rgba(196,199,199,0.3) !important; }
.bg-outline-variant\\/30 { background: rgba(196,199,199,0.3) !important; }
.border-primary        { border-color: #000 !important; }
.border-secondary      { border-color: #904a42 !important; }

/* Summary marker removal */
summary { list-style: none; }
summary::-webkit-details-marker { display: none; }
`;

// Read each page, inject a <style> tag at the very top of its JSX return
pages.forEach((page) => {
  const filePath = path.join(appDir, page, 'page.tsx');
  if (!fs.existsSync(filePath)) {
    console.log(`  skip: ${page} (not found)`);
    return;
  }

  let content = fs.readFileSync(filePath, 'utf8');

  // Avoid double-injection
  if (content.includes('/* === LAYOUT FIXES === */')) {
    console.log(`  already fixed: ${page}`);
    return;
  }

  // Find the first JSX return's opening fragment or element and inject a style tag
  // We'll prepend a <style> tag right after the <> or the first <div or <section
  const styleTag = `
      <style dangerouslySetInnerHTML={{ __html: \`${globalFixes}\` }} />`;

  // Insert after the opening <> or <<> fragment
  content = content.replace(
    /return\s*\(\s*\n\s*(<>|<React\.Fragment>)/,
    (match, frag) => `return (\n    ${frag}${styleTag}`
  );

  // Also try after <> on the same line as return
  if (!content.includes('/* === LAYOUT FIXES === */')) {
    content = content.replace(
      /return \(\s*<>/,
      `return (\n    <>${styleTag}`
    );
  }

  // Also handle pages that start with a <div or <section immediately
  if (!content.includes('/* === LAYOUT FIXES === */')) {
    content = content.replace(
      /return \(\s*\n(\s*)(<div|<section|<main)/,
      (match, indent, tag) =>
        `return (\n    <>\n      <style dangerouslySetInnerHTML={{ __html: \`${globalFixes}\` }} />\n${indent}${tag}`
    );
  }

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`  fixed: ${page}`);
});

console.log('\nDone!');
