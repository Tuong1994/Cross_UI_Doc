export const datepickerSizeCode = `
<script setup lang="ts">
import { DatePicker } from '@/components/Control'
import { Space } from '@/components/UI'
import { useDisplayComponentSize } from '@/hooks'
import type { ComponentSize } from '@/common/type'
import helper from '@/helper'
import utils from '@/utils'

const sizeContent = useDisplayComponentSize()
</script>

<template>
  <Space>
    <DatePicker
      v-for="size in helper.getSizeType()"
      :key="size"
      :rootStyle="{ width: '200px' }"
      :sizes="size as ComponentSize"
      color="green"
      >
      <template #label>
        {{ sizeContent(size) }}
      </template>
    </DatePicker>
  </Space>
</template>
`
