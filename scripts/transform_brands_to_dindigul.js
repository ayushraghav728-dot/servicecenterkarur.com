const fs = require('fs');
const path = require('path');

const files = [
  path.join(__dirname, 'wm_brands_1_to_10.js'),
  path.join(__dirname, 'wm_brands_11_to_20.js'),
  path.join(__dirname, 'wm_brands_21_to_30.js')
];

function transformBrandFileContent(content) {
  return content
    // Specific phrases first
    .replace(/Tirunelveli Town and Junction/g, 'Dindigul Town and Nagal Nagar')
    .replace(/Tirunelveli Town/g, 'Dindigul Town')
    .replace(/Palayamkottai, Tirunelveli/g, 'Begampur, Dindigul')
    .replace(/Palayamkottai and Vannarpettai/g, 'Begampur and Oddanchatram')
    .replace(/Palayamkottai, Vannarpettai/g, 'Begampur, Oddanchatram')
    .replace(/South Bypass Road, Palayamkottai/g, 'Main Road, Near Nagal Nagar & RM Colony')
    .replace(/South Bypass Road/g, 'Palani Road Bypass')
    .replace(/Service Center Tirunelveli/g, 'Service Center Dindigul')
    // Locality replacements (1-to-1 word equivalence)
    .replace(/\bPalayamkottai\b/g, 'Begampur')
    .replace(/\bMelapalayam\b/g, 'Seelapadi')
    .replace(/\bPettai\b/g, 'Adiyanuthu')
    .replace(/\bThatchanallur\b/g, 'Chettinaickenpatti')
    .replace(/\bVannarpettai\b/g, 'Oddanchatram')
    .replace(/\bPerumalpuram\b/g, 'Batlagundu')
    .replace(/\bSamathanapuram\b/g, 'Nilakottai')
    .replace(/\bMaharaja Nagar\b/g, 'Round Road')
    .replace(/\bKTC Nagar\b/g, 'GTN Nagar')
    .replace(/\bHigh Ground\b/g, 'Palani Road')
    .replace(/\bVasantha Nagar\b/g, 'Nehruji Nagar')
    .replace(/\bShanthi Nagar\b/g, 'Nagal Nagar')
    .replace(/\bJunction\b/g, 'Nagal Nagar')
    // City names
    .replace(/\bTirunelveli\b/g, 'Dindigul')
    .replace(/\bTIRUNELVELI\b/g, 'DINDIGUL')
    .replace(/\btirunelveli\b/g, 'dindigul');
}

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  content = transformBrandFileContent(content);
  fs.writeFileSync(file, content, 'utf8');
  console.log(`Transformed: ${path.basename(file)}`);
});

console.log("Done transforming brand data files.");
