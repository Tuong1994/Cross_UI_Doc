export const spaceJustifyVueCode = `
<script setup lang="ts">
import { Space, Divider, Card } from '@/components/UI'
</script>

<template>
  <Divider>Left</Divider>
  <Space justify="left">
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
  <Divider>Center</Divider>
  <Space justify="center">
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
  <Divider>Right</Divider>
  <Space justify="right">
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

export const spaceJustifyReactCode = `
import { Space, Divider, Card } from "./components/UI";

const App: React.FC = () => {
  return (
    <>
      <Divider>Left</Divider>
      <Space justify="start">
        <Card>Lorem ipsum dolor sit amet.</Card>
        <Card>Lorem ipsum dolor sit amet.</Card>
        <Card>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Card>
      </Space>
      <Divider>Center</Divider>
      <Space justify="center">
        <Card>Lorem ipsum dolor sit amet.</Card>
        <Card>Lorem ipsum dolor sit amet.</Card>
        <Card>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Card>
      </Space>
      <Divider>Right</Divider>
      <Space justify="end">
        <Card>Lorem ipsum dolor sit amet.</Card>
        <Card>Lorem ipsum dolor sit amet.</Card>
        <Card>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Card>
      </Space>
    </>
  );
};

export default App;
`