export const spinnerBasicVueCode = `
<script setup lang="ts">
import { Loading, Space } from '@/components/UI'

const { Spinner } = Loading
</script>

<template>
  <Space aligns="middle">
    <Spinner />
    <Spinner color="blue" />
    <Spinner color="green" :size="30" />
  </Space>
</template>
`

export const spinnerBasicReactCode = `
import { Space, Loading } from "./components/UI";

const { Spinner } = Loading;

const App: React.FC = () => {
  return (
    <Space aligns="middle">
      <Spinner />
      <Spinner color="blue" />
      <Spinner color="green" size={30} />
    </Space>
  );
};

export default App;
`