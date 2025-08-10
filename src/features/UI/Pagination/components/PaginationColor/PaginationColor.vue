<script setup lang="ts">
import { Divider, Pagination } from '@/components/UI'
import { paginationCatalogIds } from '@/features/UI/Pagination/repository/catalogIds'
import { paginationColorReactCode, paginationColorVueCode } from './code'
import AnchorContent from '@/components/View/AnchorLink/AnchorContent.vue'
import ShowCase from '@/components/View/ShowCase/ShowCase.vue'
</script>

<template>
  <AnchorContent :id="paginationCatalogIds.COLOR">
    <ShowCase title="Color" :vueCode="paginationColorVueCode" :reactCode="paginationColorReactCode">
      <Pagination color="blue" :total="50" />
      <Divider />
      <Pagination color="green" :total="50" />
      <Divider />
      <Pagination color="red" :total="50" />
      <Divider />
      <Pagination color="orange" :total="50" />
      <Divider />
      <Pagination color="yellow" :total="50" />
      <Divider />
      <Pagination color="pink" :total="50" />
      <Divider />
      <Pagination color="purple" :total="50" />
    </ShowCase>
  </AnchorContent>
</template>


