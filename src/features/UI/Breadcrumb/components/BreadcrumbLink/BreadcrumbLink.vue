<script setup lang="ts">
import { Breadcrumb } from '@/components/UI'
import { breadcrumbLinkReactCode, breadcrumbLinkVueCode } from './code'
import { breadcrumbCatalogIds } from '@/features/UI/Breadcrumb/repository/catalogIds'
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
    <ShowCase title="Link" :vueCode="breadcrumbLinkVueCode" :reactCode="breadcrumbLinkReactCode">
      <Breadcrumb :items="items" />
    </ShowCase>
  </AnchorContent>
</template>
