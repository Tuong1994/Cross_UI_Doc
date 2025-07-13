export const spaceAlignsCode = `
<script setup lang="ts">
import { Space, Divider, Card } from '@/components/UI'
</script>

<template>
  <Divider>Top</Divider>
  <Space aligns="top">
    <Card>
      <template #body>
        <div>Lorem ipsum dolor sit amet.</div>
      </template>
    </Card>
    <Card>
      <template #body>
        <div>Lorem ipsum dolor sit amet.</div>
        <div>Lorem ipsum dolor sit amet.</div>
      </template>
    </Card>
    <Card>
      <template #body>
        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
      </template>
    </Card>
  </Space>
  <Divider>Middle</Divider>
  <Space aligns="middle">
    <Card>
      <template #body>
        <div>Lorem ipsum dolor sit amet.</div>
      </template>
    </Card>
    <Card>
      <template #body>
        <div>Lorem ipsum dolor sit amet.</div>
        <div>Lorem ipsum dolor sit amet.</div>
      </template>
    </Card>
    <Card>
      <template #body>
        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
      </template>
    </Card>
  </Space>
  <Divider>Bottom</Divider>
  <Space aligns="bottom">
    <Card>
      <template #body>
        <div>Lorem ipsum dolor sit amet.</div>
      </template>
    </Card>
    <Card>
      <template #body>
        <div>Lorem ipsum dolor sit amet.</div>
        <div>Lorem ipsum dolor sit amet.</div>
      </template>
    </Card>
    <Card>
      <template #body>
        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
      </template>
    </Card>
  </Space>
</template>
`
