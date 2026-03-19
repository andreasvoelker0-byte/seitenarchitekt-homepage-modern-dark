<script setup lang="ts">
defineProps<{
  content: {
    title: string
    copy: string
    methods: Array<{ title: string; copy: string; href: string }>
    formTitle: string
    buttonLabel: string
  }
}>()
</script>

<template>
  <section id="kontakt" class="pb-24 pt-8 sm:pb-28 lg:pb-32">
    <div class="container-shell grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
      <div class="border border-[rgba(201,167,106,0.12)] bg-[rgba(8,8,8,0.6)] px-7 py-8 sm:px-10 sm:py-10">
        <h2 data-reveal class="section-title max-w-xl text-4xl sm:text-5xl">{{ content.title }}</h2>
        <p data-reveal class="mt-7 max-w-xl text-base leading-8 text-[var(--muted)]">{{ content.copy }}</p>

        <div class="mt-10 grid gap-px bg-[rgba(201,167,106,0.12)]">
          <a
            v-for="method in content.methods"
            :key="method.title"
            :href="method.href"
            data-reveal
            class="bg-[rgba(7,7,7,0.62)] px-6 py-6 transition duration-300 hover:bg-[rgba(12,12,12,0.92)]"
          >
            <p class="tiny-kicker">{{ method.title }}</p>
            <p class="mt-3 text-lg text-[var(--text)]">{{ method.copy }}</p>
          </a>
        </div>
      </div>

      <div class="border border-[rgba(201,167,106,0.12)] bg-[rgba(8,8,8,0.6)] px-7 py-8 sm:px-10 sm:py-10">
        <h3 data-reveal class="display-face text-4xl font-normal tracking-[-0.03em] text-[var(--text)]">{{ content.formTitle }}</h3>

        <form class="mt-8 grid gap-4">
          <input data-reveal type="text" placeholder="Name" class="border border-[rgba(201,167,106,0.12)] bg-[rgba(5,5,5,0.52)] px-5 py-4 text-[var(--text)] outline-none transition placeholder:text-[rgba(183,171,154,0.55)] focus:border-[rgba(201,167,106,0.35)]" />
          <input data-reveal type="email" placeholder="E-Mail" class="border border-[rgba(201,167,106,0.12)] bg-[rgba(5,5,5,0.52)] px-5 py-4 text-[var(--text)] outline-none transition placeholder:text-[rgba(183,171,154,0.55)] focus:border-[rgba(201,167,106,0.35)]" />
          <textarea data-reveal rows="6" placeholder="Nachricht" class="border border-[rgba(201,167,106,0.12)] bg-[rgba(5,5,5,0.52)] px-5 py-4 text-[var(--text)] outline-none transition placeholder:text-[rgba(183,171,154,0.55)] focus:border-[rgba(201,167,106,0.35)]" />
          <button data-reveal type="button" class="gold-button mt-2 w-full sm:w-auto">
            {{ content.buttonLabel }}
            <span>→</span>
          </button>
        </form>
      </div>
    </div>
  </section>
</template>
