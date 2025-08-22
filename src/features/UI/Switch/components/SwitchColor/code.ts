export const switchColorVueCode = `
<script setup lang="ts">
import { Space, Switch } from '@/components/UI'
import type { SwitchColor } from '@/components/UI/Switch/type'
import helper from '@/helper'

const handleSwitch = (switched: boolean) => {
  console.log(switched)
}
</script>

<template>
  <Space>
    <Switch
      v-for="color in helper.getColorType()"
      :key="color"
      :color="color as SwitchColor"
      switched
      @onSwitch="handleSwitch"
    />
  </Space>
</template>
`

export const switchColorReactCode = `
import { Space, Switch } from "./components/UI";
import { SwitchColor } from "./components/UI/Switch/type";

const App: React.FC = () => {
  const colors: SwitchColor[] = ["blue", "green", "red", "orange", "yellow", "purple", "pink"];

  const handleSwitch = (switched: boolean) => {
    console.log(switched);
  };

  return (
    <Space>
      {colors.map((color) => (
        <Switch key={color} color={color} switched onSwitch={handleSwitch} />
      ))}
    </Space>
  );
};

export default App;
`
