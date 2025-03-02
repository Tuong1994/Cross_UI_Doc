<script setup lang="ts">
import { computed } from 'vue'
import { Table, Typography } from '@/components/UI'
import { tableCatalogIds } from '../../repository/catalogIds'
import { routePaths } from '@/router'
import { ECodeElType } from '@/components/View/Code/enum'
import type { ComponentApi } from '@/common/type'
import type { TableColumns } from '@/components/UI/Table/type'
import type { ParagraphProps } from '@/components/UI/Typography/Paragraph.vue'
import AnchorContent from '@/components/View/AnchorLink/AnchorContent.vue'
import CodeTableCell, { type CodeTableCellProps } from '@/components/View/Code/CodeTableCell.vue'
import useLayoutStore from '@/components/UI/Layout/LayoutStore'
import useLangStore from '@/stores/LangStore'

const { Paragraph } = Typography

const t = useLangStore()

const layout = useLayoutStore()

const dataSource = computed<ComponentApi[]>(() => [
  {
    id: 'dataSource',
    props: 'dataSource',
    desc: t.lang.table.api.tableDesc.dataSource,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['object[]']
    },
    required: 'yes',
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
    required: 'yes',
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
    required: 'no',
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
    required: 'no',
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
    required: 'no',
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
    required: 'no',
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
    required: 'no',
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
    required: 'no',
    default: '-'
  },
  {
    id: 'color',
    props: 'color',
    desc: t.lang.table.api.tableDesc.color,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['blue', 'green', 'red', 'orange', 'yellow', 'pink', 'purple']
    },
    required: 'no',
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
    required: 'no',
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
    required: 'no',
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
    required: 'no',
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
    required: 'no',
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
    required: 'no',
    default: '-'
  },
  {
    id: 'onRowSelect',
    props: 'onRowSelect',
    desc: t.lang.table.api.tableDesc.onRowSelect,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['(keys: [string | number]) => void']
    },
    required: 'no',
    default: '-'
  },
  {
    id: 'onChangePage',
    props: 'onChangePage',
    desc: t.lang.table.api.tableDesc.onChangePage,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['(page: number) => void']
    },
    required: 'no',
    default: '-'
  },
  {
    id: 'onFilter',
    props: 'onFilter',
    desc: t.lang.table.api.tableDesc.onFilter,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['() => void']
    },
    required: 'no',
    default: '-'
  },
  {
    id: 'onCancelFilter',
    props: 'onCancelFilter',
    desc: t.lang.table.api.tableDesc.onCancelFilter,
    type: {
      elType: ECodeElType.DEFAULT,
      codes: ['() => void']
    },
    required: 'no',
    default: '-'
  }
])

const columns = computed<TableColumns<ComponentApi>>(() => [
  {
    id: 'props',
    title: t.lang.common.table.head.props,
    dataIndex: 'props',
    component: (record) => ({
      node: Paragraph,
      slotContent: record.props,
      props: { strong: true, size: 12 } as ParagraphProps
    })
  },
  {
    id: 'desc',
    title: t.lang.common.table.head.desc,
    dataIndex: 'desc',
    component: (record) => ({
      node: Paragraph,
      slotContent: record.desc,
      props: { size: 12 } as ParagraphProps
    })
  },
  {
    id: 'type',
    title: t.lang.common.table.head.type,
    dataIndex: 'type',
    component: (record) => ({
      node: CodeTableCell,
      props: {
        codes: record.type.codes,
        elType: record.type.elType,
        link: record.type.link
      } as CodeTableCellProps
    })
  },
  {
    id: 'required',
    title: t.lang.common.table.head.required,
    dataIndex: 'required',
    component: (record) => ({
      node: Paragraph,
      slotContent: record.required,
      props: { size: 12 } as ParagraphProps
    })
  },
  {
    id: 'default',
    title: t.lang.common.table.head.default,
    dataIndex: 'default',
    component: (record) => ({
      node: Paragraph,
      slotContent: record.default,
      props: { size: 12 } as ParagraphProps
    })
  }
])
</script>

<template>
  <AnchorContent :id="tableCatalogIds.TABLE_API" rootClassName="section-space">
    <Paragraph :lineHeight="40">Table</Paragraph>
    <Table :color="layout.color" :dataSource="dataSource" :columns="columns" />
  </AnchorContent>
</template>
