export const radioSizeVueCode = `
<script setup lang="ts">
import { Space } from '@/components/UI'
import { Radio } from '@/components/Control'
import { useDisplayComponentSize } from '@/hooks'
import type { ComponentSize } from '@/common/type'
import helper from '@/helper'

const sizeContent = useDisplayComponentSize()
</script>

<template>
  <Space>
    <Radio v-for="size in helper.getSizeType()" :key="size" :sizes="size as ComponentSize" name="size" color="green">
      {{ sizeContent(size) }}
    </Radio>
  </Space>
</template>
`

export const radioSizeReactCode = `
import { Space } from "./components/UI";
import { Radio } from "@/components/Control";
import { ComponentSize } from "./common/type";

const App: React.FC = () => {
  const sizes: ComponentSize[] = ["sm", "md", "lg"];

  return (
    <Space>
      {sizes.map((size) => (
        <Radio key={size} sizes={size} label={size} />
      ))}
    </Space>
  );
};

export default App;
`