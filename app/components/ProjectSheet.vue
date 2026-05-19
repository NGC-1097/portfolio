<script setup lang="ts">
const { activeSlug, isOpen, close } = useProjectSheet()

const project = ref<any>(null)

watch(activeSlug, async (slug) => {
  if (!slug) { project.value = null; return }
  project.value = await queryCollection('projects').path(`/projects/${slug}`).first()
}, { immediate: true })

// GSAP for sheet panel animation
const sheetRef = ref<HTMLElement | null>(null)

watch(isOpen, async (open) => {
  if (!import.meta.client) return
  const { gsap } = await import('gsap')

  if (open) {
    await nextTick()
    gsap.fromTo(sheetRef.value, { y: '100%' }, { y: '0%', duration: 0.4, ease: 'power3.out' })
  } else {
    gsap.to(sheetRef.value, { y: '100%', duration: 0.3, ease: 'power2.in' })
  }
})

const handleKeydown = (e: KeyboardEvent) => {
  if (e.key === 'Escape') close()
}

onMounted(() => document.addEventListener('keydown', handleKeydown))
onUnmounted(() => document.removeEventListener('keydown', handleKeydown))
</script>

<template>
  <Teleport to="body">
    <Transition name="backdrop">
      <div
        v-if="isOpen"
        class="fixed inset-0 z-50 bg-background/70 backdrop-blur-sm"
        @click="close"
      />
    </Transition>

    <div
      v-if="isOpen"
      ref="sheetRef"
      class="fixed bottom-0 left-0 right-0 z-50 max-h-[85vh] rounded-t-2xl bg-card border-t border-border flex flex-col overflow-hidden"
      style="transform: translateY(100%)"
    >
      <!-- Drag handle -->
      <div class="flex justify-center pt-3 pb-2 flex-shrink-0">
        <div class="w-10 h-1 rounded-full bg-border" />
      </div>

      <div class="overflow-y-auto flex-1 pb-safe">
        <div v-if="project" class="p-6 md:p-8 max-w-2xl mx-auto">
          <!-- Cover -->
          <div v-if="project.cover" class="aspect-video rounded-lg overflow-hidden border border-border mb-6">
            <img :src="project.cover" :alt="project.title" class="w-full h-full object-cover" />
          </div>

          <!-- Header -->
          <div class="flex items-center gap-3 mb-3">
            <span class="label">{{ project.year }}</span>
            <span class="text-border">·</span>
            <span class="label" :class="project.status === 'complete' ? 'text-primary' : 'text-muted-foreground'">
              {{ project.status }}
            </span>
          </div>

          <h2 class="font-mono text-2xl font-medium tracking-tight mb-2">{{ project.title }}</h2>
          <p class="text-muted-foreground mb-6">{{ project.subtitle }}</p>

          <!-- Role -->
          <div class="grid grid-cols-2 gap-4 py-5 border-y border-border mb-6">
            <div>
              <p class="label mb-1">Role</p>
              <p class="text-sm font-medium">{{ project.role }}</p>
            </div>
            <div v-if="project.team">
              <p class="label mb-1">Team</p>
              <p class="text-sm font-medium">{{ project.team }} people</p>
            </div>
          </div>

          <!-- Technologies -->
          <div class="flex flex-wrap gap-2 mb-8">
            <span
              v-for="tech in project.technologies"
              :key="tech"
              class="font-mono text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded"
            >{{ tech }}</span>
          </div>

          <!-- CTA -->
          <NuxtLink
            :to="project.path"
            class="inline-flex items-center gap-2 font-mono text-sm font-medium border border-border rounded-lg px-5 py-3 hover:border-ring hover:text-primary transition-colors"
            @click="close"
          >
            Read full project →
          </NuxtLink>
        </div>

        <!-- Loading state -->
        <div v-else class="p-8 flex items-center justify-center min-h-[200px]">
          <div class="w-5 h-5 border-2 border-border border-t-primary rounded-full animate-spin" />
        </div>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
.backdrop-enter-active,
.backdrop-leave-active {
  transition: opacity 0.25s ease;
}
.backdrop-enter-from,
.backdrop-leave-to {
  opacity: 0;
}
</style>
