<script setup lang="ts">
defineProps<{
  content: {
    label: string
    title: string
    paragraphs: string[]
    cta: { label: string; to: string }
    image: string
  }
}>()
</script>

<template>
  <section class="py-24 sm:py-28 lg:py-32">
    <div class="container-shell grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
      <div data-reveal class="relative">
        <div class="absolute -left-5 -top-5 hidden h-20 w-20 rounded-full border border-[rgba(201,167,106,0.24)] lg:block" />
        <div class="panel overflow-hidden p-4 sm:p-5">
          <img :src="content.image" alt="Portrait" class="h-[520px] w-full object-cover object-center sm:h-[620px]" />
        </div>
      </div>

      <div>
        <span data-reveal class="section-label">{{ content.label }}</span>
        <h2 data-reveal class="section-title mt-7 max-w-3xl text-4xl sm:text-5xl lg:text-[4.1rem]">{{ content.title }}</h2>
        <p
          v-for="paragraph in content.paragraphs"
          :key="paragraph"
          data-reveal
          class="mt-6 max-w-2xl text-base leading-8 text-[var(--muted)]"
        >
          {{ paragraph }}
        </p>

        <NuxtLink data-reveal :to="content.cta.to" class="gold-button mt-9">
          {{ content.cta.label }}
          <span>→</span>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
