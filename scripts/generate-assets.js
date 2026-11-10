import sharp from 'sharp';
import fs from 'node:fs';
import path from 'node:path';

const svgForPng = (size, rx, strokeW, dotR, dotY) => `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="${size}" height="${size}" fill="none">
  <rect width="32" height="32" rx="${rx}" fill="#181614" />
  <path d="M8 22V10.5L16 17.5L24 10.5V22" stroke="#FAF8F5" stroke-width="${strokeW}" stroke-linecap="round" stroke-linejoin="round" fill="none" />
  <circle cx="24" cy="${dotY}" r="${dotR}" fill="#B27B48" />
</svg>`;

async function run() {
  const svg32 = svgForPng(32, 8, 2.75, 1.75, 7);
  const svg16 = svgForPng(16, 4, 3, 2, 6.5);
  const svg180 = svgForPng(180, 7, 2.75, 1.75, 7);

  const buf32 = await sharp(Buffer.from(svg32)).resize(32, 32).png().toBuffer();
  const buf16 = await sharp(Buffer.from(svg16)).resize(16, 16).png().toBuffer();
  const buf180 = await sharp(Buffer.from(svg180)).resize(180, 180).png().toBuffer();

  fs.writeFileSync('public/favicon-32x32.png', buf32);
  fs.writeFileSync('public/favicon-16x16.png', buf16);
  fs.writeFileSync('public/apple-touch-icon.png', buf180);

  // Create favicon.ico with 32x32 PNG payload
  const icoHeader = Buffer.alloc(22);
  icoHeader.writeUInt16LE(0, 0); // reserved
  icoHeader.writeUInt16LE(1, 2); // type 1: ico
  icoHeader.writeUInt16LE(1, 4); // 1 image
  icoHeader.writeUInt8(32, 6);   // width
  icoHeader.writeUInt8(32, 7);   // height
  icoHeader.writeUInt8(0, 8);    // color count
  icoHeader.writeUInt8(0, 9);    // reserved
  icoHeader.writeUInt16LE(1, 10); // color planes
  icoHeader.writeUInt16LE(32, 12); // bpp
  icoHeader.writeUInt32LE(buf32.length, 14); // image size
  icoHeader.writeUInt32LE(22, 18); // offset
  const ico = Buffer.concat([icoHeader, buf32]);
  fs.writeFileSync('public/favicon.ico', ico);

  // Generate og-image.png (1200x630)
  const ogSvg = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630" fill="none">
  <defs>
    <radialGradient id="radial" cx="20%" cy="30%" r="70%" fx="20%" fy="30%">
      <stop offset="0%" stop-color="#262320" />
      <stop offset="100%" stop-color="#121110" />
    </radialGradient>
    <linearGradient id="glow" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#B27B48" stop-opacity="0.25" />
      <stop offset="100%" stop-color="#B27B48" stop-opacity="0" />
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="630" fill="url(#radial)" />
  <rect width="1200" height="630" fill="url(#glow)" />

  <!-- Subtle grid lines -->
  <line x1="80" y1="0" x2="80" y2="630" stroke="#FAF8F5" stroke-opacity="0.04" stroke-width="1" />
  <line x1="1120" y1="0" x2="1120" y2="630" stroke="#FAF8F5" stroke-opacity="0.04" stroke-width="1" />
  <line x1="0" y1="520" x2="1200" y2="520" stroke="#FAF8F5" stroke-opacity="0.04" stroke-width="1" />

  <!-- Badge / Monogram -->
  <g transform="translate(100, 100)">
    <circle cx="28" cy="28" r="28" fill="#FAF8F5" />
    <text x="28" y="35" fill="#181614" font-family="system-ui, -apple-system, sans-serif" font-size="18" font-weight="700" letter-spacing="1" text-anchor="middle">M.A</text>
  </g>

  <!-- Name & Archetype -->
  <text x="175" y="136" fill="#FAF8F5" font-family="system-ui, -apple-system, sans-serif" font-size="28" font-weight="600" letter-spacing="-0.5">Mohit</text>
  <text x="265" y="136" fill="#A39D92" font-family="system-ui, -apple-system, sans-serif" font-size="24" font-weight="400">•</text>
  <text x="285" y="136" fill="#B27B48" font-family="system-ui, -apple-system, sans-serif" font-size="24" font-weight="500">Merta, Rajasthan</text>

  <!-- Big Hero Headline -->
  <text x="100" y="270" fill="#FAF8F5" font-family="system-ui, -apple-system, sans-serif" font-size="64" font-weight="700" letter-spacing="-1.5">Rooted in Soil.</text>
  <text x="100" y="350" fill="#E8DEC8" font-family="system-ui, -apple-system, sans-serif" font-size="64" font-weight="700" letter-spacing="-1.5">Awakened in Mind.</text>

  <!-- Description -->
  <text x="100" y="430" fill="#A39D92" font-family="system-ui, -apple-system, sans-serif" font-size="26" font-weight="400">Half Farmer • Half Solution Architect</text>
  <text x="100" y="470" fill="#787268" font-family="system-ui, -apple-system, sans-serif" font-size="20" font-weight="400">Regenerative Agriculture • Distributed Systems • Advaita &amp; Systems Philosophy</text>

  <!-- Footer indicator -->
  <circle cx="100" cy="565" r="5" fill="#B27B48" />
  <text x="120" y="571" fill="#A39D92" font-family="monospace" font-size="16" letter-spacing="1">PERSISTENT EQUILIBRIUM</text>
</svg>`;

  const bufOg = await sharp(Buffer.from(ogSvg)).resize(1200, 630).png().toBuffer();
  fs.writeFileSync('public/og-image.png', bufOg);

  console.log('All icons and Open Graph card generated successfully!');
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
