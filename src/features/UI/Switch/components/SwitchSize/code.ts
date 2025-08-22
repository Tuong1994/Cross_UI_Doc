export const switchSizeVueCode = `
<script setup lang="ts">
import { Switch, Space } from '@/components/UI'
import type { ComponentSize } from '@/common/type'
import helper from '@/helper'

const handleSwitch = (switched: boolean) => {
  console.log(switched)
}
</script>

<template>
  <Space aligns="middle">
    <Switch
      v-for="size in helper.getSizeType()"
      :key="size"
      :sizes="size as ComponentSize"
      @onSwitch="handleSwitch"
    />
  </Space>
</template>
`

export const switchSizeReactCode = `
import { Space, Switch } from "./components/UI";
import { ComponentSize } from "./common/type";

const App: React.FC = () => {
  const sizes: ComponentSize[] = ["sm", "md", "lg"];

  const handleSwitch = (switched: boolean) => {
    console.log(switched);
  };

  return (
    <Space>
      {sizes.map((size) => (
        <Switch key={size} sizes={size} onSwitch={handleSwitch} />
      ))}
    </Space>
  );
};

export default App;
`