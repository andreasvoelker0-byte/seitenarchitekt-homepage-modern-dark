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
  <section class="pb-20 pt-6 sm:pb-24 lg:pb-28">
    <div class="container-shell">
      <div class="panel relative overflow-hidden px-8 py-12 sm:px-12 sm:py-16 lg:px-16 lg:py-20">
        <div class="relative max-w-4xl">
          <h2 data-reveal class="section-title max-w-3xl text-4xl sm:text-5xl lg:text-[4.2rem]">{{ content.title }}</h2>
          <p data-reveal class="mt-6 max-w-2xl text-base leading-8 text-[var(--muted)] sm:text-lg">
            {{ content.copy }}
          </p>
          <div data-reveal class="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <NuxtLink :to="content.primaryCta.to" class="gold-button">
              {{ content.primaryCta.label }}
              <span>→</span>
            </NuxtLink>
            <NuxtLink :to="content.secondaryCta.to" class="ghost-button">
              {{ content.secondaryCta.label }}
              <span>→</span>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
