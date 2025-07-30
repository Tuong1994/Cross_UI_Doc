export const buttonSizeVueCode = `
<script setup lang="ts">
import { Button } from '@/components/UI'
</script>

<template>
  <Button sizes="sm">Button</Button>
  <Button sizes="md">Button</Button>
  <Button sizes="lg">Button</Button>
</template>
`
export const buttonSizeReactCode = `
import { Button, Space } from "./components/UI";
import { ButtonSize } from "./components/UI/Button/type";

const App: React.FC = () => {
  const sizes: ButtonSize[] = ['sm', 'md', 'lg']

  const renderButton = () => {
    return sizes.map((size) => (
      <Button key={size} sizes={size}>
        Button
      </Button>
    ));
  };

  return <Space>{renderButton()}</Space>;
};

export default App;
`
