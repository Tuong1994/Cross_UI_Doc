<script setup lang="ts">
import { computed } from 'vue'
import { tableCatalogIds } from '../../repository/catalogIds'
import { routePaths } from '@/router'
import { ECodeElType } from '@/components/View/Code/enum'
import type { ComponentApi } from '@/common/type'
import TableLayout from '@/components/View/TableLayout/TableLayout.vue'
import useLangStore from '@/stores/LangStore'
import helper from '@/helper'

const t = useLangStore()

const dataSource = computed<ComponentApi[]>(() => [
  {
    id: 'dataSource',
    props: 'dataSource',
    desc: t.lang.table.api.tableDesc.dataSource,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['object[]']
    },
    required: t.lang.common.required.yes,
    default: '[]'
  },
  {
    id: 'columns',
    props: 'columns',
    desc: t.lang.table.api.tableDesc.columns,
    type: {
      elType: ECodeElType.ANCHOR,
      link: tableCatalogIds.COLUMN_API,
      codes: ['TableColumns']
    },
    required: t.lang.common.required.yes,
    default: '[]'
  },
  {
    id: 'selection',
    props: 'hasRowSelection',
    desc: t.lang.table.api.tableDesc.hasRowSelection,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['boolean']
    },
    required: t.lang.common.required.no,
    default: 'false'
  },
  {
    id: 'expand',
    props: 'hasExpand',
    desc: t.lang.table.api.tableDesc.hasExpand,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['boolean']
    },
    required: t.lang.common.required.no,
    default: 'false'
  },
  {
    id: 'pagination',
    props: 'hasPagination',
    desc: t.lang.table.api.tableDesc.hasPagination,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['boolean']
    },
    required: t.lang.common.required.no,
    default: 'false'
  },
  {
    id: 'filter',
    props: 'hasFilter',
    desc: t.lang.table.api.tableDesc.hasFilter,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['boolean']
    },
    required: t.lang.common.required.no,
    default: 'false'
  },
  {
    id: 'loading',
    props: 'loading',
    desc: t.lang.table.api.tableDesc.loading,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['boolean']
    },
    required: t.lang.common.required.no,
    default: 'false'
  },
  {
    id: 'rowKey',
    props: 'rowKey',
    desc: t.lang.table.api.tableDesc.rowKey,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['string']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'color',
    props: 'color',
    desc: t.lang.table.api.tableDesc.color,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: helper.getColorType()
    },
    required: t.lang.common.required.no,
    default: 'blue'
  },
  {
    id: 'rootClassName',
    props: 'rootClassName',
    desc: t.lang.table.api.tableDesc.rootClassName,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['string']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'tableClassName',
    props: 'tableClassName',
    desc: t.lang.table.api.tableDesc.tableClassName,
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
    desc: t.lang.table.api.tableDesc.rootStyle,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['StyleValue']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'tableStyle',
    props: 'tableStyle',
    desc: t.lang.table.api.tableDesc.tableStyle,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['StyleValue']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'paginationProps',
    props: 'paginationProps',
    desc: t.lang.table.api.tableDesc.paginationProps,
    type: {
      elType: ECodeElType.ROUTER,
      link: routePaths.PAGINATION,
      codes: ['PaginationProps']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'onRowSelect',
    props: '@onRowSelect',
    desc: t.lang.table.api.tableDesc.onRowSelect,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['(keys: [string | number]) => void']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'onChangePage',
    props: '@onChangePage',
    desc: t.lang.table.api.tableDesc.onChangePage,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['(page: number) => void']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'onFilter',
    props: '@onFilter',
    desc: t.lang.table.api.tableDesc.onFilter,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['() => void']
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'onCancelFilter',
    props: '@onCancelFilter',
    desc: t.lang.table.api.tableDesc.onCancelFilter,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['() => void']
    },
    required: t.lang.common.required.no,
    default: '-'
  }
])
</script>

<template>
  <TableLayout
    title="Table"
    rootClassName="section-space"
    :id="tableCatalogIds.TABLE_API"
    :dataSource="dataSource"
  />
</template>
