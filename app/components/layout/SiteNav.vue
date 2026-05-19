<script setup lang="ts">
const route = useRoute()

const links = [
  { label: 'Projects',  to: '/projects' },
  { label: 'Proffessional Identy & Vision',       to: '/piv' },
  { label: 'Expertise', to: '/expertise' },
]

const isActive = (to: string) => route.path.startsWith(to)
</script>

<template>
  <header class="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-sm">
    <nav class="container flex h-14 items-center justify-between">
      <!-- Wordmark -->
      <NuxtLink
        to="/"
        class="font-mono text-sm font-medium tracking-tight hover:text-primary transition-colors"
      >
        RL
      </NuxtLink>

      <!-- Links -->
      <ul class="flex items-center gap-8">
        <li v-for="link in links" :key="link.to">
          <NuxtLink
            :to="link.to"
            class="label transition-colors hover:text-foreground"
            :class="isActive(link.to) ? 'text-foreground' : 'text-muted-foreground'"
          >
            {{ link.label }}
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>
