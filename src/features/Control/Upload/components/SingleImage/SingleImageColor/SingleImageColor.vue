<script setup lang="ts">
import { Upload } from '@/components/Control'
import { Typography, Space } from '@/components/UI'
import { uploadCatalogIds } from '@/features/Control/Upload/repository/catalogIds'
import { singleImageColorReactCode, singleImageColorVueCode } from './code'
import type { ControlColor } from '@/components/Control/type'
import AnchorContent from '@/components/View/AnchorLink/AnchorContent.vue'
import ShowCase from '@/components/View/ShowCase/ShowCase.vue'
import helper from '@/helper'
import utils from '@/utils'

const { ImageUpload } = Upload

const { SingleImageUpload } = ImageUpload

const { Paragraph } = Typography
</script>

<template>
  <AnchorContent :id="uploadCatalogIds.SINGLE_IMAGE_UPLOAD_COLOR">
    <ShowCase title="Color" code="" :vueCode="singleImageColorVueCode" :reactCode="singleImageColorReactCode">
      <Space size="md">
        <div v-for="color in helper.getColorType()" :key="color">
          <Paragraph>{{ utils.capitalizeFirstLetter(color) }}</Paragraph>
          <SingleImageUpload :color="color as ControlColor" />
        </div>
      </Space>
    </ShowCase>
  </AnchorContent>
</template>
