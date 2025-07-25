<script setup lang="ts">
import { Upload } from '@/components/Control'
import { Typography, Space } from '@/components/UI'
import { singleImageShapeCode } from './code'
import { uploadCatalogIds } from '@/features/Control/Upload/repository/catalogIds'
import type { ControlShape } from '@/components/Control/type'
import AnchorContent from '@/components/View/AnchorLink/AnchorContent.vue'
import ShowCase from '@/components/View/ShowCase/ShowCase.vue'
import helper from '@/helper'
import utils from '@/utils'

const { ImageUpload } = Upload

const { SingleImageUpload } = ImageUpload

const { Paragraph } = Typography
</script>

<template>
  <AnchorContent :id="uploadCatalogIds.SINGLE_IMAGE_UPLOAD_SHAPE">
    <ShowCase title="Shape" :code="singleImageShapeCode">
      <Space size="md">
        <div v-for="shape in helper.getShapeType()" :key="shape">
          <Paragraph>{{ utils.capitalizeFirstLetter(shape) }}</Paragraph>
          <SingleImageUpload :shape="shape as ControlShape" color="green" />
        </div>
      </Space>
    </ShowCase>
  </AnchorContent>
</template>
