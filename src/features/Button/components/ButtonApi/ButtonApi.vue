<script setup lang="ts">
import { computed } from 'vue'
import { routePaths } from '@/router'
import { ECodeElType } from '@/components/View/Code/enum'
import { buttonCatalogIds } from '../../repository/catalogIds'
import type { ComponentApi } from '@/common/type'
import TableLayout from '@/components/View/TableLayout/TableLayout.vue'
import useLangStore from '@/stores/LangStore'

const t = useLangStore()

const dataSource = computed<ComponentApi[]>(() => [])
</script>

<template>
  <TableLayout title="Button" :dataSource="dataSource" :id="buttonCatalogIds.BUTTON_API" />
</template>
