<script setup lang="ts">
import { computed } from 'vue'
import { tableCatalogIds } from '../../repository/catalogIds'
import { ECodeElType } from '@/components/View/Code/enum'
import { routePaths } from '@/router'
import type { ComponentApi } from '@/common/type'
import TableLayout from '@/components/View/TableLayout/TableLayout.vue'
import useLangStore from '@/stores/LangStore'
import helper from '@/helper'

const t = useLangStore()

const dataSource = computed<ComponentApi[]>(() => [
  {
    id: 'color',
    props: 'color',
    desc: t.lang.table.api.tableFilterDesc.color,
    type: {
      codes: helper.getColorType(),
      elType: ECodeElType.DEFAULT
    },
    required: t.lang.common.required.yes,
    default: '-'
  },
  {
    id: 'filter',
    props: 'filter',
    desc: t.lang.table.api.tableFilterDesc.filter,
    type: {
      codes: ['ReactNode'],
      elType: ECodeElType.DEFAULT
    },
    required: t.lang.common.required.yes,
    default: '-'
  },
  {
    id: 'filterButtonTitle',
    props: 'filterButtonTitle',
    desc: t.lang.table.api.tableFilterDesc.filterButtonTitle,
    type: {
      codes: ['ReactNode'],
      elType: ECodeElType.DEFAULT
    },
    required: t.lang.common.required.yes,
    default: '-'
  },
  {
    id: 'cancelFilterButtonTitle',
    props: 'cancelFilterButtonTitle',
    desc: t.lang.table.api.tableFilterDesc.cancelFilterButtonTitle,
    type: {
      codes: ['ReactNode'],
      elType: ECodeElType.DEFAULT
    },
    required: t.lang.common.required.yes,
    default: '-'
  },
  {
    id: 'filterButtonProps',
    props: 'filterButtonProps',
    desc: t.lang.table.api.tableFilterDesc.filterButtonProps,
    type: {
      elType: ECodeElType.ROUTER,
      link: routePaths.BUTTON,
      codes: ['ButtonProps']
    },
    required: t.lang.common.required.yes,
    default: '-'
  },
  {
    id: 'cancelFilterButtonProps',
    props: 'cancelFilterButtonProps',
    desc: t.lang.table.api.tableFilterDesc.cancelFilterButtonProps,
    type: {
      elType: ECodeElType.ROUTER,
      link: routePaths.BUTTON,
      codes: ['ButtonProps']
    },
    required: t.lang.common.required.yes,
    default: '-'
  },
  {
    id: 'hasFilterButton',
    props: 'hasFilterButton',
    desc: t.lang.table.api.tableFilterDesc.hasFilterButton,
    type: {
      codes: ['boolean'],
      elType: ECodeElType.DEFAULT
    },
    required: t.lang.common.required.yes,
    default: '-'
  },
  {
    id: 'hasCancelFilterButton',
    props: 'hasCancelFilterButton',
    desc: t.lang.table.api.tableFilterDesc.hasCancelFilterButton,
    type: {
      codes: ['boolean'],
      elType: ECodeElType.DEFAULT
    },
    required: t.lang.common.required.yes,
    default: '-'
  },
  {
    id: 'onFilter',
    props: '@onFilter',
    desc: t.lang.table.api.tableFilterDesc.onFilter,
    type: {
      codes: ['() => void'],
      elType: ECodeElType.DEFAULT
    },
    required: t.lang.common.required.yes,
    default: '-'
  },
  {
    id: 'onCancelFilter',
    props: '@onCancelFilter',
    desc: t.lang.table.api.tableFilterDesc.onCancelFilter,
    type: {
      codes: ['() => void'],
      elType: ECodeElType.DEFAULT
    },
    required: t.lang.common.required.yes,
    default: '-'
  }
])
</script>

<template>
  <TableLayout
    title="Table Filter (React)"
    rootClassName="section-space"
    :multiple="false"
    :id="tableCatalogIds.TABLE_FILTER_API"
    :dataSource="dataSource"
  />
</template>
