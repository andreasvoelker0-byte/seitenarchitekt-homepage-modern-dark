<script setup lang="ts">
defineProps<{
  content: {
    title: string
    copy: string
    primaryCta: { label: string; to: string }
    secondaryCta: { label: string; to: string }
  }
}>()
</script>

<template>
  <section class="py-24 sm:py-28 lg:py-32">
    <div class="container-shell">
      <div class="relative overflow-hidden border border-[rgba(201,167,106,0.16)] bg-[linear-gradient(135deg,rgba(12,12,12,0.92),rgba(18,15,10,0.96),rgba(10,10,10,0.92))] px-7 py-10 sm:px-12 sm:py-14 lg:px-16">
        <div class="absolute -right-8 -top-10 h-44 w-44 rounded-full border border-white/10" />
        <div class="absolute right-10 top-10 h-28 w-28 rounded-full border border-white/10" />
        <div class="relative max-w-4xl">
          <h2 data-reveal class="section-title max-w-3xl">{{ content.title }}</h2>
          <p data-reveal class="mt-7 section-copy">{{ content.copy }}</p>
        </div>

        <div data-reveal class="relative mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
          <NuxtLink :to="content.primaryCta.to" class="gold-button">
            {{ content.primaryCta.label }}
            <span>→</span>
          </NuxtLink>
          <NuxtLink :to="content.secondaryCta.to" class="ghost-button">
            {{ content.secondaryCta.label }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>
