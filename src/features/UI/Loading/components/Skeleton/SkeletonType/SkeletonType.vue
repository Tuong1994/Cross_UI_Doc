<script setup lang="ts">
import { Loading, Divider } from '@/components/UI'
import { loadingCatalogIds } from '@/features/UI/Loading/repository/catalogIds'
import { skeletonTypeCode } from './code'
import AnchorContent from '@/components/View/AnchorLink/AnchorContent.vue'
import ShowCase from '@/components/View/ShowCase/ShowCase.vue'

const { Skeleton } = Loading
</script>

<template>
  <AnchorContent :id="loadingCatalogIds.SKELETON_TYPE">
    <ShowCase title="Skeleton type" :code="skeletonTypeCode">
      <Divider>Title</Divider>
      <Skeleton type="title" />
      <Divider>Paragraph</Divider>
      <Skeleton type="paragraph" />
      <Divider>Image</Divider>
      <Skeleton type="image" :options="{ size: 100 }" />
      <Divider>Button</Divider>
      <Skeleton type="button" />
    </ShowCase>
  </AnchorContent>
</template>
