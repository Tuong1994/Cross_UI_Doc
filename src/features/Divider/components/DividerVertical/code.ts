export const dividerVerticalCode = `
<script setup lang="ts">
import { Divider, Badge, Space } from '@/components/UI'

const badges = ['blue', 'green', 'red', 'orange', 'yellow', 'purple', 'pink']
</script>

<template>
  <Space>
    <template v-for="(badge, idx) in badges" :key="badge">
      <Badge :color="badge">{{ badge }}</Badge>
      <Divider v-if="idx < badges.length - 1" type="vertical" />
    </template>
  </Space>
</template>
`
