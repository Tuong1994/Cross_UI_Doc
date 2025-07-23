export const datepickerShapeCode = `
<script setup lang="ts">
import { DatePicker } from '@/components/Control'
import { Space } from '@/components/UI'
import type { ControlShape } from '@/components/Control/type'
import helper from '@/helper'
import utils from '@/utils'
</script>

<template>
  <Space>
    <DatePicker
      v-for="shape in helper.getShapeType()"
      :key="shape"
      :shape="shape as ControlShape"
      :rootStyle="{ width: '200px' }"
      color="green"
    >
      <template #label>
        {{ utils.capitalizeFirstLetter(shape) }}
      </template>
    </DatePicker>
  </Space>
</template>
`