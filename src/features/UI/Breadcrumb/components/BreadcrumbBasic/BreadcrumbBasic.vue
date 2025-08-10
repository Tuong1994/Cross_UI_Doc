<script setup lang="ts">
import { Breadcrumb } from '@/components/UI'
import { breadcrumbBasicReactCode, breadcrumbBasicVueCode } from './code'
import { breadcrumbCatalogIds } from '@/features/UI/Breadcrumb/repository/catalogIds'
import type { BreadcrumbItems } from '@/components/UI/Breadcrumb/type'
import AnchorContent from '@/components/View/AnchorLink/AnchorContent.vue'
import ShowCase from '@/components/View/ShowCase/ShowCase.vue'

const items: BreadcrumbItems = [
  { id: 'home', label: 'Home', actived: true },
  { id: 'product', label: 'Product' },
  { id: 'about', label: 'About' }
]
</script>

<template>
  <AnchorContent :id="breadcrumbCatalogIds.BASIC">
    <ShowCase title="Basic" :vueCode="breadcrumbBasicVueCode" :reactCode="breadcrumbBasicReactCode">
      <Breadcrumb :items="items" />
    </ShowCase>
  </AnchorContent>
</template>
