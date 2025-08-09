export const checkboxColorVueCode = `
<script setup lang="ts">
import { Space } from '@/components/UI'
import { CheckBox } from '@/components/Control'
import type { ControlColor } from '@/components/Control/type'
import helper from '@/helper'
import utils from '@/utils'
</script>

<template>
  <Space>
    <CheckBox v-for="color in helper.getColorType('black', 'white')" :key="color" :color="color as ControlColor" checked>
      {{ utils.capitalizeFirstLetter(color) }}
    </CheckBox>
  </Space>
</template>
`

export const checkboxColorReactCode = `
import { ChoicesControlColor } from "./components/Control/type";
import { Space } from "./components/UI";
import { CheckBox } from "@/components/Control";

const App: React.FC = () => {
  const colors: ChoicesControlColor[] = [
    "blue",
    "green",
    "red",
    "orange",
    "yellow",
    "purple",
    "pink",
    "black",
    "white",
  ];

  return (
    <Space>
      {colors.map((color) => (
        <CheckBox key={color} color={color} checked label={color} />
      ))}
    </Space>
  );
};

export default App;
`