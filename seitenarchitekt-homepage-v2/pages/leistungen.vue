<script setup lang="ts">
import { homeContent } from '~/data/homeContent'
import { servicesContent } from '~/data/servicesContent'

const { initAnimations, destroyAnimations } = useServicesGsap()

definePageMeta({
  pageTransition: {
    name: 'page-fade',
    mode: 'out-in'
  }
})

useHead({
  title: servicesContent.seo.title,
  meta: [
    {
      name: 'description',
      content: servicesContent.seo.description
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
      <ServicesPageHeroSection :content="servicesContent.hero" />
      <ServicesPageIntroSection :content="servicesContent.intro" />
      <ServicesPagePackagesSection :content="servicesContent.packages" />
      <ServicesPageQualitySection :content="servicesContent.quality" />
      <ServicesPageExtensionsSection :content="servicesContent.extensions" />
      <ServicesPageProcessSection :content="servicesContent.process" />
      <ServicesPageFinalCtaSection :content="servicesContent.finalCta" />
    </main>

    <AppFooter
      :navigation="homeContent.footer.navigation"
      :services="homeContent.footer.services"
      :legal="homeContent.footer.legal"
    />
  </div>
</template>
