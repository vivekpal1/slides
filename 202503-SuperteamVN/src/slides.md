---
theme: default
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## Decentralizing Solana's Data Infrastructure
  Windexer's Architecture for Scalable State Management
drawings:
  persist: false
  syncAll: true
transition: fade-out
clicks: 1
routerMode: hash
title: Windexer - Solana's Data Solution
download: true
selectable: true
---

# <span class="solana-gradient">Decentralizing Solana's Data Horizon</span>

## Windexer's Architecture for Scalable State Management

<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-2 py-1 rounded cursor-pointer animate-float" hover="bg-white bg-opacity-10">
    Workshop <carbon:arrow-right class="inline"/>
  </span>
</div>

<div class="abs-br m-6 flex gap-2">
  <button @click="$slidev.nav.openInEditor()" title="Open in Editor" class="text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white">
    <carbon:edit />
  </button>
</div>

<!--
Welcome to this workshop on Decentralizing Solana's Data Horizon!
-->

---
transition: fade-out
growX: 10
growY: 90
---

# Executive Summary

<v-clicks>

- Solana is still fastest scalable Layer 1 high throughput blockchain, but real-world performance drops highly lower under congestion
  
- Centralized RPC providers create single points of failure

- Inadequate indexing solutions struggle with MEV-heavy transaction flows

- Windexer solution: distributed processing network aiming for 10,000+ RPS and sub-100ms latency

</v-clicks>

<div v-click="5" class="mt-12 flex justify-center">
  <img src="/windexer-overview.png" class="h-40 rounded shadow" />
</div>

<!--
Key points about the current state of Solana and the Windexer solution
-->
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

---
layout: default
transition: fade
growX: 10
growY: 30
---

# The Four Horsemen of Solana's Data Apocalypse

<div class="grid grid-cols-2 gap-4 mt-4">

<div v-click class="p-4 bg-blue-500 bg-opacity-10 rounded">
  <h3 class="text-blue-400">1. RPC Node Congestion</h3>
  <ul class="text-sm mt-2">
    <li>500-800ms response latency (vs. 50ms SLA)</li>
    <li>30-50% transaction timeouts</li>
    <li>70% failure rate on `getProgramAccounts` calls</li>
  </ul>
</div>

<div v-click class="p-4 bg-green-500 bg-opacity-10 rounded">
  <h3 class="text-green-400">2. Indexer Fragmentation</h3>
  <div class="text-sm mt-2">
    <table class="text-xs w-full">
      <tr><th>Protocol</th><th>Throughput</th><th>Latency</th><th>Decentralization</th></tr>
      <tr><td>Centralized RPCs</td><td>300 RPS</td><td>120ms</td><td>Low</td></tr>
      <tr><td>Metaplex Aura</td><td>1,200 RPS</td><td>250ms</td><td>Medium</td></tr>
      <tr><td>Windexer</td><td>10,000 RPS</td><td>80ms</td><td>High</td></tr>
    </table>
  </div>
</div>

<div v-click class="p-4 bg-yellow-500 bg-opacity-10 rounded">
  <h3 class="text-yellow-400">3. Storage-Calc Disconnect</h3>
  <ul class="text-sm mt-2">
    <li>Filecoin cold storage: 2-5 second retrieval delays</li>
    <li>Solana state growth: 4.2PB/year</li>
    <li>Prohibitively expensive full-node operation</li>
  </ul>
</div>

<div v-click class="p-4 bg-red-500 bg-opacity-10 rounded">
  <h3 class="text-red-400">4. Data Access Latency</h3>
  <ul class="text-sm mt-2">
    <li>Average query time: 250-400ms</li>
    <li>99th percentile spikes to 2-3 seconds</li>
    <li>Inconsistent global access patterns</li>
  </ul>
</div>

</div>

<!--
The key challenges that Solana faces with its data architecture
-->

---
layout: center
class: text-center
transition: slide-left
growX: 50
growY: 10
---

# Windexer's Technical Architecture

<img v-click src="/windexer-architecture.png" class="h-60 mx-auto my-8 rounded shadow" />

<div v-click class="opacity-80 italic">
  "A distributed processing network combining libp2p gossipsub architecture, Filecoin's hot storage innovations, and modular execution environments"
</div>

<!--
Introduction to the Windexer architecture
-->

---
layout: default
transition: fade
---

# The IPDM Protocol Stack

- Gossipsub Mesh for high-throughput data distribution
- WASM Processing Modules for deterministic execution
- Hot Storage Integration with Filecoin for cost efficiency

```js
// Simple example code
function process_block(block) {
  const data = fetch_data(block.hash);
  return process_data(data);
}
```

<!--
Deep dive into the IPDM Protocol Stack
-->

---
transition: slide-up
layout: default
growX: 50
growY: 120
---

# Wind Network: Modular Architecture

<div class="grid grid-cols-2 gap-4 mt-4">

<div v-click class="p-4 border border-blue-500 border-opacity-30 rounded">
  <h3 class="text-blue-400">1. Decentralized Control Plane</h3>
  <ul class="text-sm mt-2">
    <li>Proof-of-Stake consensus over indexer nodes</li>
    <li>Token-incentivized task distribution</li>
    <li class="text-xs opacity-70 mt-1">Reward = Stake × log(Throughput)</li>
  </ul>
</div>

<div v-click class="p-4 border border-green-500 border-opacity-30 rounded">
  <h3 class="text-green-400">2. Elastic Processing Units</h3>
  <ul class="text-sm mt-2">
    <li>FPGA-accelerated WASM runtime</li>
    <li>Dynamic resource allocation</li>
    <li class="text-xs opacity-70 mt-1">W<sub>t</sub> = W<sub>base</sub> × (1 + αL<sub>t</sub> + βT<sub>t</sub>)</li>
  </ul>
