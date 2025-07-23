export const datepickerBasicCode = `
<script setup lang="ts">
import { DatePicker } from '@/components/Control'

const handleSelect = (date: Date) => {
  console.log(date)
}
</script>

<template>
  <DatePicker color="green" rootClassName="section-space" @onChangeSelect="handleSelect" />
  <DatePicker color="green" disabled />
</template>
`
