<script setup lang="ts">
defineProps<{
  content: {
    title: string
    copy: string
    image: string
    cta: { label: string; to: string }
    items: Array<{
      number: string
      title: string
      copy: string
      linkLabel: string
      to: string
    }>
  }
}>()
</script>

<template>
  <section class="py-24 sm:py-28 lg:py-32">
    <div class="container-shell grid gap-14 xl:grid-cols-[0.86fr_1.14fr]">
      <div class="xl:sticky xl:top-28 xl:self-start">
        <h2 data-reveal class="section-title max-w-xl">{{ content.title }}</h2>
        <p data-reveal class="mt-7 section-copy">{{ content.copy }}</p>
        <div data-reveal class="mt-9 overflow-hidden border border-[rgba(201,167,106,0.12)]">
          <img :src="content.image" alt="Laptop am Arbeitsplatz" class="h-80 w-full object-cover sm:h-[25rem]" />
        </div>
      </div>

      <div class="border border-[rgba(201,167,106,0.12)] bg-[rgba(70, 68, 68, 0.45)]">
        <article v-for="item in content.items" :key="item.title" data-reveal class="grid gap-8 border-b border-[rgba(201,167,106,0.12)] px-6 py-8 sm:px-10 sm:py-10 lg:grid-cols-[72px_minmax(0,1fr)_auto] lg:items-start last:border-b-0">
          <div class="tiny-kicker pt-1">{{ item.number }}</div>
          <div>
            <h3 class="display-face text-3xl font-normal tracking-[-0.03em] text-[var(--text)] sm:text-[2.45rem]">
              {{ item.title }}
            </h3>
            <p class="mt-5 max-w-2xl text-base leading-8 text-[var(--muted)]">
              {{ item.copy }}
            </p>
          </div>
          <div class="flex items-start justify-start lg:justify-end">
            <NuxtLink :to="item.to" class="ghost-button whitespace-nowrap py-2">
              {{ item.linkLabel }}
            </NuxtLink>
          </div>
        </article>
      </div>

      <div data-reveal class="xl:col-start-2">
        <NuxtLink :to="content.cta.to" class="gold-button">
          {{ content.cta.label }}
          <span>→</span>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
