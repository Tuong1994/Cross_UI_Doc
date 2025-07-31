export const spaceSizeVueCode = `
<script setup lang="ts">
import { Space, Divider, Card } from '@/components/UI'
</script>

<template>
  <Divider>10</Divider>
  <Space :size="10">
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
  <Divider>20</Divider>
  <Space :size="20">
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
  <Divider>30</Divider>
  <Space :size="30">
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

export const spaceSizeReactCode = `
import { Space, Divider, Card } from "./components/UI";

const App: React.FC = () => {
  return (
    <>
      <Divider>10</Divider>
      <Space size={10}>
        <Card>Lorem ipsum dolor sit amet.</Card>
        <Card>Lorem ipsum dolor sit amet.</Card>
        <Card>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Card>
      </Space>
      <Divider>20</Divider>
      <Space size={20}>
        <Card>Lorem ipsum dolor sit amet.</Card>
        <Card>Lorem ipsum dolor sit amet.</Card>
        <Card>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Card>
      </Space>
      <Divider>30</Divider>
      <Space size={30}>
        <Card>Lorem ipsum dolor sit amet.</Card>
        <Card>Lorem ipsum dolor sit amet.</Card>
        <Card>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Card>
      </Space>
    </>
  );
};

export default App;
`