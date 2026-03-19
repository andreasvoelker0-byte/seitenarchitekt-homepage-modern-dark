<script setup lang="ts">
defineProps<{
  content: {
    label: string
    title: string
    copy: string
    items: Array<{ title: string; copy: string }>
  }
}>()
</script>

<template>
  <section class="relative py-24 sm:py-28 lg:py-32">
    <div class="container-shell">
      <div class="mx-auto max-w-3xl text-center">
        <span data-reveal class="section-label justify-center">{{ content.label }}</span>
        <h2 data-reveal class="section-title mt-7 text-4xl sm:text-5xl lg:text-[4rem]">{{ content.title }}</h2>
        <p data-reveal class="mx-auto mt-6 max-w-2xl text-base leading-8 text-[var(--muted)] sm:text-lg">
          {{ content.copy }}
        </p>
      </div>

      <div class="mt-14 grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
        <article v-for="item in content.items" :key="item.title" data-reveal class="panel p-8">
          <div class="split-line mb-8" />
          <h3 class="display-face text-2xl text-[var(--text)]">{{ item.title }}</h3>
          <p class="mt-5 text-sm leading-7 text-[var(--muted)]">{{ item.copy }}</p>
        </article>
      </div>
    </div>
  </section>
</template>
