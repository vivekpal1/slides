---
layout: center
---

<div v-if="$slidev.nav.currentPage === 2" class="flex gap-8 px-10 justify-center scale-120 transform">
  <img
    src="/logo.svg"
    class="h-32"
    v-motion
    :initial="{ x: -100 }"
    :enter="{ x: 0 }"
  >
  <div
    v-motion
    :initial="{ x: 100 }"
    :enter="{ x: 0 }"
    items-center justify-center flex="~ col gap-1"
  >
    <VueMacrosTitle text-5xl font-bold />
    <div class="text-base op90">Title/div>
    <div text-sm self-end op90 font-light mt2>Subtitle</div>
  </div>
</div>

<div class="abs-br mx-10 my-8 flex scale-120">
  <div class="ml-3 flex flex-col text-right gap-1">
    <img
      src="/icon.svg"
      text="3xl"
      opacity="70"
    />
    <div class="text-sm opacity-50 font-mono">2023-05-14</div>
  </div>
</div>
