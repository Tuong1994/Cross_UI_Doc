<script setup lang="ts">
import PageLayout from '@/components/View/PageLayout/PageLayout.vue'
import TextAreaApi from '@/features/Control/TextArea/components/TextAreaApi/TextAreaApi.vue'
import TextAreaBasic from '@/features/Control/TextArea/components/TextAreaBasic/TextAreaBasic.vue'
import TextAreaColor from '@/features/Control/TextArea/components/TextAreaColor/TextAreaColor.vue'
import TextAreaLabel from '@/features/Control/TextArea/components/TextAreaLabel/TextAreaLabel.vue'
import TextAreaShape from '@/features/Control/TextArea/components/TextAreaShape/TextAreaShape.vue'
import TextAreaSize from '@/features/Control/TextArea/components/TextAreaSize/TextAreaSize.vue'
import useLangStore from '@/stores/LangStore'

const t = useLangStore()
</script>

<template>
  <PageLayout
    title="TextArea"
    importCode="import { TextArea } from '@/components/Control'"
    :desc="t.lang.textarea.desc"
  >
    <template #showcase>
      <TextAreaBasic />
      <TextAreaColor />
      <TextAreaSize />
      <TextAreaShape />
      <TextAreaLabel />
    </template>
    <template #api>
      <TextAreaApi />
    </template>
  </PageLayout>
</template>
