<script setup lang="ts">
import { computed } from 'vue'
import type { ComponentApi } from '@/common/type'
import { imageCatalogIds } from '@/features/Image/repository/catalogIds'
import TableLayout from '@/components/View/TableLayout/TableLayout.vue'
import useLangStore from '@/stores/LangStore'

const t = useLangStore()

const dataSource = computed<ComponentApi[]>(() => [
    
])
</script>

<template>
  <TableLayout title="Image" :dataSource="dataSource" :id="imageCatalogIds.IMAGE_API" />
</template>
