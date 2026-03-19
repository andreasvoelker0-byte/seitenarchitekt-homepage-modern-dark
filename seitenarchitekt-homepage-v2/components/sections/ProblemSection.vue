<script setup lang="ts">
defineProps<{
  content: {
    title: string
    intro: string
    copy: string
    ctaLabel: string
    cards: string[]
  }
}>()

const emit = defineEmits<{
  openModal: []
}>()
</script>

<template>
  <section class="py-24 sm:py-28 lg:py-32">
    <div class="container-shell">
      <div class="grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
        <div>
          <h2 data-reveal class="section-title max-w-xl">{{ content.title }}</h2>
        </div>
        <div>
          <p data-reveal class="section-copy">{{ content.intro }}</p>
          <p data-reveal class="mt-5 section-copy">{{ content.copy }}</p>
          <button data-reveal class="ghost-button mt-7" type="button" @click="emit('openModal')">
            {{ content.ctaLabel }}
          </button>
        </div>
      </div>

      <div class="mt-14 grid gap-px bg-[rgba(201,167,106,0.12)] md:grid-cols-2">
        <article
          v-for="(card, index) in content.cards"
          :key="card"
          data-reveal
          class="bg-[rgba(7,7,7,0.62)] px-7 py-8 sm:px-10 sm:py-10"
        >
          <div class="flex items-start justify-between gap-6">
            <div class="split-line mt-4 w-9" />
            <span class="tiny-kicker">0{{ index + 1 }}</span>
          </div>
          <p class="mt-8 max-w-xl text-base leading-8 text-[var(--muted)]">
            {{ card }}
          </p>
        </article>
      </div>
    </div>
  </section>
</template>
