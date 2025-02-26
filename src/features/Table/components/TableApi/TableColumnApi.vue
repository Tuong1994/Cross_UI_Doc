<script setup lang="ts">
import { computed } from 'vue'
import { Typography, Table } from '@/components/UI'
import { tableCataLogIds } from '../../repository/catalogIds'
import type { TableColumns } from '@/components/UI/Table/type'
import type { ComponentApi } from '@/common/type'
import type { ParagraphProps } from '@/components/UI/Typography/Paragraph.vue'
import AnchorContent from '@/components/View/AnchorLink/AnchorContent.vue'
import CodeTableCell from '@/components/View/Code/CodeTableCell.vue'
import useLangStore from '@/stores/LangStore'
import useLayoutStore from '@/components/UI/Layout/LayoutStore'

const { Paragraph } = Typography

const t = useLangStore()

const layout = useLayoutStore()

const dataSource = computed<ComponentApi[]>(() => [
  {
    id: 'id',
    props: 'id',
    desc: t.lang.table.api.columnDesc.id,
    type: {
      codes: ['string'],
      elType: 'default'
    },
    default: '-'
  },
  {
    id: 'title',
    props: 'title',
    desc: t.lang.table.api.columnDesc.title,
    type: {
      codes: ['string'],
      elType: 'default'
    },
    default: '-'
  },
  {
    id: 'dataIndex',
    props: 'dataIndex',
    desc: t.lang.table.api.columnDesc.dataIndex,
    type: {
      codes: ['keyof Record'],
      elType: 'default'
    },
    default: '-'
  },
  {
    id: 'component',
    props: 'component',
    desc: t.lang.table.api.columnDesc.component,
    type: {
      codes: ['(record: Record, idx: number) => TableComponent'],
      elType: 'anchor'
    },
    default: '-'
  },
  {
    id: 'render',
    props: 'render',
    desc: t.lang.table.api.columnDesc.render,
    type: {
      codes: ['(record: Record, idx: number) => string'],
      elType: 'default'
    },
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
      props: { codes: record.type.codes, elType: record.type.elType }
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
  <AnchorContent :id="tableCataLogIds.COLUMN_API">
    <Paragraph :lineHeight="40">Column</Paragraph>
    <Table :color="layout.color" :dataSource="dataSource" :columns="columns" />
  </AnchorContent>
</template>
