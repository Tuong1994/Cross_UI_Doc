<script setup lang="ts">
import { DatePicker } from '@/components/Control'
import { Divider } from '@/components/UI'
import AnchorContent from '@/components/View/AnchorLink/AnchorContent.vue'
import useLangStore from '@/stores/LangStore'
import { datepickerCatalogIds } from '../../repository/catalogIds'
import ShowCase from '@/components/View/ShowCase/ShowCase.vue'
import { datepickerMinMaxCode } from './code'

const t = useLangStore()
</script>

<template>
  <AnchorContent :id="datepickerCatalogIds.MIN_MAX">
    <ShowCase title="Min/Max" :code="datepickerMinMaxCode">
      <Divider>
        {{ t.lang.datepicker.dateRange.min }}
      </Divider>
      <DatePicker rootClassName="section-space" color="green" min="today" :rootStyle="{ width: '250px' }" />
      <Divider>
        {{ t.lang.datepicker.dateRange.max }}
      </Divider>
      <DatePicker rootClassName="section-space" color="green" max="today" :rootStyle="{ width: '250px' }" />
      <Divider>
        {{ t.lang.datepicker.dateRange.minMax }}
      </Divider>
      <DatePicker color="green" min="2025-07-10" max="today" :rootStyle="{ width: '250px' }" />
    </ShowCase>
  </AnchorContent>
</template>
