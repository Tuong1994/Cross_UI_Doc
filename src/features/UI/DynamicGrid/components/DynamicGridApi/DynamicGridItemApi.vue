<script setup lang="ts">
import { computed } from 'vue'
import { dynamicGridCatalogIds } from '@/features/UI/DynamicGrid/repository/catalogIds'
import { ECodeElType } from '@/components/View/Code/enum'
import type { ComponentApi } from '@/common/type'
import TableLayout from '@/components/View/TableLayout/TableLayout.vue'
import useLangStore from '@/stores/LangStore'

const t = useLangStore()

const dataVue = computed<ComponentApi[]>(() => [
  {
    id: 'id',
    props: 'id',
    desc: t.lang.dynamicGrid.api.dynamicGridItemDesc.id,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['string']
    },
    required: t.lang.common.required.yes,
    default: '-'
  },
  {
    id: 'comName',
    props: 'comName',
    desc: t.lang.dynamicGrid.api.dynamicGridItemDesc.comName,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['string']
    },
    required: t.lang.common.required.yes,
    default: '-'
  }
])

const dataReact = computed<ComponentApi[]>(() => [
  {
    id: 'id',
    props: 'id',
    desc: t.lang.dynamicGrid.api.dynamicGridItemDesc.id,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['string']
    },
    required: t.lang.common.required.yes,
    default: '-'
  },
  {
    id: 'node',
    props: 'node',
    desc: t.lang.dynamicGrid.api.dynamicGridItemDesc.node,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['ReactNode']
    },
    required: t.lang.common.required.yes,
    default: '-'
  }
])
</script>

<template>
  <TableLayout
    title="DynamicGridItem"
    :dataVue="dataVue"
    :dataReact="dataReact"
    :id="dynamicGridCatalogIds.DYNAMIC_GRID_ITEM_API"
  />
</template>
