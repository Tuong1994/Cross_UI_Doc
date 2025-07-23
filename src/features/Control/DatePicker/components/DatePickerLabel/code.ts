export const datepickerLabelCode = `
<script setup lang="ts">
import { DatePicker } from '@/components/Control'
import { Space } from '@/components/UI'
</script>

<template>
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
</template>
`
