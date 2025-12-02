import sharp from 'sharp';
import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

const svgPath = join(process.cwd(), 'app', 'icon.svg');
const appDir = join(process.cwd(), 'app');

// Read SVG
const svgBuffer = readFileSync(svgPath);

// Generate PNG (512x512)
const png512 = await sharp(svgBuffer)
  .resize(512, 512)
  .png()
  .toBuffer();

writeFileSync(join(appDir, 'icon.png'), png512);
console.log('✓ Created app/icon.png (512x512)');

// Generate ICO with multiple sizes
// ICO format requires multiple embedded sizes
const sizes = [16, 32, 48];
const icoImages = [];

for (const size of sizes) {
  const resized = await sharp(svgBuffer)
    .resize(size, size)
    .png()
    .toBuffer();
  icoImages.push({ size, buffer: resized });
}

// Create ICO file - sharp doesn't directly support ICO, so we'll create PNGs and use a workaround
// For ICO, we'll create a multi-resolution ICO manually or use the largest PNG as favicon.ico
// Actually, let's create the ICO using a different approach - we can use sharp to create PNGs and then combine them
// But for simplicity, let's create favicon.ico as a 32x32 PNG renamed (browsers accept this)
const ico32 = await sharp(svgBuffer)
  .resize(32, 32)
  .png()
  .toBuffer();

writeFileSync(join(appDir, 'favicon.ico'), ico32);
console.log('✓ Created app/favicon.ico (32x32)');

// Also create individual PNG sizes for better compatibility
for (const size of sizes) {
  const resized = await sharp(svgBuffer)
    .resize(size, size)
    .png()
    .toBuffer();
  writeFileSync(join(appDir, `favicon-${size}x${size}.png`), resized);
  console.log(`✓ Created app/favicon-${size}x${size}.png`);
}

// Create apple-touch-icon (180x180)
const appleIcon = await sharp(svgBuffer)
  .resize(180, 180)
  .png()
  .toBuffer();

writeFileSync(join(appDir, 'apple-touch-icon.png'), appleIcon);
console.log('✓ Created app/apple-touch-icon.png (180x180)');

console.log('\n✅ All favicon files generated successfully!');

