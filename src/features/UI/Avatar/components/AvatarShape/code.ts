export const avatarShapeCode = `
<script setup lang="ts">
import { Space, Avatar } from '@/components/UI'

const avatarSize = 50
</script>

<template>
  <Space>
    <Avatar :size="avatarSize" shape="circle" />
    <Avatar :size="avatarSize" shape="square" />
  </Space>
</template>
`
