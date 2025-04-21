<script setup lang="ts">
import { Breadcrumb, Icon } from '@/components/UI'
import { breadcrumbSeparatorCode } from './code'
import { breadcrumbCatalogIds } from '@/features/Breadcrumb/repository/catalogIds'
import { iconName } from '@/components/UI/Icon/constant'
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
  <AnchorContent :id="breadcrumbCatalogIds.SEPARATOR">
    <ShowCase title="Separator" :code="breadcrumbSeparatorCode">
      <Breadcrumb :items="items">
        <template #separator>
          <Icon :iconName="iconName.ANGLE_DOUBLE_RIGHT" />
        </template>
      </Breadcrumb>
    </ShowCase>
  </AnchorContent>
</template>
