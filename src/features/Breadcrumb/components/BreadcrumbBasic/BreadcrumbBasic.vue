<script setup lang="ts">
import { Breadcrumb } from '@/components/UI'
import { breadcrumbBasicCode } from './code'
import { breadcrumbCatalogIds } from '@/features/Breadcrumb/repository/catalogIds'
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
    <ShowCase title="Basic" :code="breadcrumbBasicCode">
      <Breadcrumb :items="items" />
    </ShowCase>
  </AnchorContent>
</template>
