export const paginationGhostVueCode = `
<script setup lang="ts">
  import { Pagination } from '@/components/UI'
</script>

<template>
  <Pagination ghost color="blue" :total="50" />
  <Divider />
  <Pagination ghost color="green" :total="50" />
  <Divider />
  <Pagination ghost color="red" :total="50" />
  <Divider />
  <Pagination ghost color="orange" :total="50" />
  <Divider />
  <Pagination ghost color="yellow" :total="50" />
  <Divider />
  <Pagination ghost color="pink" :total="50" />
  <Divider />
  <Pagination ghost color="purple" :total="50" />
</template>
`

export const paginationGhostReactCode = `

import { Pagination, Divider } from "./components/UI";

const App: React.FC = () => {
  return (
    <>
      <Pagination ghost color="blue" total={50} />
      <Divider />
      <Pagination ghost color="green" total={50} />
      <Divider />
      <Pagination ghost color="red" total={50} />
      <Divider />
      <Pagination ghost color="orange" total={50} />
      <Divider />
      <Pagination ghost color="yellow" total={50} />
      <Divider />
      <Pagination ghost color="pink" total={50} />
      <Divider />
      <Pagination ghost color="purple" total={50} />
    </>
  );
};

export default App;
`