<script setup lang="ts">
defineProps<{
  header: {
    label: string
    title: string
  }
  posts: Array<{
    slug: string
    category: string
    title: string
    excerpt: string
    readingTime: string
    image: string
  }>
}>()
</script>

<template>
  <section class="py-24 sm:py-28">
    <div class="container-shell">
      <div data-reveal class="text-center">
        <span class="section-label justify-center">{{ header.label }}</span>
        <h2 class="section-title mt-8">{{ header.title }}</h2>
      </div>

      <div class="mt-14 grid gap-6 lg:grid-cols-3">
        <article v-for="post in posts" :key="post.slug" data-reveal class="lux-card group relative overflow-hidden p-[1px]">
          <div class="absolute inset-0 bg-[linear-gradient(135deg,rgba(201,167,106,0.22),transparent_36%,transparent_64%,rgba(255,255,255,0.06))] opacity-70 transition duration-300 group-hover:opacity-100" />
          <div class="relative h-full bg-[linear-gradient(180deg,rgba(14,14,14,0.92),rgba(9,9,9,0.88))] p-5 sm:p-6">
            <div class="overflow-hidden rounded-[1.5rem] border border-[rgba(255,255,255,0.08)]">
              <img :src="post.image" :alt="post.title" class="h-56 w-full object-cover object-center transition duration-500 group-hover:scale-[1.04]" />
            </div>

            <div class="mt-6 flex items-center justify-between gap-4 text-[10px] uppercase tracking-[0.28em] text-[rgba(242,236,226,0.52)]">
              <span class="text-[var(--accent)]">{{ post.category }}</span>
              <span>{{ post.readingTime }}</span>
            </div>

            <h3 class="display-face mt-5 text-2xl leading-tight text-[var(--text)] sm:text-[2rem]">
              {{ post.title }}
            </h3>

            <p class="mt-4 text-base leading-8 text-[var(--muted)]">
              {{ post.excerpt }}
            </p>

            <NuxtLink :to="`/blog/${post.slug}`" class="ghost-button mt-7">
              Artikel lesen
              <span>→</span>
            </NuxtLink>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
