<script setup lang="ts">
useHead({ title: 'Professional Identity & Vision — Robert Lazar' })

const { data: visionEntries } = await useAsyncData('vision', () =>
  queryCollection('vision').order('year', 'ASC').all()
)

// Shared with DesignTimeline — clicks on year tabs in the timeline
// drive which Vision entry shows below.
const activeYear = useActiveYear()

// Fall back to the lowest available vision year if shared state hasn't been set yet (SSR).
const resolvedYear = computed<number>(() => {
  if (activeYear.value != null) return activeYear.value
  return (visionEntries.value ?? [])[0]?.year ?? 1
})

const currentVision = computed(() =>
  (visionEntries.value ?? []).find(e => e.year === resolvedYear.value)
)
</script>

<template>
  <article class="container py-16 max-w-5xl">
    <!-- Header -->
    <div class="mb-12">
      <p class="label mb-3">About</p>
      <h1 class="font-mono text-3xl font-medium tracking-tight">
        Professional Identity & Vision
      </h1>
    </div>

    <!-- Professional Identity (timeline IS the PI section; year tabs live here) -->
    <DesignTimeline />

    <!-- Vision (mirrors selected year from the timeline above) -->
    <section v-if="visionEntries?.length" class="mt-24">
      <div class="mb-8">
        <p class="label mb-3">Vision</p>
        <h2 class="font-mono text-2xl font-medium tracking-tight">Where I am going</h2>
      </div>

      <Transition name="fade" mode="out-in">
        <div v-if="currentVision" :key="`vision-${resolvedYear}`">
          <p v-if="currentVision.subtitle" class="label mb-4">{{ currentVision.subtitle }}</p>
          <div class="prose max-w-none">
            <ContentRenderer :value="currentVision" />
          </div>
        </div>
      </Transition>
    </section>

    <!-- Expertise this year (mirrors timeline year selection) -->
    <section class="mt-24">
      <div class="mb-8">
        <p class="label mb-3">Expertise</p>
        <h2 class="font-mono text-2xl font-medium tracking-tight">Where I stand this year</h2>
      </div>
      <Transition name="fade" mode="out-in">
        <ExpertiseSnapshot :key="`snapshot-${resolvedYear}`" />
      </Transition>
    </section>

    <!-- Projects + Skills this year -->
    <section class="mt-24">
      <div class="mb-8">
        <p class="label mb-3">This year</p>
        <h2 class="font-mono text-2xl font-medium tracking-tight">Projects & skills</h2>
      </div>
      <Transition name="fade" mode="out-in">
        <YearProjectsSkills :key="`ps-${resolvedYear}`" />
      </Transition>
    </section>
  </article>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.15s ease, transform 0.15s ease;
}
.fade-enter-from {
  opacity: 0;
  transform: translateX(6px);
}
.fade-leave-to {
  opacity: 0;
  transform: translateX(-6px);
}
</style>
