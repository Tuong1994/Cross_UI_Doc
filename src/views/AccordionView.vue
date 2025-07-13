<script setup lang="ts">
import PageLayout from '@/components/View/PageLayout/PageLayout.vue'
import AccordionApi from '@/features/UI/Accordion/components/AccordionApi/AccordionApi.vue'
import AccordionBasic from '@/features/UI/Accordion/components/AccordionBasic/AccordionBasic.vue'
import AccordionBordered from '@/features/UI/Accordion/components/AccordionBordered/AccordionBordered.vue'
import AccordionExtraIcon from '@/features/UI/Accordion/components/AccordionExtraIcon/AccordionExtraIcon.vue'
import AccordionGroup from '@/features/UI/Accordion/components/AccordionGroup/AccordionGroup.vue'
import AccordionLabelIcon from '@/features/UI/Accordion/components/AccordionLabelIcon/AccordionLabelIcon.vue'
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
