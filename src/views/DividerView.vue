<script setup lang="ts">
import PageLayout from '@/components/View/PageLayout/PageLayout.vue'
import DividerApi from '@/features/UI/Divider/components/DividerApi/DividerApi.vue'
import DividerContent from '@/features/UI/Divider/components/DividerContent/DividerContent.vue'
import DividerDashed from '@/features/UI/Divider/components/DividerDashed/DividerDashed.vue'
import DividerHorizontal from '@/features/UI/Divider/components/DividerHorizontal/DividerHorizontal.vue'
import DividerPlacement from '@/features/UI/Divider/components/DividerPlacement/DividerPlacement.vue'
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
      <DividerPlacement />
      <DividerPlain />
      <DividerVertical />
      <DividerDashed />
    </template>
    <template #api>
      <DividerApi />
    </template>
  </PageLayout>
</template>
