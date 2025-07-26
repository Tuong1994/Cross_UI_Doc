<script setup lang="ts">
import { Typography } from '@/components/UI'
import PageLayout from '@/components/View/PageLayout/PageLayout.vue'
import FileApi from '@/features/Control/Upload/components/File/FileApi/FileApi.vue'
import FileBasic from '@/features/Control/Upload/components/File/FileBasic/FileBasic.vue'
import FileColor from '@/features/Control/Upload/components/File/FileColor/FileColor.vue'
import FileShape from '@/features/Control/Upload/components/File/FileShape/FileShape.vue'
import MultipleImageApi from '@/features/Control/Upload/components/MultipleImage/MultipleImageApi/MultipleImageApi.vue'
import MultipleImageBasic from '@/features/Control/Upload/components/MultipleImage/MultipleImageBasic/MultipleImageBasic.vue'
import MultipleImageColor from '@/features/Control/Upload/components/MultipleImage/MultipleImageColor/MultipleImageColor.vue'
import MultipleImageShape from '@/features/Control/Upload/components/MultipleImage/MultipleImageShape/MultipleImageShape.vue'
import SingleImageApi from '@/features/Control/Upload/components/SingleImage/SingleImageApi/SingleImageApi.vue'
import SingleImageBasic from '@/features/Control/Upload/components/SingleImage/SingleImageBasic/SingleImageBasic.vue'
import SingleImageColor from '@/features/Control/Upload/components/SingleImage/SingleImageColor/SingleImageColor.vue'
import SingleImageShape from '@/features/Control/Upload/components/SingleImage/SingleImageShape/SingleImageShape.vue'
import useLangStore from '@/stores/LangStore'

const { Paragraph } = Typography

const t = useLangStore()

const importCodes = [
  "import { Upload } from '@/components/Control'",
  'const { FileUpload, ImageUpload } = Upload',
  'const { SingleImageUpload, MultipleImageUpload } = ImageUpload'
]
</script>

<template>
  <PageLayout title="Upload" :importCode="importCodes" :desc="t.lang.upload.desc">
    <template #showcase>
      <Paragraph :size="16" rootClassName="section-space">Single image</Paragraph>
      <SingleImageBasic />
      <SingleImageColor />
      <SingleImageShape />
      <Paragraph :size="16" rootClassName="section-space">Multiple image</Paragraph>
      <MultipleImageBasic />
      <MultipleImageColor />
      <MultipleImageShape />
      <Paragraph :size="16" rootClassName="section-space">Files</Paragraph>
      <FileBasic />
      <FileColor />
      <FileShape />
    </template>
    <template #api>
      <SingleImageApi />
      <MultipleImageApi />
      <FileApi />
    </template>
  </PageLayout>
</template>
