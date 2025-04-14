<script setup lang="ts">
import PageLayout from '@/components/View/PageLayout/PageLayout.vue'
import FlexBasic from '@/features/Flex/components/FlexBasic/FlexBasic.vue'
import useLangStore from '@/stores/LangStore'

const t = useLangStore()

const importCodes = ['import { Flex } from "@/components/UI"', 'const { FlexRow, FlexCol } = Flex']
</script>

<template>
  <PageLayout title="Flex" :importCode="importCodes" :desc="t.lang.divider.desc">
    <template #showcase>
      <FlexBasic />
    </template>
    <template #api></template>
  </PageLayout>
</template>
