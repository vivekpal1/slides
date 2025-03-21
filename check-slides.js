// check-slides.js
const fs = require('fs');
const path = require('path');

const slidesPath = path.join(__dirname, 'st-build-stn-01', 'src', 'slides.md');
const content = fs.readFileSync(slidesPath, 'utf8');
const slides = content.split('---');

// Output slide 6 for inspection
console.log("=== SLIDE 6 ===");
console.log(slides[6]);
console.log("=== END OF SLIDE 6 ===");

// Count HTML tags to help identify issues
const openDivs = (slides[6].match(/<div/g) || []).length;
const closeDivs = (slides[6].match(/<\/div>/g) || []).length;
console.log(`Open divs: ${openDivs}, Close divs: ${closeDivs}`);

// Look for other potential issues
const unclosedTags = slides[6].match(/<([a-z][a-z0-9]*)[^<]*(?:>|$)/gi) || [];
const closedTags = slides[6].match(/<\/([a-z][a-z0-9]*)[^<]*(?:>|$)/gi) || [];
console.log(`Total open tags: ${unclosedTags.length}, Total close tags: ${closedTags.length}`);