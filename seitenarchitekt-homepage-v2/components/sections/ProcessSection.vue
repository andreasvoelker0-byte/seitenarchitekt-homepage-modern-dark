<script setup lang="ts">
defineProps<{
  content: {
    title: string
    copy: string
    cta: { label: string; to: string }
    steps: Array<{ number: string; title: string; copy: string }>
  }
}>()
</script>

<template>
  <section class="py-24 sm:py-28 lg:py-32">
    <div class="container-shell">
      <div class="grid gap-12 lg:grid-cols-[0.94fr_1.06fr]">
        <div>
          <h2 data-reveal class="section-title max-w-xl">{{ content.title }}</h2>
          <p data-reveal class="mt-7 section-copy max-w-lg">{{ content.copy }}</p>
          <NuxtLink data-reveal :to="content.cta.to" class="gold-button mt-9">
            {{ content.cta.label }}
            <span>→</span>
          </NuxtLink>
        </div>

        <div class="relative border border-[rgba(201,167,106,0.12)] bg-[rgba(7,7,7,0.4)] px-6 py-4 sm:px-10 sm:py-6">
          <div class="absolute bottom-0 right-4 hidden display-face text-[12rem] leading-none text-white/[0.03] sm:block lg:text-[18rem]">05</div>
          <article v-for="step in content.steps" :key="step.number" data-reveal class="grid gap-5 border-b border-[rgba(201,167,106,0.12)] py-8 sm:grid-cols-[64px_minmax(0,1fr)] sm:py-10 last:border-b-0">
            <div class="number-box">{{ step.number }}</div>
            <div>
              <h3 class="display-face text-3xl font-normal tracking-[-0.03em] text-[var(--text)]">
                {{ step.title }}
              </h3>
              <p class="mt-4 max-w-2xl text-base leading-8 text-[var(--muted)]">
                {{ step.copy }}
              </p>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>
