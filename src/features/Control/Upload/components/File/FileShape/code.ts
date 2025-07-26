export const fileShapeCode = `
<script setup lang="ts">
import { Upload } from '@/components/Control'
import { Space, Typography } from '@/components/UI'
import type { ControlShape } from '@/components/Control/type'
import helper from '@/helper'
import utils from '@/utils'

const { FileUpload } = Upload

const { Paragraph } = Typography
</script>

<template>
  <Space>
    <div v-for="shape in helper.getShapeType()" :key="shape">
      <Paragraph>{{ utils.capitalizeFirstLetter(shape) }}</Paragraph>
      <FileUpload color="green" :shape="shape as ControlShape" />
    </div>
  </Space>
</template>
`