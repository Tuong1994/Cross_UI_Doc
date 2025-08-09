export const datepickerBasicVueCode = `
<script setup lang="ts">
import { DatePicker } from '@/components/Control'

const handleSelect = (date: Date) => {
  console.log(date)
}
</script>

<template>
  <Space>
    <DatePicker :rootStyle="{ width: '250px' }" color="green" @onChangeSelect="handleSelect" />
    <DatePicker :rootStyle="{ width: '250px' }" color="green" disabled />
  </Space>
</template>
`

export const datepickerBasicReactCode = `
import { useState } from "react";
import { Space } from "./components/UI";
import { DatePicker } from "@/components/Control";

const App: React.FC = () => {
  const [date, setDate] = useState<Date>(new Date());

  const handleSelect = (dateValue: Date) => setDate(dateValue);

  return (
    <Space>
      <DatePicker rootStyle={{ width: "250px" }} value={date} onChangeSelect={handleSelect} />
      <DatePicker rootStyle={{ width: "250px" }} disabled />
    </Space>
  );
};

export default App;
`