---
theme: seriph
background: ''
highlighter: shiki
lineNumbers: false
info: |
  RPCv2 and Solana's Data Overhaul
drawings:
  persist: false
css: unocss
fonts:
  sans: 'Inter'
  mono: 'JetBrains Mono'
title: 'RPCv2 and Solana Data Overhaul'
class: 'text-center'
transition: slide-left
mdc: true
download: false
selectable: true
record: true
---

<style>
.slidev-layout h1 {
  color: #14F195;
}
.slidev-layout h2 {
  color: #9945FF;
}
.highlight {
  color: #14F195;
  font-weight: bold;
}
.problem {
  color: #FF6B6B;
  font-weight: bold;
}
.solution {
  color: #4ECDC4;
  font-weight: bold;
}
pre {
  background: #1a1a1a !important;
}
</style>

# <span class="">RPCv2 and Solana's Data Overhaul</span>

## Fixing the $70k/month problem

<div class="text-2xl mt-8 mb-8">
  <span class="">How Solana is rebuilding its data access layer from scratch</span>
</div>

**by Vivek**

**Technical Weekly Sharing | 24/09/2025**

---

# The Current Reality

## What it costs to run Solana RPC today

<div class="grid grid-cols-2 gap-8 mt-8">
<div>

### Monthly Costs
- **BigTable Storage:** $50k
- **Compute:** $15k
- **Network:** $5k
- **Total:** <span class="problem">$70k/month</span>

</div>
<div>

### Hardware Requirements
- **256-512GB RAM**
- **32-64 CPU cores**
- **10-20TB NVMe**
- **10Gbps+ network**

</div>
</div>

<div class="mt-8 text-xl">

**Result:** Only 3-4 providers can afford to serve historical data

</div>

---

# What's Actually Breaking

## Real problems RPC providers face daily

<div class="mt-8">

### 1. getProgramAccounts Timeouts
- Raydium queries take **30+ seconds** or timeout completely
- Some providers run **dedicated RPCs** just for specific programs

### 2. Database Explosion
- **2.3 trillion** transaction signatures stored
- **1TB of new data per day**
- Storage growing exponentially

### 3. Monolithic Architecture
- Can't use cheaper storage (locked to BigTable)
- Can't optimize specific queries
- Can't scale components independently

</div>

---

# The Waste Problem

## Running a full validator just to stream data

```mermaid
%%{init: {'theme':'dark', 'themeVariables': { 'primaryColor': '#8B9DC3', 'primaryTextColor': '#ffffff', 'primaryBorderColor': '#8B9DC3', 'lineColor': '#6B7FBB'}}}%%
graph TB
    subgraph V["Full Validator (Waste)"]
        A[Gossip ✓]
        B[Turbine ✓]
        C[Transaction Processing ✗]
        D[Banking Stage ✗]
        E[PoH Verification ✗]
        F[Vote Processing ✗]
        G[RocksDB 10TB+ ✗]
    end
    
    subgraph R["RPC Needs"]
        H[Gossip]
        I[Turbine]
        J[Done.]
    end
    
    style A fill:#8B9DC3,stroke:#8B9DC3,color:#fff
    style B fill:#8B9DC3,stroke:#8B9DC3,color:#fff
    style C fill:#C44569,stroke:#C44569,color:#fff
    style D fill:#C44569,stroke:#C44569,color:#fff
    style E fill:#C44569,stroke:#C44569,color:#fff
    style F fill:#C44569,stroke:#C44569,color:#fff
    style G fill:#C44569,stroke:#C44569,color:#fff
    style H fill:#8B9DC3,stroke:#8B9DC3,color:#fff
    style I fill:#8B9DC3,stroke:#8B9DC3,color:#fff
    style J fill:#7F8FA6,stroke:#7F8FA6,color:#fff
```

<div class="mt-8 text-xl">

**90% of resources wasted** on unnecessary processing

**3,200 non-voting validators** clogging the gossip network

</div>

---

# RPCv2: The Solution

## Split the problem into three specialized services

```mermaid
%%{init: {'theme':'dark', 'themeVariables': { 'primaryColor': '#8B9DC3', 'primaryTextColor': '#ffffff', 'primaryBorderColor': '#8B9DC3', 'lineColor': '#6B7FBB'}}}%%
graph TD
    A[Solana Validator] --> B[Data Stream]
    
    B --> C[Accounts Domain<br/>Real-time State]
    B --> D[Historical Domain<br/>Past Data]  
    B --> E[Streaming Node<br/>Data Relay]
    
    style A fill:#7F8FA6,stroke:#7F8FA6,color:#fff
    style B fill:#E8E8E8,stroke:#E8E8E8,color:#000
    style C fill:#8B9DC3,stroke:#8B9DC3,color:#fff
    style D fill:#6B7FBB,stroke:#6B7FBB,color:#fff
    style E fill:#A1AABA,stroke:#A1AABA,color:#fff
```

