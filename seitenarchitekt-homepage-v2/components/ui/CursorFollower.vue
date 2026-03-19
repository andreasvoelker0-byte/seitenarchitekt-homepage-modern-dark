<script setup lang="ts">
const isTouch = ref(false)

onMounted(() => {
  isTouch.value = window.matchMedia('(pointer: coarse)').matches
})
</script>

<template>
  <div v-if="!isTouch" class="pointer-events-none fixed inset-0 z-[80] hidden lg:block" aria-hidden="true">
    <div data-cursor-dot class="cursor-dot" />
    <div data-cursor-ring class="cursor-ring" />
  </div>
</template>
