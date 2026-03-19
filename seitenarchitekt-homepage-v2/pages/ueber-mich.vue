<script setup lang="ts">
import { aboutContent } from '~/data/aboutContent'
import { homeContent } from '~/data/homeContent'

const { initAnimations, destroyAnimations } = useAboutGsap()
const resolvedAboutContent = useResolvedSiteAssets(aboutContent)

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
      <AboutPageHeroSection :content="resolvedAboutContent.hero" />
      <AboutPageIntroSection :content="resolvedAboutContent.intro" />
      <AboutPageApproachSection :content="resolvedAboutContent.approach" />
      <AboutPageWhySection :content="resolvedAboutContent.why" />
      <AboutPageValuesSection :content="resolvedAboutContent.values" />
      <AboutPagePersonalSection :content="resolvedAboutContent.personal" />
      <AboutPageFinalCtaSection :content="resolvedAboutContent.finalCta" />
    </main>

    <AppFooter
      :navigation="homeContent.footer.navigation"
      :services="homeContent.footer.services"
      :legal="homeContent.footer.legal"
    />
  </div>
</template>
