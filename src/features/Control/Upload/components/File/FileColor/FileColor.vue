<script setup lang="ts">
import { Upload } from '@/components/Control'
import { Space, Typography } from '@/components/UI'
import { fileColorReactCode, fileColorVueCode } from './code'
import { uploadCatalogIds } from '@/features/Control/Upload/repository/catalogIds'
import type { ControlColor } from '@/components/Control/type'
import AnchorContent from '@/components/View/AnchorLink/AnchorContent.vue'
import ShowCase from '@/components/View/ShowCase/ShowCase.vue'
import helper from '@/helper'
import utils from '@/utils'

const { FileUpload } = Upload

const { Paragraph } = Typography
</script>

<template>
  <AnchorContent :id="uploadCatalogIds.FILES_UPLOAD_COLOR">
    <ShowCase title="Color" :vueCode="fileColorVueCode" :reactCode="fileColorReactCode">
      <Space>
        <div v-for="color in helper.getColorType()" :key="color">
          <Paragraph>{{ utils.capitalizeFirstLetter(color) }}</Paragraph>
          <FileUpload :color="color as ControlColor" />
        </div>
      </Space>
    </ShowCase>
  </AnchorContent>
</template>
