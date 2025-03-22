---
theme: seriph
author: "Vivek Pal"
date: "2024-03-21"
transition: fade-out
background: https://source.unsplash.com/1600x900/?code,tech
layout: cover
title: Shipping Cross-Platform Apps Using JS and WASM
---

# Shipping Cross-Platform Apps Using JS and WASM 🚀

A Workshop on Building Fast, Portable Apps with JavaScript and WebAssembly

---
layout: intro
---

# What's This About?

- Learn how to ship **cross-platform apps** with **JavaScript (JS)** and **WebAssembly (WASM)**
- Combine JS's flexibility with WASM's performance
- Practical examples, code, and resources included!

Presented by: [V，不过, Vivek Pal](https://twitter.com/vivekpal0x)

---
layout: section
---

# Agenda

- Why Cross-Platform Apps?
- What is WebAssembly (WASM)?
- JS + WASM: The Perfect Pair
- Getting Started: Tools and Setup
- Demo: Building a Simple Cross-Platform App
- Pros, Cons, and Challenges
- Resources and Next Steps

---
layout: two-cols
---

# Why Cross-Platform Apps?

- **One Codebase, Multiple Platforms**
  - Web, Desktop, Mobile—run anywhere
- **Save Time and Effort**
  - No need to rewrite for each platform
- **Growing Demand**
  - Users expect apps everywhere

::right::

# Why JS + WASM?

- **JavaScript**
  - Ubiquitous, flexible, easy to learn
- **WebAssembly**
  - Near-native performance
  - Portable binary format
- Together: Speed + Accessibility

---
layout: default
---

# What is WebAssembly (WASM)?

- **Low-Level Binary Format**
  - Compiled from languages like Rust, C++, or AssemblyScript
- **Runs in Browsers and Beyond**
  - Supported by Node.js, WASI (WebAssembly System Interface)
- **Performance Boost**
  - Faster than JS for compute-heavy tasks

---
layout: image-right
image: https://source.unsplash.com/800x600/?coding,performance
---

# JS + WASM: The Perfect Pair

- **Best of Both Worlds**
  - JS for UI, logic, and glue code
  - WASM for performance-critical parts
- **Cross-Platform Power**
  - Deploy to web, desktop (via Electron), or mobile (via frameworks)
- **Examples**
  - Figma (design tool)
  - AutoCAD (CAD software)

---
layout: default
---

# Getting Started: Tools and Setup

1. **Node.js** - For running JS and tools
2. **wasm-pack** - For Rust-based WASM
3. **AssemblyScript** - JS-like syntax for WASM
4. **Bundlers** - Webpack, Vite, or Rollup
5. **Optional**: Emscripten (C/C++ to WASM)

**Basic Command**:
```bash
npm init -y && npm install wasm-pack
```

---
layout: default
class: "code-slide"
---

# Demo: Hello World with JS + WASM

**1. Write AssemblyScript Code** (`hello.as`):
```typescript
export function greet(name: string): string {
  return "Hello, " + name + "!";
}
```

**2. Compile to WASM**:
```bash
asc hello.as -o hello.wasm
```

**3. Use in JS** (`index.js`):
```javascript
import { greet } from "./hello.wasm";
console.log(greet("World")); // "Hello, World!"
```

<style>
.code-slide pre {
  @apply bg-gray-800 p-4 rounded-lg shadow-xl;
  margin-top: 0.5rem;
}
.code-slide code {
  @apply text-sm font-mono;
  line-height: 1.5;
}
</style>

---
layout: two-cols
---

# Pros of JS + WASM

- **Performance**
  - WASM runs at near-native speed
- **Portability**
  - Same app across platforms
- **Ecosystem**
  - Rich JS tools + growing WASM support

::right::

# Cons and Challenges

- **Complexity**
  - Steeper learning curve for WASM
- **Debugging**
  - Harder than pure JS
- **Size**
  - WASM binaries can bloat apps

---
layout: center
---

# Key Takeaways

- JS + WASM = **Fast, Portable Apps**
- Ideal for cross-platform development
- Start small: Experiment with examples
- The future is hybrid—embrace it!

---
layout: default
---

# Resources and Next Steps

- **Repo**: Slides, code, and more at [github.com/yourusername/js-wasm-workshop]
- **Examples**: Check `examples/` for demos
- **Deep Dives**: See `resources.md`
  - [WebAssembly.org](https://webassembly.org/)
  - [AssemblyScript Docs](https://www.assemblyscript.org/)
  - [WASI Tutorial](https://wasmtime.dev/)

---
layout: section
---

# Feedback and Stay Connected

- **Questions? Thoughts?**
  - Open an issue or PR on the repo!
- **Follow Me**:
  - Twitter: [@vivekpal0x](https://twitter.com/vivekpal0x)
  - Telegram: [@vivekpal0x](https://t.me/vivekpal0x)

Happy Coding! 🚀
