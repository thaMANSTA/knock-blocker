const fs = require('fs');
const path = require('path');

const crxUrlTemplate = 'https://github.com/thaMANSTA/knock-blocker/releases/download/${APP_VERSION}/knock-blocker-knock-blocker.crx';

// Path to your template and where to output the result
const templatePath = 'dist/knock-blocker-updates.xml';
const outputPath = 'dist/knock-blocker-updates.xml';

const manifestPath = './src/manifest.json';
if (!fs.existsSync(manifestPath)) {
  console.error('Error: manifest.json not found!');
  process.exit(1);
}

// Read and parse manifest.json to extract version and extension id.
const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
const appVersion = manifest.version;

if (!appVersion) {
  console.error('Error: "version" not found in manifest.json!');
  process.exit(1);
}

// Read the template file
if (!fs.existsSync(templatePath)) {
  console.error('template not found!');
  process.exit(1);
}

let templateContent = fs.readFileSync(templatePath, 'utf8');

// Replace placeholders with actual values
crxUrl = crxUrlTemplate.replaceAll('${APP_VERSION}', appVersion);
templateContent = templateContent.replaceAll('${CRX_URL}', crxUrl);
templateContent = templateContent.replaceAll('${APP_VERSION}', appVersion);

// Write out the updated XML file
fs.writeFileSync(outputPath, templateContent, 'utf8');
console.log(`Updated manifest generated: ${outputPath}`);
console.log(`Version: ${appVersion}`);
console.log(`CRX URL: ${crxUrl}`);
