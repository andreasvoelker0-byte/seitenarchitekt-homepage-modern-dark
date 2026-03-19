<script setup lang="ts">
defineProps<{
  content: {
    label: string
    title: string
    columns: string[][]
  }
}>()
</script>

<template>
  <section class="py-24 sm:py-28 lg:py-32">
    <div class="container-shell">
      <div class="max-w-4xl">
        <span data-reveal class="section-label">{{ content.label }}</span>
        <h2 data-reveal class="section-title mt-7 max-w-4xl text-4xl sm:text-5xl lg:text-[4.3rem]">{{ content.title }}</h2>
      </div>

      <div class="mt-14 grid gap-8 lg:grid-cols-2">
        <div v-for="(column, columnIndex) in content.columns" :key="columnIndex" class="panel p-8 sm:p-10">
          <p
            v-for="paragraph in column"
            :key="paragraph"
            data-reveal
            class="text-base leading-8 text-[var(--muted)] [&:not(:first-child)]:mt-6"
          >
            {{ paragraph }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
