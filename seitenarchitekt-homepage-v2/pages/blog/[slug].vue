<script setup lang="ts">
import { blogContent } from '~/data/blogContent'
import { homeContent } from '~/data/homeContent'

const router = useRouter()
const { initAnimations, destroyAnimations } = useBlogPostGsap()
const resolvedPosts = useResolvedSiteAssets(blogContent.posts)

const slug = computed(() => {
  const value = router.currentRoute.value.params.slug
  return Array.isArray(value) ? value[0] ?? '' : value ?? ''
})

const post = computed(() => resolvedPosts.find(item => item.slug === slug.value) ?? null)

definePageMeta({
  pageTransition: {
    name: 'page-fade',
    mode: 'out-in'
  }
})

useHead(() => ({
  title: post.value?.seo.title ?? 'Blog | SeitenArchitekt',
  meta: [
    {
      name: 'description',
      content: post.value?.seo.description ?? 'Blogbeitrag von SeitenArchitekt'
    }
  ]
}))

const articleCta = {
  title: 'Blog-Artikel von SeitenArchitekt',
  copy:
    'Wenn du deine Website erstellen lassen möchtest und herausfinden willst, wie dein Betrieb online klarer und vertrauenswürdiger auftreten kann, lass uns sprechen.',
  primaryCta: { label: 'Kontakt aufnehmen', to: '/#kontakt' },
  secondaryCta: { label: 'Leistungen ansehen', to: '/leistungen' }
}

watchEffect(() => {
  if (slug.value && !post.value) {
    throw createError({ statusCode: 404, statusMessage: 'Beitrag nicht gefunden' })
  }
})

onMounted(() => {
  initAnimations()
})

onBeforeUnmount(() => {
  destroyAnimations()
})
</script>

<template>
  <div v-if="post" class="relative overflow-hidden">
    <AppHeader :links="homeContent.navLinks" />

    <main>
      <BlogPostHeroSection :post="post" />
      <BlogPostContentSection :post="post" />
      <BlogPostFinalCtaSection :content="articleCta" />
    </main>

    <AppFooter
      :navigation="homeContent.footer.navigation"
      :services="homeContent.footer.services"
      :legal="homeContent.footer.legal"
    />
  </div>
</template>
