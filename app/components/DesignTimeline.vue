<script setup lang="ts">
const { open: openSheet } = useProjectSheet()

const { data: entries } = await useAsyncData('timeline', () =>
  queryCollection('timeline').order('order', 'ASC').all()
)

// Shared with Vision + ExpertiseSnapshot on PIV page.
const sharedYear = useActiveYear()

// Default to the current year (in-progress)
const defaultIndex = computed(() =>
  entries.value?.findIndex(e => e.status === 'in-progress') ?? 0
)

// Local index reflects sharedYear; sharedYear is the source of truth.
const activeIndex = computed(() => {
  if (sharedYear.value == null) return defaultIndex.value
  const i = entries.value?.findIndex(e => e.order === sharedYear.value) ?? -1
  return i >= 0 ? i : defaultIndex.value
})

// Initialize sharedYear from the in-progress entry on first mount.
onMounted(() => {
  if (sharedYear.value == null) {
    const def = entries.value?.[defaultIndex.value]
    if (def) sharedYear.value = def.order
  }
})

const panelRef = ref<HTMLElement | null>(null)
const current = computed(() => entries.value?.[activeIndex.value])

const switchYear = async (index: number) => {
  if (index === activeIndex.value) return
  if (!import.meta.client) return

  const { gsap } = await import('gsap')
  const direction = index > activeIndex.value ? 1 : -1

  if (panelRef.value) {
    await gsap.to(panelRef.value, { x: -16 * direction, opacity: 0, duration: 0.18, ease: 'power2.in' })
  }

  const targetEntry = entries.value?.[index]
  if (targetEntry) sharedYear.value = targetEntry.order
  await nextTick()

  if (panelRef.value) {
    gsap.set(panelRef.value, { x: 16 * direction, opacity: 0 })
    gsap.to(panelRef.value, { x: 0, opacity: 1, duration: 0.25, ease: 'power2.out' })
  }
}

// Intercept project links inside ContentRenderer prose
const handleProseClick = (e: MouseEvent) => {
  const link = (e.target as HTMLElement).closest('a')
  if (!link) return
  const href = link.getAttribute('href')
  if (href?.startsWith('/projects/')) {
    e.preventDefault()
    openSheet(href.replace('/projects/', ''))
  }
}

const statusLabel: Record<string, string> = {
  complete: 'Complete',
  'in-progress': 'In progress',
  future: 'Upcoming',
}
</script>

<template>
  <div v-if="entries?.length">
    <!-- Section header -->
    <div class="mb-10">
      <p class="label mb-3">Design journey</p>
      <h2 class="font-mono text-2xl font-medium tracking-tight">Three years, one direction</h2>
    </div>

    <!-- Year tabs -->
    <div class="flex gap-8 border-b border-border mb-10">
      <button
        v-for="(entry, i) in entries"
        :key="i"
        class="pb-4 text-left transition-all duration-200 relative"
        :class="[
          entry.status === 'future' ? 'opacity-35' : '',
          activeIndex === i ? 'text-foreground' : 'text-muted-foreground hover:text-foreground',
        ]"
        @click="switchYear(i)"
      >
        <span class="font-mono text-sm font-medium block">{{ entry.year }}</span>
        <span class="text-xs font-sans block mt-0.5">{{ entry.period }}</span>
        <!-- Active underline -->
        <span
          v-if="activeIndex === i"
          class="absolute bottom-0 left-0 right-0 h-px bg-foreground"
        />
      </button>
    </div>

    <!-- Animated panel -->
    <div ref="panelRef">
      <template v-if="current">

        <!-- Future year: aspiration + body (famous quote lives in the markdown) -->
        <div v-if="current.status === 'future'" class="py-4">
          <p class="label mb-4">{{ current.theme }}</p>
          <p
            v-if="current.aspiration"
            class="font-mono text-lg text-muted-foreground/60 italic leading-relaxed max-w-xl mb-8"
          >
            "{{ current.aspiration }}"
          </p>
          <div class="prose max-w-none" @click="handleProseClick">
            <ContentRenderer :value="current" />
          </div>
        </div>

        <!-- Active/complete year: full content -->
        <template v-else>
          <!-- Theme + status -->
          <div class="flex items-baseline gap-4 mb-6">
            <p class="font-mono text-lg font-medium tracking-tight">{{ current.theme }}</p>
            <span
              class="label ml-auto"
              :class="{
                'text-primary': current.status === 'complete',
                'text-foreground': current.status === 'in-progress',
              }"
            >{{ statusLabel[current.status] }}</span>
          </div>

          <!-- Narrative prose -->
          <div class="prose max-w-none" @click="handleProseClick">
            <ContentRenderer :value="current" />
          </div>
        </template>

      </template>
    </div>
  </div>
</template>
