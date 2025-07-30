export const buttonShapeVueCode = `
<script setup lang="ts">
import { Button, Space } from '@/components/UI'
</script>

<template>
  <Space>
    <Button shape="square">Button</Button>
    <Button shape="round">Button</Button>
  </Space>
</template>
`

export const buttonShapeReactCode = `
import { Button, Space } from "./components/UI";
import { ButtonShape } from "./components/UI/Button/type";

const App: React.FC = () => {
  const shapes: ButtonShape[] = ['square', 'round']

  const renderButton = () => {
    return shapes.map((shape) => (
      <Button key={shape} shape={shape}>
        Button
      </Button>
    ));
  };

  return <Space>{renderButton()}</Space>;
};

export default App;
`
