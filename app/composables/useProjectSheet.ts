export const useProjectSheet = () => {
  const activeSlug = useState<string | null>('project-sheet-slug', () => null)

  const open = (slug: string) => {
    activeSlug.value = slug
    if (import.meta.client) document.body.style.overflow = 'hidden'
  }

  const close = () => {
    activeSlug.value = null
    if (import.meta.client) document.body.style.overflow = ''
  }

  const isOpen = computed(() => activeSlug.value !== null)

  return { activeSlug: readonly(activeSlug), isOpen, open, close }
}
