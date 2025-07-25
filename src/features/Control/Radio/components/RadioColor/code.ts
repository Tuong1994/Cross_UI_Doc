export const radioColorCode = `
<script setup lang="ts">
import { Space } from '@/components/UI'
import { Radio } from '@/components/Control'
import type { ControlColor } from '@/components/Control/type'
import helper from '@/helper'
import utils from '@/utils'
</script>

<template>
  <Space>
    <Radio v-for="color in helper.getColorType('black', 'white')" :key="color" :color="color as ControlColor" checked>
      {{ utils.capitalizeFirstLetter(color) }}
    </Radio>
  </Space>
</template>
`