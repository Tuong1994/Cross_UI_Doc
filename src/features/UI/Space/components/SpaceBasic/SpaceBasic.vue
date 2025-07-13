<script setup lang="ts">
import { Space, Card } from '@/components/UI'
import { spaceBasicCode } from './code'
import { spaceCatalogIds } from '@/features/UI/Space/repository/catalogIds'
import AnchorContent from '@/components/View/AnchorLink/AnchorContent.vue'
import ShowCase from '@/components/View/ShowCase/ShowCase.vue'
</script>

<template>
  <AnchorContent :id="spaceCatalogIds.BASIC">
    <ShowCase title="Basic" :code="spaceBasicCode">
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
    </ShowCase>
  </AnchorContent>
</template>
