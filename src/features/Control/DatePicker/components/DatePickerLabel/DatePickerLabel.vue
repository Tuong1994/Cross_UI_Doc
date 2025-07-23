<script setup lang="ts">
import { DatePicker } from '@/components/Control'
import { Space } from '@/components/UI'
import { datepickerLabelCode } from './code'
import { datepickerCatalogIds } from '@/features/Control/DatePicker/repository/catalogIds'
import AnchorContent from '@/components/View/AnchorLink/AnchorContent.vue'
import ShowCase from '@/components/View/ShowCase/ShowCase.vue'
</script>

<template>
  <AnchorContent :id="datepickerCatalogIds.LABEL">
    <ShowCase title="Label" :code="datepickerLabelCode">
      <Space>
        <DatePicker :rootStyle="{ width: '250px' }">
          <template #label>DatePicker</template>
        </DatePicker>
        <DatePicker optional :rootStyle="{ width: '250px' }">
          <template #label>DatePicker optional</template>
        </DatePicker>
        <DatePicker required :rootStyle="{ width: '250px' }">
          <template #label>DatePicker required</template>
        </DatePicker>
      </Space>
    </ShowCase>
  </AnchorContent>
</template>
