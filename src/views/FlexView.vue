<script setup lang="ts">
import PageLayout from '@/components/View/PageLayout/PageLayout.vue'
import FlexAligns from '@/features/UI/Flex/components/FlexAligns/FlexAligns.vue'
import FlexRowApi from '@/features/UI/Flex/components/FlexApi/FlexRowApi.vue'
import FlexColApi from '@/features/UI/Flex/components/FlexApi/FlexColApi.vue'
import FlexBasic from '@/features/UI/Flex/components/FlexBasic/FlexBasic.vue'
import FlexGutters from '@/features/UI/Flex/components/FlexGutters/FlexGutters.vue'
import FlexJustify from '@/features/UI/Flex/components/FlexJustify/FlexJustify.vue'
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
