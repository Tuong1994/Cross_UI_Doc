<script setup lang="ts">
import { Breadcrumb } from '@/components/UI'
import { breadcrumbLinkCode } from './code'
import { breadcrumbCatalogIds } from '@/features/Breadcrumb/repository/catalogIds'
import type { BreadcrumbItems } from '@/components/UI/Breadcrumb/type'
import AnchorContent from '@/components/View/AnchorLink/AnchorContent.vue'
import ShowCase from '@/components/View/ShowCase/ShowCase.vue'

const items: BreadcrumbItems = [
  { id: 'home', label: 'Home', link: '#', actived: true },
  { id: 'product', label: 'Product', link: '#' },
  { id: 'about', label: 'About', link: '#' }
]
</script>

<template>
  <AnchorContent :id="breadcrumbCatalogIds.LINK">
    <ShowCase title="Link" :code="breadcrumbLinkCode">
      <Breadcrumb :items="items" />
    </ShowCase>
  </AnchorContent>
</template>
