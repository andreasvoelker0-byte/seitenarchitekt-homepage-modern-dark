
import type { DefineComponent, SlotsType } from 'vue'
type IslandComponent<T> = DefineComponent<{}, {refresh: () => Promise<void>}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, SlotsType<{ fallback: { error: unknown } }>> & T

type HydrationStrategies = {
  hydrateOnVisible?: IntersectionObserverInit | true
  hydrateOnIdle?: number | true
  hydrateOnInteraction?: keyof HTMLElementEventMap | Array<keyof HTMLElementEventMap> | true
  hydrateOnMediaQuery?: string
  hydrateAfter?: number
  hydrateWhen?: boolean
  hydrateNever?: true
}
type LazyComponent<T> = DefineComponent<HydrationStrategies, {}, {}, {}, {}, {}, {}, { hydrated: () => void }> & T

interface _GlobalComponents {
  AppFooter: typeof import("../../components/layout/AppFooter.vue")['default']
  AppHeader: typeof import("../../components/layout/AppHeader.vue")['default']
  AboutPageApproachSection: typeof import("../../components/sections/AboutPageApproachSection.vue")['default']
  AboutPageFinalCtaSection: typeof import("../../components/sections/AboutPageFinalCtaSection.vue")['default']
  AboutPageHeroSection: typeof import("../../components/sections/AboutPageHeroSection.vue")['default']
  AboutPageIntroSection: typeof import("../../components/sections/AboutPageIntroSection.vue")['default']
  AboutPagePersonalSection: typeof import("../../components/sections/AboutPagePersonalSection.vue")['default']
  AboutPageValuesSection: typeof import("../../components/sections/AboutPageValuesSection.vue")['default']
  AboutPageWhySection: typeof import("../../components/sections/AboutPageWhySection.vue")['default']
  AboutSection: typeof import("../../components/sections/AboutSection.vue")['default']
  BlogPageFeaturedSection: typeof import("../../components/sections/BlogPageFeaturedSection.vue")['default']
  BlogPageFinalCtaSection: typeof import("../../components/sections/BlogPageFinalCtaSection.vue")['default']
  BlogPageHeroSection: typeof import("../../components/sections/BlogPageHeroSection.vue")['default']
  BlogPageIntroSection: typeof import("../../components/sections/BlogPageIntroSection.vue")['default']
  BlogPageListSection: typeof import("../../components/sections/BlogPageListSection.vue")['default']
  BlogPostContentSection: typeof import("../../components/sections/BlogPostContentSection.vue")['default']
  BlogPostFinalCtaSection: typeof import("../../components/sections/BlogPostFinalCtaSection.vue")['default']
  BlogPostHeroSection: typeof import("../../components/sections/BlogPostHeroSection.vue")['default']
  BlogSection: typeof import("../../components/sections/BlogSection.vue")['default']
  ContactSection: typeof import("../../components/sections/ContactSection.vue")['default']
  CtaBandSection: typeof import("../../components/sections/CtaBandSection.vue")['default']
  DifferentiatorsSection: typeof import("../../components/sections/DifferentiatorsSection.vue")['default']
  HeroSection: typeof import("../../components/sections/HeroSection.vue")['default']
  PortfolioPageApproachSection: typeof import("../../components/sections/PortfolioPageApproachSection.vue")['default']
  PortfolioPageFinalCtaSection: typeof import("../../components/sections/PortfolioPageFinalCtaSection.vue")['default']
  PortfolioPageHeroSection: typeof import("../../components/sections/PortfolioPageHeroSection.vue")['default']
  PortfolioPageIntroSection: typeof import("../../components/sections/PortfolioPageIntroSection.vue")['default']
  PortfolioPageProjectsSection: typeof import("../../components/sections/PortfolioPageProjectsSection.vue")['default']
  PortfolioPageQualitySection: typeof import("../../components/sections/PortfolioPageQualitySection.vue")['default']
  PortfolioSection: typeof import("../../components/sections/PortfolioSection.vue")['default']
  ProblemSection: typeof import("../../components/sections/ProblemSection.vue")['default']
  ProcessSection: typeof import("../../components/sections/ProcessSection.vue")['default']
  ServicesPageExtensionsSection: typeof import("../../components/sections/ServicesPageExtensionsSection.vue")['default']
  ServicesPageFinalCtaSection: typeof import("../../components/sections/ServicesPageFinalCtaSection.vue")['default']
  ServicesPageHeroSection: typeof import("../../components/sections/ServicesPageHeroSection.vue")['default']
  ServicesPageIntroSection: typeof import("../../components/sections/ServicesPageIntroSection.vue")['default']
  ServicesPagePackagesSection: typeof import("../../components/sections/ServicesPagePackagesSection.vue")['default']
  ServicesPageProcessSection: typeof import("../../components/sections/ServicesPageProcessSection.vue")['default']
  ServicesPageQualitySection: typeof import("../../components/sections/ServicesPageQualitySection.vue")['default']
  ServicesSection: typeof import("../../components/sections/ServicesSection.vue")['default']
  CursorFollower: typeof import("../../components/ui/CursorFollower.vue")['default']
  SolutionModal: typeof import("../../components/ui/SolutionModal.vue")['default']
  NuxtWelcome: typeof import("../../node_modules/nuxt/dist/app/components/welcome.vue")['default']
  NuxtLayout: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
  NuxtErrorBoundary: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']
  ClientOnly: typeof import("../../node_modules/nuxt/dist/app/components/client-only")['default']
  DevOnly: typeof import("../../node_modules/nuxt/dist/app/components/dev-only")['default']
  ServerPlaceholder: typeof import("../../node_modules/nuxt/dist/app/components/server-placeholder")['default']
  NuxtLink: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-link")['default']
  NuxtLoadingIndicator: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
  NuxtTime: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']
  NuxtRouteAnnouncer: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
  NuxtImg: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
  NuxtPicture: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
  NuxtPage: typeof import("../../node_modules/nuxt/dist/pages/runtime/page")['default']
  NoScript: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['NoScript']
  Link: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Link']
  Base: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Base']
  Title: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Title']
  Meta: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Meta']
  Style: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Style']
  Head: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Head']
  Html: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Html']
  Body: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Body']
  NuxtIsland: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-island")['default']
  LazyAppFooter: LazyComponent<typeof import("../../components/layout/AppFooter.vue")['default']>
  LazyAppHeader: LazyComponent<typeof import("../../components/layout/AppHeader.vue")['default']>
  LazyAboutPageApproachSection: LazyComponent<typeof import("../../components/sections/AboutPageApproachSection.vue")['default']>
  LazyAboutPageFinalCtaSection: LazyComponent<typeof import("../../components/sections/AboutPageFinalCtaSection.vue")['default']>
  LazyAboutPageHeroSection: LazyComponent<typeof import("../../components/sections/AboutPageHeroSection.vue")['default']>
  LazyAboutPageIntroSection: LazyComponent<typeof import("../../components/sections/AboutPageIntroSection.vue")['default']>
  LazyAboutPagePersonalSection: LazyComponent<typeof import("../../components/sections/AboutPagePersonalSection.vue")['default']>
  LazyAboutPageValuesSection: LazyComponent<typeof import("../../components/sections/AboutPageValuesSection.vue")['default']>
  LazyAboutPageWhySection: LazyComponent<typeof import("../../components/sections/AboutPageWhySection.vue")['default']>
  LazyAboutSection: LazyComponent<typeof import("../../components/sections/AboutSection.vue")['default']>
  LazyBlogPageFeaturedSection: LazyComponent<typeof import("../../components/sections/BlogPageFeaturedSection.vue")['default']>
  LazyBlogPageFinalCtaSection: LazyComponent<typeof import("../../components/sections/BlogPageFinalCtaSection.vue")['default']>
  LazyBlogPageHeroSection: LazyComponent<typeof import("../../components/sections/BlogPageHeroSection.vue")['default']>
  LazyBlogPageIntroSection: LazyComponent<typeof import("../../components/sections/BlogPageIntroSection.vue")['default']>
  LazyBlogPageListSection: LazyComponent<typeof import("../../components/sections/BlogPageListSection.vue")['default']>
  LazyBlogPostContentSection: LazyComponent<typeof import("../../components/sections/BlogPostContentSection.vue")['default']>
  LazyBlogPostFinalCtaSection: LazyComponent<typeof import("../../components/sections/BlogPostFinalCtaSection.vue")['default']>
  LazyBlogPostHeroSection: LazyComponent<typeof import("../../components/sections/BlogPostHeroSection.vue")['default']>
  LazyBlogSection: LazyComponent<typeof import("../../components/sections/BlogSection.vue")['default']>
  LazyContactSection: LazyComponent<typeof import("../../components/sections/ContactSection.vue")['default']>
  LazyCtaBandSection: LazyComponent<typeof import("../../components/sections/CtaBandSection.vue")['default']>
  LazyDifferentiatorsSection: LazyComponent<typeof import("../../components/sections/DifferentiatorsSection.vue")['default']>
  LazyHeroSection: LazyComponent<typeof import("../../components/sections/HeroSection.vue")['default']>
  LazyPortfolioPageApproachSection: LazyComponent<typeof import("../../components/sections/PortfolioPageApproachSection.vue")['default']>
  LazyPortfolioPageFinalCtaSection: LazyComponent<typeof import("../../components/sections/PortfolioPageFinalCtaSection.vue")['default']>
  LazyPortfolioPageHeroSection: LazyComponent<typeof import("../../components/sections/PortfolioPageHeroSection.vue")['default']>
  LazyPortfolioPageIntroSection: LazyComponent<typeof import("../../components/sections/PortfolioPageIntroSection.vue")['default']>
  LazyPortfolioPageProjectsSection: LazyComponent<typeof import("../../components/sections/PortfolioPageProjectsSection.vue")['default']>
  LazyPortfolioPageQualitySection: LazyComponent<typeof import("../../components/sections/PortfolioPageQualitySection.vue")['default']>
  LazyPortfolioSection: LazyComponent<typeof import("../../components/sections/PortfolioSection.vue")['default']>
  LazyProblemSection: LazyComponent<typeof import("../../components/sections/ProblemSection.vue")['default']>
  LazyProcessSection: LazyComponent<typeof import("../../components/sections/ProcessSection.vue")['default']>
  LazyServicesPageExtensionsSection: LazyComponent<typeof import("../../components/sections/ServicesPageExtensionsSection.vue")['default']>
  LazyServicesPageFinalCtaSection: LazyComponent<typeof import("../../components/sections/ServicesPageFinalCtaSection.vue")['default']>
  LazyServicesPageHeroSection: LazyComponent<typeof import("../../components/sections/ServicesPageHeroSection.vue")['default']>
  LazyServicesPageIntroSection: LazyComponent<typeof import("../../components/sections/ServicesPageIntroSection.vue")['default']>
  LazyServicesPagePackagesSection: LazyComponent<typeof import("../../components/sections/ServicesPagePackagesSection.vue")['default']>
  LazyServicesPageProcessSection: LazyComponent<typeof import("../../components/sections/ServicesPageProcessSection.vue")['default']>
  LazyServicesPageQualitySection: LazyComponent<typeof import("../../components/sections/ServicesPageQualitySection.vue")['default']>
  LazyServicesSection: LazyComponent<typeof import("../../components/sections/ServicesSection.vue")['default']>
  LazyCursorFollower: LazyComponent<typeof import("../../components/ui/CursorFollower.vue")['default']>
  LazySolutionModal: LazyComponent<typeof import("../../components/ui/SolutionModal.vue")['default']>
  LazyNuxtWelcome: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
  LazyNuxtLayout: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
  LazyNuxtErrorBoundary: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']>
  LazyClientOnly: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/client-only")['default']>
  LazyDevOnly: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/dev-only")['default']>
  LazyServerPlaceholder: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
  LazyNuxtLink: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
  LazyNuxtLoadingIndicator: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
  LazyNuxtTime: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']>
  LazyNuxtRouteAnnouncer: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
  LazyNuxtImg: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']>
  LazyNuxtPicture: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']>
  LazyNuxtPage: LazyComponent<typeof import("../../node_modules/nuxt/dist/pages/runtime/page")['default']>
  LazyNoScript: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
  LazyLink: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Link']>
  LazyBase: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Base']>
  LazyTitle: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Title']>
  LazyMeta: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Meta']>
  LazyStyle: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Style']>
  LazyHead: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Head']>
  LazyHtml: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Html']>
  LazyBody: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Body']>
  LazyNuxtIsland: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-island")['default']>
}

declare module 'vue' {
  export interface GlobalComponents extends _GlobalComponents { }
}

export {}
