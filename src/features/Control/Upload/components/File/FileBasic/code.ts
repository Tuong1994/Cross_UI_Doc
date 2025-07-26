export const fileBasicCode = `
<script setup lang="ts">
import { Upload } from '@/components/Control'

const { FileUpload } = Upload

const handleUpload = (files: File[]) => {
  console.log(files)
}
</script>

<template>
  <FileUpload color="green" @onUpload="handleUpload" />
</template>
`
