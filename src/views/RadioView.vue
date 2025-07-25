<script setup lang="ts">
import PageLayout from '@/components/View/PageLayout/PageLayout.vue'
import RadioApi from '@/features/Control/Radio/components/RadioApi/RadioApi.vue'
import RadioBasic from '@/features/Control/Radio/components/RadioBasic/RadioBasic.vue'
import RadioColor from '@/features/Control/Radio/components/RadioColor/RadioColor.vue'
import RadioLabel from '@/features/Control/Radio/components/RadioLabel/RadioLabel.vue'
import RadioSize from '@/features/Control/Radio/components/RadioSize/RadioSize.vue'
import useLangStore from '@/stores/LangStore'

const t = useLangStore()
</script>

<template>
  <PageLayout
    title="Radio"
    importCode="import { Radio } from '@/components/Control'"
    :desc="t.lang.radio.desc"
  >
    <template #showcase>
      <RadioBasic />
      <RadioColor />
      <RadioSize />
      <RadioLabel />
    </template>
    <template #api>
      <RadioApi />
    </template>
  </PageLayout>
</template>
