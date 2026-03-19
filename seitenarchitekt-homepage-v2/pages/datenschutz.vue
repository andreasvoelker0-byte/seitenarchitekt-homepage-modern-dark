<script setup lang="ts">
import { homeContent } from '~/data/homeContent'

useHead({
  title: 'Datenschutz | SeitenArchitekt',
  meta: [
    {
      name: 'description',
      content: 'Datenschutzhinweise der SeitenArchitekt Projektseite.'
    }
  ]
})
</script>

<template>
  <div class="relative overflow-hidden">
    <AppHeader :links="homeContent.navLinks" />

    <main class="pt-32 sm:pt-36 lg:pt-40">
      <section class="pb-24 sm:pb-28 lg:pb-32">
        <div class="container-shell">
          <div class="panel max-w-4xl p-8 sm:p-10">
            <p class="section-label">Rechtliches</p>
            <h1 class="section-title mt-6 text-4xl sm:text-5xl">Datenschutz</h1>
            <div class="mt-8 space-y-5 text-base leading-8 text-[var(--muted)]">
              <p>Dies ist eine Projektseite für GitHub Pages und ein Portfolio-Demoprojekt.</p>
              <p>Bitte ergänze hier vor der Veröffentlichung deine tatsächliche Datenschutzerklärung passend zu Hosting, Formularen, Analyse-Tools und Kontaktwegen.</p>
              <p>Für eine echte Veröffentlichung sollten die Angaben fachlich und rechtlich geprüft werden.</p>
            </div>
          </div>
        </div>
      </section>
    </main>

    <AppFooter
      :navigation="homeContent.footer.navigation"
      :services="homeContent.footer.services"
      :legal="homeContent.footer.legal"
    />
  </div>
</template>
