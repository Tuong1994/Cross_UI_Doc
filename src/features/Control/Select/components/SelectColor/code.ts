export const selectColorVueCode = `
<script setup lang="ts">
import { computed } from 'vue'
import { Space } from '@/components/UI'
import { Select } from '@/components/Control'
import type { ControlColor, SelectOptions } from '@/components/Control/type'
import utils from '@/utils'

const colors = computed<ControlColor[]>(() => ['blue', 'green', 'red', 'orange', 'yellow', 'purple', 'pink'])

const options = computed<SelectOptions>(() => [
  { label: 'Item 1', value: 1 },
  { label: 'Item 2', value: 2 },
  { label: 'Item 3', value: 3 }
])
</script>

<template>
  <Space>
    <Select v-for="color in colors" :key="color" :color="color" :options="options">
      <template #label>{{ utils.capitalizeFirstLetter(color) }}</template>
    </Select>
  </Space>
</template>
`

export const selectColorReactCode = `
import { Select } from "@/components/Control";
import { Space } from "./components/UI";
import { ControlColor, SelectOptions } from "./components/Control/type";

const App: React.FC = () => {
  const colors: ControlColor[] = ["blue", "green", "red", "orange", "yellow", "purple", "pink"];

  const options: SelectOptions = [
    { label: "Item 1", value: 1 },
    { label: "Item 2", value: 2 },
    { label: "Item 3", value: 3 },
  ];

  return (
    <Space>
      {colors.map((color) => (
        <Select key={color} color={color} options={options} label={color} />
      ))}
    </Space>
  );
};

export default App;
`