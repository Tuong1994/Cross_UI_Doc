export const imageSizeCode = `
<script setup lang="ts">
import { Divider, Image } from '@/components/UI'
import useLangStore from '@/stores/LangStore'

const t = useLangStore()

const imageSizes = ['sm', 'md', 'lg']

const dividerContent = (size: string) => {
  const content: Record<string, string> = {
    sm: t.lang.image.size.sm,
    md: t.lang.image.size.md,
    lg: t.lang.image.size.lg
  }
  return content[size]
}
</script>

<template>
  <template v-for="size in imageSizes" :key="size">
    <Divider>
      {{ dividerContent(size) }}
    </Divider>
    <Image
      :size="size"
      src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrg&dpr=1"
    />
  </template>
</template>
`
