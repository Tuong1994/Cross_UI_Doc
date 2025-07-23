export const datepickerColorCode = `
<script setup lang="ts">
import { DatePicker } from '@/components/Control'
import { Space } from '@/components/UI'
import type { ControlColor } from '@/components/Control/type'
import helper from '@/helper'
import utils from '@/utils'
</script>

<template>
  <Space>
    <DatePicker
      v-for="color in helper.getColorType()"
      :key="color"
      :color="color as ControlColor"
      :rootStyle="{ width: '150px' }"
    >
      <template #label>
        {{ utils.capitalizeFirstLetter(color) }}
      </template>
    </DatePicker>
  </Space>
</template>
`