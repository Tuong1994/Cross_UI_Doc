export const breadcrumbIconCode = `
<script setup lang="ts">
import { Breadcrumb } from '@/components/UI'
import { iconName } from '@/components/UI/Icon/constant'
import type { BreadcrumbItems } from '@/components/UI/Breadcrumb/type'

const items: BreadcrumbItems = [
  { id: 'home', label: 'Home', labelIcon: iconName.HOUSE, actived: true },
  { id: 'product', label: 'Product', labelIcon: iconName.BOX_ARCHIVE },
  { id: 'about', label: 'About', labelIcon: iconName.BOOKMARK }
]
</script>

<template>
  <Breadcrumb :items="items" />
</template>
`
