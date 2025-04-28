export const avatarBasicCode = `
<script setup lang="ts">
import { Space, Avatar, Image } from '@/components/UI'

const avatarSize = 50
</script>

<template>
  <Space>
    <Avatar :size="avatarSize" />
    <Avatar :size="avatarSize" letter="T" />
    <Avatar :size="avatarSize">
      <Image />
    </Avatar>
  </Space>
</template>
`
