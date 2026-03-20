import { blogContent } from './data/blogContent'
import { portfolioContent } from './data/portfolioContent'

const baseURL = process.env.NUXT_APP_BASE_URL || '/'
const outputDir = process.env.NUXT_OUTPUT_DIR || 'dist'

const prerenderRoutes = [
  '/',
  '/ueber-mich',
  '/leistungen',
  '/portfolio',
  '/blog',
  '/impressum',
  '/datenschutz',
  ...blogContent.posts.map(post => `/blog/${post.slug}`),
  ...portfolioContent.projects.items.map(item => item.to)
]

export default defineNuxtConfig({
  compatibilityDate: '2024-09-19',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  css: ['~/assets/css/main.css'],
  components: [
    { path: '~/components/layout', pathPrefix: false },
    { path: '~/components/sections', pathPrefix: false },
    { path: '~/components/ui', pathPrefix: false }
  ],
  app: {
    baseURL,
    head: {
      title: 'Seiten Architekt',
      htmlAttrs: {
        lang: 'de'
      },
      meta: [{ name: 'viewport', content: 'width=device-width, initial-scale=1' }],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' }
      ]
    }
  },
  nitro: {
    preset: 'static',
    output: {
      publicDir: outputDir
    },
    prerender: {
      crawlLinks: true,
      routes: prerenderRoutes
    }
  },
  routeRules: {
    '/**': { prerender: true }
  }
})
