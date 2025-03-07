<script setup lang="ts">
import { Pagination } from '@/components/UI'
import { paginationBasicCode } from './code'
import { paginationCatalogIds } from '../../repository/catalogIds'
import AnchorContent from '@/components/View/AnchorLink/AnchorContent.vue'
import ShowCase from '@/components/View/ShowCase/ShowCase.vue'
import useLayoutStore from '@/components/UI/Layout/LayoutStore'

const layout = useLayoutStore()
</script>

<template>
  <AnchorContent :id="paginationCatalogIds.BASIC">
    <ShowCase title="Basic" :code="paginationBasicCode">
      <Pagination :color="layout.color" :total="50" />
    </ShowCase>
  </AnchorContent>
</template>
