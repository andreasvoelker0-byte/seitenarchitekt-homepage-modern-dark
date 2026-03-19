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
      meta: [{ name: 'viewport', content: 'width=device-width, initial-scale=1' }]
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
