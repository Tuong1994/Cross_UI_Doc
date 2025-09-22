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
    id: 'items',
    props: 'items',
    desc: t.lang.dynamicGrid.api.dynamicGridDesc.items,
    type: {
      elType: ECodeElType.ANCHOR,
      link: dynamicGridCatalogIds.DYNAMIC_GRID_ITEM_API,
      codes: ['DynamicGridItems']
    },
    required: t.lang.common.required.yes,
    default: '[]'
  },
  {
    id: 'rootClassName',
    props: 'rootClassName',
    desc: t.lang.dynamicGrid.api.dynamicGridDesc.rootClassName,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['string']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'rootStyle',
    props: 'rootStyle',
    desc: t.lang.dynamicGrid.api.dynamicGridDesc.rootStyle,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['StyleValue']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
])

const dataReact = computed<ComponentApi[]>(() => [
  {
    id: 'items',
    props: 'items',
    desc: t.lang.dynamicGrid.api.dynamicGridDesc.items,
    type: {
      elType: ECodeElType.ANCHOR,
      link: dynamicGridCatalogIds.DYNAMIC_GRID_ITEM_API,
      codes: ['DynamicGridItems']
    },
    required: t.lang.common.required.yes,
    default: '[]'
  },
  {
    id: 'rootClassName',
    props: 'rootClassName',
    desc: t.lang.dynamicGrid.api.dynamicGridDesc.rootClassName,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['string']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'rootStyle',
    props: 'style',
    desc: t.lang.dynamicGrid.api.dynamicGridDesc.rootStyle,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['React.CSSProperties']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
])
</script>

<template>
  <TableLayout
    title="DynamicGrid"
    rootClassName="section-space"
    :dataVue="dataVue"
    :dataReact="dataReact"
    :id="dynamicGridCatalogIds.DYNAMIC_GRID_API"
  />
</template>
