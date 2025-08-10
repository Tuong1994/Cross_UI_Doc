<script setup lang="ts">
import { Upload } from '@/components/Control'
import { Divider } from '@/components/UI'
import { multipleImageColorReactCode, multipleImageColorVueCode } from './code'
import { uploadCatalogIds } from '@/features/Control/Upload/repository/catalogIds'
import type { ControlColor } from '@/components/Control/type'
import AnchorContent from '@/components/View/AnchorLink/AnchorContent.vue'
import ShowCase from '@/components/View/ShowCase/ShowCase.vue'
import helper from '@/helper'
import utils from '@/utils'

const { ImageUpload } = Upload

const { MultipleImageUpload } = ImageUpload
</script>

<template>
  <AnchorContent :id="uploadCatalogIds.MULTI_IMAGE_UPLOAD_COLOR">
    <ShowCase
      title="Color"
      :vueCode="multipleImageColorVueCode"
      :reactCode="multipleImageColorReactCode"
    >
      <template v-for="color in helper.getColorType()" :key="color">
        <Divider>{{ utils.capitalizeFirstLetter(color) }}</Divider>
        <MultipleImageUpload :color="color as ControlColor" rootClassName="section-space" />
      </template>
    </ShowCase>
  </AnchorContent>
</template>
