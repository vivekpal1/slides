---
layout: cover
highlighter: shiki
colorSchema: light
css: unocss
transition: fade-out
---

<h1 flex="~ col">
<div> <b font-bold>Intro to WASI</b> <br/> Elevating your web apps with WebAssembly System Interface!</div>
</h1>

<div text-sm tracking-widest>
Vivek Pal
</div>

<div abs-br mx-10 my-12 flex="~ col" text-sm text-right>
  <div>JSConf India</div>
  <div text-sm opacity-50>2nd June 2023</div>
</div>

---
layout: intro
growX: 10
growY: 90
style: 'padding-left: 8rem;'
---

# Vivek Pal

<div class="leading-10 opacity-80">
Open Web and Linux<br>
Building ShastraOS<br>
Full Stack Dev<br>
</div>

<div my-10 w-min flex="~ gap-1" items-center justify-center>
  <div i-ri-user-3-line op50 ma text-xl/>
  <div><a href="https://vivekpal.in" target="_blank" class="border-none! font-300">vivekpal.in</a></div>
  <div i-ri-github-line op50 ma text-xl ml4/>
  <div><a href="https://github.com/vivekpal1" target="_blank" class="border-none! font-300">vivekpal1</a></div>
  <div i-ri-twitter-line op50 ma text-xl ml4/>
  <div><a href="https://twitter.com/vivekpal0x" target="_blank" class="border-none! font-300">vivekpal0x</a></div>
</div>

<img src="https://vivekpal.in/avatar.png" rounded-full w-35 abs-tr mt-32 mr-40/>

<div flex="~ gap2">

</div>

---
layout: center
growX: 50
growY: 120
growSize: 1.5
---

<img src="https://raw.githubusercontent.com/ShastraOS/site/main/public/icons/text.png" w-80/>


---

<div v-click transition-all duration-500 :class="$slidev.nav.clicks === 0 ? 'op0' : $slidev.nav.clicks > 1 ? 'op50 text-2xl' : 'translate-y-10 text-4xl'">Today's Agenda</div>

<div class="nuxt-devtools-logo" v-click>
  <NuxtDevTools h-20/>
</div>

---

<div ml-14 text-lg op50 mb--4>Today's Agenda</div>
<h1><NuxtDevTools h-15/></h1>

<div text-2xl>
<v-clicks>

<div flex="~ gap2">
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/WebAssembly_Logo.svg/1200px-WebAssembly_Logo.svg.png" w-20/>
</div>

<div flex="~ gap2">
  <img src="https://wasi.dev/polyfill/WASI-small.png" w-40/>
</div>

<div flex="~ gap2">
  <img src="https://i.ibb.co/ZXBL1sb/removal-ai-85f8d262-2c8b-442a-a831-117f9f1b80d4.png" w-40/>
</div>

<div flex="~ gap2">
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/AssemblyScript_logo_2020.svg/1200px-AssemblyScript_logo_2020.svg.png" w-20/>
</div>

</v-clicks>
</div>

---
layout: center
growX: 60
growY: 100
growSize: 1.5
---
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/WebAssembly_Logo.svg/1200px-WebAssembly_Logo.svg.png" w-50/>

---
layout: center
growX: 60
growY: 100
growSize: 1.5
---

# What is WebAssembly?
- A binary instruction format for a stack-based virtual machine

---
layout: center
growX: 100
growY: 80
growSize: 1.5
---

<img src="https://raw.githubusercontent.com/vivekpal1/slides/main/my-talks/jsconf-2023/src/public/wasm-203.png" w-120/>


---
layout: center
growX: 120
growY: 60
growSize: 1.5
---

# Virtual Machines
- Stack Based
- Register Based

---
layout: center
growX: 15
growY: 60
growSize: 1.5
---

# Stack Machine
<img src="https://camo.githubusercontent.com/01396fc4531757e1ae5ef00b37bd4a2795e7d1ec2d83d9adbe70161fb7aea8a2/68747470733a2f2f7777772e7475746f7269616c73706f696e742e636f6d2f646174615f737472756374757265735f616c676f726974686d732f696d616765732f737461636b5f726570726573656e746174696f6e2e6a7067" w-80/>



---

<div v-click transition-all duration-500 :class="$slidev.nav.clicks === 0 ? 'op0' : $slidev.nav.clicks > 1 ? 'op50 text-2xl' : 'translate-y-10 text-4xl'">Why WebAssembly?</div>

<div class="nuxt-devtools-logo" v-click>
  <NuxtDevTools h-20/>
</div>

---

<div ml-14 text-lg op50 mb--4>Why WebAssembly?</div>
<h1><NuxtDevTools h-15/></h1>

<div text-2xl>
<v-clicks>

- ## **Performance**

- ## **Cross-platform Compatibility**

- ## **Language Agnostic**

- ## **Security**

- ## **Interoperability**

- ## **Broad Industry Support**

- ## **Community and Ecosystem**

</v-clicks>
</div>

---

<div v-click transition-all duration-500 :class="$slidev.nav.clicks === 0 ? 'op0' : $slidev.nav.clicks > 1 ? 'op50 text-2xl' : 'translate-y-10 text-4xl'">WebAssembly in Browsers</div>

<div class="nuxt-devtools-logo" v-click>
  <NuxtDevTools h-20/>
</div>

---

