export const selectTagsVueCode = `
<script setup lang="ts">
import { computed } from 'vue'
import { Space } from '@/components/UI'
import { SelectTag } from '@/components/Control'
import { selectTagsCode } from './code'
import { selectCatalogIds } from '@/features/Control/Select/repository/catalogIds'
import type { ControlColor, SelectOptions } from '@/components/Control/type'
import helper from '@/helper'
import utils from '@/utils'

const options = computed<SelectOptions>(() => [
  { label: 'Item 1', value: 1 },
  { label: 'Item 2', value: 2 },
  { label: 'Item 3', value: 3 }
])

const handleSelect = (tags: (string | number | boolean)[]) => {
  console.log(tags)
}
</script>

<template>
  <Space>
    <SelectTag
      v-for="color in helper.getColorType()"
      :key="color"
      :color="color as ControlColor"
      :options="options"
      @onChangeSelect="handleSelect"
    >
      <template #label>{{ utils.capitalizeFirstLetter(color) }}</template>
    </SelectTag>
  </Space>
</template>
`

export const selectTagsReactCode = `
import { SelectTag } from "@/components/Control";
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
        <SelectTag key={color} color={color} options={options} label={color} />
      ))}
    </Space>
  );
};

export default App;
`