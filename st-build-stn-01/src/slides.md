---
theme: default
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## Decentralizing Solana's Data Horizon
  Windexer's Architecture for Scalable State Management
drawings:
  persist: false
  syncAll: true
transition: fade-out
title: Windexer - Solana's Data Solution
download: true
exportFilename: "windexer-presentation"
selectable: true
record: false
presenter: true
hideInToc: true
aspectRatio: 16/9
canvasWidth: 980
---

# <span class="solana-gradient">Decentralizing Solana's Data Horizon</span>

<div class="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
  <div class="floating-blob purple"></div>
  <div class="floating-blob cyan"></div>
  <div class="floating-blob green"></div>
</div>

## Windexer's Architecture for Scalable State Management

<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-4 py-2 rounded cursor-pointer animate-float bg-gradient-to-r from-purple-600/20 to-cyan-400/20 hover:from-purple-600/40 hover:to-cyan-400/40">
    Start Presentation <mdi-arrow-right class="inline ml-2"/>
  </span>
</div>

<div class="abs-br m-6 flex gap-2">
  <a href="https://github.com/aletheialabs/windexer" target="_blank" class="text-xl icon-btn opacity-50 !border-none !hover:text-white">
    <mdi-github />
  </a>
</div>

<div class="abs-bl m-6 flex gap-2 text-sm opacity-50">
  Press <kbd>space</kbd> to continue | <kbd>o</kbd> for overview | <kbd>d</kbd> for dark mode
</div>

<div class="gradient-cursor-follow" v-motion></div>

<script setup>
// Track cursor for gradient effect
const { x, y } = useMouse()
const updateCursorGradient = () => {
  const gradientEl = document.querySelector('.gradient-cursor-follow')
  if (!gradientEl) return
  gradientEl.style.setProperty('--x', `${x.value}px`)
  gradientEl.style.setProperty('--y', `${y.value}px`)
  gradientEl.classList.add('active')
}

// Update on mouse move
useEventListener('mousemove', updateCursorGradient)
</script>

<!--
Welcome to this presentation on Windexer - a solution for Solana's data scaling challenges.
In this talk, we'll explore the challenges Solana faces and how Windexer addresses them.
-->

---
layout: intro
clicks: 3
preload: false
---

# <div class="mb-8">Table of Contents</div>

<Toc class="text-lg" maxDepth="1" mode="all" />

<v-clicks at="1">

- Navigate with arrow keys or space bar
- Press <kbd>o</kbd> for a slide overview 
- Press <kbd>d</kbd> to toggle dark mode

</v-clicks>

<div class="absolute bottom-10">
  <span class="opacity-50 text-sm">Slide 2 / 9</span>
</div>

<div class="abs-tr m-6">
  <SlideCurrentNo />/<SlidesTotal />
</div>

<!--
This presentation is organized into several key sections.
We'll begin with an overview of Solana's technical challenges,
explore the solutions Windexer provides, and conclude with results.
-->

---
layout: center
transition: slide-up
---

# <span class="solana-gradient">Executive Summary</span>

<div class="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
  <div class="floating-blob purple"></div>
  <div class="floating-blob cyan"></div>
</div>

<arrow v-click x1="400" y1="300" x2="230" y2="230" color="#564" width="3" arrowSize="1" />

<!--
Let's start with a brief executive summary of what Windexer aims to solve.
Solana is facing several data challenges that Windexer addresses through its architecture.
-->

---
layout: default
clicks: 5
transition: slide-left
---

# Executive Summary

<div class="grid grid-cols-1 gap-6">
  <div v-click class="card-solana p-4 glossy-card">
    <h3 class="solana-gradient font-bold">High-Performance Blockchain</h3>
    <p>Solana is still the fastest scalable Layer 1 high throughput blockchain, but real-world performance drops significantly under congestion</p>
  </div>
  
  <div v-click class="card-solana p-4 glossy-card">
    <h3 class="solana-gradient font-bold">Centralization Risk</h3>
    <p>Centralized RPC providers create single points of failure</p>
  </div>

  <div v-click class="card-solana p-4 glossy-card">
    <h3 class="solana-gradient font-bold">Indexing Challenges</h3>
    <p>Inadequate indexing solutions struggle with MEV-heavy transaction flows</p>
  </div>

  <div v-click class="card-solana p-4 glossy-card">
    <h3 class="solana-gradient font-bold twinkle">Windexer Solution</h3>
    <p>Distributed processing network aiming for 10,000+ RPS and sub-100ms latency</p>
  </div>
