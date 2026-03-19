<script setup lang="ts">
defineProps<{
  post: {
    intro: string
    bullets: string[]
    sections: Array<{
      title: string
      paragraphs: string[]
    }>
  }
}>()
</script>

<template>
  <section class="pb-24 pt-8 sm:pb-28 sm:pt-10">
    <div class="container-shell">
      <div class="grid gap-10 lg:grid-cols-[0.68fr_0.32fr] lg:items-start">
        <div class="space-y-8">
          <div data-reveal class="panel p-8 sm:p-10 lg:p-12">
            <span class="section-label">Einordnung</span>
            <p class="mt-8 text-lg leading-8 text-[var(--muted)] sm:text-xl sm:leading-9">
              {{ post.intro }}
            </p>
          </div>

          <article
            v-for="section in post.sections"
            :key="section.title"
            data-reveal
            class="panel p-8 sm:p-10 lg:p-12"
          >
            <h2 class="display-face text-3xl leading-tight text-[var(--text)] sm:text-4xl">
              {{ section.title }}
            </h2>
            <div class="mt-6 space-y-5 text-base leading-8 text-[var(--muted)] sm:text-lg">
              <p v-for="paragraph in section.paragraphs" :key="paragraph">
                {{ paragraph }}
              </p>
            </div>
          </article>
        </div>

        <aside class="lg:sticky lg:top-32">
          <div data-reveal class="panel p-8 sm:p-10">
            <span class="section-label">Kernaussagen</span>
            <ul class="mt-8 space-y-4">
              <li v-for="bullet in post.bullets" :key="bullet" class="flex gap-4 text-base leading-7 text-[var(--muted)]">
                <span class="mt-2 h-2.5 w-2.5 rounded-full bg-[var(--accent)]" />
                <span>{{ bullet }}</span>
              </li>
            </ul>
            <div class="mt-10 split-line" />
            <p class="mt-8 text-sm leading-7 text-[rgba(242,236,226,0.58)]">
              Wenn du deine Website professionell planen möchtest, lässt sich genau aus diesen Punkten ableiten, welche Struktur, Inhalte und Prioritäten für deinen Betrieb sinnvoll sind.
            </p>
          </div>
        </aside>
      </div>
    </div>
  </section>
</template>
