export const inputColorCode = `
<script setup lang="ts">
import { Space } from '@/components/UI'
import { Input } from '@/components/Control'
import type { ControlColor } from '@/components/Control/type'
import helper from '@/helper'
import utils from '@/utils'
</script>

<template>
  <Space>
    <Input v-for="color in helper.getColorType()" :key="color" :color="color as ControlColor">
      <template #label>{{ utils.capitalizeFirstLetter(color) }}</template>
    </Input>
  </Space>
</template>
`