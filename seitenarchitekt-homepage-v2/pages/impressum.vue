<script setup lang="ts">
import { homeContent } from '~/data/homeContent'

useHead({
  title: 'Impressum | SeitenArchitekt Berlin',
  meta: [
    {
      name: 'description',
      content: 'Impressum von SeitenArchitekt.'
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
          <article class="panel mx-auto max-w-5xl p-8 sm:p-10 lg:p-14">
            <p class="section-label">Rechtliches</p>
            <h1 class="section-title mt-6 text-4xl sm:text-5xl">Impressum</h1>

            <div class="mt-10 space-y-8 text-base leading-8 text-[var(--muted)]">
              <section class="space-y-4">
                <p>
                  Andreas Völker<br>
                  Seitenarchitekt – Webdesign<br>
                  National Road 6, Slar Kram Village, Sangkat Slar Kram, Siem Reap City-Province<br>
                  17251 Siem Reap
                </p>
              </section>

              <section class="space-y-4">
                <h2 class="text-2xl font-semibold text-white">Kontakt</h2>
                <p>E-Mail: andreas.seitenarchitekt@gmail.com</p>
              </section>

              <section class="space-y-4">
                <h2 class="text-2xl font-semibold text-white">
                  Verbraucherstreitbeilegung/Universalschlichtungsstelle
                </h2>
                <p>
                  Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
                  Verbraucherschlichtungsstelle teilzunehmen.
                </p>
              </section>

              <section class="space-y-4">
                <p>Quelle: eRecht24</p>
              </section>
            </div>
          </article>
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
