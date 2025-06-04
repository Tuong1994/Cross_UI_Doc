<script setup lang="ts">
import PageLayout from '@/components/View/PageLayout/PageLayout.vue'
import AccordionApi from '@/features/Accordion/components/AccordionApi/AccordionApi.vue'
import AccordionBasic from '@/features/Accordion/components/AccordionBasic/AccordionBasic.vue'
import AccordionBordered from '@/features/Accordion/components/AccordionBordered/AccordionBordered.vue'
import AccordionExtraIcon from '@/features/Accordion/components/AccordionExtraIcon/AccordionExtraIcon.vue'
import AccordionGroup from '@/features/Accordion/components/AccordionGroup/AccordionGroup.vue'
import AccordionLabelIcon from '@/features/Accordion/components/AccordionLabelIcon/AccordionLabelIcon.vue'
import useLangStore from '@/stores/LangStore'

const t = useLangStore()
</script>

<template>
  <PageLayout
    title="Accordion"
    importCode="import { Accordion } from '@/componenst/UI'"
    :desc="t.lang.accordion.desc"
  >
    <template #showcase>
      <AccordionBasic />
      <AccordionLabelIcon />
      <AccordionExtraIcon />
      <AccordionBordered />
      <AccordionGroup />
    </template>
    <template #api>
      <AccordionApi />
    </template>
  </PageLayout>
</template>
