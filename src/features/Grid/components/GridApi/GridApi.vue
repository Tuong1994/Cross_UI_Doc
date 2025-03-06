<script setup lang="ts">
import { computed } from 'vue'
import { gridCatalogIds } from '../../repository/catalogIds'
import { ECodeElType } from '@/components/View/Code/enum'
import type { ComponentApi } from '@/common/type'
import TableLayout from '@/components/View/TableLayout/TableLayout.vue'
import useLangStore from '@/stores/LangStore'

const t = useLangStore()

const dataSource = computed<ComponentApi[]>(() => [
  {
    id: 'rootClassName',
    props: 'rootClassName',
    desc: t.lang.grid.api.gridDesc.rootClassName,
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
    desc: t.lang.grid.api.gridDesc.rootStyle,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['string']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'gap',
    props: 'gap',
    desc: t.lang.grid.api.gridDesc.gap,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['[number, number]']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'xs',
    props: 'xs',
    desc: t.lang.grid.api.gridDesc.xs,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['number']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'md',
    props: 'md',
    desc: t.lang.grid.api.gridDesc.md,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['number']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'lg',
    props: 'lg',
    desc: t.lang.grid.api.gridDesc.lg,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['number']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'lg',
    props: 'lg',
    desc: t.lang.grid.api.gridDesc.lg,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['number']
    },
    required: t.lang.common.required.no,
    default: '-'
  }
])
</script>

<template>
  <TableLayout title="Grid" :dataSource="dataSource" :id="gridCatalogIds.GRID_API" />
</template>
