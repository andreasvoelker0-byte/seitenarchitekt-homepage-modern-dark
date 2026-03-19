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
  <section class="relative py-24 sm:py-28">
    <div class="container-shell">
      <div data-reveal class="mx-auto max-w-4xl text-center">
        <span class="section-label justify-center">{{ content.label }}</span>
        <h2 class="section-title mt-8">{{ content.title }}</h2>
        <p class="section-copy mx-auto mt-8 text-center">
          {{ content.copy }}
        </p>
      </div>
    </div>
  </section>
</template>
