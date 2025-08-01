export const paginationShapeVueCode = `
<script setup lang="ts">
    import { Pagination, Divider } from '@/components/UI'
</script>

<template>
  <Pagination shape="round" :total="50" />
  <Divider />
  <Pagination shape="square" :total="50" />
</template>
`

export const paginationShapeReactCode = `
import { Pagination, Divider } from "./components/UI";

const App: React.FC = () => {
  return (
    <>
      <Pagination shape="round" total={50} />
      <Divider />
      <Pagination shape="square" total={50} />
    </>
  );
};

export default App;
`