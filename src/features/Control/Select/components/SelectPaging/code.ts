export const selectPagingCode = `
<script setup lang="ts">
import { computed } from 'vue'
import { Select } from '@/components/Control'
import type { SelectOptions } from '@/components/Control/type'

const options = computed<SelectOptions>(() => [
  { label: 'Item 1', value: 1 },
  { label: 'Item 2', value: 2 },
  { label: 'Item 3', value: 3 },
  { label: 'Item 4', value: 4 },
  { label: 'Item 5', value: 5 },
  { label: 'Item 6', value: 6 },
  { label: 'Item 7', value: 7 },
  { label: 'Item 8', value: 8 },
  { label: 'Item 9', value: 9 },
  { label: 'Item 10', value: 10 }
])

const handleChangePage = (page: number) => {
  console.log(page)
}
</script>

<template>
  <Select async color="green" :options="options" :total="100" :limit="10" @onChangePage="handleChangePage" />
</template>

`