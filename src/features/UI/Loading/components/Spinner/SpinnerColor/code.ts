export const spinnerColorVueCode = `
<script setup lang="ts">
import { computed } from 'vue'
import { Loading, Space } from '@/components/UI'
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
  <Space>
    <Spinner v-for="color in colors" :key="color" :color="color" :size="30" />
  </Space>
</template>
`

export const spinnerColorReactCode = `
import { ComponentColor } from "./common/type";
import { Space, Loading } from "./components/UI";

const { Spinner } = Loading;

const App: React.FC = () => {
  const colors: ComponentColor[] = ["blue", "green", "red", "orange", "yellow", "purple", "pink"];

  return (
    <Space aligns="middle">
      {colors.map((color) => (
        <Spinner key={color} color={color} size={30} />
      ))}
    </Space>
  );
};

export default App;
`