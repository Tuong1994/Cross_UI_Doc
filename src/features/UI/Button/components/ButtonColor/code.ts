export const buttonColorVueCode = `
<script setup lang="ts">
import { Button, Space } from '@/components/UI'
import type { ButtonColor } from '@/components/UI/Button/type'
</script>

<template>
  <Space>
    <Button v-for="color in helper.getColorType()" :key="color" :color="color as ButtonColor">Button</Button>
  </Space>
</template>
`
export const buttonColorReactCode = `
import { Button, Space } from "./components/UI";
import { ButtonColor } from "./components/UI/Button/type";

const App: React.FC = () => {
  const colors: ButtonColor[] = ["blue", "green", "red", "orange", "yellow", "purple", "pink", "black"];

  const renderButton = () => {
    return colors.map((color) => (
      <Button key={color} color={color}>
        Button
      </Button>
    ));
  };

  return <Space>{renderButton()}</Space>;
};

export default App;
`