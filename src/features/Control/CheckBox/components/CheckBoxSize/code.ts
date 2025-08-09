export const checkboxSizeVueCode = `
<script setup lang="ts">
import { Space } from '@/components/UI'
import { CheckBox } from '@/components/Control'
import { useDisplayComponentSize } from '@/hooks'
import type { ComponentSize } from '@/common/type'
import helper from '@/helper'

const sizeContent = useDisplayComponentSize()
</script>

<template>
  <Space>
    <CheckBox v-for="size in helper.getSizeType()" :key="size" :sizes="size as ComponentSize" color="green">
      {{ sizeContent(size) }}
    </CheckBox>
  </Space>
</template>
`

export const checkboxSizeReactCode = `
import { ComponentSize } from "./common/type";
import { Space } from "./components/UI";
import { CheckBox } from "@/components/Control";

const App: React.FC = () => {
  const sizes: ComponentSize[] = ["sm", "md", "lg"];

  return (
    <Space>
      {sizes.map((size) => (
        <CheckBox key={size} sizes={size} label={size} />
      ))}
    </Space>
  );
};

export default App;
`