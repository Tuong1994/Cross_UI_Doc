export const selectBasicCode = `
<script setup lang="ts">
import { computed } from 'vue'
import { Select } from '@/components/Control'
import { Space } from '@/components/UI'
import type { SelectOptions } from '@/components/Control/type'

const options = computed<SelectOptions>(() => [
  { label: 'Item 1', value: 1 },
  { label: 'Item 2', value: 2 },
  { label: 'Item 3', value: 3 }
])

const handleSelect = (selectedValue: string | number | boolean) => {
  console.log(selectedValue)
}
</script>

<template>
  <Space>
    <Select color="green" :options="options" @onChangeSelect="handleSelect" />
    <Select color="green" :options="options" loading />
    <Select color="green" :options="options" disabled />
  </Space>
</template>
`