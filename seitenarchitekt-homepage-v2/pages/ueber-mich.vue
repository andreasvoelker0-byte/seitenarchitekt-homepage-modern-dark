<script setup lang="ts">
import { aboutContent } from '~/data/aboutContent'
import { homeContent } from '~/data/homeContent'

const { initAnimations, destroyAnimations } = useAboutGsap()

definePageMeta({
  pageTransition: {
    name: 'page-fade',
    mode: 'out-in'
  }
})

useHead({
  title: aboutContent.seo.title,
  meta: [
    {
      name: 'description',
      content: aboutContent.seo.description
    }
  ]
})

onMounted(() => {
  initAnimations()
})

onBeforeUnmount(() => {
  destroyAnimations()
})
</script>

<template>
  <div class="relative overflow-hidden">
    <AppHeader :links="homeContent.navLinks" />

    <main>
      <AboutPageHeroSection :content="aboutContent.hero" />
      <AboutPageIntroSection :content="aboutContent.intro" />
      <AboutPageApproachSection :content="aboutContent.approach" />
      <AboutPageWhySection :content="aboutContent.why" />
      <AboutPageValuesSection :content="aboutContent.values" />
      <AboutPagePersonalSection :content="aboutContent.personal" />
      <AboutPageFinalCtaSection :content="aboutContent.finalCta" />
    </main>

    <AppFooter
      :navigation="homeContent.footer.navigation"
      :services="homeContent.footer.services"
      :legal="homeContent.footer.legal"
    />
  </div>
</template>
