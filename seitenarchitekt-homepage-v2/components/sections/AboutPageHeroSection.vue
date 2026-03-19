<script setup lang="ts">
defineProps<{
  content: {
    badge: string
    titleLead: string
    titleAccent: string
    copy: string
    primaryCta: { label: string; to: string }
    secondaryCta: { label: string; to: string }
    image: string
    backgroundImage: string
  }
}>()
</script>

<template>
  <section class="relative overflow-hidden pt-32 sm:pt-36 lg:min-h-screen lg:pt-40">
    <div class="absolute inset-0 overflow-hidden">
      <div
        data-about-hero-bg
        class="absolute inset-0 scale-110 bg-cover bg-center opacity-30"
        :style="{ backgroundImage: `url(${content.backgroundImage})` }"
      />
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(201,167,106,0.22),transparent_24%),linear-gradient(180deg,rgba(8,8,8,0.18),rgba(8,8,8,0.9)_68%,rgba(8,8,8,1))]" />
    </div>

    <div class="container-shell relative z-10 pb-20 sm:pb-24 lg:pb-28">
      <div class="grid gap-14 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
        <div data-about-hero-content class="max-w-4xl">
          <span class="section-label">{{ content.badge }}</span>

          <h1 class="section-title mt-8 max-w-5xl text-5xl sm:text-6xl lg:text-[5.65rem]">
            {{ content.titleLead }}<br>
            <em class="font-normal text-[var(--accent)]">{{ content.titleAccent }}</em>
          </h1>

          <p class="mt-8 max-w-2xl text-lg leading-8 text-[var(--muted)] sm:text-xl sm:leading-9">
            {{ content.copy }}
          </p>

          <div class="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <NuxtLink :to="content.primaryCta.to" class="gold-button">
              {{ content.primaryCta.label }}
              <span>→</span>
            </NuxtLink>
            <NuxtLink :to="content.secondaryCta.to" class="ghost-button">
              {{ content.secondaryCta.label }}
              <span>→</span>
            </NuxtLink>
          </div>
        </div>

        <div data-about-hero-image class="relative mx-auto w-full max-w-[35rem] lg:mx-0">
          <div class="absolute -left-3 top-14 h-2.5 w-2.5 rounded-full bg-[var(--accent)]" />
          <div class="absolute left-9 top-8 h-14 w-14 rounded-full border border-[rgba(213,182,128,0.35)]" />
          <div class="absolute -right-6 top-6 h-60 w-60 rounded-full border border-[rgba(255,255,255,0.34)] sm:h-72 sm:w-72" />
          <div class="absolute right-12 top-16 h-40 w-40 rounded-full border border-[rgba(201,167,106,0.28)] sm:h-52 sm:w-52" />

          <div class="panel relative overflow-hidden p-4 sm:p-5">
            <div class="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),transparent_24%)]" />
            <img :src="content.image" alt="Portrait" class="h-[500px] w-full object-cover object-center sm:h-[620px]" />
            <div class="absolute inset-0 bg-gradient-to-t from-[rgba(8,8,8,0.48)] via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
