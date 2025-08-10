<script setup lang="ts">
import { DatePicker } from '@/components/Control'
import { datepickerBasicReactCode, datepickerBasicVueCode } from './code'
import { datepickerCatalogIds } from '@/features/Control/DatePicker/repository/catalogIds'
import AnchorContent from '@/components/View/AnchorLink/AnchorContent.vue'
import ShowCase from '@/components/View/ShowCase/ShowCase.vue'
import { Space } from '@/components/UI'

const handleSelect = (date: Date) => {
  console.log(date)
}
</script>

<template>
  <AnchorContent :id="datepickerCatalogIds.BASIC">
    <ShowCase title="Basic" :vueCode="datepickerBasicVueCode" :reactCode="datepickerBasicReactCode">
      <Space>
        <DatePicker :rootStyle="{ width: '250px' }" color="green" @onChangeSelect="handleSelect" />
        <DatePicker :rootStyle="{ width: '250px' }" color="green" disabled />
      </Space>
    </ShowCase>
  </AnchorContent>
</template>
