<script setup lang="ts">
import { Table, Typography } from '@/components/UI'
import { tableCataLogIds } from '../../repository/catalogIds'
import type { ComponentApi } from '@/common/type'
import type { TableColumns } from '@/components/UI/Table/type'
import type { ParagraphProps } from '@/components/UI/Typography/Paragraph.vue'
import AnchorContent from '@/components/View/AnchorLink/AnchorContent.vue'
import CodeTableCell from '@/components/View/Code/CodeTableCell.vue'
import useLayoutStore from '@/components/UI/Layout/LayoutStore'

const { Paragraph } = Typography

const layout = useLayoutStore()

const dataSource: ComponentApi[] = [
  {
    id: 'dataSource',
    props: 'dataSource',
    desc: 'Data record array to be displayed',
    type: {
      elType: 'default',
      codes: ['object[]']
    },
    default: '[]'
  },
  {
    id: 'columns',
    props: 'columns',
    desc: 'Columns of table',
    type: {
      elType: 'anchor',
      codes: ['TableColumns']
    },
    default: '[]'
  },
  {
    id: 'selection',
    props: 'hasRowSelection',
    desc: 'Enabled row selection',
    type: {
      elType: 'default',
      codes: ['boolean']
    },
    default: 'false'
  },
  {
    id: 'expand',
    props: 'hasExpand',
    desc: 'Enabled expand for nested table',
    type: {
      elType: 'default',
      codes: ['boolean']
    },
    default: 'false'
  },
  {
    id: 'pagination',
    props: 'hasPagination',
    desc: 'Enabled for paging',
    type: {
      elType: 'default',
      codes: ['boolean']
    },
    default: 'false'
  },
  {
    id: 'filter',
    props: 'hasFilter',
    desc: 'Enabled filter section',
    type: {
      elType: 'default',
      codes: ['boolean']
    },
    default: 'false'
  },
  {
    id: 'loading',
    props: 'loading',
    desc: 'Loading status of table',
    type: {
      elType: 'default',
      codes: ['boolean']
    },
    default: 'false'
  },
  {
    id: 'rowKey',
    props: 'rowKey',
    desc: 'Row unique key',
    type: {
      elType: 'default',
      codes: ['string']
    },
    default: '-'
  },
  {
    id: 'color',
    props: 'color',
    desc: 'Color of table',
    type: {
      elType: 'default',
      codes: ['blue', 'green', 'red', 'orange', 'yellow', 'pink', 'purple']
    },
    default: 'blue'
  },
  {
    id: 'rootClassName',
    props: 'rootClassName',
    desc: 'Class of container',
    type: {
      elType: 'default',
      codes: ['string']
    },
    default: '-'
  },
  {
    id: 'tableClassName',
    props: 'tableClassName',
    desc: 'Class of table',
    type: {
      elType: 'default',
      codes: ['string']
    },
    default: '-'
  },
  {
    id: 'rootStyle',
    props: 'rootStyle',
    desc: 'Inline style of container',
    type: {
      elType: 'default',
      codes: ['StyleValue']
    },
    default: '-'
  },
  {
    id: 'tableStyle',
    props: 'tableStyle',
    desc: 'Inline style of table',
    type: {
      elType: 'default',
      codes: ['StyleValue']
    },
    default: '-'
  },
  {
    id: 'paginationProps',
    props: 'paginationProps',
    desc: 'Props of pagination',
    type: {
      elType: 'anchor',
      codes: ['PaginationProps']
    },
    default: '-'
  }
]

const columns: TableColumns<ComponentApi> = [
  {
    id: 'props',
    title: 'Property',
    dataIndex: 'props',
    component: (record) => ({
      node: Paragraph,
      slotContent: record.props,
      props: { strong: true, size: 12 } as ParagraphProps
    })
  },
  {
    id: 'desc',
    title: 'Description',
    dataIndex: 'desc',
    component: (record) => ({
      node: Paragraph,
      slotContent: record.desc,
      props: { size: 12 } as ParagraphProps
    })
  },
  {
    id: 'type',
    title: 'Type',
    dataIndex: 'type',
    component: (record) => ({
      node: CodeTableCell,
      props: { codes: record.type.codes, elType: record.type.elType }
    })
  },
  {
    id: 'default',
    title: 'Default',
    dataIndex: 'default',
    component: (record) => ({
      node: Paragraph,
      slotContent: record.default,
      props: { size: 12 } as ParagraphProps
    })
  }
]
</script>

<template>
  <AnchorContent :id="tableCataLogIds.TABLE_API">
    <Paragraph :lineHeight="40">Table</Paragraph>
    <Table :color="layout.color" :dataSource="dataSource" :columns="columns" />
  </AnchorContent>
</template>
