<script setup lang="ts">
defineProps<{
  content: {
    label: string
    title: string
    copy: string
  }
}>()
</script>

<template>
  <section class="py-24 sm:py-28 lg:py-32">
    <div class="container-shell">
      <div class="mx-auto max-w-4xl text-center">
        <span data-reveal class="section-label justify-center">{{ content.label }}</span>
        <h2 data-reveal class="section-title mt-7 text-4xl sm:text-5xl lg:text-[4rem]">{{ content.title }}</h2>
        <p data-reveal class="mx-auto mt-6 max-w-3xl text-base leading-8 text-[var(--muted)] sm:text-lg">
          {{ content.copy }}
        </p>
      </div>
    </div>
  </section>
</template>
