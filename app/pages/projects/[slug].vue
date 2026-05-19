<script setup lang="ts">
const route = useRoute()
const router = useRouter()
const slug = route.params.slug as string

const { data: project } = await useAsyncData(`project-${slug}`, () =>
  queryCollection('projects').path(`/projects/${slug}`).first()
)

if (!project.value) {
  throw createError({ statusCode: 404, message: 'Project not found' })
}

useHead({ title: `${project.value.title} — Robert Lazar` })

const goBack = () => {
  if (import.meta.client && window.history.length > 1) {
    router.back()
  } else {
    router.push('/projects')
  }
}
</script>

<template>
  <article v-if="project" class="container py-16 max-w-4xl">
    <!-- Back -->
    <button class="label hover:text-foreground transition-colors flex items-center gap-2 mb-12" @click="goBack">
      ← Back
    </button>

    <!-- Header -->
    <header class="mb-12">
      <div class="flex items-center gap-3 mb-4">
        <span class="label">{{ project.year }}</span>
        <span class="text-border">·</span>
        <span
          class="label"
          :class="{
            'text-primary': project.status === 'complete',
            'text-muted-foreground': project.status !== 'complete',
          }"
        >{{ project.status }}</span>
      </div>
      <h1 class="font-mono text-4xl md:text-5xl font-medium tracking-tight leading-tight mb-4">
        {{ project.title }}
      </h1>
      <p class="text-lg text-muted-foreground">{{ project.subtitle }}</p>
    </header>

    <!-- Meta strip -->
    <div class="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 border-y border-border mb-12">
      <div>
        <p class="label mb-1">Role</p>
        <p class="text-sm font-medium">{{ project.role }}</p>
      </div>
      <div v-if="project.team">
        <p class="label mb-1">Team</p>
        <p class="text-sm font-medium">{{ project.team }} people</p>
      </div>
      <div class="col-span-2">
        <p class="label mb-1">Technologies</p>
        <div class="flex flex-wrap gap-2">
          <span
            v-for="tech in project.technologies"
            :key="tech"
            class="font-mono text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded"
          >{{ tech }}</span>
        </div>
      </div>
    </div>

    <!-- 3D Model Viewer -->
    <div v-if="project.model" class="mb-12 rounded-lg overflow-hidden border border-border bg-card" style="height: 480px;">
      <ThreeModelViewer :model-path="project.model" />
    </div>

    <!-- Cover image fallback when no model -->
    <div v-else-if="project.cover" class="mb-12 rounded-lg overflow-hidden border border-border aspect-video">
      <img
        :src="project.cover"
        :alt="project.title"
        class="w-full h-full object-cover"
      />
    </div>

    <!-- Markdown body -->
    <div class="prose max-w-none">
      <ContentRenderer :value="project" />
    </div>

    <!-- Gallery -->
    <div v-if="project.gallery?.length" class="mt-16">
      <p class="label mb-6">Gallery</p>
      <GalleryLightbox :images="project.gallery" :alt="project.title" />
    </div>
  </article>
</template>
