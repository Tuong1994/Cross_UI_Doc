<script setup lang="ts">
import PageLayout from '@/components/View/PageLayout/PageLayout.vue'
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
    </template>
    <template #api>
      <SpinnerApi />
    </template>
  </PageLayout>
</template>
