import useLangStore from '@/stores/LangStore'

const useDisplayComponentSize = () => {
  const t = useLangStore()

  const sizeLabel = (size: string) => {
    const labels: Record<string, string> = {
      sm: t.lang.common.size.sm,
      md: t.lang.common.size.md,
      lg: t.lang.common.size.lg
    }
    return labels[size]
  }

  return sizeLabel
}

export default useDisplayComponentSize
