export const inputShapeVueCode = `
<script setup lang="ts">
import { Space } from '@/components/UI'
import { Input } from '@/components/Control'
import type { ControlShape } from '@/components/Control/type'
import helper from '@/helper'
import utils from '@/utils'
</script>

<template>
  <Space>
    <Input v-for="shape in helper.getShapeType()" :key="shape" :shape="shape as ControlShape" color="green">
      <template #label>{{ utils.capitalizeFirstLetter(shape) }}</template>
    </Input>
  </Space>
</template>
`

export const inputShapeReactCode = `
import { Input } from "@/components/Control";
import { Space } from "@/components/UI";
import { ControlShape } from "./components/Control/type";

const App: React.FC = () => {
  const shapes: ControlShape[] = ["square", "round"];

  return (
    <Space>
      {shapes.map((shape) => (
        <Input key={shape} shape={shape} label={shape} />
      ))}
    </Space>
  );
};

export default App;
`
