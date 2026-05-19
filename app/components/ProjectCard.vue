<script setup lang="ts">
defineProps<{
  project: {
    path: string
    title: string
    subtitle: string
    year: number
    role: string
    cover: string
    status: 'complete' | 'in-progress' | 'concept'
    technologies: string[]
  }
}>()
</script>

<template>
  <NuxtLink
    :to="project.path"
    class="group block border border-border rounded-lg overflow-hidden bg-card hover:border-ring transition-colors duration-200"
  >
    <!-- Cover image -->
    <div class="aspect-video overflow-hidden bg-muted">
      <img
        :src="project.cover"
        :alt="project.title"
        class="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
      />
    </div>

    <!-- Info -->
    <div class="p-5">
      <div class="flex items-center justify-between mb-2">
        <span class="label">{{ project.year }}</span>
        <span class="label" :class="project.status === 'complete' ? 'text-primary' : ''">
          {{ project.status }}
        </span>
      </div>
      <h2 class="font-mono text-base font-medium tracking-tight mb-1 group-hover:text-primary transition-colors">
        {{ project.title }}
      </h2>
      <p class="text-sm text-muted-foreground line-clamp-2">{{ project.subtitle }}</p>

      <div class="flex flex-wrap gap-1.5 mt-4">
        <span
          v-for="tech in project.technologies.slice(0, 3)"
          :key="tech"
          class="font-mono text-xs bg-secondary text-secondary-foreground px-2 py-0.5 rounded"
        >{{ tech }}</span>
        <span v-if="project.technologies.length > 3" class="font-mono text-xs text-muted-foreground px-1">
          +{{ project.technologies.length - 3 }}
        </span>
      </div>
    </div>
  </NuxtLink>
</template>
