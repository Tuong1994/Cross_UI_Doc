export const radioColorVueCode = `
<script setup lang="ts">
import { Space } from '@/components/UI'
import { Radio } from '@/components/Control'
import type { ControlColor } from '@/components/Control/type'
import helper from '@/helper'
import utils from '@/utils'
</script>

<template>
  <Space>
    <Radio v-for="color in helper.getColorType('black', 'white')" :key="color" :color="color as ControlColor" checked>
      {{ utils.capitalizeFirstLetter(color) }}
    </Radio>
  </Space>
</template>
`

export const radioColorReactCode = `
import { Space } from "./components/UI";
import { Radio } from "@/components/Control";
import { ChoicesControlColor } from "./components/Control/type";

const App: React.FC = () => {
  const colors: ChoicesControlColor[] = ["blue", "green", "red", "orange", "yellow", "purple", "pink", 'black', 'white'];

  return (
    <Space>
      {colors.map(color => <Radio key={color} color={color} label={color} checked />)}
    </Space>
  );
};

export default App;
`