export const datepickerLabelVueCode = `
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

export const datepickerLabelReactCode = `
import { Space } from "./components/UI";
import { DatePicker } from "@/components/Control";

const App: React.FC = () => {
  return (
    <Space>
      <DatePicker rootStyle={{ width: "250px" }} label="DatePicker" />
      <DatePicker optional rootStyle={{ width: "250px" }} label="DatePicker optional" />
      <DatePicker required rootStyle={{ width: "250px" }} label="DatePicker required" />
    </Space>
  );
};

export default App;
`