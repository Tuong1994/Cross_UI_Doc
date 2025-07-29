export const buttonGhostCode = `
<script setup lang="ts">
import { Button, Space } from '@/components/UI'
import type { ButtonColor } from '@/components/UI/Button/type'
import helper from '@/helper'
</script>

<template>
  <Space rootClassName="section-space">
    <Button
      v-for="color in helper.getColorType()"
      :key="color"
      :color="color as ButtonColor"
      shape="square"
      ghost
    >
      Button
    </Button>
  </Space>
  <Space>
    <Button
      v-for="color in helper.getColorType()"
      :key="color"
      :color="color as ButtonColor"
      shape="round"
      ghost
    >
      Button
    </Button>
  </Space>
</template>
`
