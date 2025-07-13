export const spinnerColorCode = `
<script setup lang="ts">
import { computed } from 'vue'
import { Loading, Space } from '@/components/UI'
import type { ComponentColor } from '@/common/type'

const { Spinner } = Loading

const colors = computed<ComponentColor[]>(() => [
  'blue',
  'green',
  'red',
  'orange',
  'yellow',
  'purple',
  'pink',
  'gray'
])
</script>

<template>
  <Space>
    <Spinner v-for="color in colors" :key="color" :color="color" :size="30" />
  </Space>
</template>
`