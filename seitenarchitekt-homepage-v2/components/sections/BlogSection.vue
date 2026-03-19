<script setup lang="ts">
defineProps<{
  content: {
    title: string
    copy: string
    cta: { label: string; to: string }
    posts: Array<{
      title: string
      copy: string
      linkLabel: string
      to: string
      image: string
    }>
  }
}>()
</script>

<template>
  <section class="py-24 sm:py-28 lg:py-32">
    <div class="container-shell">
      <div class="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <h2 data-reveal class="section-title max-w-3xl">{{ content.title }}</h2>
          <p data-reveal class="mt-7 section-copy">{{ content.copy }}</p>
        </div>
        <NuxtLink data-reveal :to="content.cta.to" class="ghost-button">
          {{ content.cta.label }}
        </NuxtLink>
      </div>

      <div class="mt-14 grid gap-6 lg:grid-cols-3">
        <article v-for="post in content.posts" :key="post.title" data-reveal class="overflow-hidden border border-[rgba(201,167,106,0.12)] bg-[rgba(8,8,8,0.62)]">
          <img :src="post.image" alt="Artikelbild" class="h-60 w-full object-cover" />
          <div class="px-6 py-7 sm:px-8 sm:py-8">
            <h3 class="display-face text-[2rem] font-normal tracking-[-0.03em] text-[var(--text)]">
              {{ post.title }}
            </h3>
            <p class="mt-5 text-base leading-8 text-[var(--muted)]">{{ post.copy }}</p>
            <NuxtLink :to="post.to" class="ghost-button mt-5 py-2">
              {{ post.linkLabel }}
            </NuxtLink>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
