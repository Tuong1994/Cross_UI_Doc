export const multipleImageBasicCode = `
<script setup lang="ts">
import { Upload } from '@/components/Control'

const { ImageUpload } = Upload

const { MultipleImageUpload } = ImageUpload

const handleUpload = (files: File[]) => {
  console.log(files)
}
</script>

<template>
    <MultipleImageUpload
        color="green"
        rootClassName="section-space"
        :defaultImages="[
          'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrg&dpr=1'
        ]"
        @onUpload="handleUpload"
    />
    <MultipleImageUpload color="green" disabled />
</template>
`
