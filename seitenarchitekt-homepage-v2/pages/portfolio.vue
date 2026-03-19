<script setup lang="ts">
import { homeContent } from '~/data/homeContent'
import { portfolioContent } from '~/data/portfolioContent'

const { initAnimations, destroyAnimations } = usePortfolioGsap()

definePageMeta({
  pageTransition: {
    name: 'page-fade',
    mode: 'out-in'
  }
})

useHead({
  title: portfolioContent.seo.title,
  meta: [
    {
      name: 'description',
      content: portfolioContent.seo.description
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
      <PortfolioPageHeroSection :content="portfolioContent.hero" />
      <PortfolioPageIntroSection :content="portfolioContent.intro" />
      <PortfolioPageProjectsSection :content="portfolioContent.projects" />
      <PortfolioPageQualitySection :content="portfolioContent.quality" />
      <PortfolioPageApproachSection :content="portfolioContent.approach" />
      <PortfolioPageFinalCtaSection :content="portfolioContent.finalCta" />
    </main>

    <AppFooter
      :navigation="homeContent.footer.navigation"
      :services="homeContent.footer.services"
      :legal="homeContent.footer.legal"
    />
  </div>
</template>
