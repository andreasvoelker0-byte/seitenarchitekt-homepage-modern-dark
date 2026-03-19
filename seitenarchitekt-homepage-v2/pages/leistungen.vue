<script setup lang="ts">
import { homeContent } from '~/data/homeContent'
import { servicesContent } from '~/data/servicesContent'

const { initAnimations, destroyAnimations } = useServicesGsap()
const resolvedServicesContent = useResolvedSiteAssets(servicesContent)

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
      <ServicesPageHeroSection :content="resolvedServicesContent.hero" />
      <ServicesPageIntroSection :content="resolvedServicesContent.intro" />
      <ServicesPagePackagesSection :content="resolvedServicesContent.packages" />
      <ServicesPageQualitySection :content="resolvedServicesContent.quality" />
      <ServicesPageExtensionsSection :content="resolvedServicesContent.extensions" />
      <ServicesPageProcessSection :content="resolvedServicesContent.process" />
      <ServicesPageFinalCtaSection :content="resolvedServicesContent.finalCta" />
    </main>

    <AppFooter
      :navigation="homeContent.footer.navigation"
      :services="homeContent.footer.services"
      :legal="homeContent.footer.legal"
    />
  </div>
</template>
