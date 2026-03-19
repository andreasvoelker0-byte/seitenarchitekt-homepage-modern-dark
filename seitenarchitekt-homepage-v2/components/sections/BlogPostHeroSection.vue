<script setup lang="ts">
defineProps<{
  post: {
    slug: string
    category: string
    title: string
    excerpt: string
    readingTime: string
    image: string
    intro: string
    bullets: string[]
  }
}>()
</script>

<template>
  <section class="relative overflow-hidden pt-32 sm:pt-36 lg:pt-40">
    <div class="absolute inset-0 overflow-hidden">
      <div
        data-blog-post-hero-bg
        class="absolute inset-0 scale-110 bg-cover bg-center opacity-24"
        :style="{ backgroundImage: `url(${post.image})` }"
      />
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(201,167,106,0.18),transparent_22%),linear-gradient(180deg,rgba(8,8,8,0.18),rgba(8,8,8,0.92)_68%,rgba(8,8,8,1))]" />
    </div>

    <div class="container-shell relative z-10 pb-16 sm:pb-20">
      <NuxtLink to="/blog" class="ghost-button mb-10">
        <span>←</span>
        Zur Blog-Übersicht
      </NuxtLink>

      <div class="grid gap-12 lg:grid-cols-[1.04fr_0.96fr] lg:items-end">
        <div data-blog-post-hero-content class="max-w-4xl">
          <p class="tiny-kicker">{{ post.category }}</p>
          <h1 class="section-title mt-6 text-5xl sm:text-6xl lg:text-[5rem]">{{ post.title }}</h1>
          <p class="mt-8 max-w-2xl text-lg leading-8 text-[var(--muted)] sm:text-xl sm:leading-9">{{ post.excerpt }}</p>
          <div class="mt-8 flex flex-wrap items-center gap-4 text-[11px] uppercase tracking-[0.28em] text-[rgba(242,236,226,0.54)]">
            <span>{{ post.readingTime }}</span>
            <span class="h-px w-8 bg-[rgba(201,167,106,0.25)]" />
            <span>SeitenArchitekt</span>
          </div>
        </div>

        <div data-blog-post-hero-image class="relative mx-auto w-full max-w-[35rem] lg:mx-0">
          <div class="absolute -left-3 top-14 h-2.5 w-2.5 rounded-full bg-[var(--accent)]" />
          <div class="absolute left-9 top-8 h-14 w-14 rounded-full border border-[rgba(213,182,128,0.35)]" />
          <div class="panel relative overflow-hidden p-4 sm:p-5">
            <img :src="post.image" :alt="post.title" class="h-[420px] w-full object-cover object-center sm:h-[520px]" />
            <div class="absolute inset-0 bg-gradient-to-t from-[rgba(8,8,8,0.55)] via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
