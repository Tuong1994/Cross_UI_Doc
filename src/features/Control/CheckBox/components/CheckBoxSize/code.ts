export const checkboxSizeCode = `
<script setup lang="ts">
import { Space } from '@/components/UI'
import { CheckBox } from '@/components/Control'
import { useDisplayComponentSize } from '@/hooks'
import type { ComponentSize } from '@/common/type'
import helper from '@/helper'

const sizeContent = useDisplayComponentSize()
</script>

<template>
  <Space>
    <CheckBox v-for="size in helper.getSizeType()" :key="size" :sizes="size as ComponentSize" color="green">
      {{ sizeContent(size) }}
    </CheckBox>
  </Space>
</template>
`