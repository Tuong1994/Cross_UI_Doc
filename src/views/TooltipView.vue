<script setup lang="ts">
import PageLayout from '@/components/View/PageLayout/PageLayout.vue'
import TooltipApi from '@/features/UI/Tooltip/components/TooltipApi/TooltipApi.vue'
import TooltipBasic from '@/features/UI/Tooltip/components/TooltipBasic/TooltipBasic.vue'
import TooltipColor from '@/features/UI/Tooltip/components/TooltipColor/TooltipColor.vue'
import TooltipPlacement from '@/features/UI/Tooltip/components/TooltipPlacement/TooltipPlacement.vue'
import useLangStore from '@/stores/LangStore'

const t = useLangStore()
</script>

<template>
  <PageLayout
    title="Tooltip"
    importCode="import { Tooltip } from '@/components/UI'"
    :desc="t.lang.tooltip.desc"
  >
    <template #showcase>
      <TooltipBasic />
      <TooltipColor />
      <TooltipPlacement />
    </template>
    <template #api>
      <TooltipApi />
    </template>
  </PageLayout>
</template>
