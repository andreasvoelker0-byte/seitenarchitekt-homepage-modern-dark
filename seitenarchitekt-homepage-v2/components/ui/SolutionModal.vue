<script setup lang="ts">
defineProps<{
  open: boolean
  content: {
    intro: string
    steps: string[]
    outro: string
    cta: string
    footnote: string
  }
}>()

const emit = defineEmits<{
  close: []
}>()
</script>

<template>
  <Transition
    enter-active-class="transition duration-200 ease-out"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition duration-150 ease-in"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div v-if="open" class="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 px-6 py-10 backdrop-blur-sm" @click.self="emit('close')">
      <div class="w-full max-w-3xl border border-[rgba(201,167,106,0.18)] bg-[rgba(8,8,8,0.96)] px-6 py-7 shadow-[0_25px_80px_rgba(0,0,0,0.48)] sm:px-10 sm:py-10">
        <div class="flex items-start justify-between gap-6">
          <p class="max-w-2xl display-face text-3xl font-normal tracking-[-0.03em] text-[var(--text)] sm:text-4xl">{{ content.intro }}</p>
          <button class="border border-[rgba(201,167,106,0.18)] px-4 py-3 text-[var(--muted)] transition hover:text-[var(--text)]" type="button" aria-label="Modal schließen" @click="emit('close')">
            ✕
          </button>
        </div>

        <div class="mt-8 grid gap-px bg-[rgba(201,167,106,0.12)]">
          <div v-for="(step, index) in content.steps" :key="step" class="bg-[rgba(7,7,7,0.72)] px-5 py-5 sm:px-6 sm:py-6">
            <p class="tiny-kicker">0{{ index + 1 }}</p>
            <p class="mt-3 text-base leading-8 text-[var(--muted)]">{{ step }}</p>
          </div>
        </div>

        <p class="mt-8 max-w-2xl text-base leading-8 text-[var(--muted)]">{{ content.outro }}</p>

        <div class="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <NuxtLink to="/#kontakt" class="gold-button">
            {{ content.cta }}
            <span>→</span>
          </NuxtLink>
          <p class="text-sm text-[rgba(183,171,154,0.72)]">{{ content.footnote }}</p>
        </div>
      </div>
    </div>
  </Transition>
</template>
