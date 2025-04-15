<script setup lang="ts">
import PageLayout from '@/components/View/PageLayout/PageLayout.vue'
import FlexAligns from '@/features/Flex/components/FlexAligns/FlexAligns.vue'
import FlexRowApi from '@/features/Flex/components/FlexApi/FlexRowApi.vue'
import FlexColApi from '@/features/Flex/components/FlexApi/FlexColApi.vue'
import FlexBasic from '@/features/Flex/components/FlexBasic/FlexBasic.vue'
import FlexGutters from '@/features/Flex/components/FlexGutters/FlexGutters.vue'
import FlexJustify from '@/features/Flex/components/FlexJustify/FlexJustify.vue'
import useLangStore from '@/stores/LangStore'

const t = useLangStore()

const importCodes = ['import { Flex } from "@/components/UI"', 'const { FlexRow, FlexCol } = Flex']
</script>

<template>
  <PageLayout title="Flex" :importCode="importCodes" :desc="t.lang.divider.desc">
    <template #showcase>
      <FlexBasic />
      <FlexJustify />
      <FlexAligns />
      <FlexGutters />
    </template>
    <template #api>
      <FlexRowApi />
      <FlexColApi />
    </template>
  </PageLayout>
</template>
