<script setup lang="ts">
const props = defineProps<{
  images: string[]
  alt: string
}>()

const activeIndex = ref<number | null>(null)
const isOpen = computed(() => activeIndex.value !== null)
const current = computed(() => activeIndex.value !== null ? props.images[activeIndex.value] : null)

const backdropRef = ref<HTMLElement | null>(null)
const imgRef = ref<HTMLImageElement | null>(null)

// Open with GSAP zoom-from-thumbnail
const open = async (index: number) => {
  activeIndex.value = index
  document.body.style.overflow = 'hidden'

  await nextTick()
  if (!import.meta.client) return
  const { gsap } = await import('gsap')

  gsap.fromTo(backdropRef.value, { opacity: 0 }, { opacity: 1, duration: 0.25, ease: 'power2.out' })
  gsap.fromTo(imgRef.value,
    { scale: 0.88, opacity: 0, y: 12 },
    { scale: 1, opacity: 1, y: 0, duration: 0.35, ease: 'power3.out', delay: 0.05 }
  )
}

const close = async () => {
  if (!import.meta.client) return
  const { gsap } = await import('gsap')

  await Promise.all([
    gsap.to(backdropRef.value, { opacity: 0, duration: 0.2, ease: 'power2.in' }),
    gsap.to(imgRef.value, { scale: 0.92, opacity: 0, y: 8, duration: 0.2, ease: 'power2.in' }),
  ])

  activeIndex.value = null
  document.body.style.overflow = ''
}

const prev = async () => {
  if (activeIndex.value === null) return
  if (!import.meta.client) return
  const { gsap } = await import('gsap')

  await gsap.to(imgRef.value, { x: 24, opacity: 0, duration: 0.15, ease: 'power2.in' })
  activeIndex.value = (activeIndex.value - 1 + props.images.length) % props.images.length
  await nextTick()
  gsap.fromTo(imgRef.value, { x: -24, opacity: 0 }, { x: 0, opacity: 1, duration: 0.2, ease: 'power2.out' })
}

const next = async () => {
  if (activeIndex.value === null) return
  if (!import.meta.client) return
  const { gsap } = await import('gsap')

  await gsap.to(imgRef.value, { x: -24, opacity: 0, duration: 0.15, ease: 'power2.in' })
  activeIndex.value = (activeIndex.value + 1) % props.images.length
  await nextTick()
  gsap.fromTo(imgRef.value, { x: 24, opacity: 0 }, { x: 0, opacity: 1, duration: 0.2, ease: 'power2.out' })
}

const handleKeydown = (e: KeyboardEvent) => {
  if (!isOpen.value) return
  if (e.key === 'Escape') close()
  if (e.key === 'ArrowLeft') prev()
  if (e.key === 'ArrowRight') next()
}

onMounted(() => document.addEventListener('keydown', handleKeydown))
onUnmounted(() => {
  document.removeEventListener('keydown', handleKeydown)
  document.body.style.overflow = ''
})

defineExpose({ open })
</script>

<template>
  <!-- Thumbnail grid -->
  <div class="grid grid-cols-2 md:grid-cols-3 gap-3">
    <button
      v-for="(img, i) in images"
      :key="i"
      class="aspect-video rounded overflow-hidden border border-border group focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      @click="open(i)"
    >
      <img
        :src="img"
        :alt="`${alt} ${i + 1}`"
        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
    </button>
  </div>

  <!-- Lightbox -->
  <Teleport to="body">
    <div v-if="isOpen" class="fixed inset-0 z-50 flex items-center justify-center">
      <!-- Backdrop -->
      <div
        ref="backdropRef"
        class="absolute inset-0 bg-background/90 backdrop-blur-md"
        @click="close"
      />

      <!-- Image -->
      <div class="relative z-10 flex items-center gap-4 px-4 w-full max-w-5xl">
        <!-- Prev -->
        <button
          v-if="images.length > 1"
          class="flex-shrink-0 w-10 h-10 rounded-full border border-border bg-card flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-ring transition-colors"
          aria-label="Previous image"
          @click.stop="prev"
        >
          ←
        </button>

        <!-- Main image -->
        <div class="flex-1 min-w-0 flex items-center justify-center">
          <img
            ref="imgRef"
            :src="current!"
            :alt="alt"
            class="max-h-[80vh] max-w-full rounded-lg border border-border object-contain shadow-2xl"
          />
        </div>

        <!-- Next -->
        <button
          v-if="images.length > 1"
          class="flex-shrink-0 w-10 h-10 rounded-full border border-border bg-card flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-ring transition-colors"
          aria-label="Next image"
          @click.stop="next"
        >
          →
        </button>
      </div>

      <!-- Close + counter -->
      <div class="absolute top-5 right-5 z-10 flex items-center gap-4">
        <span v-if="images.length > 1" class="label">
          {{ (activeIndex ?? 0) + 1 }} / {{ images.length }}
        </span>
        <button
          class="w-9 h-9 rounded-full border border-border bg-card flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-ring transition-colors text-sm"
          aria-label="Close"
          @click="close"
        >
          ✕
        </button>
      </div>
    </div>
  </Teleport>
</template>
