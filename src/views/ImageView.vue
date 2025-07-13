<script setup lang="ts">
import PageLayout from '@/components/View/PageLayout/PageLayout.vue'
import ImageBasic from '@/features/UI/Image/components/ImageBasic/ImageBasic.vue'
import ImageFeatures from '@/features/UI/Image/components/ImageFeatures/ImageFeatures.vue'
import ImageObjectFit from '@/features/UI/Image/components/ImageObjectFit/ImageObjectFit.vue'
import ImageSize from '@/features/UI/Image/components/ImageSize/ImageSize.vue'
import ImageApi from '@/features/UI/Image/components/ImageApi/ImageApi.vue'
import useLangStore from '@/stores/LangStore'

const t = useLangStore()
</script>

<template>
  <PageLayout title="Image" importCode="import { Image } from '@/components/UI'" :desc="t.lang.image.desc">
    <template #showcase>
      <ImageBasic />
      <ImageSize />
      <ImageObjectFit />
      <ImageFeatures />
    </template>
    <template #api>
      <ImageApi />
    </template>
  </PageLayout>
</template>
