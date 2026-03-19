<script setup lang="ts">
const pageKey = (route: { fullPath: string }) => route.fullPath
</script>

<template>
  <div class="site-theme">
    <NuxtLoadingIndicator color="#c9a76a" />
    <CursorFollower />
    <NuxtPage :page-key="pageKey" :transition="{ name: 'page-fade', mode: 'out-in' }" />
  </div>
</template>
