<script setup lang="ts">
defineProps<{
  content: {
    label: string
    title: string
    copy: string
    items: Array<{
      title: string
      price: string
      benefit: string
      featured: boolean
      badge: string
      features: string[]
    }>
  }
}>()
</script>

<template>
  <section id="pakete" class="py-24 sm:py-28 lg:py-32">
    <div class="container-shell">
      <div class="mx-auto max-w-3xl text-center">
        <span data-reveal class="section-label justify-center">{{ content.label }}</span>
        <h2 data-reveal class="section-title mt-7 text-4xl sm:text-5xl lg:text-[4rem]">{{ content.title }}</h2>
        <p data-reveal class="mx-auto mt-6 max-w-2xl text-base leading-8 text-[var(--muted)] sm:text-lg">
          {{ content.copy }}
        </p>
      </div>

      <div class="mt-14 grid gap-6 xl:grid-cols-3">
        <article
          v-for="item in content.items"
          :key="item.title"
          data-reveal
          class="panel relative overflow-hidden p-8 sm:p-10"
          :class="item.featured ? 'border-[rgba(201,167,106,0.26)] shadow-[0_28px_80px_rgba(0,0,0,0.36)]' : ''"
        >
          <div v-if="item.featured" class="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(201,167,106,0.8),transparent)]" />
          <div v-if="item.badge" class="tiny-kicker mb-6">{{ item.badge }}</div>

          <div class="flex items-end justify-between gap-6 border-b border-[rgba(201,167,106,0.12)] pb-6">
            <h3 class="display-face text-3xl text-[var(--text)] sm:text-[2rem]">{{ item.title }}</h3>
            <div class="display-face text-2xl text-[var(--accent)] sm:text-3xl">{{ item.price }}</div>
          </div>

          <p class="mt-6 text-base leading-8 text-[var(--muted)]">{{ item.benefit }}</p>

          <ul class="mt-8 space-y-4 text-sm leading-7 text-[var(--muted)]">
            <li v-for="feature in item.features" :key="feature" class="flex gap-3">
              <span class="mt-[0.55rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
              <span>{{ feature }}</span>
            </li>
          </ul>
        </article>
      </div>
    </div>
  </section>
</template>
