export const selectShapeCode = `
<script setup lang="ts">
import { computed } from 'vue'
import { Space } from '@/components/UI'
import { Select } from '@/components/Control'
import type { SelectOptions } from '@/components/Control/type'

const options = computed<SelectOptions>(() => [
  { label: 'Item 1', value: 1 },
  { label: 'Item 2', value: 2 },
  { label: 'Item 3', value: 3 }
])
</script>

<template>
    <Space>
        <Select shape="square" color="green" :options="options">
          <template #label>Square</template>
        </Select>
        <Select shape="round" color="green" :options="options">
          <template #label>Round</template>
        </Select>
    </Space>
</template>
`
