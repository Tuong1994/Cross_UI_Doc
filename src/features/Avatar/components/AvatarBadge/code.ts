export const avatarBadgeCode = `
<script setup lang="ts">
import { Space, Avatar } from '@/components/UI'

const avatarSize = 50
</script>

<template>
  <Space>
    <Avatar :size="avatarSize" badge="1" />
    <Avatar :size="avatarSize" badge="999999" />
  </Space>
</template>
`
