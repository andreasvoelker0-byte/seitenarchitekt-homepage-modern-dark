<script setup lang="ts">
import { blogContent } from '~/data/blogContent'
import { homeContent } from '~/data/homeContent'

const { initAnimations, destroyAnimations } = useBlogGsap()

definePageMeta({
  pageTransition: {
    name: 'page-fade',
    mode: 'out-in'
  }
})

useHead({
  title: blogContent.seo.title,
  meta: [
    {
      name: 'description',
      content: blogContent.seo.description
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
      <BlogPageHeroSection :content="blogContent.hero" />
      <BlogPageIntroSection :content="blogContent.intro" />
      <BlogPageFeaturedSection :post="blogContent.posts[0]" />
      <BlogPageListSection :header="blogContent.listHeader" :posts="blogContent.posts" />
      <BlogPageFinalCtaSection :content="blogContent.finalCta" />
    </main>

    <AppFooter
      :navigation="homeContent.footer.navigation"
      :services="homeContent.footer.services"
      :legal="homeContent.footer.legal"
    />
  </div>
</template>
