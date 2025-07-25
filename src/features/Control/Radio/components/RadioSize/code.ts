export const radioSizeCode = `
<script setup lang="ts">
import { Space } from '@/components/UI'
import { Radio } from '@/components/Control'
import { useDisplayComponentSize } from '@/hooks'
import type { ComponentSize } from '@/common/type'
import helper from '@/helper'

const sizeContent = useDisplayComponentSize()
</script>

<template>
  <Space>
    <Radio v-for="size in helper.getSizeType()" :key="size" :sizes="size as ComponentSize" name="size" color="green">
      {{ sizeContent(size) }}
    </Radio>
  </Space>
</template>
`