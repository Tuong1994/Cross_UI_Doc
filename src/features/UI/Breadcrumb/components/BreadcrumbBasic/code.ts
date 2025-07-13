export const breadcrumbBasicCode = `
<script setup lang="ts">
import { Breadcrumb } from '@/components/UI'
import type { BreadcrumbItems } from '@/components/UI/Breadcrumb/type'

const items: BreadcrumbItems = [
  { id: 'home', label: 'Home', actived: true },
  { id: 'product', label: 'Product' },
  { id: 'about', label: 'About' }
]
</script>

<template>
  <Breadcrumb :items="items" />
</template>
`
