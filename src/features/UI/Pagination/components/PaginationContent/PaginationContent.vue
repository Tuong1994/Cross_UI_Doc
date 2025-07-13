<script setup lang="ts">
import { Pagination } from '@/components/UI'
import { paginationCatalogIds } from '../../repository/catalogIds'
import { paginationContentCode } from './code'
import AnchorContent from '@/components/View/AnchorLink/AnchorContent.vue'
import ShowCase from '@/components/View/ShowCase/ShowCase.vue'
import useLayoutStore from '@/components/UI/Layout/LayoutStore'

const layout = useLayoutStore()
</script>

<template>
  <AnchorContent :id="paginationCatalogIds.CONTENT">
    <ShowCase title="Content" :code="paginationContentCode">
      <Pagination hasContent :color="layout.color" :total="50" />
    </ShowCase>
  </AnchorContent>
</template>
