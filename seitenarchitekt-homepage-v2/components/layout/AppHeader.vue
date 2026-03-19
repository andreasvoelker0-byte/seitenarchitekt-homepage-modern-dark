<script setup lang="ts">
defineProps<{
  links: Array<{ label: string; to: string }>
}>()

const mobileOpen = ref(false)
const route = useRoute()

const isLinkActive = (to: string) => {
  if (to === '/') {
    return route.path === '/'
  }

  if (to.startsWith('/#')) {
    return route.path === '/' && route.hash === to.replace('/', '')
  }

  return route.path === to || route.path.startsWith(`${to}/`)
}

watch(
  () => route.fullPath,
  () => {
    mobileOpen.value = false
  }
)
</script>

<template>
  <header class="fixed inset-x-0 top-0 z-50">
    <div class="container-shell pt-5 sm:pt-6">
      <div
        data-header
        class="border border-[rgba(201,167,106,0.12)] bg-[rgba(7,7,7,0.66)] px-5 py-4 backdrop-blur-xl transition-all duration-300 sm:px-7"
      >
        <div class="flex items-center justify-between gap-6">
          <NuxtLink to="/" class="inline-flex items-baseline gap-0.5 text-lg text-[var(--text)] transition duration-300 hover:opacity-90 sm:text-xl">
            <span class="font-medium">Seiten</span>
            <span class="eyebrow-text">Architekt</span>
          </NuxtLink>

          <nav class="hidden items-center gap-1 lg:flex">
            <NuxtLink
              v-for="link in links"
              :key="link.label"
              :to="link.to"
              class="nav-link"
              :class="{ 'nav-link-active': isLinkActive(link.to) }"
            >
              {{ link.label }}
            </NuxtLink>
          </nav>

          <NuxtLink to="/#kontakt" class="gold-button hidden lg:inline-flex">
            Kontakt
            <span>→</span>
          </NuxtLink>

          <button
            class="inline-flex h-11 w-11 items-center justify-center border border-[rgba(201,167,106,0.18)] text-[var(--text)] lg:hidden"
            type="button"
            aria-label="Navigation öffnen"
            @click="mobileOpen = !mobileOpen"
          >
            <span class="space-y-1.5">
              <span class="block h-px w-5 bg-current" />
              <span class="block h-px w-5 bg-current" />
            </span>
          </button>
        </div>

        <Transition
          enter-active-class="transition duration-200 ease-out"
          enter-from-class="opacity-0 -translate-y-2"
          enter-to-class="opacity-100 translate-y-0"
          leave-active-class="transition duration-150 ease-in"
          leave-from-class="opacity-100 translate-y-0"
          leave-to-class="opacity-0 -translate-y-2"
        >
          <nav v-if="mobileOpen" class="mt-5 grid gap-1 border-t border-[rgba(201,167,106,0.12)] pt-5 lg:hidden">
            <NuxtLink
              v-for="link in links"
              :key="link.label"
              :to="link.to"
              class="nav-link px-0"
              :class="{ 'nav-link-active': isLinkActive(link.to) }"
            >
              {{ link.label }}
            </NuxtLink>
            <NuxtLink to="/#kontakt" class="gold-button mt-3 w-full justify-center">
              Kontakt
              <span>→</span>
            </NuxtLink>
          </nav>
        </Transition>
      </div>
    </div>
  </header>
</template>
