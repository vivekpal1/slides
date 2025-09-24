---
theme: seriph
background: '#0a0a0a'
highlighter: shiki
lineNumbers: false
info: |
  V1TA Protocol - Capital-Efficient CDP on Solana
  Investor Presentation 2025
drawings:
  persist: false
css: unocss
fonts:
  sans: 'Inter'
  mono: 'JetBrains Mono'
title: 'V1TA Protocol - Investor Deck'
class: 'text-center'
transition: slide-left
mdc: true
download: false
selectable: true
record: true
---

<style>
.gradient-text {
  background: linear-gradient(45deg, #00D4FF, #9945FF);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: gradientShift 3s ease-in-out infinite;
}

@keyframes gradientShift {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

.glass-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 20px;
  box-shadow: 0 8px 32px rgba(0, 212, 255, 0.1);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.glass-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.05), transparent);
  transition: left 0.5s;
}

.glass-card:hover::before {
  left: 100%;
}

.glass-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 40px rgba(0, 212, 255, 0.2);
  border-color: rgba(0, 212, 255, 0.3);
}

.fade-in {
  animation: fadeInUp 0.8s ease-out;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.phase-card {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  padding: 16px;
  margin: 12px 0;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
}

.phase-card:hover {
  background: rgba(255, 255, 255, 0.06);
  border-color: rgba(0, 212, 255, 0.2);
  transform: translateX(5px);
}

.team-section {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin: 20px 0;
}

.team-card {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 24px;
  text-align: center;
  backdrop-filter: blur(12px);
  transition: all 0.4s ease;
  position: relative;
}

.team-card:hover {
  transform: rotateY(5deg) translateY(-5px);
  box-shadow: 0 15px 35px rgba(0, 212, 255, 0.15);
}

body {
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%);
  position: relative;
}

body::before {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: 
    radial-gradient(circle at 20% 80%, rgba(0, 212, 255, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(153, 69, 255, 0.1) 0%, transparent 50%);
  pointer-events: none;
  z-index: -1;
}

.slide-content {
  position: relative;
  z-index: 1;
}
</style>

# <span class="gradient-text">V1TA</span>

## The Capital-Efficient CDP Protocol

<div class="text-2xl mt-8 mb-8">
  <span class="gradient-text font-bold">Borrow at 110% collateral ratio. Finally.</span>
</div>

**⚡ × V1TA**

**Investor Deck | Q1 2025**

---

# Quick Intro

## Building the first truly decentralized CDP protocol on Solana

**110% collateral ratio** - because your capital shouldn't sit in prison.

*No governance tokens. No committee votes. Just math.*

---

# The Problem

## Want to borrow against your SOL? Your options suck.

Current options force you to lock **$150-200** for every **$100** you borrow.

**That's not borrowing. That's capital punishment.**

---

# How They Solve It Today

## Current solutions have poor results

**MakerDAO/Sky**: Governance votes decide your fate  
**Kamino**: 150% collateral ratios, variable rates  
**MarginFi**: Committee-controlled parameters  

*Your money. Their decisions. Your losses when they vote wrong.*

---

# What If Instead...

## You could borrow without asking permission

Lock **$1000 SOL** → Borrow **$909 VUSD**

No governance. No committees. No votes.

**Just pure math keeping your stablecoin at $1.**

---

# That's V1TA

<div class="glass-card">

**110% collateral ratio**  
**Redemption mechanism maintains $1 peg**  
**LST protection using on-chain stake rates**

*Decentralized by design.*

</div>

---

# State the Dream

## We are building Liquity for Solana

**Liquity** proved CDPs can work without governance on Ethereum  
**Solana** enables what Ethereum couldn't - speed and cost efficiency  

**CDP market**: $10B+ across all chains  
**Solana DeFi lending**: $2B+ and growing fast  

*If you fixed the capital efficiency problem, you might be worth a lot.*

---

# Capital Efficiency Comparison

<div class="glass-card">

| Protocol | Collateral Ratio | Your $1000 Gets You |
|----------|------------------|-------------------|
| Kamino | 150% | $667 borrowing power |
| MarginFi | 175% | $571 borrowing power |
| MakerDAO | 150% | $667 borrowing power |
| **V1TA** | **110%** | **$909 borrowing power** |

*36% better capital efficiency than the best competitor.*

</div>

---

# Our Approach Is Different, Yet Sensible

## Others rely on governance, we rely on math

<div class="fade-in">

**Traditional protocols**: Committee decides liquidation parameters  
**V1TA**: Redemption mechanism automatically maintains peg

**Others**: Market price liquidations during panic  
**V1TA**: LST value calculated from actual staking contracts

**Others**: Governance tokens control protocol  
**V1TA**: Immutable smart contracts

</div>

---

# We're Part of a Bigger Trend

## The decentralization wave

**DeFi users are tired of governance failures**  
**Liquity on Ethereum**: $1B+ TVL with zero governance  
**Solana adoption**: Fastest growing blockchain ecosystem  

*People want their money controlled by code, not committees.*

---

# Why NOW?

## This idea works now, but couldn't work 5 years ago

**Solana infrastructure matured**: Sub-second finality enables real-time oracles  
**Dual oracle systems**: Pyth + Switchboard provide reliable price feeds  
**LST ecosystem established**: $5B+ in liquid staking tokens  
**CDP model proven**: Liquity validated governance-free stability on Ethereum  

*All the pieces finally exist on the fastest, cheapest blockchain.*

---

# Why Are YOU the One to Do It?

## We understand what others missed

**Deep Solana expertise**: Built on Solana since early days  
**CDP protocol knowledge**: Studied every major success and failure  
**User perspective**: We're frustrated borrowers who want better options  

*We built this because we desperately want to use it ourselves.*

---

# Sweeten the Pot

## The first 110% CDP on Solana

<div class="glass-card">

**Blue ocean market**: No direct competitors at this efficiency level  
**Proven model**: Liquity's success validates the approach  
**Perfect timing**: Solana DeFi ready for next-generation protocols  

*First-mover advantage in capital efficiency on the fastest blockchain.*

</div>

---
layout: center
class: text-center
---

# Ready to Build True DeFi?

### Let's prove that decentralization and capital efficiency can coexist.

**Email**: [your-email]  
**Deck**: [deck-link]  

## Questions?
