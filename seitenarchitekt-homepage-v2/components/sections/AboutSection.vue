<script setup lang="ts">
defineProps<{
  content: {
    title: string
    paragraphs: string[]
    cta: { label: string; to: string }
    image: string
    skills: string[]
  }
}>()
</script>

<template>
  <section class="py-24 sm:py-28 lg:py-32">
    <div class="container-shell grid gap-14 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
      <div data-reveal class="relative order-2 lg:order-1">
        <div class="absolute -left-6 -top-6 hidden h-20 w-20 rounded-full border border-[rgba(201,167,106,0.24)] lg:block" />
        <div class="overflow-hidden border border-[rgba(201,167,106,0.12)] bg-[rgba(7,7,7,0.6)] p-4 shadow-[0_24px_70px_rgba(0,0,0,0.42)]">
          <img :src="content.image" alt="Portrait" class="h-[520px] w-full object-cover object-center" />
        </div>
      </div>

      <div class="order-1 lg:order-2">
        <h2 data-reveal class="section-title max-w-xl">{{ content.title }}</h2>
        <p v-for="paragraph in content.paragraphs" :key="paragraph" data-reveal class="mt-6 max-w-2xl text-base leading-8 text-[var(--muted)]">
          {{ paragraph }}
        </p>

        <div class="mt-9 flex flex-wrap gap-3">
          <span v-for="skill in content.skills" :key="skill" data-reveal class="border border-[rgba(201,167,106,0.18)] px-4 py-2 text-sm text-[var(--muted)]">
            {{ skill }}
          </span>
        </div>

        <NuxtLink data-reveal :to="content.cta.to" class="gold-button mt-9">
          {{ content.cta.label }}
          <span>→</span>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
