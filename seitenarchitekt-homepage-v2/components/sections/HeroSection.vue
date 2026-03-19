<script setup lang="ts">
defineProps<{
  content: {
    title: string
    copy: string
    primaryCta: { label: string; to: string }
    secondaryCta: { label: string; to: string }
    image: string
  }
}>()
</script>

<template>
  <section class="relative overflow-hidden pt-36 sm:pt-40 lg:pt-44">
    <div class="container-shell relative">
      <div class="grid gap-16 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
        <div class="relative z-10 max-w-4xl">
          <div class="absolute -left-24 top-2 hidden lg:block">
            <div class="h-2.5 w-2.5 rounded-full bg-[var(--accent)]" />
            <div class="mt-5 h-11 w-11 rounded-full border border-[rgba(201,167,106,0.35)]" />
          </div>

          <h1 data-reveal class="section-title max-w-5xl text-5xl sm:text-6xl lg:text-[6.1rem]">
            {{ content.title }}
          </h1>
          <p data-reveal class="mt-8 max-w-2xl text-lg leading-8 text-[var(--muted)] sm:text-xl sm:leading-9">
            {{ content.copy }}
          </p>

          <div data-reveal class="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <NuxtLink :to="content.primaryCta.to" class="gold-button">
              {{ content.primaryCta.label }}
              <span>→</span>
            </NuxtLink>
            <NuxtLink :to="content.secondaryCta.to" class="ghost-button">
              {{ content.secondaryCta.label }}
              <span>↓</span>
            </NuxtLink>
          </div>
        </div>

        <div data-hero-image class="relative mx-auto w-full max-w-[36rem] lg:mx-0">
          <div class="absolute -left-10 top-10 hidden h-28 w-28 rounded-full border border-white/10 lg:block" />
          <div class="absolute -right-4 -top-8 h-56 w-56 rounded-full border border-[rgba(255,255,255,0.58)] opacity-80 sm:h-72 sm:w-72" />
          <div class="absolute right-10 top-10 h-40 w-40 rounded-full border border-[rgba(255,255,255,0.46)] opacity-85 sm:h-52 sm:w-52" />

          <div class="relative overflow-hidden border border-[rgba(201,167,106,0.16)] bg-[rgba(7,7,7,0.72)] p-4 shadow-[0_25px_80px_rgba(0,0,0,0.45)]">
            <img :src="content.image" alt="Technischer Arbeitsplatz" class="h-[440px] w-full object-cover sm:h-[560px]" />
            <div class="absolute inset-0 bg-gradient-to-t from-[rgba(8,8,8,0.72)] via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
