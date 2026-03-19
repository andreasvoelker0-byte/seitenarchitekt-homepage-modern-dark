<script setup lang="ts">
defineProps<{
  content: {
    label: string
    title: string
    steps: Array<{ number: string; title: string; copy: string }>
  }
}>()
</script>

<template>
  <section class="py-24 sm:py-28 lg:py-32">
    <div class="container-shell">
      <div class="mx-auto max-w-3xl text-center">
        <span data-reveal class="section-label justify-center">{{ content.label }}</span>
        <h2 data-reveal class="section-title mt-7 text-4xl sm:text-5xl lg:text-[4rem]">{{ content.title }}</h2>
      </div>

      <div class="mt-14 grid gap-6 lg:grid-cols-5">
        <article v-for="step in content.steps" :key="step.number" data-reveal class="panel p-7 sm:p-8">
          <div class="number-box">{{ step.number }}</div>
          <h3 class="mt-8 display-face text-2xl text-[var(--text)]">{{ step.title }}</h3>
          <p class="mt-5 text-sm leading-7 text-[var(--muted)]">{{ step.copy }}</p>
        </article>
      </div>
    </div>
  </section>
</template>
