export const fileColorCode = `
<script setup lang="ts">
import { Upload } from '@/components/Control'
import { Space, Typography } from '@/components/UI'
import type { ControlColor } from '@/components/Control/type'
import helper from '@/helper'
import utils from '@/utils'

const { FileUpload } = Upload

const { Paragraph } = Typography
</script>

<template>
  <Space>
    <div v-for="color in helper.getColorType()" :key="color">
      <Paragraph>{{ utils.capitalizeFirstLetter(color) }}</Paragraph>
      <FileUpload :color="color as ControlColor" />
    </div>
  </Space>
</template>
`
