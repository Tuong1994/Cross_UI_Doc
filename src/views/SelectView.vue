<script setup lang="ts">
import PageLayout from '@/components/View/PageLayout/PageLayout.vue'
import SelectBasic from '@/features/Control/Select/components/SelectBasic/SelectBasic.vue'
import SelectColor from '@/features/Control/Select/components/SelectColor/SelectColor.vue'
import SelectLabel from '@/features/Control/Select/components/SelectLabel/SelectLabel.vue'
import SelectPaging from '@/features/Control/Select/components/SelectPaging/SelectPaging.vue'
import SelectShape from '@/features/Control/Select/components/SelectShape/SelectShape.vue'
import SelectSize from '@/features/Control/Select/components/SelectSize/SelectSize.vue'
import useLangStore from '@/stores/LangStore'

const t = useLangStore()
</script>

<template>
  <PageLayout
    title="Select"
    importCode="import { Select } from '@/components/Control'"
    :desc="t.lang.select.desc"
  >
    <template #showcase>
      <SelectBasic />
      <SelectColor />
      <SelectSize />
      <SelectShape />
      <SelectLabel />
      <SelectPaging />
    </template>
    <template #api></template>
  </PageLayout>
</template>
