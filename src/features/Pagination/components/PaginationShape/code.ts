export const paginationShapeCode = `
<script setup lang="ts">
    import { Pagination } from '@/components/UI'
</script>

<template>
  <Pagination shape="round" :total="50" />
  <Pagination shape="square" :total="50" />
</template>
`
