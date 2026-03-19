
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


export const AppFooter: typeof import("../components/layout/AppFooter.vue")['default']
export const AppHeader: typeof import("../components/layout/AppHeader.vue")['default']
export const AboutPageApproachSection: typeof import("../components/sections/AboutPageApproachSection.vue")['default']
export const AboutPageFinalCtaSection: typeof import("../components/sections/AboutPageFinalCtaSection.vue")['default']
export const AboutPageHeroSection: typeof import("../components/sections/AboutPageHeroSection.vue")['default']
export const AboutPageIntroSection: typeof import("../components/sections/AboutPageIntroSection.vue")['default']
export const AboutPagePersonalSection: typeof import("../components/sections/AboutPagePersonalSection.vue")['default']
export const AboutPageValuesSection: typeof import("../components/sections/AboutPageValuesSection.vue")['default']
export const AboutPageWhySection: typeof import("../components/sections/AboutPageWhySection.vue")['default']
export const AboutSection: typeof import("../components/sections/AboutSection.vue")['default']
export const BlogPageFeaturedSection: typeof import("../components/sections/BlogPageFeaturedSection.vue")['default']
export const BlogPageFinalCtaSection: typeof import("../components/sections/BlogPageFinalCtaSection.vue")['default']
export const BlogPageHeroSection: typeof import("../components/sections/BlogPageHeroSection.vue")['default']
export const BlogPageIntroSection: typeof import("../components/sections/BlogPageIntroSection.vue")['default']
export const BlogPageListSection: typeof import("../components/sections/BlogPageListSection.vue")['default']
export const BlogPostContentSection: typeof import("../components/sections/BlogPostContentSection.vue")['default']
export const BlogPostFinalCtaSection: typeof import("../components/sections/BlogPostFinalCtaSection.vue")['default']
export const BlogPostHeroSection: typeof import("../components/sections/BlogPostHeroSection.vue")['default']
export const BlogSection: typeof import("../components/sections/BlogSection.vue")['default']
export const ContactSection: typeof import("../components/sections/ContactSection.vue")['default']
export const CtaBandSection: typeof import("../components/sections/CtaBandSection.vue")['default']
export const DifferentiatorsSection: typeof import("../components/sections/DifferentiatorsSection.vue")['default']
export const HeroSection: typeof import("../components/sections/HeroSection.vue")['default']
export const PortfolioPageApproachSection: typeof import("../components/sections/PortfolioPageApproachSection.vue")['default']
export const PortfolioPageFinalCtaSection: typeof import("../components/sections/PortfolioPageFinalCtaSection.vue")['default']
export const PortfolioPageHeroSection: typeof import("../components/sections/PortfolioPageHeroSection.vue")['default']
export const PortfolioPageIntroSection: typeof import("../components/sections/PortfolioPageIntroSection.vue")['default']
export const PortfolioPageProjectsSection: typeof import("../components/sections/PortfolioPageProjectsSection.vue")['default']
export const PortfolioPageQualitySection: typeof import("../components/sections/PortfolioPageQualitySection.vue")['default']
export const PortfolioSection: typeof import("../components/sections/PortfolioSection.vue")['default']
export const ProblemSection: typeof import("../components/sections/ProblemSection.vue")['default']
export const ProcessSection: typeof import("../components/sections/ProcessSection.vue")['default']
export const ServicesPageExtensionsSection: typeof import("../components/sections/ServicesPageExtensionsSection.vue")['default']
export const ServicesPageFinalCtaSection: typeof import("../components/sections/ServicesPageFinalCtaSection.vue")['default']
export const ServicesPageHeroSection: typeof import("../components/sections/ServicesPageHeroSection.vue")['default']
export const ServicesPageIntroSection: typeof import("../components/sections/ServicesPageIntroSection.vue")['default']
export const ServicesPagePackagesSection: typeof import("../components/sections/ServicesPagePackagesSection.vue")['default']
export const ServicesPageProcessSection: typeof import("../components/sections/ServicesPageProcessSection.vue")['default']
export const ServicesPageQualitySection: typeof import("../components/sections/ServicesPageQualitySection.vue")['default']
export const ServicesSection: typeof import("../components/sections/ServicesSection.vue")['default']
export const CursorFollower: typeof import("../components/ui/CursorFollower.vue")['default']
export const SolutionModal: typeof import("../components/ui/SolutionModal.vue")['default']
export const NuxtWelcome: typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
export const NuxtLayout: typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
export const NuxtErrorBoundary: typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']
export const ClientOnly: typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
export const DevOnly: typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
export const ServerPlaceholder: typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
export const NuxtLink: typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
export const NuxtLoadingIndicator: typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
export const NuxtTime: typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']
export const NuxtRouteAnnouncer: typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
export const NuxtImg: typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
export const NuxtPicture: typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
export const NuxtPage: typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
export const NoScript: typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
export const Link: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
export const Base: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
export const Title: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
export const Meta: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
export const Style: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
export const Head: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
export const Html: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
export const Body: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
export const NuxtIsland: typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
export const LazyAppFooter: LazyComponent<typeof import("../components/layout/AppFooter.vue")['default']>
export const LazyAppHeader: LazyComponent<typeof import("../components/layout/AppHeader.vue")['default']>
export const LazyAboutPageApproachSection: LazyComponent<typeof import("../components/sections/AboutPageApproachSection.vue")['default']>
export const LazyAboutPageFinalCtaSection: LazyComponent<typeof import("../components/sections/AboutPageFinalCtaSection.vue")['default']>
export const LazyAboutPageHeroSection: LazyComponent<typeof import("../components/sections/AboutPageHeroSection.vue")['default']>
export const LazyAboutPageIntroSection: LazyComponent<typeof import("../components/sections/AboutPageIntroSection.vue")['default']>
export const LazyAboutPagePersonalSection: LazyComponent<typeof import("../components/sections/AboutPagePersonalSection.vue")['default']>
export const LazyAboutPageValuesSection: LazyComponent<typeof import("../components/sections/AboutPageValuesSection.vue")['default']>
export const LazyAboutPageWhySection: LazyComponent<typeof import("../components/sections/AboutPageWhySection.vue")['default']>
export const LazyAboutSection: LazyComponent<typeof import("../components/sections/AboutSection.vue")['default']>
export const LazyBlogPageFeaturedSection: LazyComponent<typeof import("../components/sections/BlogPageFeaturedSection.vue")['default']>
export const LazyBlogPageFinalCtaSection: LazyComponent<typeof import("../components/sections/BlogPageFinalCtaSection.vue")['default']>
export const LazyBlogPageHeroSection: LazyComponent<typeof import("../components/sections/BlogPageHeroSection.vue")['default']>
export const LazyBlogPageIntroSection: LazyComponent<typeof import("../components/sections/BlogPageIntroSection.vue")['default']>
export const LazyBlogPageListSection: LazyComponent<typeof import("../components/sections/BlogPageListSection.vue")['default']>
export const LazyBlogPostContentSection: LazyComponent<typeof import("../components/sections/BlogPostContentSection.vue")['default']>
export const LazyBlogPostFinalCtaSection: LazyComponent<typeof import("../components/sections/BlogPostFinalCtaSection.vue")['default']>
export const LazyBlogPostHeroSection: LazyComponent<typeof import("../components/sections/BlogPostHeroSection.vue")['default']>
export const LazyBlogSection: LazyComponent<typeof import("../components/sections/BlogSection.vue")['default']>
export const LazyContactSection: LazyComponent<typeof import("../components/sections/ContactSection.vue")['default']>
export const LazyCtaBandSection: LazyComponent<typeof import("../components/sections/CtaBandSection.vue")['default']>
export const LazyDifferentiatorsSection: LazyComponent<typeof import("../components/sections/DifferentiatorsSection.vue")['default']>
export const LazyHeroSection: LazyComponent<typeof import("../components/sections/HeroSection.vue")['default']>
export const LazyPortfolioPageApproachSection: LazyComponent<typeof import("../components/sections/PortfolioPageApproachSection.vue")['default']>
export const LazyPortfolioPageFinalCtaSection: LazyComponent<typeof import("../components/sections/PortfolioPageFinalCtaSection.vue")['default']>
export const LazyPortfolioPageHeroSection: LazyComponent<typeof import("../components/sections/PortfolioPageHeroSection.vue")['default']>
export const LazyPortfolioPageIntroSection: LazyComponent<typeof import("../components/sections/PortfolioPageIntroSection.vue")['default']>
export const LazyPortfolioPageProjectsSection: LazyComponent<typeof import("../components/sections/PortfolioPageProjectsSection.vue")['default']>
export const LazyPortfolioPageQualitySection: LazyComponent<typeof import("../components/sections/PortfolioPageQualitySection.vue")['default']>
export const LazyPortfolioSection: LazyComponent<typeof import("../components/sections/PortfolioSection.vue")['default']>
export const LazyProblemSection: LazyComponent<typeof import("../components/sections/ProblemSection.vue")['default']>
export const LazyProcessSection: LazyComponent<typeof import("../components/sections/ProcessSection.vue")['default']>
export const LazyServicesPageExtensionsSection: LazyComponent<typeof import("../components/sections/ServicesPageExtensionsSection.vue")['default']>
export const LazyServicesPageFinalCtaSection: LazyComponent<typeof import("../components/sections/ServicesPageFinalCtaSection.vue")['default']>
export const LazyServicesPageHeroSection: LazyComponent<typeof import("../components/sections/ServicesPageHeroSection.vue")['default']>
export const LazyServicesPageIntroSection: LazyComponent<typeof import("../components/sections/ServicesPageIntroSection.vue")['default']>
export const LazyServicesPagePackagesSection: LazyComponent<typeof import("../components/sections/ServicesPagePackagesSection.vue")['default']>
export const LazyServicesPageProcessSection: LazyComponent<typeof import("../components/sections/ServicesPageProcessSection.vue")['default']>
export const LazyServicesPageQualitySection: LazyComponent<typeof import("../components/sections/ServicesPageQualitySection.vue")['default']>
export const LazyServicesSection: LazyComponent<typeof import("../components/sections/ServicesSection.vue")['default']>
export const LazyCursorFollower: LazyComponent<typeof import("../components/ui/CursorFollower.vue")['default']>
export const LazySolutionModal: LazyComponent<typeof import("../components/ui/SolutionModal.vue")['default']>
export const LazyNuxtWelcome: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
export const LazyNuxtLayout: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
export const LazyNuxtErrorBoundary: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']>
export const LazyClientOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']>
export const LazyDevOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']>
export const LazyServerPlaceholder: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
export const LazyNuxtLink: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
export const LazyNuxtLoadingIndicator: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
export const LazyNuxtTime: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']>
export const LazyNuxtRouteAnnouncer: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
export const LazyNuxtImg: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']>
export const LazyNuxtPicture: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']>
export const LazyNuxtPage: LazyComponent<typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']>
export const LazyNoScript: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
export const LazyLink: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']>
export const LazyBase: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']>
export const LazyTitle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']>
export const LazyMeta: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']>
export const LazyStyle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']>
export const LazyHead: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']>
export const LazyHtml: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']>
export const LazyBody: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']>
export const LazyNuxtIsland: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']>

export const componentNames: string[]
