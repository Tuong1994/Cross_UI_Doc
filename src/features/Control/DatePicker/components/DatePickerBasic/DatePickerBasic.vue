<script setup lang="ts">
import { DatePicker } from '@/components/Control'
import { datepickerBasicCode } from './code'
import { datepickerCatalogIds } from '@/features/Control/DatePicker/repository/catalogIds'
import AnchorContent from '@/components/View/AnchorLink/AnchorContent.vue'
import ShowCase from '@/components/View/ShowCase/ShowCase.vue'

const handleSelect = (date: Date) => {
  console.log(date)
}
</script>

<template>
  <AnchorContent :id="datepickerCatalogIds.BASIC">
    <ShowCase title="Basic" :code="datepickerBasicCode">
      <DatePicker color="green" rootClassName="section-space" @onChangeSelect="handleSelect" />
      <DatePicker color="green" disabled />
    </ShowCase>
  </AnchorContent>
</template>
