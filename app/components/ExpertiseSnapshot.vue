<script setup lang="ts">
const AREAS = [
  { key: 'business',   label: 'Business & Entrepreneurship' },
  { key: 'creativity', label: 'Creativity & Aesthetics' },
  { key: 'computing',  label: 'Math, Data & Computing' },
  { key: 'technology', label: 'Technology & Realization' },
  { key: 'society',    label: 'User & Society' },
] as const

// Reuses the cached `timeline` data already loaded by DesignTimeline.
const { data: entries } = await useAsyncData('timeline', () =>
  queryCollection('timeline').order('order', 'ASC').all()
)

const sharedYear = useActiveYear()

const activeIndex = computed(() => {
  const y = sharedYear.value
  if (y == null) return entries.value?.findIndex(e => e.status === 'in-progress') ?? 0
  const i = entries.value?.findIndex(e => e.order === y) ?? -1
  return i >= 0 ? i : 0
})

const current = computed(() => entries.value?.[activeIndex.value])
const previous = computed(() => activeIndex.value > 0 ? entries.value?.[activeIndex.value - 1] : null)
const canCompare = computed(() =>
  !!current.value?.expertise_snapshot && !!previous.value?.expertise_snapshot
)

const comparing = ref(false)
const rootRef = ref<HTMLElement | null>(null)

watch(sharedYear, () => { comparing.value = false })

const toggleCompare = async () => {
  comparing.value = !comparing.value
  if (!comparing.value || !import.meta.client) return

  await nextTick()
  const { gsap } = await import('gsap')
  const deltas = rootRef.value?.querySelectorAll('.delta-block')
  if (deltas?.length) {
    gsap.from(deltas, { y: -4, opacity: 0, stagger: 0.05, duration: 0.3, ease: 'power2.out' })
  }
}
</script>

<template>
  <div v-if="current?.expertise_snapshot" ref="rootRef">
    <div class="flex items-center justify-between mb-5">
      <p class="label">Expertise this year</p>
      <button
        v-if="canCompare"
        class="label transition-colors hover:text-foreground flex items-center gap-1.5"
        :class="comparing ? 'text-foreground' : 'text-muted-foreground'"
        @click="toggleCompare"
      >
        <span class="inline-block w-1.5 h-1.5 rounded-full transition-colors" :class="comparing ? 'bg-primary' : 'bg-border'" />
        {{ comparing ? 'Hide growth' : `Compare ← ${previous?.year}` }}
      </button>
    </div>

    <div class="space-y-0 divide-y divide-border border-t border-b border-border">
      <div
        v-for="area in AREAS"
        :key="area.key"
        class="e-row py-4"
      >
        <p class="label mb-2">{{ area.label }}</p>

        <!-- Comparison: previous year status + delta -->
        <div
          v-if="comparing && previous?.expertise_snapshot"
          class="delta-block mb-3 pl-3 border-l border-border space-y-1.5"
        >
          <p class="text-xs text-muted-foreground/70 leading-relaxed">
            {{ (previous.expertise_snapshot as any)[area.key]?.status }}
          </p>
          <p
            v-if="(current.expertise_snapshot as any)[area.key]?.delta"
            class="text-xs text-primary leading-relaxed font-medium"
          >
            ↳ {{ (current.expertise_snapshot as any)[area.key]?.delta }}
          </p>
        </div>

        <!-- Current year status -->
        <p class="text-sm text-muted-foreground leading-relaxed">
          {{ (current.expertise_snapshot as any)[area.key]?.status }}
        </p>
      </div>
    </div>
  </div>
</template>
