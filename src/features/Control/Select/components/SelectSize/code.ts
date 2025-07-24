export const selectSizeCode = `
<script setup lang="ts">
import { computed } from 'vue'
import { Space } from '@/components/UI'
import { Select } from '@/components/Control'
import { useDisplayComponentSize } from '@/hooks'
import type { SelectOptions } from '@/components/Control/type'
import type { ComponentSize } from '@/common/type'

const options = computed<SelectOptions>(() => [
  { label: 'Item 1', value: 1 },
  { label: 'Item 2', value: 2 },
  { label: 'Item 3', value: 3 }
])

const sizeContent = useDisplayComponentSize()
</script>

<template>
  <Space>
     <Select
        v-for="size in helper.getSizeType()"
        :key="size"
        :sizes="size as ComponentSize"
        color="green"
        :options="options"
      >
        <template #label>{{ sizeContent(size) }}</template>
      </Select>
  </Space>
</template>
`
