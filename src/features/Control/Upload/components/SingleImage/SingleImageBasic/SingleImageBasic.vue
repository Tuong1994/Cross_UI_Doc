<script setup lang="ts">
import { Upload } from '@/components/Control'
import { Space } from '@/components/UI'
import { singleImageBasicReactCode, singleImageBasicVueCode } from './code'
import { uploadCatalogIds } from '@/features/Control/Upload/repository/catalogIds'
import AnchorContent from '@/components/View/AnchorLink/AnchorContent.vue'
import ShowCase from '@/components/View/ShowCase/ShowCase.vue'

const { ImageUpload } = Upload

const { SingleImageUpload } = ImageUpload

const handleUpload = (file: File) => {
  console.log(file)
}
</script>

<template>
  <AnchorContent :id="uploadCatalogIds.SINGLE_IMAGE_UPLOAD_BASIC">
    <ShowCase title="Basic" :vueCode="singleImageBasicVueCode" :reactCode="singleImageBasicReactCode">
      <Space>
        <SingleImageUpload
          defaultImageUrl="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrg&dpr=1"
          color="green"
        />
        <SingleImageUpload color="green" @onUpload="handleUpload" />
        <SingleImageUpload color="green" disabled />
      </Space>
    </ShowCase>
  </AnchorContent>
</template>
