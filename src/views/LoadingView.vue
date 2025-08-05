<script setup lang="ts">
import { Typography } from '@/components/UI'
import PageLayout from '@/components/View/PageLayout/PageLayout.vue'
import SkeletonApi from '@/features/UI/Loading/components/Skeleton/SkeletonApi/SkeletonApi.vue'
import SkeletonButtonApi from '@/features/UI/Loading/components/Skeleton/SkeletonApi/SkeletonButtonApi.vue'
import SkeletonImageApi from '@/features/UI/Loading/components/Skeleton/SkeletonApi/SkeletonImageApi.vue'
import SkeletonParagraphApi from '@/features/UI/Loading/components/Skeleton/SkeletonApi/SkeletonParagraphApi.vue'
import SkeletonTitleApi from '@/features/UI/Loading/components/Skeleton/SkeletonApi/SkeletonTitleApi.vue'
import SkeletonBasic from '@/features/UI/Loading/components/Skeleton/SkeletonBasic/SkeletonBasic.vue'
import SkeletonType from '@/features/UI/Loading/components/Skeleton/SkeletonType/SkeletonType.vue'
import SpinnerApi from '@/features/UI/Loading/components/Spinner/SpinnerApi/SpinnerApi.vue'
import SpinnerBasic from '@/features/UI/Loading/components/Spinner/SpinnerBasic/SpinnerBasic.vue'
import SpinnerColor from '@/features/UI/Loading/components/Spinner/SpinnerColor/SpinnerColor.vue'
import SpinnerSize from '@/features/UI/Loading/components/Spinner/SpinnerSize/SpinnerSize.vue'
import SpinnerType from '@/features/UI/Loading/components/Spinner/SpinnerType/SpinnerType.vue'
import useLangStore from '@/stores/LangStore'

const { Paragraph } = Typography

const t = useLangStore()

const importCodes = ["import { Loading } from '@/components/UI'", 'const { Spinner, Skeleton } = Loading']
</script>

<template>
  <PageLayout title="Loading" :importCode="importCodes" :desc="t.lang.loading.desc">
    <template #showcase>
      <Paragraph :size="16" rootClassName="section-space">Spinner</Paragraph>
      <SpinnerBasic />
      <SpinnerColor />
      <SpinnerSize />
      <SpinnerType />
      <Paragraph :size="16" rootClassName="section-space">Skeleton</Paragraph>
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
