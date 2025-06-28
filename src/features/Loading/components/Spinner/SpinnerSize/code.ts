export const spinnerSizeCode = `
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