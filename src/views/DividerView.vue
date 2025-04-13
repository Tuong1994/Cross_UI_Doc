<script setup lang="ts">
import PageLayout from '@/components/View/PageLayout/PageLayout.vue'
import DividerApi from '@/features/Divider/components/DividerApi/DividerApi.vue'
import DividerContent from '@/features/Divider/components/DividerContent/DividerContent.vue'
import DividerHorizontal from '@/features/Divider/components/DividerHorizontal/DividerHorizontal.vue'
import DividerPlain from '@/features/Divider/components/DividerPlain/DividerPlain.vue'
import DividerVertical from '@/features/Divider/components/DividerVertical/DividerVertical.vue'
import useLangStore from '@/stores/LangStore'

const t = useLangStore()
</script>

<template>
  <PageLayout
    title="Divider"
    importCode="import { Divider } from '@/components/UI'"
    :desc="t.lang.divider.desc"
  >
    <template #showcase>
      <DividerHorizontal />
      <DividerContent />
      <DividerPlain />
      <DividerVertical />
    </template>
    <template #api>
      <DividerApi />
    </template>
  </PageLayout>
</template>
