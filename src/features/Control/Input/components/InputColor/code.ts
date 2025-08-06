export const inputColorVueCode = `
<script setup lang="ts">
import { Space } from '@/components/UI'
import { Input } from '@/components/Control'
import type { ControlColor } from '@/components/Control/type'
import helper from '@/helper'
import utils from '@/utils'
</script>

<template>
  <Space>
    <Input v-for="color in helper.getColorType()" :key="color" :color="color as ControlColor">
      <template #label>{{ utils.capitalizeFirstLetter(color) }}</template>
    </Input>
  </Space>
</template>
`

export const inputColorReactCode = `
import { Input } from "@/components/Control";
import { Space } from "@/components/UI";
import { ControlColor } from "./components/Control/type";

const App: React.FC = () => {
  const colors: ControlColor[] = ["blue", "green", "red", "orange", "yellow", "purple", "pink"];

  return (
    <Space>
      {colors.map((color) => (
        <Input key={color} color={color} label={color} />
      ))}
    </Space>
  );
};

export default App;
`
