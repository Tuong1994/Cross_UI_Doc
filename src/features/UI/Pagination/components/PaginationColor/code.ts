export const paginationColorVueCode = `
<script setup lang="ts">
import { Pagination } from '@/components/UI'
</script>

<template>
  <Pagination color="blue" :total="50" />
  <Divider />
  <Pagination color="green" :total="50" />
  <Divider />
  <Pagination color="red" :total="50" />
  <Divider />
  <Pagination color="orange" :total="50" />
  <Divider />
  <Pagination color="yellow" :total="50" />
  <Divider />
  <Pagination color="pink" :total="50" />
  <Divider />
  <Pagination color="purple" :total="50" />
</template>
`

export const paginationColorReactCode = `
import { Pagination, Divider } from "./components/UI";

const App: React.FC = () => {
  return (
    <>
      <Pagination color="blue" total={50} />
      <Divider />
      <Pagination color="green" total={50} />
      <Divider />
      <Pagination color="red" total={50} />
      <Divider />
      <Pagination color="orange" total={50} />
      <Divider />
      <Pagination color="yellow" total={50} />
      <Divider />
      <Pagination color="pink" total={50} />
      <Divider />
      <Pagination color="purple" total={50} />
    </>
  );
};

export default App;
`