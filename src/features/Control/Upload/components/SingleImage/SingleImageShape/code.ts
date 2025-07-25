export const singleImageShapeCode = `
<script setup lang="ts">
import { Upload } from '@/components/Control'
import { Typography, Space } from '@/components/UI'
import type { ControlShape } from '@/components/Control/type'
import helper from '@/helper'
import utils from '@/utils'

const { ImageUpload } = Upload

const { SingleImageUpload } = ImageUpload

const { Paragraph } = Typography
</script>

<template>
  <Space size="md">
    <div v-for="shape in helper.getShapeType()" :key="shape">
      <Paragraph>{{ utils.capitalizeFirstLetter(shape) }}</Paragraph>
      <SingleImageUpload :shape="shape as ControlShape" color="green" />
    </div>
  </Space>
</template>
`