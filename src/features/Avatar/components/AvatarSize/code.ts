export const avatarSizeCode = `
<script setup lang="ts">
import { Space, Avatar } from '@/components/UI'
</script>

<template>
  <Space>
    <Avatar :size="20" />
    <Avatar :size="40" />
    <Avatar :size="60" />
    <Avatar :size="80" />
  </Space>
</template>
`
