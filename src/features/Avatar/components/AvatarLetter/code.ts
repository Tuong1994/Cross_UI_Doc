export const avatarLetterCode = `
<script setup lang="ts">
import { Space, Avatar } from '@/components/UI'

const avatarSize = 50
</script>

<template>
  <Space>
    <Avatar :size="avatarSize" letter="Apple" />
    <Avatar :size="avatarSize" letter="Banana" />
    <Avatar :size="avatarSize" letter="C" />
  </Space>
</template>
`
