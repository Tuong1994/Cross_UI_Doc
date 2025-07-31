export const spaceBasicVueCode = `
<script setup lang="ts">
import { Space, Card } from '@/components/UI'
</script>

<template>
  <Space>
    <Card>
      <template #body> Lorem ipsum dolor sit amet. </template>
    </Card>
    <Card>
      <template #body> Lorem ipsum dolor sit amet. </template>
    </Card>
    <Card>
      <template #body> Lorem ipsum dolor sit amet consectetur adipisicing elit.</template>
    </Card>
  </Space>
</template>
`

export const spaceBasicReactCode = `
import { Space, Card } from "./components/UI";

const App: React.FC = () => {
  return (
    <Space>
      <Card>Lorem ipsum dolor sit amet.</Card>
      <Card>Lorem ipsum dolor sit amet.</Card>
      <Card>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Card>
    </Space>
  );
};

export default App;
`