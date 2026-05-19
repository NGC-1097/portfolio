<script setup lang="ts">
useHead({ title: 'Projects — Robert Lazar' })

const { data: projects } = await useAsyncData('all-projects', () =>
  queryCollection('projects').where('draft', '!=', true).order('order', 'ASC').all()
)

const active = computed(() =>
  projects.value?.filter(p => p.status === 'in-progress' || p.status === 'concept') ?? []
)

const complete = computed(() =>
  projects.value?.filter(p => p.status === 'complete') ?? []
)
</script>

<template>
  <div class="container py-16">
    <div class="mb-16">
      <p class="label mb-3">Projects</p>
      <h1 class="font-mono text-3xl font-medium tracking-tight">Projects</h1>
    </div>

    <!-- Active -->
    <section v-if="active.length" class="mb-16">
      <div class="flex items-center gap-3 mb-6">
        <span class="label">Active</span>
        <span class="inline-flex items-center gap-1.5">
          <span class="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
        </span>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ProjectCard
          v-for="project in active"
          :key="project.path"
          :project="project"
        />
      </div>
    </section>

    <!-- Divider -->
    <div v-if="active.length && complete.length" class="border-t border-border mb-16" />

    <!-- Complete -->
    <section v-if="complete.length">
      <p class="label mb-6">Complete</p>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ProjectCard
          v-for="project in complete"
          :key="project.path"
          :project="project"
        />
      </div>
    </section>
  </div>
</template>
