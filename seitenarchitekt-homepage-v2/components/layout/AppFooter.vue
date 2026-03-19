<script setup lang="ts">
defineProps<{
  navigation: Array<{ label: string; to: string }>
  services: Array<{ label: string; to: string }>
  legal: Array<{ label: string; to: string }>
}>()
</script>

<template>
  <footer class="border-t border-[rgba(201,167,106,0.12)] bg-[rgba(7,7,7,0.82)] py-14">
    <div class="container-shell grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
      <div>
        <p class="text-lg text-[var(--text)]"><span class="font-medium">Seiten</span><span class="eyebrow-text">Architekt</span></p>
      </div>

      <div>
        <h3 class="tiny-kicker">Navigation</h3>
        <ul class="mt-5 space-y-3 text-sm text-[var(--muted)]">
          <li v-for="item in navigation" :key="item.label">
            <NuxtLink :to="item.to" class="transition hover:text-[var(--text)]">{{ item.label }}</NuxtLink>
          </li>
        </ul>
      </div>

      <div class="grid gap-10 sm:grid-cols-2 lg:grid-cols-1">
        <div>
          <h3 class="tiny-kicker">Leistungen</h3>
          <ul class="mt-5 space-y-3 text-sm text-[var(--muted)]">
            <li v-for="item in services" :key="item.label">
              <NuxtLink :to="item.to" class="transition hover:text-[var(--text)]">{{ item.label }}</NuxtLink>
            </li>
          </ul>
        </div>

        <div>
          <h3 class="tiny-kicker">Rechtliches</h3>
          <ul class="mt-5 space-y-3 text-sm text-[var(--muted)]">
            <li v-for="item in legal" :key="item.label">
              <NuxtLink :to="item.to" class="transition hover:text-[var(--text)]">{{ item.label }}</NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>
