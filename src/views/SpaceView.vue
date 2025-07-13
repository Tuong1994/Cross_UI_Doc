<script setup lang="ts">
import PageLayout from '@/components/View/PageLayout/PageLayout.vue'
import SpaceAligns from '@/features/UI/Space/components/SpaceAligns/SpaceAligns.vue'
import SpaceApi from '@/features/UI/Space/components/SpaceApi/SpaceApi.vue'
import SpaceBasic from '@/features/UI/Space/components/SpaceBasic/SpaceBasic.vue'
import SpaceJustify from '@/features/UI/Space/components/SpaceJustify/SpaceJustify.vue'
import SpaceSize from '@/features/UI/Space/components/SpaceSize/SpaceSize.vue'
import useLangStore from '@/stores/LangStore'

const t = useLangStore()
</script>

<template>
  <PageLayout title="Space" importCode="import { Space } from '@/components/UI'" :desc="t.lang.space.desc">
    <template #showcase>
      <SpaceBasic />
      <SpaceJustify />
      <SpaceAligns />
      <SpaceSize />
    </template>
    <template #api>
      <SpaceApi />
    </template>
  </PageLayout>
</template>
