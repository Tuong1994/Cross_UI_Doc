export const avatarDotCode = ` 
<script setup lang="ts">
import { Space, Avatar } from '@/components/UI'

const avatarSize = 50

const avatarColors = ['blue', 'green', 'red', 'orange', 'yellow', 'purple', 'pink']
</script>

<template>
  <Space>
    <Avatar v-for="color in avatarColors" :key="color" :color="color" :size="avatarSize" dot />
  </Space>
</template>
`
