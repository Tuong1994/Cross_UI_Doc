export const multipleImageShapeCode = `
<script setup lang="ts">
import { Upload } from '@/components/Control'
import { Divider } from '@/components/UI'
import type { ControlShape } from '@/components/Control/type'
import helper from '@/helper'
import utils from '@/utils'

const { ImageUpload } = Upload

const { MultipleImageUpload } = ImageUpload
</script>

<template>
  <template v-for="shape in helper.getShapeType()" :key="shape">
    <Divider>{{ utils.capitalizeFirstLetter(shape) }}</Divider>
    <MultipleImageUpload :shape="shape as ControlShape" color="green" rootClassName="section-space" />
  </template>
</template>
`