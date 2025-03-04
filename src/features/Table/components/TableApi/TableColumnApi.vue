<script setup lang="ts">
import { computed } from 'vue'
import { tableCatalogIds } from '../../repository/catalogIds'
import { ECodeElType } from '@/components/View/Code/enum'
import type { ComponentApi } from '@/common/type'
import TableLayout from '@/components/View/TableLayout/TableLayout.vue'
import useLangStore from '@/stores/LangStore'

const t = useLangStore()

const dataSource = computed<ComponentApi[]>(() => [
  {
    id: 'id',
    props: 'id',
    desc: t.lang.table.api.columnDesc.id,
    type: {
      codes: ['string'],
      elType: ECodeElType.DEFAULT
    },
    required: t.lang.common.required.yes,
    default: '-'
  },
  {
    id: 'title',
    props: 'title',
    desc: t.lang.table.api.columnDesc.title,
    type: {
      codes: ['string'],
      elType: ECodeElType.DEFAULT
    },
    required: t.lang.common.required.yes,
    default: '-'
  },
  {
    id: 'dataIndex',
    props: 'dataIndex',
    desc: t.lang.table.api.columnDesc.dataIndex,
    type: {
      codes: ['keyof Record'],
      elType: ECodeElType.DEFAULT
    },
    required: t.lang.common.required.yes,
    default: '-'
  },
  {
    id: 'component',
    props: '@component',
    desc: t.lang.table.api.columnDesc.component,
    type: {
      codes: ['(record: Record, idx: number) => TableComponent'],
      elType: ECodeElType.ANCHOR,
      link: tableCatalogIds.COMPONENT_API
    },
    required: t.lang.common.required.no,
    default: '-'
  },
  {
    id: 'render',
    props: '@render',
    desc: t.lang.table.api.columnDesc.render,
    type: {
      codes: ['(record: Record, idx: number) => string'],
      elType: ECodeElType.DEFAULT
    },
    required: t.lang.common.required.no,
    default: '-'
  }
])
</script>

<template>
  <TableLayout
    rootClassName="section-space"
    title="Column"
    :id="tableCatalogIds.COLUMN_API"
    :dataSource="dataSource"
  />
</template>
