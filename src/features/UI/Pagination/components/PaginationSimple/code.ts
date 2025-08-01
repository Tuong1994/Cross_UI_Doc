export const paginationSimpleVueCode = `
<script setup lang="ts">
  import { Pagination } from '@/components/UI'
</script>

<template>
  <Pagination simple :color="layout.color" :total="50" />
  <Divider />
  <Pagination simple ghost :color="layout.color" :total="50" />
</template>
`

export const paginationSimpleReactCode = `
import { Pagination, Divider } from "./components/UI";

const App: React.FC = () => {
  return (
    <>
      <Pagination simple total={50} />
      <Divider />
      <Pagination simple ghost total={50} />
    </>
  );
};

export default App;
`