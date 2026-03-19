<script setup lang="ts">
import { homeContent } from '~/data/homeContent'
import { portfolioContent } from '~/data/portfolioContent'

const { initAnimations, destroyAnimations } = usePortfolioGsap()
const resolvedPortfolioContent = useResolvedSiteAssets(portfolioContent)

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
      <PortfolioPageHeroSection :content="resolvedPortfolioContent.hero" />
      <PortfolioPageIntroSection :content="resolvedPortfolioContent.intro" />
      <PortfolioPageProjectsSection :content="resolvedPortfolioContent.projects" />
      <PortfolioPageQualitySection :content="resolvedPortfolioContent.quality" />
      <PortfolioPageApproachSection :content="resolvedPortfolioContent.approach" />
      <PortfolioPageFinalCtaSection :content="resolvedPortfolioContent.finalCta" />
    </main>

    <AppFooter
      :navigation="homeContent.footer.navigation"
      :services="homeContent.footer.services"
      :legal="homeContent.footer.legal"
    />
  </div>
</template>
