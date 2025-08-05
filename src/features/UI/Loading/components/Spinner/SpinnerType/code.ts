export const spinnerTypeVueCode = `
<script setup lang="ts">
import { computed } from 'vue'
import { Loading, Divider, Space } from '@/components/UI'
import type { ComponentColor } from '@/common/type'

const { Spinner } = Loading

const colors = computed<ComponentColor[]>(() => [
  'blue',
  'green',
  'red',
  'orange',
  'yellow',
  'purple',
  'pink',
  'gray'
])
</script>

<template>
  <Divider>Default</Divider>
  <Space>
    <Spinner v-for="color in colors" :key="color" :color="color" type="default" :size="40" />
  </Space>
  <Divider>Bubble</Divider>
  <Space>
    <Spinner v-for="color in colors" :key="color" :color="color" type="bubble" />
  </Space>
</template>
`

export const spinnerTypeReactCode = `
import { ComponentColor } from "./common/type";
import { Space, Divider, Loading } from "./components/UI";

const { Spinner } = Loading;

const App: React.FC = () => {
  const colors: ComponentColor[] = ["blue", "green", "red", "orange", "yellow", "purple", "pink", 'gray'];

  return (
    <>
      <Divider>Default</Divider>
      <Space aligns="middle">
        {colors.map((color) => (
          <Spinner key={color} color={color} size={40} />
        ))}
      </Space>
      <Divider>Bubble</Divider>
      <Space aligns="middle">
        {colors.map((color) => (
          <Spinner key={color} color={color} type="bubble" />
        ))}
      </Space>
    </>
  );
};

export default App;
`