<div class="mt-8 text-xl text-center">

Each service optimized for its specific job

</div>

---

# Accounts Domain (What We're Building)

## Serving real-time account data efficiently

<div class="mt-8">

### Current Problems
- Account queries timeout under load
- No proper indexing for program accounts
- Geyser plugins crash validators

### Our Solution Architecture

```mermaid
%%{init: {'theme':'dark', 'themeVariables': { 'primaryColor': '#8B9DC3', 'primaryTextColor': '#ffffff', 'primaryBorderColor': '#8B9DC3', 'lineColor': '#6B7FBB'}}}%%
graph LR
    A[Validator] --> B[Geyser Stream]
    B --> C[Event Bus]
    C --> D[Storage]
    
    D --> E[ScyllaDB<br/>States]
    D --> F[ClickHouse<br/>Indexes]  
    D --> G[Redis<br/>Cache]
    
    E --> H[RPC API]
    F --> H
    G --> H
    H --> I[Clients]
    
    style A fill:#7F8FA6,stroke:#7F8FA6,color:#fff
    style B fill:#8B9DC3,stroke:#8B9DC3,color:#fff
    style C fill:#6B7FBB,stroke:#6B7FBB,color:#fff
    style D fill:#E8E8E8,stroke:#E8E8E8,color:#000
    style E fill:#A1AABA,stroke:#A1AABA,color:#fff
    style F fill:#9AA5C2,stroke:#9AA5C2,color:#fff
    style G fill:#BBBFC7,stroke:#BBBFC7,color:#000
    style H fill:#8B9DC3,stroke:#8B9DC3,color:#fff
    style I fill:#7F8FA6,stroke:#7F8FA6,color:#fff
```

### Key Improvements
- <span class="solution">100k+ RPS target</span> (vs current ~1k)
- Sub-200ms latency for most queries
- Program-aware indexing (no more full scans)

</div>

---

# How Accounts Domain Works

## Technical approach without the complexity

<div class="mt-8">

### 1. Single Producer, Multiple Consumers

```mermaid
%%{init: {'theme':'dark', 'themeVariables': { 'primaryColor': '#8B9DC3', 'primaryTextColor': '#ffffff', 'primaryBorderColor': '#8B9DC3', 'lineColor': '#6B7FBB'}}}%%
graph TD
    A[Geyser Stream] --> B[Kafka/Redpanda]
    
    B --> C[State Service<br/>Balances]
    B --> D[Index Builder<br/>Program Data]
    B --> E[WebSocket Gateway<br/>Subscriptions]
    
    style A fill:#7F8FA6,stroke:#7F8FA6,color:#fff
    style B fill:#8B9DC3,stroke:#8B9DC3,color:#fff
    style C fill:#6B7FBB,stroke:#6B7FBB,color:#fff
    style D fill:#A1AABA,stroke:#A1AABA,color:#fff
    style E fill:#9AA5C2,stroke:#9AA5C2,color:#fff
```

### 2. Smart Storage Choices

```mermaid
%%{init: {'theme':'dark', 'themeVariables': { 'primaryColor': '#8B9DC3', 'primaryTextColor': '#ffffff', 'primaryBorderColor': '#8B9DC3', 'lineColor': '#6B7FBB'}}}%%
graph TD
    A[Query Router] --> B[Redis<br/>Hot Cache<br/>μs]
    A --> C[ScyllaDB<br/>Account States<br/>ms]
    A --> D[ClickHouse<br/>Complex Queries<br/>100ms]
    
    style A fill:#7F8FA6,stroke:#7F8FA6,color:#fff
    style B fill:#A1AABA,stroke:#A1AABA,color:#fff
    style C fill:#9AA5C2,stroke:#9AA5C2,color:#fff
    style D fill:#BBBFC7,stroke:#BBBFC7,color:#000
```

### 3. No More Timeouts
- Pre-built indexes for token queries
- Pagination for large results  
- Query cost estimation & limits

</div>

---

# Historical Domain (Considering)

## Making historical data affordable

<div class="grid grid-cols-2 gap-8 mt-8">

<div>

### Current: BigTable Lock-in
- **$70k/month** for storage
- Vendor lock-in to Google
- No flexibility
- 5-30 second queries

</div>

<div>

### Proposed: Pluggable Storage
- **$10k/month** with ClickHouse
- Any database backend
- Parquet for cold storage
- 50-200ms queries

</div>

</div>

<div class="mt-8">

### Smart Tiering Strategy

