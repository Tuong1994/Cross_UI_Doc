<script setup lang="ts">
import { Pagination } from '@/components/UI'
import { paginationCatalogIds } from '@/features/UI/Pagination/repository/catalogIds'
import { paginationContentReactCode, paginationContentVueCode } from './code'
import AnchorContent from '@/components/View/AnchorLink/AnchorContent.vue'
import ShowCase from '@/components/View/ShowCase/ShowCase.vue'
import useLayoutStore from '@/components/UI/Layout/LayoutStore'

const layout = useLayoutStore()
</script>

<template>
  <AnchorContent :id="paginationCatalogIds.CONTENT">
    <ShowCase title="Content" code="" :vueCode="paginationContentVueCode" :reactCode="paginationContentReactCode">
      <Pagination hasContent :color="layout.color" :total="50" />
    </ShowCase>
  </AnchorContent>
</template>
