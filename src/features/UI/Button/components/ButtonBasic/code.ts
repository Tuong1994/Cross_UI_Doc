export const buttonBasicVueCode = `
<script setup lang="ts">
import { Button, Space } from '@/components/UI'
</script>

<template>
  <Space>
    <Button>Button</Button>
    <Button ghost>Button</Button>
  </Space>
</template>
`

export const buttonBasicReactCode = `
import { Button, Space } from "./components/UI";

const App: React.FC = () => {
  return (
    <Space>
      <Button>Button</Button>
      <Button ghost>Button</Button>
    </Space>
  );
};

export default App;
`