```mermaid
%%{init: {'theme':'dark', 'themeVariables': { 'primaryColor': '#8B9DC3', 'primaryTextColor': '#ffffff', 'primaryBorderColor': '#8B9DC3', 'lineColor': '#6B7FBB'}}}%%
graph LR
    A[New Data] --> B[Hot<br/>7 days<br/>50ms]
    B --> C[Warm<br/>90 days<br/>200ms]
    C --> D[Cold<br/>90+ days<br/>5s]
    
    style A fill:#E8E8E8,stroke:#E8E8E8,color:#000
    style B fill:#A1AABA,stroke:#A1AABA,color:#fff
    style C fill:#BBBFC7,stroke:#BBBFC7,color:#000  
    style D fill:#9AA5C2,stroke:#9AA5C2,color:#fff
```

**85% cost reduction** while improving performance

</div>

---

# Streaming Node (Can Apply)

## Lightweight alternative to full validators

<div class="mt-8">

### Resource Comparison: Full Validator vs Streaming Node

```mermaid
%%{init: {'theme':'dark', 'themeVariables': { 'primaryColor': '#8B9DC3', 'primaryTextColor': '#ffffff', 'primaryBorderColor': '#8B9DC3', 'lineColor': '#6B7FBB'}}}%%
graph TB
    subgraph V["Full Validator"]
        A[256GB RAM]
        B[32 CPU cores]
        C[10TB storage]
    end
    
    subgraph S["Streaming Node"]
        D[16GB RAM]
        E[4 CPU cores]
        F[100GB storage]
    end
    
    style A fill:#C44569,stroke:#C44569,color:#fff
    style B fill:#C44569,stroke:#C44569,color:#fff
    style C fill:#C44569,stroke:#C44569,color:#fff
    style D fill:#8B9DC3,stroke:#8B9DC3,color:#fff
    style E fill:#8B9DC3,stroke:#8B9DC3,color:#fff
    style F fill:#8B9DC3,stroke:#8B9DC3,color:#fff
```

### How It Works
1. **Receive shreds** from gossip/turbine
2. **No processing** - just relay data
3. **1:N fanout** to multiple consumers
4. **Stateless** - instant recovery from crashes

### Network Impact
- **63% reduction** in gossip traffic
- Aligns with Alpenglow goals
- Enables more RPC providers

</div>

---

# Implementation Strategy

## 24-week development timeline

```mermaid
%%{init: {'theme':'dark', 'themeVariables': { 'cScale0': '#8B9DC3', 'cScale1': '#6B7FBB', 'cScale2': '#7F8FA6', 'primaryColor': '#8B9DC3', 'primaryTextColor': '#ffffff', 'primaryBorderColor': '#8B9DC3', 'lineColor': '#6B7FBB', 'sectionBkgColor': '#1a1a1a', 'altSectionBkgColor': '#2d2d2d'}}}%%
gantt
    title 24-Week Plan
    dateFormat  X
    axisFormat Week %s

    section Foundation
    Geyser Pipeline      :0, 8
    ScyllaDB Storage     :0, 8

    section Indexing  
    ClickHouse Setup     :8, 16
    Token Indexes        :8, 16

    section Production
    Security & Tuning    :16, 24
    Deployment           :16, 24
```

---

# Phase 1: Foundation
## Weeks 1-8: Core Infrastructure

<div class="mt-8 grid grid-cols-2 gap-8">

<div>

### ✓ Geyser Ingestion Pipeline
- Stream account updates from validator
- Handle 1M+ updates per second
- Reliable message delivery

### ✓ Basic Account Storage
- ScyllaDB cluster setup
- Account state persistence
- Fast key-value lookups

</div>

<div>

### ✓ Core RPC Endpoints
- getAccountInfo
- getBalance
- getTokenAccountsByOwner
- Basic subscription support

### ✓ WebSocket Subscriptions
- Real-time account updates
- Program account monitoring
- Connection management

</div>

</div>

---

# Phase 2: Indexing
## Weeks 9-16: Query Optimization

<div class="mt-8 grid grid-cols-2 gap-8">

<div>

### ClickHouse Integration
- Columnar storage for analytics
- Complex query support
- Materialized views

### SPL Token Indexes
- Owner → tokens mapping
- Mint → holders mapping
- Balance-based sorting

</div>

<div>

### getProgramAccounts Optimization
- Pre-built program indexes
- Filter validation
- Pagination support

### Performance Targets
- **100k+ RPS** sustained
- **Sub-200ms** query latency
- **99.9%** uptime guarantee

</div>

</div>

---

# Phase 3: Production
## Weeks 17-24: Hardening & Deployment

<div class="mt-8 grid grid-cols-2 gap-8">

<div>

### Security & Reliability
- DDoS protection
- Rate limiting per client
- Input validation
- Error handling

### Performance Optimization
- Connection pooling
- Cache warming
- Query optimization
- Resource monitoring

</div>

<div>

### Deployment & Documentation
- Docker containerization
- Kubernetes manifests
- Monitoring dashboards
- Operator runbooks

