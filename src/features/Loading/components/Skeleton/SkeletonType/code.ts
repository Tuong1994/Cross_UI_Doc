export const skeletonTypeCode = `
<script setup lang="ts">
import { Loading, Divider } from '@/components/UI'

const { Skeleton } = Loading
</script>

<template>
  <Divider>Title</Divider>
  <Skeleton type="title" />
  <Divider>Paragraph</Divider>
  <Skeleton type="paragraph" />
  <Divider>Image</Divider>
  <Skeleton type="image" :options="{ size: 100 }" />
  <Divider>Button</Divider>
  <Skeleton type="button" />
</template>
`