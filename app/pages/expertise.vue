<script setup lang="ts">
useHead({ title: 'Expertise — Robert Lazar' })

const { data: allAreas } = await useAsyncData('expertise', () =>
  queryCollection('expertise').order('order', 'ASC').all()
)

// Years available, sorted ascending. Latest year is default-active.
const years = computed<number[]>(() => {
  const set = new Set<number>()
  for (const a of allAreas.value ?? []) set.add(a.year ?? 1)
  return Array.from(set).sort((a, b) => a - b)
})

// Default to year 2 (in-progress) if present, else fall back to latest available.
const activeYear = ref(years.value.includes(2) ? 2 : years.value.at(-1) ?? 1)

// Areas for the active year, ordered.
const areas = computed(() =>
  (allAreas.value ?? []).filter(a => (a.year ?? 1) === activeYear.value)
)

// Levels keyed by `order` for current + previous year (for ghost overlay).
const previousYear = computed(() => {
  const idx = years.value.indexOf(activeYear.value)
  return idx > 0 ? years.value[idx - 1] : null
})
const previousLevels = computed<Record<number, number>>(() => {
  const map: Record<number, number> = {}
  if (previousYear.value == null) return map
  for (const a of allAreas.value ?? []) {
    if ((a.year ?? 1) === previousYear.value) map[a.order] = a.level ?? 0
  }
  return map
})

const activeIndex = ref(0)
const current = computed(() => areas.value[activeIndex.value])

watch(activeYear, () => { activeIndex.value = 0 })

const yearLabel = (y: number) => `Year ${y}`
</script>

<template>
  <div class="container py-16">
    <div class="mb-12">
      <p class="label mb-3">Expertise</p>
      <h1 class="font-mono text-3xl font-medium tracking-tight">Areas of practice</h1>
    </div>

    <!-- Year tabs -->
    <div v-if="years.length > 1" class="flex gap-8 border-b border-border mb-10">
      <button
        v-for="y in years"
        :key="y"
        class="pb-3 text-left transition-colors relative"
        :class="activeYear === y ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'"
        @click="activeYear = y"
      >
        <span class="font-mono text-sm font-medium">{{ yearLabel(y) }}</span>
        <span
          v-if="activeYear === y"
          class="absolute bottom-0 left-0 right-0 h-px bg-foreground"
        />
      </button>
    </div>

    <div class="flex flex-col md:flex-row gap-12">
      <!-- Sidebar nav with growth bars -->
      <nav class="md:w-72 flex-shrink-0">
        <ul class="space-y-1">
          <li v-for="(area, i) in areas" :key="`${activeYear}-${area.order}`">
            <button
              class="w-full text-left py-3 transition-colors group"
              :class="activeIndex === i ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'"
              @click="activeIndex = i"
            >
              <div class="flex items-center justify-between gap-3 mb-2">
                <span class="label">{{ area.title }}</span>
                <span
                  class="font-mono text-xs tabular-nums transition-opacity"
                  :class="activeIndex === i ? 'opacity-100' : 'opacity-50'"
                >{{ area.level }}/5</span>
              </div>
              <ExpertiseLevelBar
                :level="area.level"
                :previous-level="previousLevels[area.order] ?? 0"
                :active="activeIndex === i"
              />
            </button>
          </li>
        </ul>

        <!-- Legend -->
        <div v-if="previousYear != null" class="mt-6 flex items-center gap-4 text-xs text-muted-foreground">
          <div class="flex items-center gap-1.5">
            <span class="inline-block w-3 h-1.5 rounded-sm bg-primary" />
            <span class="font-mono">{{ yearLabel(activeYear) }}</span>
          </div>
          <div class="flex items-center gap-1.5">
            <span class="inline-block w-3 h-1.5 rounded-sm bg-primary/25" />
            <span class="font-mono">{{ yearLabel(previousYear) }}</span>
          </div>
        </div>
      </nav>

      <!-- Content panel -->
      <div class="flex-1 min-w-0">
        <Transition name="fade" mode="out-in">
          <div v-if="current" :key="`${activeYear}-${activeIndex}`">
            <!-- Images -->
            <div v-if="current.images?.length" class="mb-8">
              <div v-if="current.images.length === 1" class="aspect-video rounded-lg overflow-hidden border border-border">
                <img :src="current.images[0]" :alt="current.title" class="w-full h-full object-cover" />
              </div>
              <div v-else-if="current.images.length === 2" class="grid grid-cols-2 gap-3">
                <div v-for="(img, i) in current.images" :key="i" class="aspect-video rounded-lg overflow-hidden border border-border">
                  <img :src="img" :alt="`${current.title} ${i + 1}`" class="w-full h-full object-cover" />
                </div>
              </div>
              <div v-else class="space-y-3">
                <div class="aspect-video rounded-lg overflow-hidden border border-border">
                  <img :src="current.images[0]" :alt="`${current.title} 1`" class="w-full h-full object-cover" />
                </div>
                <div class="grid gap-3" :style="`grid-template-columns: repeat(${current.images.length - 1}, 1fr)`">
                  <div v-for="(img, i) in current.images.slice(1)" :key="i" class="aspect-video rounded-lg overflow-hidden border border-border">
                    <img :src="img" :alt="`${current.title} ${i + 2}`" class="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
            </div>
            <p class="text-muted-foreground mb-8 leading-relaxed text-base">{{ current.summary }}</p>
            <div class="prose max-w-none">
              <ContentRenderer :value="current" />
            </div>
          </div>
        </Transition>
      </div>
    </div>
  </div>
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
