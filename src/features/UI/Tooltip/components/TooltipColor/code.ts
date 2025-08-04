export const tooltipColorVueCode = `
<script setup lang="ts">
import { Tooltip, Space, Button } from '@/components/UI'
import type { TooltipColor } from '@/components/UI/Tooltip/type'

const colors: TooltipColor[] = ['blue', 'red', 'green', 'orange', 'yellow', 'purple', 'pink', 'black']
</script>

<template>
  <Space>
    <Tooltip v-for="color in colors" :key="color" :color="color">
      <template #title>
        <Button :color="color">Hover me</Button>
      </template>
      <template #content>Tooltip Popup</template>
    </Tooltip>
  </Space>
</template>
`

export const tooltipColorReactCode = `
import { Button, Space, Tooltip } from "./components/UI";
import { ButtonColor } from "./components/UI/Button/type";
import { TooltipColor } from "./components/UI/Tooltip/type";

const App: React.FC = () => {
  const colors: ButtonColor[] | TooltipColor[] = [
    "blue",
    "green",
    "red",
    "orange",
    "yellow",
    "purple",
    "pink",
    "black",
  ];

  const renderContent = () => {
    return (
      <Space>
        {colors.map((color) => (
          <Tooltip key={color} color={color} content="Tooltip popup">
            <Button color={color}>Hover me</Button>
          </Tooltip>
        ))}
      </Space>
    );
  };

  return renderContent();
};

export default App;
`
