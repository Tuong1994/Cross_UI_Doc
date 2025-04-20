export const spaceSizeCode = `
<script setup lang="ts">
import { Space, Divider, Card } from '@/components/UI'
</script>

<template>
  <Divider>10</Divider>
  <Space>
    <Card>
      <template #body> Lorem ipsum dolor sit amet. </template>
    </Card>
    <Card>
      <template #body> Lorem ipsum dolor sit amet. </template>
    </Card>
    <Card>
      <template #body> Lorem ipsum dolor sit amet consectetur adipisicing elit.</template>
    </Card>
  </Space>
  <Divider>20</Divider>
  <Space :size="20">
    <Card>
      <template #body> Lorem ipsum dolor sit amet. </template>
    </Card>
    <Card>
      <template #body> Lorem ipsum dolor sit amet. </template>
    </Card>
    <Card>
      <template #body> Lorem ipsum dolor sit amet consectetur adipisicing elit.</template>
    </Card>
  </Space>
  <Divider>30</Divider>
  <Space :size="30">
    <Card>
      <template #body> Lorem ipsum dolor sit amet. </template>
    </Card>
    <Card>
      <template #body> Lorem ipsum dolor sit amet. </template>
    </Card>
    <Card>
      <template #body> Lorem ipsum dolor sit amet consectetur adipisicing elit.</template>
    </Card>
  </Space>
</template>
`