</div>

<div v-click class="p-4 border border-yellow-500 border-opacity-30 rounded">
  <h3 class="text-yellow-400">3. Cross-Chain State Bridges</h3>
  <ul class="text-sm mt-2">
    <li>SVM-compatible execution environments</li>
    <li>Filecoin Data Lakes for multi-chain analytics</li>
    <li>Interoperability with Ethereum and Cosmos</li>
  </ul>
</div>

<div v-click class="p-4 border border-red-500 border-opacity-30 rounded">
  <h3 class="text-red-400">4. AI-Ready Infrastructure</h3>
  <ul class="text-sm mt-2">
    <li>ONNX runtime integration</li>
    <li>Federated learning pools over indexed data</li>
    <li>Privacy-preserving computation</li>
  </ul>
</div>

</div>

<div v-click class="mt-6 text-center text-sm opacity-80 italic">
  "The modular design positions Wind Network as the foundational layer for Solana's next billion users"
</div>

<!--
The four pillars of the Wind Network modular architecture
-->

---
layout: two-cols
class: px-2
transition: slide-left
growX: 10
growY: 90
---

# AI/ML Use Cases Enabled

<v-clicks>

## Real-Time MEV Detection

- 150+ on-chain signals per transaction
- Tensor processing via neural networks
- 50ms inference latency using quantized models
- ZK-proofs for model integrity

</v-clicks>

::right::

<div class="mt-2">
  <div v-click>
    <h2 class="text-green-400">Autonomous Agent Infrastructure</h2>
    
    ```python
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
      <li v-click>Sharded dataset processing across 100+ nodes</li>
      <li v-click>Federated averaging with differential privacy</li>
    </ul>
  </div>
</div>

<!--
AI and ML use cases that Windexer enables on Solana
-->

---
layout: center
class: text-center
transition: fade-out
growX: 50
growY: 120
growSize: 1.5
---

# The Future of Computation-Over-Data

<div v-click>
  <img src="/filecoin-svm-synergy.png" class="h-60 mx-auto my-8 rounded shadow" />
</div>

<div class="grid grid-cols-3 gap-4 text-sm">
  <div v-click class="p-4 bg-blue-500 bg-opacity-10 rounded">
    <h4 class="text-blue-400">L2 Execution Subnets</h4>
    <ul class="text-xs mt-2 text-left">
      <li>IPC-powered ephemeral networks</li>
      <li>Batch MEV auction processing</li>
      <li>Privacy-preserving DAO votes</li>
    </ul>
  </div>

  <div v-click class="p-4 bg-green-500 bg-opacity-10 rounded">
    <h4 class="text-green-400">Data Provenance Chains</h4>
    <ul class="text-xs mt-2 text-left">
      <li>Filecoin-backed merkle trees</li>
      <li>Model training traceability</li>
      <li>Verifiable computation history</li>
    </ul>
  </div>

  <div v-click class="p-4 bg-yellow-500 bg-opacity-10 rounded">
    <h4 class="text-yellow-400">Decentralized Feature Store</h4>
    <ul class="text-xs mt-2 text-left">
      <li>Community-curated data assets</li>
      <li>Staking economics for data quality</li>
      <li>Cross-chain feature integration</li>
    </ul>
  </div>
</div>

<!--
Future directions for the Windexer ecosystem
-->

---
layout: default
transition: slide-up
growX: 10
growY: 30
---

# Conclusion: Building the Data Mesh

<div class="grid grid-cols-3 gap-4 mt-6">

<div v-click class="p-4 rounded shadow-md bg-gradient-to-br from-blue-500/30 to-blue-600/10">
  <h3 class="text-blue-400 text-center">Horizontal Scaling</h3>
  <div class="text-4xl text-center font-bold mt-2">10x</div>
  <div class="text-center text-sm mt-2">Throughput gains over centralized RPCs</div>
</div>

<div v-click class="p-4 rounded shadow-md bg-gradient-to-br from-green-500/30 to-green-600/10">
  <h3 class="text-green-400 text-center">Cost Efficiency</h3>
  <div class="text-4xl text-center font-bold mt-2">70%</div>
  <div class="text-center text-sm mt-2">Reduction in storage expenses via Filecoin</div>
</div>

<div v-click class="p-4 rounded shadow-md bg-gradient-to-br from-purple-500/30 to-purple-600/10">
  <h3 class="text-purple-400 text-center">AI Enablement</h3>
  <div class="text-center mt-2"><carbon:machine-learning class="text-4xl" /></div>
  <div class="text-center text-sm mt-2">First decentralized MLops platform on SVM</div>
</div>

</div>

<div v-click class="mt-8 border-t border-gray-500 border-opacity-20 pt-4">
  <h3 class="text-xl">Developers building on Windexer gain access to:</h3>
  <ul class="mt-2">
    <li v-click>Sub-100ms historical queries</li>
    <li v-click>ZK-verified computation proofs</li>
    <li v-click>Cross-chain state transition pipelines</li>
  </ul>
</div>

<div v-click class="mt-6 text-center italic opacity-80">
  "The Wind Network's modular design positions it as the foundational layer for Solana's next billion users - where every byte processed advances decentralized intelligence."
</div>

<!--
Summarizing the key benefits and innovations of Windexer
-->

---
layout: end
class: text-center
growX: 50
growY: 10
---

# Thank You!

[windexer.xyz](https://windexer.xyz) · [GitHub](https://github.com/aletheialabs/windexer) · [Documentation](https://docs.windexer.xyz)

<div class="mt-8 text-sm opacity-70">
  References available upon request
</div>