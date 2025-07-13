export const spinnerTypeCode = `
<script setup lang="ts">
import { computed } from 'vue'
import { Loading, Divider, Space } from '@/components/UI'
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
  <Divider>Default</Divider>
  <Space>
    <Spinner v-for="color in colors" :key="color" :color="color" type="default" :size="40" />
  </Space>
  <Divider>Bubble</Divider>
  <Space>
    <Spinner v-for="color in colors" :key="color" :color="color" type="bubble" />
  </Space>
</template>

`
