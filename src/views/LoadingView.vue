<script setup lang="ts">
import { Divider } from '@/components/UI'
import PageLayout from '@/components/View/PageLayout/PageLayout.vue'
import SkeletonApi from '@/features/Loading/components/Skeleton/SkeletonApi/SkeletonApi.vue'
import SkeletonButtonApi from '@/features/Loading/components/Skeleton/SkeletonApi/SkeletonButtonApi.vue'
import SkeletonImageApi from '@/features/Loading/components/Skeleton/SkeletonApi/SkeletonImageApi.vue'
import SkeletonParagraphApi from '@/features/Loading/components/Skeleton/SkeletonApi/SkeletonParagraphApi.vue'
import SkeletonTitleApi from '@/features/Loading/components/Skeleton/SkeletonApi/SkeletonTitleApi.vue'
import SkeletonBasic from '@/features/Loading/components/Skeleton/SkeletonBasic/SkeletonBasic.vue'
import SkeletonType from '@/features/Loading/components/Skeleton/SkeletonType/SkeletonType.vue'
import SpinnerApi from '@/features/Loading/components/Spinner/SpinnerApi/SpinnerApi.vue'
import SpinnerBasic from '@/features/Loading/components/Spinner/SpinnerBasic/SpinnerBasic.vue'
import SpinnerColor from '@/features/Loading/components/Spinner/SpinnerColor/SpinnerColor.vue'
import SpinnerSize from '@/features/Loading/components/Spinner/SpinnerSize/SpinnerSize.vue'
import SpinnerType from '@/features/Loading/components/Spinner/SpinnerType/SpinnerType.vue'
import useLangStore from '@/stores/LangStore'

const t = useLangStore()

const importCodes = ["import { Loading } from '@/components/UI'", 'const { Spinner, Skeleton } = Loading']
</script>

<template>
  <PageLayout title="Loading" :importCode="importCodes" :desc="t.lang.loading.desc">
    <template #showcase>
      <SpinnerBasic />
      <SpinnerColor />
      <SpinnerSize />
      <SpinnerType />
      <Divider />
      <SkeletonBasic />
      <SkeletonType />
    </template>
    <template #api>
      <SpinnerApi />
      <SkeletonApi />
      <SkeletonTitleApi />
      <SkeletonParagraphApi />
      <SkeletonImageApi />
      <SkeletonButtonApi />
    </template>
  </PageLayout>
</template>
