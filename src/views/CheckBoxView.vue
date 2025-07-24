<script setup lang="ts">
import PageLayout from '@/components/View/PageLayout/PageLayout.vue'
import CheckBoxBasic from '@/features/Control/CheckBox/components/CheckBoxBasic/CheckBoxBasic.vue'
import CheckBoxColor from '@/features/Control/CheckBox/components/CheckBoxColor/CheckBoxColor.vue'
import CheckBoxLabel from '@/features/Control/CheckBox/components/CheckBoxLabel/CheckBoxLabel.vue'
import CheckBoxSize from '@/features/Control/CheckBox/components/CheckBoxSize/CheckBoxSize.vue'
import useLangStore from '@/stores/LangStore'

const t = useLangStore()
</script>

<template>
  <PageLayout
    title="CheckBox"
    importCode="import { CheckBox } from '@/components/Control'"
    :desc="t.lang.checkbox.desc"
  >
    <template #showcase>
      <CheckBoxBasic />
      <CheckBoxColor />
      <CheckBoxSize />
      <CheckBoxLabel />
    </template>
    <template #api></template>
  </PageLayout>
</template>
