<script setup lang="ts">
defineProps<{
  content: {
    label: string
    title: string
    items: Array<{ title: string; copy: string }>
  }
}>()
</script>

<template>
  <section class="py-24 sm:py-28 lg:py-32">
    <div class="container-shell">
      <div class="max-w-4xl">
        <span data-reveal class="section-label">{{ content.label }}</span>
        <h2 data-reveal class="section-title mt-7 max-w-4xl text-4xl sm:text-5xl lg:text-[4.2rem]">{{ content.title }}</h2>
      </div>

      <div class="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <article v-for="item in content.items" :key="item.title" data-reveal class="panel p-8">
          <div class="number-box">{{ item.title.slice(0, 1) }}</div>
          <h3 class="mt-8 display-face text-2xl text-[var(--text)]">{{ item.title }}</h3>
          <p class="mt-5 text-sm leading-7 text-[var(--muted)]">{{ item.copy }}</p>
        </article>
      </div>
    </div>
  </section>
</template>
