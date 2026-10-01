const fs = require('fs');

let sitemap = fs.readFileSync('sitemap.xml', 'utf8');

// Replace old root URLs with their folder URLs
sitemap = sitemap.replace(
  '<loc>https://servicecenterdindigul.com/ac-repair-service-in-dindigul.html</loc>',
  '<loc>https://servicecenterdindigul.com/ac/ac-repair-service-in-dindigul.html</loc>'
);

sitemap = sitemap.replace(
  '<loc>https://servicecenterdindigul.com/tv-repair-service-in-dindigul.html</loc>',
  '<loc>https://servicecenterdindigul.com/tv/tv-repair-service-in-dindigul.html</loc>'
);

sitemap = sitemap.replace(
  '<loc>https://servicecenterdindigul.com/refrigerator-repair-service-in-dindigul.html</loc>',
  '<loc>https://servicecenterdindigul.com/fridge/refrigerator-repair-service-in-dindigul.html</loc>'
);

// Remove microwave URL if any still exists
sitemap = sitemap.replace(/<url>[\s\S]*?microwave-repair-service-in-dindigul\.html[\s\S]*?<\/url>\s*/g, '');

fs.writeFileSync('sitemap.xml', sitemap, 'utf8');
console.log('Successfully updated sitemap.xml with correct folder URLs');
