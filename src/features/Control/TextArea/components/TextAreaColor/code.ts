export const textareaColorCode = `
<script setup lang="ts">
import { Space } from '@/components/UI'
import { TextArea } from '@/components/Control'
import type { ControlColor } from '@/components/Control/type'
import helper from '@/helper'
import utils from '@/utils'
</script>

<template>
  <Space>
    <TextArea v-for="color in helper.getColorType()" :key="color" :color="color as ControlColor">
      <template #label>{{ utils.capitalizeFirstLetter(color) }}</template>
    </TextArea>
  </Space>
</template>
`