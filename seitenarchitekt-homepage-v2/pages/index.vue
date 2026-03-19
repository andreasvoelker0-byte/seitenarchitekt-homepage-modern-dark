<script setup lang="ts">
import { homeContent } from '~/data/homeContent'

const { initAnimations, destroyAnimations } = useHomeGsap()
const modalOpen = ref(false)

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
    <AppHeader :links="homeContent.navLinks" />

    <main>
      <HeroSection :content="homeContent.hero" />
      <ProblemSection :content="homeContent.problems" @open-modal="modalOpen = true" />
      <ServicesSection :content="homeContent.services" />
      <DifferentiatorsSection :content="homeContent.differentiators" />
      <ProcessSection :content="homeContent.process" />
      <PortfolioSection :content="homeContent.portfolio" />
      <AboutSection :content="homeContent.about" />
      <BlogSection :content="homeContent.blog" />
      <CtaBandSection :content="homeContent.ctaBand" />
      <ContactSection :content="homeContent.contact" />
    </main>

    <AppFooter
      :navigation="homeContent.footer.navigation"
      :services="homeContent.footer.services"
      :legal="homeContent.footer.legal"
    />

    <SolutionModal :open="modalOpen" :content="homeContent.problems.modal" @close="modalOpen = false" />
  </div>
</template>
