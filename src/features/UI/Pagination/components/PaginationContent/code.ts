export const paginationContentVueCode = `
<script setup lang="ts">
  import { Pagination } from '@/components/UI'
</script>

<template>
  <Pagination hasContent :total="50" />
</template>
`

export const paginationContentReactCode = `
import { Pagination } from "./components/UI";

const App: React.FC = () => {
  return <Pagination showContent total={50} />;
};

export default App;
`