<script setup lang="ts">
const { ambientMode, applyAmbientClass } = useAmbientTheme()

watch(ambientMode, (mode) => applyAmbientClass(mode), { immediate: true })

let timer: ReturnType<typeof setInterval>
onMounted(() => {
  timer = setInterval(() => applyAmbientClass(ambientMode.value), 60_000)
})
onUnmounted(() => clearInterval(timer))
</script>

<template>
  <NuxtRouteAnnouncer />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
