<script setup lang="ts">
import { computed } from 'vue'
import { gridCatalogIds } from '../../repository/catalogIds'
import type { ComponentApi } from '@/common/type'
import TableLayout from '@/components/View/TableLayout/TableLayout.vue'

const dataSource = computed<ComponentApi[]>(() => [])
</script>

<template>
  <TableLayout title="Grid" :dataSource="dataSource" :id="gridCatalogIds.GRID_API" />
</template>
