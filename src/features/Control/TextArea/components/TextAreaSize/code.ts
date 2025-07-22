export const textareaSizeCode = `
<script setup lang="ts">
import { Space } from '@/components/UI'
import { TextArea } from '@/components/Control'
import type { ComponentSize } from '@/common/type'
import helper from '@/helper'
import utils from '@/utils'
</script>

<template>
  <Space>
    <TextArea v-for="size in helper.getSizeType()" :key="size" :sizes="size as ComponentSize" color="green">
      <template #label>{{ utils.capitalizeFirstLetter(size) }}</template>
    </TextArea>
  </Space>
</template>
`