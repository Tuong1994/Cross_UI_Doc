export const datepickerMinMaxVueCode = `
<script setup lang="ts">
import { DatePicker } from '@/components/Control'
import { Divider } from '@/components/UI'
import useLangStore from '@/stores/LangStore'

const t = useLangStore()
</script>

<template>
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
</template>
`

export const datepickerMinMaxReactCode = `
import { Divider } from "./components/UI";
import { DatePicker } from "@/components/Control";

const App: React.FC = () => {
  return (
    <>
      <Divider>Specifies the minimum selectable dates</Divider>
      <DatePicker rootClassName="section-space" color="green" min="today" rootStyle={{ width: "250px" }} />
      <Divider>Specifies the maximum selectable dates</Divider>
      <DatePicker rootClassName="section-space" color="green" max="today" rootStyle={{ width: "250px" }} />
      <Divider>Specifies the minimum and maximum selectable dates</Divider>
      <DatePicker color="green" min="2025-07-10" max="today" rootStyle={{ width: "250px" }} />
    </>
  );
};

export default App;
`
