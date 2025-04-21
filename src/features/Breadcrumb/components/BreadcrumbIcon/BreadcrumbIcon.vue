<script setup lang="ts">
import { Breadcrumb } from '@/components/UI'
import { iconName } from '@/components/UI/Icon/constant'
import { breadcrumbIconCode } from './code'
import { breadcrumbCatalogIds } from '@/features/Breadcrumb/repository/catalogIds'
import type { BreadcrumbItems } from '@/components/UI/Breadcrumb/type'
import AnchorContent from '@/components/View/AnchorLink/AnchorContent.vue'
import ShowCase from '@/components/View/ShowCase/ShowCase.vue'

const items: BreadcrumbItems = [
  { id: 'home', label: 'Home', labelIcon: iconName.HOUSE, actived: true },
  { id: 'product', label: 'Product', labelIcon: iconName.BOX_ARCHIVE },
  { id: 'about', label: 'About', labelIcon: iconName.BOOKMARK }
]
</script>

<template>
  <AnchorContent :id="breadcrumbCatalogIds.ICON">
    <ShowCase title="Icon" :code="breadcrumbIconCode">
      <Breadcrumb :items="items" />
    </ShowCase>
  </AnchorContent>
</template>
