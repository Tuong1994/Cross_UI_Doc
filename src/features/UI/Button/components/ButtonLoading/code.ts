export const buttonLoadingVueCode = `
<script setup lang="ts">
import { Button } from '@/components/UI'
import type { ButtonColor } from '@/components/UI/Button/type'
import helper from '@/helper'
</script>

<template>
  <Space>
    <Button v-for="color in helper.getColorType()" :key="color" loading :color="color as ButtonColor">
      Button
    </Button>
  </Space>
</template>
`

export const buttonLoadingReactCode = `
import { Button, Space } from "./components/UI";
import { ButtonColor } from "./components/UI/Button/type";

const App: React.FC = () => {
  const colors: ButtonColor[] = ["blue", "green", "red", "orange", "yellow", "purple", "pink"];

  const renderButton = () => {
    return colors.map((color) => (
      <Button key={color} color={color} loading>
        Button
      </Button>
    ));
  };

  return <Space>{renderButton()}</Space>;
};

export default App;
`
