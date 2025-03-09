<script setup lang="ts">
import { computed } from 'vue'
import { iconCatalogIds } from '../../repository/catalogIds'
import type { ComponentApi } from '@/common/type'
import TableLayout from '@/components/View/TableLayout/TableLayout.vue'
import useLangStore from '@/stores/LangStore'

const t = useLangStore()

const dataSource = computed<ComponentApi[]>(() => [])
</script>

<template>
  <TableLayout title="Icon" :dataSource="dataSource" :id="iconCatalogIds.ICON_API" />
</template>
