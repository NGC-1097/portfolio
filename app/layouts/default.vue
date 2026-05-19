<template>
  <div class="min-h-screen flex flex-col">
    <LayoutSiteNav />
    <ProjectSheet />

    <main class="flex-1 pt-14">
      <slot />
    </main>

    <footer class="border-t border-border py-8 mt-24">
      <div class="container flex items-center justify-between">
        <span class="label">Robert Lazar</span>
        <span class="label">Industrial Design — TU/e</span>
      </div>
    </footer>
  </div>
</template>
