export const textareaColorVueCode = `
<script setup lang="ts">
import { Space } from '@/components/UI'
import { TextArea } from '@/components/Control'
import type { ControlColor } from '@/components/Control/type'
import helper from '@/helper'
import utils from '@/utils'
</script>

<template>
  <Space>
    <TextArea v-for="color in helper.getColorType()" :key="color" :color="color as ControlColor">
      <template #label>{{ utils.capitalizeFirstLetter(color) }}</template>
    </TextArea>
  </Space>
</template>
`

export const textareaColorReactCode = `
import { TextArea } from "@/components/Control";
import { Space } from "./components/UI";
import { ControlColor } from "./components/Control/type";

const App: React.FC = () => {
  const colors: ControlColor[] = ["blue", "green", "red", "orange", "yellow", "purple", "pink"];

  return (
    <Space>
      {colors.map((color) => (
        <TextArea key={color} color={color} label={color} />
      ))}
    </Space>
  );
};

export default App;
`