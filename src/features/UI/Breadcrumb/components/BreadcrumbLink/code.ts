export const breadcrumbLinkCode = `
<script setup lang="ts">
import { Breadcrumb } from '@/components/UI'
import type { BreadcrumbItems } from '@/components/UI/Breadcrumb/type'

const items: BreadcrumbItems = [
  { id: 'home', label: 'Home', link: '#', actived: true },
  { id: 'product', label: 'Product', link: '#' },
  { id: 'about', label: 'About', link: '#' }
]
</script>

<template>
  <Breadcrumb :items="items" />
</template>
`