### Open Source Release
- **AGPL license**
- No vendor lock-in
- Community contributions welcome

</div>

</div>

---

# Expected Impact

## What this means for Solana

<div class="grid grid-cols-2 gap-8 mt-8">

<div>

### For RPC Providers
- **94% cost reduction**
- 10-second startup (vs 1 hour)
- Run 10x more nodes for same cost
- Focus on business, not infrastructure

</div>

<div>

### For Developers
- **No more timeouts**
- Sub-second responses
- Reliable websockets
- Better documentation

</div>

</div>

<div class="mt-8">

### For the Network
- Less gossip congestion
- More RPC providers (lower barriers)
- Better decentralization
- Innovation enablement

</div>

---

# Performance Gains

## Query speed improvements

<div class="mt-8">

| Query Type | Current | RPCv2 Target | Improvement |
|------------|---------|--------------|-------------|
| getTransaction | 500ms-2s | 20-50ms | <span class="accent-purple">**10-40x**</span> |
| getBlock | 2-10s | 100-500ms | <span class="accent-purple">**10-20x**</span> |
| getProgramAccounts | 5-30s | 50-200ms | <span class="accent-purple">**100-150x**</span> |
| Token queries | 1-5s | 50-100ms | <span class="accent-purple">**20-50x**</span> |

</div>

<div class="mt-12 text-center">

**Most queries under 200ms** vs current 5-30 second timeouts

</div>

---

# Cost Savings

## Monthly infrastructure costs

<div class="mt-8">

| Component | Current | RPCv2 | Monthly Savings |
|-----------|---------|-------|---------|
| Historical Storage | $70,000 | $10,000 | <span class="accent-green">**$60,000**</span> |
| Streaming Nodes | $3,000 | $200 | <span class="accent-green">**$2,800**</span> |
| **Total** | **$73,000** | **$10,200** | <span class="accent-green">**$62,800**</span> |

</div>

<div class="mt-12 grid grid-cols-2 gap-8 text-center">

<div>
### Current: BigTable Lock-in
- Expensive managed service
- No flexibility in storage
- Exponential cost growth
</div>

<div>
### RPCv2: Smart Tiering
- Commodity hardware
- Pluggable storage backends  
- Cost scales linearly
</div>

</div>

---

# Technical Challenges

## Problems we're solving

<div class="mt-8">

### 1. Fork Handling
- **Challenge:** Solana has complex fork scenarios
- **Solution:** Track bank_hash lineage, 300-slot reorg buffer

### 2. Data Consistency
- **Challenge:** Multiple validators, different views
- **Solution:** Byzantine fault tolerance, 2/3 consensus for finalization

### 3. Scale Without Scanning
- **Challenge:** Programs with millions of accounts
- **Solution:** Pre-built indexes, query cost estimation

### 4. WebSocket Reliability
- **Challenge:** Connections drop, events get lost
- **Solution:** Resume tokens, event replay, dedupe by client

</div>

---

# Why This Matters

## The bigger picture

<div class="mt-8">

### Current State
- RPC is the **biggest bottleneck** for Solana apps
- Costs are **unsustainable** as volume grows
- Only big players can afford infrastructure

### With RPCv2
- **Any developer** can run RPC services
- **Innovation** isn't blocked by infrastructure
- Solana can **actually scale** to millions of TPS

### Timeline
- **Applications:** Open until Oct 10, 2025
- **Completion:** March 31, 2026
- **Maintenance:** 1-year grants after launch

</div>

<div class="mt-8 text-center text-xl">

This isn't just optimization - it's **enabling Solana's next phase**

</div>

---

# Our Approach

## What we're building specifically

<div class="mt-8">

### Accounts Domain Architecture
```
Yellowstone gRPC → Event Streaming → Specialized Storage
       ↓              (Kafka)              ↓
  Normalized                        ScyllaDB + ClickHouse
  Events                           + Redis Cache
```

### Key Design Decisions
- **Producer/Consumer pattern** for scalability
- **Event sourcing** for replay capability  
- **Pluggable storage** to avoid lock-in
- **Program-aware indexes** for performance

### Why We're Different
- Built specifically for Solana's unique challenges
- Learning from Alpamayo (historical) limitations
- Production-tested patterns from existing RPCs
- Open source from day one

</div>

---

# Questions?

## Let's discuss

<div class="mt-12 text-center">

### Key Takeaways

1. Current RPC costs **$70k+/month** and frequently fails

2. RPCv2 splits into **3 specialized services**

3. Expected **85%+ cost reduction** and **100x performance**

4. **Open source** with sustainable funding model

5. Makes Solana RPC **accessible to everyone**

</div>

<div class="mt-12 text-xl text-center">

**Contact:** @vivek

**RFPs:** Available on Solana Foundation site

</div>

