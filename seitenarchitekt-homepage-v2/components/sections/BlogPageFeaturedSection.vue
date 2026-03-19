<script setup lang="ts">
defineProps<{
  post: {
    slug: string
    category: string
    title: string
    excerpt: string
    readingTime: string
    image: string
  }
}>()
</script>

<template>
  <section class="relative overflow-hidden py-8 sm:py-10">
    <div class="container-shell">
      <div data-reveal class="panel relative overflow-hidden">
        <div
          data-blog-featured-bg
          class="absolute inset-y-0 right-0 hidden w-1/2 scale-110 bg-cover bg-center opacity-30 lg:block"
          :style="{ backgroundImage: `url(${post.image})` }"
        />
        <div class="absolute inset-0 bg-[linear-gradient(135deg,rgba(201,167,106,0.12),transparent_40%),linear-gradient(180deg,rgba(255,255,255,0.02),transparent_35%)]" />

        <div class="relative grid gap-10 p-8 sm:p-10 lg:grid-cols-[1.1fr_0.9fr] lg:p-12 xl:p-14">
          <div class="max-w-2xl">
            <span class="section-label">Empfohlener Beitrag</span>
            <p class="mt-8 tiny-kicker text-[var(--accent)]">{{ post.category }}</p>
            <h2 class="display-face mt-5 text-3xl leading-tight text-[var(--text)] sm:text-4xl lg:text-5xl">
              {{ post.title }}
            </h2>
            <p class="mt-6 max-w-xl text-base leading-8 text-[var(--muted)] sm:text-lg">
              {{ post.excerpt }}
            </p>
            <div class="mt-8 flex flex-wrap items-center gap-4 text-[11px] uppercase tracking-[0.28em] text-[rgba(242,236,226,0.54)]">
              <span>{{ post.readingTime }}</span>
              <span class="h-px w-8 bg-[rgba(201,167,106,0.25)]" />
              <span>SeitenArchitekt</span>
            </div>
            <NuxtLink :to="`/blog/${post.slug}`" class="gold-button mt-10">
              Beitrag öffnen
              <span>→</span>
            </NuxtLink>
          </div>

          <div class="relative hidden min-h-[18rem] lg:block">
            <div class="absolute right-10 top-8 h-20 w-20 rounded-full border border-[rgba(201,167,106,0.25)]" />
            <div class="absolute right-20 top-20 h-3 w-3 rounded-full bg-[var(--accent)]" />
            <div class="absolute inset-x-10 bottom-0 top-12 overflow-hidden rounded-[1.75rem] border border-[rgba(255,255,255,0.08)]">
              <img :src="post.image" alt="Featured" class="h-full w-full object-cover object-center opacity-80" />
              <div class="absolute inset-0 bg-gradient-to-t from-[rgba(8,8,8,0.8)] via-[rgba(8,8,8,0.18)] to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
