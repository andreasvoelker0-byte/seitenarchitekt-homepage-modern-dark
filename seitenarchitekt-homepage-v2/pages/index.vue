<script setup lang="ts">
import { homeContent } from '~/data/homeContent'

const { initAnimations, destroyAnimations } = useHomeGsap()
const modalOpen = ref(false)
const resolvedHomeContent = useResolvedSiteAssets(homeContent)

useHead({
  title: 'Website erstellen lassen in Berlin | Seiten Architekt',
  meta: [
    {
      name: 'description',
      content:
        'Seiten Architekt Berlin erstellt professionelle Websites für Handwerksbetriebe: klare Struktur, starke Nutzerführung und SEO für mehr qualifizierte Anfragen.'
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
    <AppHeader :links="resolvedHomeContent.navLinks" />

    <main>
      <HeroSection :content="resolvedHomeContent.hero" />
      <ProblemSection :content="resolvedHomeContent.problems" @open-modal="modalOpen = true" />
      <ServicesSection :content="resolvedHomeContent.services" />
      <DifferentiatorsSection :content="resolvedHomeContent.differentiators" />
      <ProcessSection :content="resolvedHomeContent.process" />
      <PortfolioSection :content="resolvedHomeContent.portfolio" />
      <AboutSection :content="resolvedHomeContent.about" />
      <BlogSection :content="resolvedHomeContent.blog" />
      <CtaBandSection :content="resolvedHomeContent.ctaBand" />
      <ContactSection :content="resolvedHomeContent.contact" />
    </main>

    <AppFooter
      :navigation="resolvedHomeContent.footer.navigation"
      :services="resolvedHomeContent.footer.services"
      :legal="resolvedHomeContent.footer.legal"
    />

    <SolutionModal :open="modalOpen" :content="resolvedHomeContent.problems.modal" @close="modalOpen = false" />
  </div>
</template>
