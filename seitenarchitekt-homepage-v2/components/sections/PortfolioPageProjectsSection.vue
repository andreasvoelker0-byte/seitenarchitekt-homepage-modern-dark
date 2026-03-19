<script setup lang="ts">
import { withBase } from 'ufo'

const props = defineProps<{
  content: {
    label: string
    title: string
    items: Array<{
      chip: string
      previewTitle: string
      previewImage: string
      heading: string
      intro: string
      paragraphs: string[]
      linkLabel: string
      to: string
    }>
  }
}>()

const { app } = useRuntimeConfig()

const resolveHref = (to: string) => withBase(to, app.baseURL)

const getProjectId = (to: string) =>
  to
    .split('/')
    .filter(Boolean)
    .at(-1)
    ?.replace(/\.html$/i, '')
    .replace(/[^a-z0-9-]/gi, '')
    .toLowerCase() ?? ''
</script>

<template>
  <section id="projekte" class="py-24 sm:py-28 lg:py-32">
    <div class="container-shell">
      <div class="mx-auto max-w-3xl text-center">
        <span data-reveal class="section-label justify-center">{{ props.content.label }}</span>
        <h2 data-reveal class="section-title mt-7 text-4xl sm:text-5xl lg:text-[4rem]">{{ props.content.title }}</h2>
      </div>

      <div class="mt-14 grid gap-8 lg:grid-cols-2">
        <article
          v-for="item in props.content.items"
          :id="getProjectId(item.to)"
          :key="item.previewTitle"
          data-reveal
          class="panel overflow-hidden p-0"
        >
          <div class="relative border-b border-[rgba(201,167,106,0.12)]">
            <img :src="item.previewImage" alt="Konzept-Vorschau" class="h-56 w-full object-cover sm:h-64" />
            <div class="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,8,8,0.18),rgba(8,8,8,0.82))]" />
            <div class="absolute inset-x-0 bottom-0 p-6 sm:p-8">
              <div class="tiny-kicker">{{ item.chip }}</div>
              <div class="mt-3 display-face text-2xl text-[var(--text)] sm:text-[2rem]">{{ item.previewTitle }}</div>
            </div>
          </div>

          <div class="px-7 py-8 sm:px-9 sm:py-10">
            <h3 class="display-face text-3xl text-[var(--text)]">{{ item.heading }}</h3>
            <p class="mt-5 text-base leading-8 text-[var(--muted)]">{{ item.intro }}</p>
            <p v-for="paragraph in item.paragraphs" :key="paragraph" class="mt-5 text-base leading-8 text-[var(--muted)]">
              {{ paragraph }}
            </p>
            <a :href="resolveHref(item.to)" class="ghost-button mt-6">
              {{ item.linkLabel }}
            </a>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
