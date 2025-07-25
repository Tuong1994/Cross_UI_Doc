export const singleImageColorCode = `
<script setup lang="ts">
import { Upload } from '@/components/Control'
import { Typography, Space } from '@/components/UI'
import type { ControlColor } from '@/components/Control/type'
import helper from '@/helper'
import utils from '@/utils'

const { ImageUpload } = Upload

const { SingleImageUpload } = ImageUpload

const { Paragraph } = Typography
</script>

<template>
  <Space size="md">
    <div v-for="color in helper.getColorType()" :key="color">
      <Paragraph>{{ utils.capitalizeFirstLetter(color) }}</Paragraph>
      <SingleImageUpload :color="color as ControlColor" />
    </div>
  </Space>
</template>
`
