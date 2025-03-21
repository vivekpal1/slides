const fs = require('fs');
const path = require('path');

// Path to slides file
const slidesPath = path.join(__dirname, 'st-build-stn-01', 'src', 'slides.md');

// Content for the fixed slide 6
const fixedSlide = `
---
layout: two-cols
class: px-2
transition: slide-up
growX: 50
growY: 120
growSize: 1.5
---

# Solana's Technical Challenge

<v-clicks>

- High TPS but constrained by read layer bottlenecks
- Merkle Tree computation creates latency spikes 
- 78% of RPC requests concentrate on just 15% of validator nodes
- Storage fragmentation requires 4PB+ for full nodes

</v-clicks>

::right::

<div v-click class="pl-2 mt-12">
  <img src="/solana-bottleneck.png" class="h-60 rounded shadow" alt="Solana Bottleneck" />
  <div class="text-center text-xs mt-1 opacity-50">Solana's Read Layer Bottlenecks</div>
</div>

<!--
The technical challenges that Solana faces with its current architecture
-->
`;

// Read the slides.md file
let content = fs.readFileSync(slidesPath, 'utf8');

// Split by slide separator
const slides = content.split(/---\n/);

// Check if we have enough slides
if (slides.length >= 7) {
  slides[6] = fixedSlide;
  fs.writeFileSync(slidesPath, slides.join('---\n'), 'utf8');
  console.log('Slide 6 replaced successfully');
} else {
  console.error('Could not find slide 6');
  console.log(`Found ${slides.length} slides`);
}