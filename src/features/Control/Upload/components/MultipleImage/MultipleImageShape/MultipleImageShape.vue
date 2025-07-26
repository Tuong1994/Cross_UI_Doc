<script setup lang="ts">
import { Upload } from '@/components/Control'
import { Divider } from '@/components/UI'
import { multipleImageShapeCode } from './code'
import { uploadCatalogIds } from '@/features/Control/Upload/repository/catalogIds'
import type { ControlShape } from '@/components/Control/type'
import AnchorContent from '@/components/View/AnchorLink/AnchorContent.vue'
import ShowCase from '@/components/View/ShowCase/ShowCase.vue'
import helper from '@/helper'
import utils from '@/utils'

const { ImageUpload } = Upload

const { MultipleImageUpload } = ImageUpload
</script>

<template>
  <AnchorContent :id="uploadCatalogIds.MULTI_IMAGE_UPLOAD_SHAPE">
    <ShowCase title="Shape" :code="multipleImageShapeCode">
      <template v-for="shape in helper.getShapeType()" :key="shape">
        <Divider>{{ utils.capitalizeFirstLetter(shape) }}</Divider>
        <MultipleImageUpload :shape="shape as ControlShape" color="green" rootClassName="section-space" />
      </template>
    </ShowCase>
  </AnchorContent>
</template>
