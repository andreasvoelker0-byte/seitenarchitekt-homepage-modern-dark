<script setup lang="ts">
defineProps<{
  content: {
    title: string
    copy: string
    cta: { label: string; to: string }
    items: Array<{
      label: string
      title: string
      copy: string
    }>
  }
}>()
</script>

<template>
  <section class="py-24 sm:py-28 lg:py-32">
    <div class="container-shell">
      <div class="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <h2 data-reveal class="section-title max-w-2xl">{{ content.title }}</h2>
          <p data-reveal class="mt-7 section-copy">{{ content.copy }}</p>
        </div>
        <NuxtLink data-reveal :to="content.cta.to" class="ghost-button">
          {{ content.cta.label }}
        </NuxtLink>
      </div>

      <div class="mt-14 grid gap-px bg-[rgba(201,167,106,0.14)] md:grid-cols-2">
        <article v-for="item in content.items" :key="item.title" data-reveal class="bg-[rgba(8,8,8,0.62)] px-7 py-8 sm:px-9 sm:py-10">
          <p class="tiny-kicker">{{ item.label }}</p>
          <p class="mt-6 display-face text-3xl font-normal tracking-[-0.03em] text-[var(--text)] sm:text-[2.45rem]">
            {{ item.title }}
          </p>
          <p class="mt-5 max-w-xl text-base leading-8 text-[var(--muted)]">
            {{ item.copy }}
          </p>
        </article>
      </div>
    </div>
  </section>
</template>
