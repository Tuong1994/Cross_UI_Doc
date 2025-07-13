export const breadcrumbSeparatorCode = `
<script setup lang="ts">
import { Breadcrumb, Icon } from '@/components/UI'
import { iconName } from '@/components/UI/Icon/constant'
import type { BreadcrumbItems } from '@/components/UI/Breadcrumb/type'

const items: BreadcrumbItems = [
  { id: 'home', label: 'Home', actived: true },
  { id: 'product', label: 'Product' },
  { id: 'about', label: 'About' }
]
</script>

<template>
    <Breadcrumb :items="items">
        <template #separator>
            <Icon :iconName="iconName.ANGLE_DOUBLE_RIGHT" />
        </template>
    </Breadcrumb>
</template>
`
