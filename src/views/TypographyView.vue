<script setup lang="ts">
import { Divider } from '@/components/UI'
import TitleAligns from '@/features/UI/Typography/components/Title/TitleAligns/TitleAligns.vue'
import TitleBasic from '@/features/UI/Typography/components/Title/TitleBasic/TitleBasic.vue'
import TitleItalic from '@/features/UI/Typography/components/Title/TitleItalic/TitleItalic.vue'
import TitleLevel from '@/features/UI/Typography/components/Title/TitleLevel/TitleLevel.vue'
import TitleUnderline from '@/features/UI/Typography/components/Title/TitleUnderline/TitleUnderline.vue'
import TitleVariant from '@/features/UI/Typography/components/Title/TitleVariant/TitleVariant.vue'
import TitleWeight from '@/features/UI/Typography/components/Title/TitleWeight/TitleWeight.vue'
import TitleRemove from '@/features/UI/Typography/components/Title/TitleRemove/TitleRemove.vue'
import TitleApi from '@/features/UI/Typography/components/Title/TitleApi/TitleApi.vue'
import ParagraphBasic from '@/features/UI/Typography/components/Paragraph/ParagraphBasic/ParagraphBasic.vue'
import PageLayout from '@/components/View/PageLayout/PageLayout.vue'
import ParagraphSize from '@/features/UI/Typography/components/Paragraph/ParagraphSize/ParagraphSize.vue'
import ParagraphStrong from '@/features/UI/Typography/components/Paragraph/ParagraphStrong/ParagraphStrong.vue'
import ParagraphMark from '@/features/UI/Typography/components/Paragraph/ParagraphMark/ParagraphMark.vue'
import ParagraphLineHeight from '@/features/UI/Typography/components/Paragraph/ParagraphLineHeight/ParagraphLineHeight.vue'
import ParagraphVariant from '@/features/UI/Typography/components/Paragraph/ParagraphVariant/ParagraphVariant.vue'
import ParagraphAligns from '@/features/UI/Typography/components/Paragraph/ParagraphAligns/ParagraphAligns.vue'
import ParagraphWeight from '@/features/UI/Typography/components/Paragraph/ParagraphWeight/ParagraphWeight.vue'
import ParagraphItalic from '@/features/UI/Typography/components/Paragraph/ParagraphItalic/ParagraphItalic.vue'
import ParagraphUnderline from '@/features/UI/Typography/components/Paragraph/ParagraphUnderline/ParagraphUnderline.vue'
import ParagraphRemove from '@/features/UI/Typography/components/Paragraph/ParagraphRemove/ParagraphRemove.vue'
import ParagraphApi from '@/features/UI/Typography/components/Paragraph/ParagraphApi/ParagraphApi.vue'
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
      <ParagraphStrong />
      <ParagraphMark />
      <ParagraphLineHeight />
      <ParagraphVariant />
      <ParagraphAligns />
      <ParagraphWeight />
      <ParagraphItalic />
      <ParagraphUnderline />
      <ParagraphRemove />
    </template>
    <template #api>
      <TitleApi />
      <ParagraphApi />
    </template>
  </PageLayout>
</template>
