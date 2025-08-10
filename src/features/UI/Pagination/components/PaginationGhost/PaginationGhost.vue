<script setup lang="ts">
import { Divider, Pagination } from '@/components/UI'
import { paginationCatalogIds } from '@/features/UI/Pagination/repository/catalogIds'
import { paginationGhostReactCode, paginationGhostVueCode } from './code'
import AnchorContent from '@/components/View/AnchorLink/AnchorContent.vue'
import ShowCase from '@/components/View/ShowCase/ShowCase.vue'
</script>

<template>
  <AnchorContent :id="paginationCatalogIds.GHOST">
    <ShowCase title="Ghost" :vueCode="paginationGhostVueCode" :reactCode="paginationGhostReactCode">
      <Pagination ghost color="blue" :total="50" />
      <Divider />
      <Pagination ghost color="green" :total="50" />
      <Divider />
      <Pagination ghost color="red" :total="50" />
      <Divider />
      <Pagination ghost color="orange" :total="50" />
      <Divider />
      <Pagination ghost color="yellow" :total="50" />
      <Divider />
      <Pagination ghost color="pink" :total="50" />
      <Divider />
      <Pagination ghost color="purple" :total="50" />
    </ShowCase>
  </AnchorContent>
</template>
