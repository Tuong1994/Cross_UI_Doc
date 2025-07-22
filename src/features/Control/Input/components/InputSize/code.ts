export const inputSizeCode = `
<script setup lang="ts">
import { Space } from '@/components/UI'
import { Input } from '@/components/Control'
import type { ComponentSize } from '@/common/type'
import helper from '@/helper'
import utils from '@/utils'
</script>

<template>
  <Space>
    <Input v-for="size in helper.getSizeType()" :key="size" :sizes="size as ComponentSize" color="green">
      <template #label>{{ utils.capitalizeFirstLetter(size) }}</template>
    </Input>
  </Space>
</template>
`