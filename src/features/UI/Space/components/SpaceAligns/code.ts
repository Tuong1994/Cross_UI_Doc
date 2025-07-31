export const spaceAlignsVueCode = `
<script setup lang="ts">
import { Space, Divider, Card } from '@/components/UI'
</script>

<template>
  <Divider>Top</Divider>
  <Space aligns="top">
    <Card>
      <template #body>
        <div>Lorem ipsum dolor sit amet.</div>
      </template>
    </Card>
    <Card>
      <template #body>
        <div>Lorem ipsum dolor sit amet.</div>
        <div>Lorem ipsum dolor sit amet.</div>
      </template>
    </Card>
    <Card>
      <template #body>
        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
      </template>
    </Card>
  </Space>
  <Divider>Middle</Divider>
  <Space aligns="middle">
    <Card>
      <template #body>
        <div>Lorem ipsum dolor sit amet.</div>
      </template>
    </Card>
    <Card>
      <template #body>
        <div>Lorem ipsum dolor sit amet.</div>
        <div>Lorem ipsum dolor sit amet.</div>
      </template>
    </Card>
    <Card>
      <template #body>
        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
      </template>
    </Card>
  </Space>
  <Divider>Bottom</Divider>
  <Space aligns="bottom">
    <Card>
      <template #body>
        <div>Lorem ipsum dolor sit amet.</div>
      </template>
    </Card>
    <Card>
      <template #body>
        <div>Lorem ipsum dolor sit amet.</div>
        <div>Lorem ipsum dolor sit amet.</div>
      </template>
    </Card>
    <Card>
      <template #body>
        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
      </template>
    </Card>
  </Space>
</template>
`

export const spaceAlignsReactCode = `
import { Space, Divider, Card } from "./components/UI";

const App: React.FC = () => {
  return (
    <>
      <Divider>Top</Divider>
      <Space aligns="top">
        <Card>
          <div>Lorem ipsum dolor sit amet.</div>
        </Card>
        <Card>
          <div>Lorem ipsum dolor sit amet.</div>
          <div>Lorem ipsum dolor sit amet.</div>
        </Card>
        <Card>
          <div>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
          <div>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
          <div>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
        </Card>
      </Space>
      <Divider>Middle</Divider>
      <Space aligns="middle">
        <Card>
          <div>Lorem ipsum dolor sit amet.</div>
        </Card>
        <Card>
          <div>Lorem ipsum dolor sit amet.</div>
          <div>Lorem ipsum dolor sit amet.</div>
        </Card>
        <Card>
          <div>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
          <div>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
          <div>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
        </Card>
      </Space>
      <Divider>Bottom</Divider>
      <Space aligns="bottom">
        <Card>
          <div>Lorem ipsum dolor sit amet.</div>
        </Card>
        <Card>
          <div>Lorem ipsum dolor sit amet.</div>
          <div>Lorem ipsum dolor sit amet.</div>
        </Card>
        <Card>
          <div>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
          <div>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
          <div>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
        </Card>
      </Space>
    </>
  );
};

export default App;
`
