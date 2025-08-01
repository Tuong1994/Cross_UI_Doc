export const paginationBasicVueCode = `
<script setup lang="ts">
  import { Pagination } from '@/components/UI'
</script>

<template>
  <Pagination :total="50" />
</template>
`

export const paginationBasicReactCode = `
import { Pagination } from "./components/UI";

const App: React.FC = () => {
  return <Pagination total={50} />;
};

export default App;
`
