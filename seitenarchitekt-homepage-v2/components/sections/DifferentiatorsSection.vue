<script setup lang="ts">
defineProps<{
  content: {
    title: string
    copy: string
    backgroundImage: string
    items: Array<{ title: string; copy: string }>
  }
}>()
</script>

<template>
  <section class="relative overflow-hidden py-28 sm:py-32 lg:py-36">
    <div class="absolute inset-0">
      <div class="absolute inset-0 overflow-hidden">
        <div
          data-parallax-bg
          class="absolute -inset-y-[18%] inset-x-0 scale-110 bg-cover bg-center opacity-30"
          :style="{ backgroundImage: `url(${content.backgroundImage})` }"
        />
      </div>
      <div class="absolute inset-0 bg-[rgba(7,7,7,0.78)]" />
      <div class="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,8,8,0.15),rgba(8,8,8,0.82))]" />
    </div>

    <div class="container-shell relative">
      <div class="max-w-3xl">
        <h2 data-reveal class="section-title max-w-2xl">{{ content.title }}</h2>
        <p data-reveal class="mt-7 section-copy">{{ content.copy }}</p>
      </div>

      <div class="mt-14 grid gap-px bg-[rgba(201,167,106,0.14)] lg:grid-cols-3">
        <article v-for="item in content.items" :key="item.title" data-reveal class="bg-[rgba(8,8,8,0.7)] px-7 py-8 sm:px-8 sm:py-10">
          <div class="split-line w-10" />
          <h3 class="mt-8 display-face text-3xl font-normal tracking-[-0.03em] text-[var(--text)]">
            {{ item.title }}
          </h3>
          <p class="mt-5 text-base leading-8 text-[var(--muted)]">
            {{ item.copy }}
          </p>
        </article>
      </div>
    </div>
  </section>
</template>
