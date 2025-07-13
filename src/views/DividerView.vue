<script setup lang="ts">
import PageLayout from '@/components/View/PageLayout/PageLayout.vue'
import DividerApi from '@/features/UI/Divider/components/DividerApi/DividerApi.vue'
import DividerContent from '@/features/UI/Divider/components/DividerContent/DividerContent.vue'
import DividerHorizontal from '@/features/UI/Divider/components/DividerHorizontal/DividerHorizontal.vue'
import DividerPlain from '@/features/UI/Divider/components/DividerPlain/DividerPlain.vue'
import DividerVertical from '@/features/UI/Divider/components/DividerVertical/DividerVertical.vue'
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
