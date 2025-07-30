export const buttonGhostVueCode = `
<script setup lang="ts">
import { Button, Space } from '@/components/UI'
import type { ButtonColor } from '@/components/UI/Button/type'
import helper from '@/helper'
</script>

<template>
  <Space rootClassName="section-space">
    <Button
      v-for="color in helper.getColorType()"
      :key="color"
      :color="color as ButtonColor"
      shape="square"
      ghost
    >
      Button
    </Button>
  </Space>
  <Space>
    <Button
      v-for="color in helper.getColorType()"
      :key="color"
      :color="color as ButtonColor"
      shape="round"
      ghost
    >
      Button
    </Button>
  </Space>
</template>
`

export const buttonGhostReactCode = `
import { Button, Divider, Space } from "./components/UI";
import { ButtonColor } from "./components/UI/Button/type";

const App: React.FC = () => {
  const colors: ButtonColor[] = ["blue", "green", "red", "orange", "yellow", "purple", "pink"];

  const renderSquareButton = () => {
    return colors.map((color) => (
      <Button key={color} color={color} shape="square" ghost>
        Button
      </Button>
    ));
  };

  const renderRoundButton = () => {
    return colors.map((color) => (
      <Button key={color} color={color} shape="round" ghost>
        Button
      </Button>
    ));
  };

  return (
    <>
      <Space>{renderSquareButton()}</Space>
      <Divider />
      <Space>{renderRoundButton()}</Space>
    </>
  );
};

export default App;
`