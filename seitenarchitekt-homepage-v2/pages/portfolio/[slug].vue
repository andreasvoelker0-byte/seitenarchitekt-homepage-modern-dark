<script setup lang="ts">
import { homeContent } from '~/data/homeContent'
import { portfolioContent } from '~/data/portfolioContent'

const route = useRoute()
const resolvedProjects = useResolvedSiteAssets(portfolioContent.projects.items)

const slug = computed(() => {
  const value = route.params.slug
  return Array.isArray(value) ? value[0] ?? '' : value ?? ''
})

const project = computed(() => {
  return (
    resolvedProjects.find(item => item.to.split('/').filter(Boolean).at(-1) === slug.value) ?? null
  )
})

definePageMeta({
  pageTransition: {
    name: 'page-fade',
    mode: 'out-in'
  }
})

useHead(() => ({
  title: project.value
    ? `${project.value.previewTitle} | Portfolio | SeitenArchitekt`
    : 'Portfolio | SeitenArchitekt',
  meta: [
    {
      name: 'description',
      content: project.value?.intro ?? 'Portfolio-Konzeptseite von SeitenArchitekt'
    }
  ]
}))

watchEffect(() => {
  if (slug.value && !project.value) {
    throw createError({ statusCode: 404, statusMessage: 'Projekt nicht gefunden' })
  }
})
</script>

<template>
  <div v-if="project" class="relative overflow-hidden">
    <AppHeader :links="homeContent.navLinks" />

    <main>
      <section class="relative overflow-hidden pt-32 sm:pt-36 lg:pt-40">
        <div class="absolute inset-0 overflow-hidden">
          <div
            class="absolute inset-0 scale-110 bg-cover bg-center opacity-24"
            :style="{ backgroundImage: `url(${project.previewImage})` }"
          />
          <div class="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(201,167,106,0.18),transparent_22%),linear-gradient(180deg,rgba(8,8,8,0.18),rgba(8,8,8,0.92)_68%,rgba(8,8,8,1))]" />
        </div>

        <div class="container-shell relative z-10 pb-20 sm:pb-24">
          <NuxtLink to="/portfolio" class="ghost-button mb-10">
            <span>&larr;</span>
            Zur Portfolio-Übersicht
          </NuxtLink>

          <div class="grid gap-12 lg:grid-cols-[1.04fr_0.96fr] lg:items-end">
            <div class="max-w-4xl">
              <p class="tiny-kicker">{{ project.chip }}</p>
              <h1 class="section-title mt-6 text-5xl sm:text-6xl lg:text-[5rem]">{{ project.previewTitle }}</h1>
              <p class="mt-8 max-w-2xl text-lg leading-8 text-[var(--muted)] sm:text-xl sm:leading-9">{{ project.heading }}</p>
              <p class="mt-6 max-w-2xl text-base leading-8 text-[var(--muted)]">{{ project.intro }}</p>
            </div>

            <div class="relative mx-auto w-full max-w-[35rem] lg:mx-0">
              <div class="absolute -left-3 top-14 h-2.5 w-2.5 rounded-full bg-[var(--accent)]" />
              <div class="absolute left-9 top-8 h-14 w-14 rounded-full border border-[rgba(213,182,128,0.35)]" />
              <div class="panel relative overflow-hidden p-4 sm:p-5">
                <img :src="project.previewImage" :alt="project.previewTitle" class="h-[420px] w-full object-cover object-center sm:h-[520px]" />
                <div class="absolute inset-0 bg-gradient-to-t from-[rgba(8,8,8,0.55)] via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="py-24 sm:py-28 lg:py-32">
        <div class="container-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div class="panel p-8 sm:p-10">
            <p class="section-label">Konzeptgedanke</p>
            <h2 class="section-title mt-6 text-4xl sm:text-5xl">{{ project.heading }}</h2>
            <p class="mt-6 text-base leading-8 text-[var(--muted)]">
              Diese Portfolio-Seite ist als statisch veröffentlichbares Konzept für GitHub Pages aufbereitet und bleibt damit direkt verlinkbar.
            </p>
          </div>

          <div class="panel p-8 sm:p-10">
            <p
              v-for="paragraph in project.paragraphs"
              :key="paragraph"
              class="text-base leading-8 text-[var(--muted)]"
            >
              {{ paragraph }}
            </p>

            <div class="mt-8 flex flex-col gap-4 sm:flex-row">
              <NuxtLink to="/#kontakt" class="gold-button">
                Projekt anfragen
                <span>&rarr;</span>
              </NuxtLink>
              <NuxtLink to="/leistungen" class="ghost-button">
                Leistungen ansehen
              </NuxtLink>
            </div>
          </div>
        </div>
      </section>
    </main>

    <AppFooter
      :navigation="homeContent.footer.navigation"
      :services="homeContent.footer.services"
      :legal="homeContent.footer.legal"
    />
  </div>
</template>
