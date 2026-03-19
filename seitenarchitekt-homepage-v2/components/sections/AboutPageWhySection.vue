<script setup lang="ts">
defineProps<{
  content: {
    label: string
    title: string
    items: Array<{ title: string; copy: string }>
    backgroundImage: string
  }
}>()
</script>

<template>
  <section class="relative overflow-hidden py-24 sm:py-28 lg:py-32">
    <div class="absolute inset-0 overflow-hidden">
      <div
        data-about-why-bg
        class="absolute inset-0 scale-110 bg-cover bg-center opacity-22"
        :style="{ backgroundImage: `url(${content.backgroundImage})` }"
      />
      <div class="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,7,7,0.92),rgba(7,7,7,0.96))]" />
    </div>

    <div class="container-shell relative z-10">
      <div class="mx-auto max-w-3xl text-center">
        <span data-reveal class="section-label justify-center">{{ content.label }}</span>
        <h2 data-reveal class="section-title mt-7 text-4xl sm:text-5xl lg:text-[4rem]">{{ content.title }}</h2>
      </div>

      <div class="mt-14 grid gap-6 lg:grid-cols-3">
        <article v-for="item in content.items" :key="item.title" data-reveal class="panel p-8">
          <span class="tiny-kicker">{{ item.title }}</span>
          <p class="mt-5 text-base leading-8 text-[var(--muted)]">{{ item.copy }}</p>
        </article>
      </div>
    </div>
  </section>
</template>
