export const spinnerSizeVueCode = `
<script setup lang="ts">
import { Loading, Space } from '@/components/UI'

const { Spinner } = Loading
</script>

<template>
  <Space aligns="middle">
    <Spinner />
    <Spinner :size="30" />
    <Spinner :size="45" />
  </Space>
</template>
`

export const spinnerSizeReactCode = `
import { Space, Loading } from "./components/UI";

const { Spinner } = Loading;

const App: React.FC = () => {
  return (
    <Space aligns="middle">
      <Spinner />
      <Spinner size={30} />
      <Spinner size={45} />
    </Space>
  );
};

export default App;
`