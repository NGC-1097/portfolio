<script setup lang="ts">
const { open: openSheet } = useProjectSheet()

// Reuses cached `timeline` data already loaded by DesignTimeline.
const { data: entries } = await useAsyncData('timeline', () =>
  queryCollection('timeline').order('order', 'ASC').all()
)

const sharedYear = useActiveYear()

const current = computed(() => {
  const y = sharedYear.value
  if (y == null) {
    const inProgress = entries.value?.find(e => e.status === 'in-progress')
    return inProgress ?? entries.value?.[0]
  }
  return entries.value?.find(e => e.order === y)
})

const hasContent = computed(() =>
  !!(current.value?.key_projects?.length || current.value?.key_skills?.length)
)
</script>

<template>
  <div v-if="hasContent" class="grid grid-cols-1 md:grid-cols-2 gap-8">
    <!-- Key projects -->
    <div v-if="current?.key_projects?.length">
      <p class="label mb-3">Projects</p>
      <div class="flex flex-wrap gap-2">
        <button
          v-for="proj in current.key_projects"
          :key="proj.slug"
          class="font-mono text-xs border border-border rounded px-3 py-1.5 hover:border-ring hover:text-primary transition-colors"
          @click="openSheet(proj.slug)"
        >
          {{ proj.name }} →
        </button>
      </div>
    </div>

    <!-- Key skills -->
    <div v-if="current?.key_skills?.length">
      <p class="label mb-3">Skills developed</p>
      <div class="flex flex-wrap gap-2">
        <span
          v-for="skill in current.key_skills"
          :key="skill"
          class="font-mono text-xs bg-secondary text-secondary-foreground px-3 py-1.5 rounded"
        >{{ skill }}</span>
      </div>
    </div>
  </div>
</template>
