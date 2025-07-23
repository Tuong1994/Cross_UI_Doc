<script setup lang="ts">
import PageLayout from '@/components/View/PageLayout/PageLayout.vue'
import DatePickerApi from '@/features/Control/DatePicker/components/DatePickerApi/DatePickerApi.vue'
import DatePickerBasic from '@/features/Control/DatePicker/components/DatePickerBasic/DatePickerBasic.vue'
import DatePickerColor from '@/features/Control/DatePicker/components/DatePickerColor/DatePickerColor.vue'
import DatePickerLabel from '@/features/Control/DatePicker/components/DatePickerLabel/DatePickerLabel.vue'
import DatePickerMinMax from '@/features/Control/DatePicker/components/DatePickerMinMax/DatePickerMinMax.vue'
import DatePickerShape from '@/features/Control/DatePicker/components/DatePickerShape/DatePickerShape.vue'
import DatePickerSize from '@/features/Control/DatePicker/components/DatePickerSize/DatePickerSize.vue'
import useLangStore from '@/stores/LangStore'

const t = useLangStore()
</script>

<template>
  <PageLayout
    title="DatePicker"
    importCode="import { DatePicker } from '@/components/Control'"
    :desc="t.lang.datepicker.desc"
  >
    <template #showcase>
      <DatePickerBasic />
      <DatePickerColor />
      <DatePickerSize />
      <DatePickerShape />
      <DatePickerLabel />
      <DatePickerMinMax />
    </template>
    <template #api>
      <DatePickerApi />
    </template>
  </PageLayout>
</template>
