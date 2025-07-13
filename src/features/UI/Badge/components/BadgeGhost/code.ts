export const badgeGhostCode = `
<script setup lang="ts">
import { Space, Badge } from '@/components/UI'

const colors = ['blue', 'green', 'red', 'orange', 'yellow', 'purple', 'pink']
</script>

<template>
  <Space>
    <Badge v-for="color in colors" :key="color" :color="color" ghost>Badge</Badge>
  </Space>
</template>
`