</div>

<div class="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
  <div class="floating-blob purple"></div>
</div>

---
layout: default
transition: slide-up
---

<div v-click class="mt-12 flex justify-center">
  <img src="/windexer-overview.png" class="h-40 rounded shadow animate-float" />
</div>

<BarBottom title="Windexer: Solana's Data Solution" :progress="4/9">
  <item text="Slide 4 of 9" />
  <item text="Press g to go to specific slide" />
</BarBottom>

<div class="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
  <div class="floating-blob green"></div>
</div>

<!--
Here are the four key challenges Solana faces today:
1. While Solana has impressive throughput, real-world performance suffers
2. Centralized RPC providers introduce points of failure
3. Current indexers struggle with complex transaction flows
4. Windexer aims to solve these with a distributed approach
-->

---
layout: two-cols
class: px-2
clicks: 4
---

# <span class="solana-gradient">AI/ML Use Cases Enabled</span>

<div>
  <h2 class="mt-4">Real-Time MEV Detection</h2>
  
  <ul class="mt-4">
    <li v-click class="backdrop-blur-sm bg-white/5 p-2 rounded my-2">150+ on-chain signals per transaction</li>
    <li v-click class="backdrop-blur-sm bg-white/5 p-2 rounded my-2">Tensor processing via neural networks</li>
    <li v-click class="backdrop-blur-sm bg-white/5 p-2 rounded my-2">50ms inference latency using quantized models</li>
    <li v-click class="backdrop-blur-sm bg-white/5 p-2 rounded my-2">ZK-proofs for model integrity</li>
  </ul>
</div>

<Marker class="absolute top-1/2 left-1/4" v-click />

::right::

<div class="mt-2">
  <div v-click>
    <h2 class="text-green-400">Autonomous Agent Infrastructure</h2>
    
    ```python {all|2|3-4|6-8|10-11}
    class AgentSession:
        def __init__(self, windexer_node):
            self.context = windexer_node.create_session()
            self.model = load_onnx("agent_model.onnx")
            
        def process_transaction(self, tx):
            features = self.context.extract(tx)
            action = self.model.predict(features)
            
            # Execute action on-chain
            self.context.execute(action)
    ```
  </div>

  <div class="mt-6">
    <ul>
      <li v-click class="flex items-center backdrop-blur-sm bg-white/5 p-2 rounded my-2">
        <span class="text-orange-400 mr-2">⚡</span> Sharded dataset processing across 100+ nodes
      </li>
      <li v-click class="flex items-center backdrop-blur-sm bg-white/5 p-2 rounded my-2">
        <span class="text-purple-400 mr-2">🔒</span> Federated averaging with differential privacy
      </li>
    </ul>
  </div>
</div>

<div class="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
  <div class="floating-blob cyan"></div>
</div>

<arrow v-after x1="450" y1="160" x2="650" y2="220" />

<PageNumber />

<!--
Windexer enables powerful AI/ML use cases on Solana:

- Real-time MEV detection with over 150 on-chain signals per transaction
- Neural networks can process data using tensor operations
- Low latency inference (50ms) is achieved through model quantization
- Zero-knowledge proofs ensure model integrity

The right side shows the code for an agent session that can:
1. Initialize with a Windexer node
2. Process transactions
3. Extract features and make predictions
4. Execute actions on-chain based on those predictions
-->

---
layout: default
clicks: 10
transition: fade-out
---

# <span class="solana-gradient">Conclusion: Building the Data Mesh</span>

<div class="grid grid-cols-3 gap-4 mt-6">

<div v-click class="p-4 rounded shadow-md bg-gradient-to-br from-blue-500/30 to-blue-600/10 glossy-card">
  <h3 class="text-blue-400 text-center">Horizontal Scaling</h3>
  <div class="text-4xl text-center font-bold mt-2">10x</div>
  <div class="text-center text-sm mt-2">Throughput gains over centralized RPCs</div>
