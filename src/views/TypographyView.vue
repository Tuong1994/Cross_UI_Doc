<script setup lang="ts">
import { Divider } from '@/components/UI'
import TitleAligns from '@/features/Typography/components/Title/TitleAligns/TitleAligns.vue'
import TitleBasic from '@/features/Typography/components/Title/TitleBasic/TitleBasic.vue'
import TitleItalic from '@/features/Typography/components/Title/TitleItalic/TitleItalic.vue'
import TitleLevel from '@/features/Typography/components/Title/TitleLevel/TitleLevel.vue'
import TitleUnderline from '@/features/Typography/components/Title/TitleUnderline/TitleUnderline.vue'
import TitleVariant from '@/features/Typography/components/Title/TitleVariant/TitleVariant.vue'
import TitleWeight from '@/features/Typography/components/Title/TitleWeight/TitleWeight.vue'
import TitleRemove from '@/features/Typography/components/Title/TitleRemove/TitleRemove.vue'
import TitleApi from '@/features/Typography/components/Title/TitleApi/TitleApi.vue'
import ParagraphBasic from '@/features/Typography/components/Paragraph/ParagraphBasic/ParagraphBasic.vue'
import PageLayout from '@/components/View/PageLayout/PageLayout.vue'
import ParagraphSize from '@/features/Typography/components/Paragraph/ParagraphSize/ParagraphSize.vue'

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
      <TitleVariant />
      <TitleAligns />
      <TitleWeight />
      <TitleItalic />
      <TitleUnderline />
      <TitleRemove />
      <Divider />
      <ParagraphBasic />
      <ParagraphSize />
    </template>
    <template #api>
      <TitleApi />
    </template>
  </PageLayout>
</template>
