export const selectColorCode = `
<script setup lang="ts">
import { computed } from 'vue'
import { Space } from '@/components/UI'
import { Select } from '@/components/Control'
import type { ControlColor, SelectOptions } from '@/components/Control/type'

const colors = computed<ControlColor[]>(() => ['blue', 'green', 'red', 'orange', 'yellow', 'purple', 'pink'])

const options = computed<SelectOptions>(() => [
  { label: 'Item 1', value: 1 },
  { label: 'Item 2', value: 2 },
  { label: 'Item 3', value: 3 }
])
</script>

<template>
  <Space>
    <Select v-for="color in colors" :key="color" :color="color" :options="options">
      <template #label>{{ color }}</template>
    </Select>
  </Space>
</template>
`