<div ml-14 text-lg op50 mb--4>WebAssembly in Browsers</div>
<h1><NuxtDevTools h-15/></h1>

<div text-2xl>
<v-clicks>

<div flex="~ gap2">
  <img src="https://webassembly.org/images/firefox.svg" w-20/>
</div>

<div flex="~ gap2">
  <img src="https://webassembly.org/images/chrome.svg" w-20/>
</div>

<div flex="~ gap2">
  <img src="https://webassembly.org/images/safari.svg" w-20/>
</div>

<div flex="~ gap2">
  <img src="https://webassembly.org/images/edge.svg" w-20/>
</div>

</v-clicks>
</div>

---
layout: center
growX: 60
growY: 100
growSize: 1
---

# WebAssembly Modules

---
layout: center
growX: 90
growY: 30
growSize: 1
---

**WebAssembly modules are the building blocks of WebAssembly applications.**

---
layout: center
growX: 60
growY: 100
growSize: 1
---

WebAssembly modules are compiled from source code into a binary format that can be executed by a WebAssembly virtual machine.

---

# WebAssembly Modules in JavaScript

```javascript
fetch('module.wasm')
  .then(response => response.arrayBuffer())
  .then(buffer => WebAssembly.instantiate(buffer))
  .then(module => {
    const { add, memory } = module.instance.exports;
    const result = add(5, 3);
    console.log('Result:', result);
    const buffer = new Uint8Array(memory.buffer);
    buffer[0] = 42;
  })
  .catch(error => {
    console.error('Error:', error);
  });
```

---
layout: center
growX: 120
growY: 60
growSize: 1.5
---
  <img src="https://wasi.dev/polyfill/WASI-small.png" w-60/>

---
layout: center
growX: 120
growY: 60
growSize: 1.5
---

# WASI
- WebAssembly System Interface

---
layout: center
growX: 80
growY: 15
growSize: 1.2
---

**Standardized set of APIs that allows WebAssembly modules to interact with the host operating system and its resources in a platform-agnostic manner.**

---
layout: center
growX: 80
growY: 120
growSize: 1.2
---

# System Interface
- POSIX
- Linux
- macOS

---
layout: center
growX: 100
growY: 50
growSize: 1.2
---

# Inspired by POSIX

---
layout: center
growX: 50
growY: 120
growSize: 1.5
---

---

<div v-click transition-all duration-500 :class="$slidev.nav.clicks === 0 ? 'op0' : $slidev.nav.clicks > 1 ? 'op50 text-2xl' : 'translate-y-10 text-4xl'">Key-Features of WASI</div>

<div class="nuxt-devtools-logo" v-click>
  <NuxtDevTools h-20/>
</div>

---

<div ml-14 text-lg op50 mb--4>Key-Features of WASI</div>
<h1><NuxtDevTools h-15/></h1>

<div text-2xl>
<v-clicks>

<div flex="~ gap2">
Sandboxed Environment
</div>

<div flex="~ gap2">
Standardized APIs
</div>

<div flex="~ gap2">
Minimalistic Interface
</div>

<div flex="~ gap2">
Isolation and Safety
</div>
<div flex="~ gap2">
Platform Agnostic
</div>
<div flex="~ gap2">
Interoperability
</div>
<div flex="~ gap2">
Future-Proof
</div>

</v-clicks>
</div>

---

<div v-click transition-all duration-500 :class="$slidev.nav.clicks === 0 ? 'op0' : $slidev.nav.clicks > 1 ? 'op50 text-2xl' : 'translate-y-10 text-4xl'">Building Web Applications with WASI</div>

<div class="nuxt-devtools-logo" v-click>
  <NuxtDevTools h-20/>
</div>

---

<div ml-14 text-lg op50 mb--4>Building Web Applications with WASI</div>
<h1><NuxtDevTools h-15/></h1>

<div text-2xl>
<v-clicks>

<div flex="~ gap2">
File System Operations
</div>

<div flex="~ gap2">
Networking
</div>

<div flex="~ gap2">
System Integration
</div>

<div flex="~ gap2">
Database Access
</div>
<div flex="~ gap2">
Secure Cryptography
</div>
<div flex="~ gap2">
Command-Line Tools
</div>

</v-clicks>
</div>

---
layout: center
growX: 50
growY: 120
growSize: 1.5
---

  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/AssemblyScript_logo_2020.svg/1200px-AssemblyScript_logo_2020.svg.png" w-60/>

---
layout: center
growX: 50
growY: 120
growSize: 1.5
---

# AssemblyScript

---
layout: center
growX: 100
growY: 15
growSize: 1.5
---

**TypeScript to WebAssembly compiler**

---
layout: center
growX: 90
growY: 150
growSize: 1.5
---

# Frameworks and Libraries

---
layout: center
growX: 50
growY: 120
growSize: 1.5
---

# Yew

---
layout: center
growX: 30
growY: 100
growSize: 1.5
---

# Tauri

---
layout: center
growX: 120
growY: 60
growSize: 1.5
---

# SWC Compiler on Next.js 13

---
layout: center
growX: 50
growY: 100
growSize: 1.5
---

# Limitations and Future of WASI

---
layout: center
growX: 80
growY: 40
growSize: 1.5
---

# Conclusion

---
layout: center
growX: 90
growY: 15
growSize: 1.5
---

# Resources
