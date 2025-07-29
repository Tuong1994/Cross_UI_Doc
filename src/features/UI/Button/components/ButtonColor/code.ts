export const buttonColorCode = `
<script setup lang="ts">
import { Button, Space } from '@/components/UI'
import type { ButtonColor } from '@/components/UI/Button/type'
</script>

<template>
  <Space>
    <Button v-for="color in helper.getColorType()" :key="color" :color="color as ButtonColor">Button</Button>
  </Space>
</template>
`
