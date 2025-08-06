export const inputSizeVueCode = `
<script setup lang="ts">
import { Space } from '@/components/UI'
import { Input } from '@/components/Control'
import { useDisplayComponentSize } from '@/hooks'
import type { ComponentSize } from '@/common/type'
import helper from '@/helper'
import utils from '@/utils'

const sizeContent = useDisplayComponentSize()
</script>

<template>
  <Space>
    <Input v-for="size in helper.getSizeType()" :key="size" :sizes="size as ComponentSize" color="green">
      <template #label>{{ sizeContent(size) }}</template>
    </Input>
  </Space>
</template>
`

export const inputSizeReactCode = `
import { Input } from "@/components/Control";
import { Space } from "@/components/UI";
import { ComponentSize } from "./common/type";

const App: React.FC = () => {
  const sizes: ComponentSize[] = ["sm", "md", "lg"];

  return (
    <Space>
      {sizes.map((size) => (
        <Input key={size} sizes={size} label={size} />
      ))}
    </Space>
  );
};

export default App;
`