</div>

<div v-click class="p-4 rounded shadow-md bg-gradient-to-br from-green-500/30 to-green-600/10 glossy-card">
  <h3 class="text-green-400 text-center">Cost Efficiency</h3>
  <div class="text-4xl text-center font-bold mt-2">70%</div>
  <div class="text-center text-sm mt-2">Reduction in storage expenses via Filecoin</div>
</div>

<div v-click class="p-4 rounded shadow-md bg-gradient-to-br from-purple-500/30 to-purple-600/10 glossy-card">
  <h3 class="text-purple-400 text-center">AI Enablement</h3>
  <div class="text-center mt-2"><mdi-brain class="text-4xl" /></div>
  <div class="text-center text-sm mt-2">First decentralized MLops platform on SVM</div>
</div>

</div>

<div v-click class="mt-8 border-t border-gray-500 border-opacity-20 pt-4">
  <h3 class="text-xl">Developers building on Windexer gain access to:</h3>
  <ul class="mt-2">
    <li v-click class="flex items-center backdrop-blur-sm bg-white/5 p-2 rounded my-2">
      <mdi-clock class="text-green-500 mr-2" /> Sub-100ms historical queries
    </li>
    <li v-click class="flex items-center backdrop-blur-sm bg-white/5 p-2 rounded my-2">
      <mdi-shield class="text-blue-500 mr-2" /> ZK-verified computation proofs
    </li>
    <li v-click class="flex items-center backdrop-blur-sm bg-white/5 p-2 rounded my-2">
      <mdi-link class="text-purple-500 mr-2" /> Cross-chain state transition pipelines
    </li>
  </ul>
</div>

<div v-click class="mt-6 text-center italic opacity-80 card-solana p-4">
  "The Wind Network's modular design positions it as the foundational layer for Solana's next billion users"
</div>

<div class="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
  <div class="floating-blob green"></div>
  <div class="floating-blob purple"></div>
</div>

<BarBottom :progress="8/9" />

<!--
In conclusion, Windexer delivers three key benefits:

1. Horizontal Scaling: 10x throughput gains over centralized RPC providers
2. Cost Efficiency: 70% reduction in storage costs by leveraging Filecoin
3. AI Enablement: The first decentralized MLops platform for Solana

Developers using Windexer get:
- Sub-100ms historical queries
- Zero-knowledge verified computation proofs
- Cross-chain state transition pipelines

This positions Windexer as the foundational layer for Solana's next billion users.
-->

---
layout: end
class: text-center
---

# <span class="solana-gradient">Thank You!</span>

<div class="flex justify-center space-x-8 mt-8 z-10">
  <a href="https://windexer.xyz" target="_blank" class="flex items-center glossy-card p-3 rounded">
    <mdi-web class="mr-2" /> windexer.xyz
  </a>
  <a href="https://github.com/aletheialabs/windexer" target="_blank" class="flex items-center glossy-card p-3 rounded">
    <mdi-github class="mr-2" /> GitHub
  </a>
  <a href="https://docs.windexer.xyz" target="_blank" class="flex items-center glossy-card p-3 rounded">
    <mdi-file-document class="mr-2" /> Documentation
  </a>
</div>

<div class="mt-12 text-sm opacity-70 z-10">
  <p>References available upon request</p>
  <p class="mt-2">Contact: <a href="mailto:info@windexer.xyz">info@windexer.xyz</a></p>
</div>

<div class="absolute bottom-4 right-4 text-xs opacity-60 flex items-center">
  <button @click="$slidev.nav.first" class="icon-btn opacity-50 !border-none !hover:text-white">
    <mdi-restart />
  </button>
  Press <kbd>r</kbd> to restart | <kbd>g</kbd> to navigate
</div>

<div class="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
  <div class="floating-blob purple"></div>
  <div class="floating-blob cyan"></div>
  <div class="floating-blob green"></div>
</div>

<BarBottom title="Thanks for attending!" :progress="9/9" />

<!--
Thank you for your attention!

Please visit our website, GitHub repository, or documentation for more information.
Feel free to reach out if you have any questions or want to learn more about Windexer.
-->