<script setup lang="ts">
import { Upload } from '@/components/Control'
import { uploadCatalogIds } from '@/features/Control/Upload/repository/catalogIds'
import { multipleImageBasicCode } from './code'
import AnchorContent from '@/components/View/AnchorLink/AnchorContent.vue'
import ShowCase from '@/components/View/ShowCase/ShowCase.vue'

const { ImageUpload } = Upload

const { MultipleImageUpload } = ImageUpload

const handleUpload = (files: File[]) => {
  console.log(files)
}
</script>

<template>
  <AnchorContent :id="uploadCatalogIds.MULTI_IMAGE_UPLOAD_BASIC">
    <ShowCase title="Basic" :code="multipleImageBasicCode">
      <MultipleImageUpload
        color="green"
        rootClassName="section-space"
        :defaultImages="[
          'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrg&dpr=1'
        ]"
        @onUpload="handleUpload"
      />
      <MultipleImageUpload color="green" disabled />
    </ShowCase>
  </AnchorContent>
</template>
