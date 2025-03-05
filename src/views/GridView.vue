<script setup lang="ts">
import PageLayout from '@/components/View/PageLayout/PageLayout.vue'
import GridApi from '@/features/Grid/components/GridApi/GridApi.vue'
import GridBasic from '@/features/Grid/components/GridBasic/GridBasic.vue'
import GridGap from '@/features/Grid/components/GridGap/GridGap.vue'
import useLangStore from '@/stores/LangStore'

const t = useLangStore()
</script>

<template>
  <PageLayout title="Grid" importCode="import { Grid } from '@/components/UI'" :desc="t.lang.grid.desc">
    <template #showcase>
      <GridBasic />
      <GridGap />
    </template>
    <template #api>
      <GridApi />
    </template>
  </PageLayout>
</template>
