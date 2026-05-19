<script setup lang="ts">
const props = defineProps<{
  level: number          // 1–5, current year competency
  previousLevel?: number // 0–5, previous year (0 = no prior data)
  active?: boolean       // intensifies color when this row is selected
}>()

const segments = computed(() => {
  const out: Array<'current' | 'previous' | 'empty'> = []
  for (let i = 1; i <= 5; i++) {
    if (i <= props.level) out.push('current')
    else if (props.previousLevel && i <= props.previousLevel) out.push('previous')
    else out.push('empty')
  }
  return out
})
</script>

<template>
  <div class="flex gap-1 w-full" aria-hidden="true">
    <span
      v-for="(state, i) in segments"
      :key="i"
      class="h-1.5 flex-1 rounded-sm transition-all duration-300"
      :class="{
        'bg-primary': state === 'current' && active,
        'bg-primary/70': state === 'current' && !active,
        'bg-primary/25': state === 'previous',
        'bg-border': state === 'empty',
      }"
    />
  </div>
</template>
