export const multipleImageColorCode = `
<script setup lang="ts">
import { Upload } from '@/components/Control'
import { Divider } from '@/components/UI'
import type { ControlColor } from '@/components/Control/type'
import helper from '@/helper'
import utils from '@/utils'

const { ImageUpload } = Upload

const { MultipleImageUpload } = ImageUpload
</script>

<template>
  <template v-for="color in helper.getColorType()" :key="color">
    <Divider>{{ utils.capitalizeFirstLetter(color) }}</Divider>
    <MultipleImageUpload :color="color as ControlColor" rootClassName="section-space" />
  </template>
</template>
`