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
  <section class="pb-24 sm:pb-28">
    <div class="container-shell">
      <div data-reveal class="panel relative overflow-hidden px-8 py-12 sm:px-10 sm:py-14 lg:px-14 lg:py-16">
        <div class="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(201,167,106,0.14),transparent_34%),linear-gradient(135deg,rgba(255,255,255,0.02),transparent_52%)]" />
        <div class="relative flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div class="max-w-3xl">
            <span class="section-label">Fragen zum Website-Projekt?</span>
            <h2 class="section-title mt-8">{{ content.title }}</h2>
            <p class="section-copy mt-8">{{ content.copy }}</p>
          </div>

          <div class="flex flex-col gap-4 sm:flex-row sm:items-center lg:flex-col lg:items-start xl:flex-row xl:items-center">
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
