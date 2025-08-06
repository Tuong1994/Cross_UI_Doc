export const textareaShapeVueCode = `
<script setup lang="ts">
import { Space } from '@/components/UI'
import { TextArea } from '@/components/Control'
import type { ControlShape } from '@/components/Control/type'
import helper from '@/helper'
import utils from '@/utils'
</script>

<template>
  <Space>
    <TextArea v-for="shape in helper.getShapeType()" :key="shape" :shape="shape as ControlShape" color="green">
      <template #label>{{ utils.capitalizeFirstLetter(shape) }}</template>
    </TextArea>
  </Space>
</template>
`

export const textareaShapeReactCode = `
import { TextArea } from "@/components/Control";
import { Space } from "./components/UI";
import { ControlShape } from "./components/Control/type";

const App: React.FC = () => {
  const shapes: ControlShape[] = ["square", "round"];

  return (
    <Space>
      {shapes.map((shape) => (
        <TextArea key={shape} shape={shape} label={shape} />
      ))}
    </Space>
  );
};

export default App;
`