<script setup lang="ts">
import PageLayout from '@/components/View/PageLayout/PageLayout.vue'
import TitleBasic from '@/features/Typography/components/Title/TitleBasic/TitleBasic.vue'
import TitleLevel from '@/features/Typography/components/Title/TitleLevel/TitleLevel.vue'
import useLangStore from '@/stores/LangStore'

const t = useLangStore()

const importCodes = [
  "import { Typography } from '@/components/UI'",
  'const { Title, Paragraph } = Typography'
]
</script>

<template>
  <PageLayout title="Typography" :importCode="importCodes" :desc="t.lang.typography.desc">
    <template #showcase>
      <TitleBasic />
      <TitleLevel />
    </template>
    <template #api></template>
  </PageLayout>
</template>
