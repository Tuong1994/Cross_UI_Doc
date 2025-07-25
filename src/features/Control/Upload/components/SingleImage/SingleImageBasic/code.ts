export const singleImageBasicCode = `
<script setup lang="ts">
import { Upload } from '@/components/Control'
import { Space } from '@/components/UI'

const { ImageUpload } = Upload

const { SingleImageUpload } = ImageUpload

const handleUpload = (file: File) => {
  console.log(file)
}
</script>

<template>
  <Space>
    <SingleImageUpload
      defaultImageUrl="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrg&dpr=1"
      color="green"
    />
    <SingleImageUpload color="green" @onUpload="handleUpload" />
    <SingleImageUpload color="green" disabled />
  </Space>
</template>
`