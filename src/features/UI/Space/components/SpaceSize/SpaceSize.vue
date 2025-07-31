<script setup lang="ts">
import { Space, Divider, Card } from '@/components/UI'
import { spaceSizeReactCode, spaceSizeVueCode } from './code'
import { spaceCatalogIds } from '@/features/UI/Space/repository/catalogIds'
import AnchorContent from '@/components/View/AnchorLink/AnchorContent.vue'
import ShowCase from '@/components/View/ShowCase/ShowCase.vue'
</script>

<template>
  <AnchorContent :id="spaceCatalogIds.SIZE">
    <ShowCase title="Size" code="" :vueCode="spaceSizeVueCode" :reactCode="spaceSizeReactCode">
      <Divider>10</Divider>
      <Space :size="10">
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
    </ShowCase>
  </AnchorContent>
</template>
