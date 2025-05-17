export const imageObjectFitCode = `
<script setup lang="ts">
import { Divider, Image } from '@/components/UI'
import useLangStore from '@/stores/LangStore'

const t = useLangStore()

const imageFits = ['fill', 'contain', 'cover']

const dividerContent = (fit: string) => {
  const content: Record<string, string> = {
    fill: 'Fill',
    contain: 'Contain',
    cover: 'Cover'
  }
  return content[fit]
}
</script>

<template>
  <template v-for="fit in imageFits" :key="fit">
    <Divider>
      {{ dividerContent(fit) }}
    </Divider>
    <Image
      :objectFit="fit"
      :imgWidth="150"
      :imgHeight="150"
      src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrg&dpr=1"
    />
  </template>
</template>
`
