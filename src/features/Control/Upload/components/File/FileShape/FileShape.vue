<script setup lang="ts">
import { Upload } from '@/components/Control'
import { Space, Typography } from '@/components/UI'
import { fileShapeReactCode, fileShapeVueCode } from './code'
import { uploadCatalogIds } from '@/features/Control/Upload/repository/catalogIds'
import type { ControlShape } from '@/components/Control/type'
import AnchorContent from '@/components/View/AnchorLink/AnchorContent.vue'
import ShowCase from '@/components/View/ShowCase/ShowCase.vue'
import helper from '@/helper'
import utils from '@/utils'

const { FileUpload } = Upload

const { Paragraph } = Typography
</script>

<template>
  <AnchorContent :id="uploadCatalogIds.FILES_UPLOAD_SHAPE">
    <ShowCase title="Shape" code="" :vueCode="fileShapeVueCode" :reactCode="fileShapeReactCode">
      <Space>
        <div v-for="shape in helper.getShapeType()" :key="shape">
          <Paragraph>{{ utils.capitalizeFirstLetter(shape) }}</Paragraph>
          <FileUpload color="green" :shape="shape as ControlShape" />
        </div>
      </Space>
    </ShowCase>
  </AnchorContent>
</template>
