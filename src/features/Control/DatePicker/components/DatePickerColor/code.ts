export const datepickerColorVueCode = `
<script setup lang="ts">
import { DatePicker } from '@/components/Control'
import { Space } from '@/components/UI'
import type { ControlColor } from '@/components/Control/type'
import helper from '@/helper'
import utils from '@/utils'
</script>

<template>
  <Space>
    <DatePicker
      v-for="color in helper.getColorType()"
      :key="color"
      :color="color as ControlColor"
      :rootStyle="{ width: '150px' }"
    >
      <template #label>
        {{ utils.capitalizeFirstLetter(color) }}
      </template>
    </DatePicker>
  </Space>
</template>
`

export const datepickerColorReactCode = `
import { Space } from "./components/UI";
import { DatePicker } from "@/components/Control";
import { ControlColor } from "./components/Control/type";

const App: React.FC = () => {
  const colors: ControlColor[] = ["blue", "green", "red", "orange", "yellow", "purple", "pink"];

  return (
    <Space>
      {colors.map((color) => (
        <DatePicker key={color} color={color} rootStyle={{ width: "250px" }} label={color} />
      ))}
    </Space>
  );
};

export default App;
`