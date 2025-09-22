<script setup lang="ts">
import PageLayout from '@/components/View/PageLayout/PageLayout.vue'
import DynamicGridApi from '@/features/UI/DynamicGrid/components/DynamicGridApi/DynamicGridApi.vue';
import DynamicGridItemApi from '@/features/UI/DynamicGrid/components/DynamicGridApi/DynamicGridItemApi.vue';
import DynamicGridBasic from '@/features/UI/DynamicGrid/components/DynamicGridBasic/DynamicGridBasic.vue';
import DynamicGridItems from '@/features/UI/DynamicGrid/components/DynamicGridItems/DynamicGridItems.vue';
import useLangStore from '@/stores/LangStore'

const t = useLangStore()
</script>

<template>
  <PageLayout
    title="Dynamic Grid"
    importCode="import { DynamicGrid } from '@/components/UI'"
    :desc="t.lang.dynamicGrid.desc"
  >
    <template #showcase>
      <DynamicGridBasic />
      <DynamicGridItems />
    </template>
    <template #api>
      <DynamicGridApi />
      <DynamicGridItemApi />
    </template>
  </PageLayout>
</template>
