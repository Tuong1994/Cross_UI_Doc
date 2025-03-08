<script setup lang="ts">
import { Divider, Pagination } from '@/components/UI'
import { paginationSimpleCode } from './code'
import { paginationCatalogIds } from '../../repository/catalogIds'
import AnchorContent from '@/components/View/AnchorLink/AnchorContent.vue'
import ShowCase from '@/components/View/ShowCase/ShowCase.vue'
import useLayoutStore from '@/components/UI/Layout/LayoutStore'

const layout = useLayoutStore()
</script>

<template>
  <AnchorContent :id="paginationCatalogIds.SIMPLE">
    <ShowCase title="Simple" :code="paginationSimpleCode">
      <Pagination simple :color="layout.color" :total="50" />
      <Divider />
      <Pagination simple ghost :color="layout.color" :total="50" />
    </ShowCase>
  </AnchorContent>
</template>
