export const selectBasicVueCode = `
<script setup lang="ts">
import { computed } from 'vue'
import { Select } from '@/components/Control'
import { Space } from '@/components/UI'
import type { SelectOptions } from '@/components/Control/type'

const options = computed<SelectOptions>(() => [
  { label: 'Item 1', value: 1 },
  { label: 'Item 2', value: 2 },
  { label: 'Item 3', value: 3 }
])

const handleSelect = (selectedValue: string | number | boolean) => {
  console.log(selectedValue)
}
</script>

<template>
  <Space>
    <Select color="green" :options="options" @onChangeSelect="handleSelect" />
    <Select color="green" :options="options" loading />
    <Select color="green" :options="options" disabled />
  </Space>
</template>
`

export const selectBasicReactCode = `
import { Select } from "@/components/Control";
import { Space } from "./components/UI";
import { SelectOptions } from "./components/Control/type";

const App: React.FC = () => {
  const options: SelectOptions = [
    { label: "Item 1", value: 1 },
    { label: "Item 2", value: 2 },
    { label: "Item 3", value: 3 },
  ];

  const handleSelect = (selectedValue: string | number | boolean) => {
    console.log(selectedValue);
  };

  return (
    <Space>
      <Select options={options} onChangeSelect={handleSelect} />
      <Select options={options} loading />
      <Select options={options} disabled />
    </Space>
  );
};

export default App;
`